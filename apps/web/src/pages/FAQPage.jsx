import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
    {
      question: "How does Fashionable's price comparison work?",
      answer: "Fashionable searches multiple retailers to find the best prices on trending fashion and beauty products. We display all available prices in one place, making it easy for you to compare and choose the best deal. Our system updates prices regularly to ensure accuracy."
    },
    {
      question: "Are the affiliate links safe to use?",
      answer: "Yes, absolutely! Our affiliate links are completely safe. They simply redirect you to the official retailer's website. Using our links doesn't cost you anything extra - you pay the same price as you would if you went directly to the retailer. We earn a small commission from the retailer, which helps us keep Fashionable free for everyone."
    },
    {
      question: "How do you find trending products?",
      answer: "We track viral products across social media platforms like TikTok, Instagram, and other channels. Our team monitors what's trending, what influencers are recommending, and what the Gen-Z community is searching for. We then add these products to our platform and compare prices across multiple retailers."
    },
    {
      question: "Is Fashionable free to use?",
      answer: "Yes! Fashionable is completely free to use. You can browse products, compare prices, and click through to retailers without any cost. We earn revenue through affiliate commissions when you make purchases through our links, but this doesn't affect the price you pay."
    },
    {
      question: "How often are prices updated?",
      answer: "We strive to update prices as frequently as possible to ensure accuracy. However, prices on retailer websites can change at any time. We recommend verifying the final price on the retailer's website before completing your purchase. If you notice a price discrepancy, please let us know!"
    },
    {
      question: "Do you sell products directly?",
      answer: "No, Fashionable is a price comparison platform - we don't sell products directly. When you click 'Buy Now' on a product, you'll be redirected to the retailer's website where you can complete your purchase. This allows us to focus on finding you the best deals across multiple stores."
    },
    {
      question: "What if I find a lower price elsewhere?",
      answer: "If you find a lower price on a product that we're tracking, please let us know! We're constantly working to add more retailers to our platform and improve our price comparison accuracy. Your feedback helps us serve you better."
    },
    {
      question: "Can I request specific products to be added?",
      answer: "While we don't currently have a formal product request system, we'd love to hear your suggestions! Contact us through our contact page and let us know what trending products you'd like to see on Fashionable. We're always looking to expand our product catalog based on community interest."
    },
    {
      question: "How do I know which retailer to choose?",
      answer: "We highlight the lowest price option to help you save money. However, you should also consider factors like shipping costs, delivery time, return policies, and retailer reputation when making your decision. We recommend reading reviews and checking the retailer's policies before purchasing."
    },
    {
      question: "What categories do you cover?",
      answer: "Currently, Fashionable focuses on three main categories: Fashion (clothing, accessories, shoes), Makeup (cosmetics, beauty tools), and Skincare (serums, moisturizers, treatments). We're constantly expanding our product range based on trending items and user demand."
    },
    {
      question: "Do you have a mobile app?",
      answer: "Not yet, but our website is fully mobile-responsive! You can access Fashionable from any device - smartphone, tablet, or desktop - and enjoy the same great experience. A dedicated mobile app may be in our future plans!"
    },
    {
      question: "How can I stay updated on new trending products?",
      answer: "Subscribe to our newsletter to receive updates on the latest trending products, exclusive deals, and price drops. You can also follow us on social media (Instagram, TikTok, Twitter) to stay in the loop!"
    }
  ];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12">
     <Helmet>
  <title>FAQ | Fashionable Fashion & Beauty Price Comparison</title>

  <meta
    name="description"
    content="Frequently asked questions about Fashionable, including price comparison, affiliate links, trending products, retailers, and shopping support."
  />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://your-domain.com/faq" />

  <meta
    property="og:title"
    content="FAQ | Fashionable"
  />

  <meta
    property="og:description"
    content="Get answers about Fashionable's trending fashion and beauty price comparison platform."
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:url"
    content="https://your-domain.com/faq"
  />

  <meta
    property="og:image"
    content="https://your-domain.com/images/product-fallback.webp"
  />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    })}
  </script>
</Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-10 h-10 text-[#00D9FF]" />
              <h1 className="text-5xl font-bold text-white">FAQ</h1>
            </div>
            <p className="text-gray-400 text-lg">
              Got questions? We've got answers!
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#00D9FF] transition-all duration-300"
              >
               <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-label={`Toggle FAQ ${faq.question}`}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-[#00D9FF] flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 bg-gradient-to-r from-[#00D9FF]/10 to-[#FF006E]/10 border border-[#00D9FF] rounded-xl p-8 text-center"
          >
            <h2 className="text-white font-bold text-2xl mb-4">Still have questions?</h2>
            <p className="text-gray-400 mb-6">
              Can't find the answer you're looking for? We're here to help!
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#00D9FF] to-[#FF006E] text-white font-bold px-8 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </Link>      
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}