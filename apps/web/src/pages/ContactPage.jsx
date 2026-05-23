import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "🚧 Feature Coming Soon!",
      description: "Contact form submission will be available soon. For now, please email us at contact@fashionable.com",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12">

      <Helmet>
  <title>Contact Fashionable | Fashion & Beauty Price Comparison Support</title>
  <meta
    name="description"
    content="Contact Fashionable for support, feedback, affiliate inquiries and questions about fashion, makeup and skincare price comparison."
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://your-domain.com/contact" />

  <meta property="og:title" content="Contact Fashionable" />
  <meta
    property="og:description"
    content="Reach out to Fashionable for support, feedback and affiliate-related questions."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://your-domain.com/contact" />
  <meta property="og:image" content="https://your-domain.com/images/product-fallback.webp" />
</Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-gray-400 text-lg">
              Have questions, feedback, or suggestions? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-[#00D9FF]" />
                  <h2 className="text-white font-bold text-xl">Email Us</h2>
                </div>
                <p className="text-gray-400 mb-2">General Inquiries:</p>
                <a href="mailto:contact@fashionable.com" className="text-[#00D9FF] hover:underline">
                  contact@fashionable.com
                </a>
                <p className="text-gray-400 mt-4 mb-2">Support:</p>
                <a href="mailto:support@fashionable.com" className="text-[#00D9FF] hover:underline">
                  support@fashionable.com
                </a>
              </div>

              <div className="bg-gradient-to-r from-[#00D9FF]/10 to-[#FF006E]/10 border border-[#00D9FF] rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-2">Quick Response</h3>
                <p className="text-gray-400 text-sm">
                  We typically respond to all inquiries within 24-48 hours during business days.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                <h2 className="text-white font-bold text-2xl mb-6">Send us a Message</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                        autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                       maxLength={1000}
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] transition-colors resize-none"
                      placeholder="Tell us what's on your mind..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#00D9FF] to-[#FF006E] text-white font-bold py-3 px-6 rounded-lg hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}