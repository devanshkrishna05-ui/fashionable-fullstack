import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import pb from '@/lib/pocketbaseClient';
import { Mail } from 'lucide-react';

export default function RestockWaitlistModal({ isOpen, onClose, product }) {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState(currentUser?.email || '');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check if already on waitlist
      if (currentUser) {
        const existing = await pb.collection('restockWaitlist').getList(1, 1, {
          filter: `userId = "${currentUser.id}" && productId = "${product.id}"`,
          $autoCancel: false
        });

        if (existing.totalItems > 0) {
          toast({
            title: "Already on Waitlist",
            description: "You are already on the waitlist for this product.",
            variant: "default"
          });
          onClose();
          return;
        }
      }

      const data = {
        userId: currentUser?.id || null,
        productId: product.id,
        email: email,
      };

      await pb.collection('restockWaitlist').create(data, { $autoCancel: false });
      
      toast({
        title: "Added to Waitlist",
        description: "We'll notify you as soon as this product is back in stock!",
      });
      onClose();
    } catch (error) {
      console.error("Error joining waitlist:", error);
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#FF006E]" />
            Join Restock Waitlist
          </DialogTitle>
          <DialogDescription>
            Get notified when {product?.name} is back in stock.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white focus:border-[#FF006E] focus:outline-none"
              required
            />
          </div>

          <DialogFooter>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#FF006E] to-[#00D9FF] text-white font-bold py-2 px-6 rounded-lg hover:shadow-[0_0_15px_rgba(255,0,110,0.5)] transition-all disabled:opacity-50"
            >
              {loading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}