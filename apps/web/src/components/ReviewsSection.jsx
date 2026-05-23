import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import pb from '@/lib/pocketbaseClient';
import StarRating from '@/components/StarRating.jsx';
import { User, CheckCircle, MessageSquare } from 'lucide-react';

export default function ReviewsSection({ productId }) {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('-createdAt');
  
  // Form state
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const fetchReviews = async () => {
    try {
      const result = await pb.collection('reviews').getList(1, 50, {
        filter: `productId="${productId}"`,
        sort: sortBy,
        expand: 'userId',
        $autoCancel: false
      });
      setReviews(result.items);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [productId, sortBy]);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    if (rating === 0) {
      toast({ title: "Rating Required", description: "Please select a star rating.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const data = {
        productId,
        userId: currentUser.id,
        rating,
        title,
        text,
        verifiedShopper: true // Mock verification for now
      };

      await pb.collection('reviews').create(data, { $autoCancel: false });
      
      toast({ title: "Review Submitted", description: "Thank you for your feedback!" });
      
      // Reset form
      setRating(0);
      setTitle('');
      setText('');
      
      // Refresh reviews
      fetchReviews();
    } catch (error) {
      console.error("Error submitting review:", error);
      toast({ title: "Error", description: "Failed to submit review. Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1) 
    : 0;

  return (
    <div className="mt-12 border-t border-[#2a2a2a] pt-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Customer Reviews</h2>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-[#FF006E]">{averageRating}</span>
              <StarRating rating={Math.round(averageRating)} readOnly size="sm" />
            </div>
            <span className="text-gray-400">Based on {reviews.length} reviews</span>
          </div>
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-[#1a1a1a] border border-[#2a2a2a] text-white rounded-lg px-4 py-2 focus:outline-none focus:border-[#00D9FF]"
        >
          <option value="-createdAt">Most Recent</option>
          <option value="-rating">Highest Rating</option>
          <option value="+rating">Lowest Rating</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Reviews List */}
        <div className="lg:col-span-2 space-y-6">
          {loading ? (
            <div className="text-center py-12 text-gray-500">Loading reviews...</div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-12 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]">
              <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg">No Reviews Yet</h3>
              <p className="text-gray-400">Be the first to review this product!</p>
            </div>
          ) : (
            <AnimatePresence>
              {reviews.map((review) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#2a2a2a] p-2 rounded-full">
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">
                          {review.expand?.userId?.email?.split('@')[0] || 'Anonymous'}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(review.created).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    {review.verifiedShopper && (
                      <div className="flex items-center gap-1 text-green-400 text-xs bg-green-400/10 px-2 py-1 rounded-full">
                        <CheckCircle className="w-3 h-3" /> Verified Shopper
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-2">
                    <StarRating rating={review.rating} readOnly size="sm" />
                  </div>
                  
                  <h3 className="text-white font-bold mb-2">{review.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{review.text}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Review Form */}
        <div className="lg:col-span-1">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 sticky top-24">
            <h3 className="text-xl font-bold text-white mb-4">Write a Review</h3>
            
            {currentUser ? (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Rating</label>
                  <StarRating rating={rating} setRating={setRating} size="lg" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Summarize your experience"
                    required
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white focus:border-[#00D9FF] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Review</label>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="What did you like or dislike?"
                    required
                    minLength={10}
                    rows={4}
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white focus:border-[#00D9FF] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-[#00D9FF] to-[#FF006E] text-white font-bold py-3 rounded-lg hover:shadow-[0_0_15px_rgba(0,217,255,0.5)] transition-all disabled:opacity-50"
                >
                  {submitting ? 'Submitting...' : 'Submit Review'}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400 mb-4">Please log in to write a review.</p>
                <a 
                  href="/login" 
                  className="inline-block bg-[#2a2a2a] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#3a3a3a] transition-colors border border-[#00D9FF]"
                >
                  Log In
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}