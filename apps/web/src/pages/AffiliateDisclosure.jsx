import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';

export default function AffiliateDisclosure() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12">

     <Helmet>
  <title>Affiliate Disclosure | Fashionable</title>

  <meta
    name="description"
    content="Read Fashionable's Affiliate Disclosure to understand how we earn commissions through affiliate partnerships and retailer links."
  />

  <meta name="robots" content="index, follow" />

  <link
    rel="canonical"
    href="https://your-domain.com/affiliate-disclosure"
  />

  <meta
    property="og:title"
    content="Affiliate Disclosure | Fashionable"
  />

  <meta
    property="og:description"
    content="Learn how Fashionable uses affiliate partnerships and retailer commissions while maintaining editorial independence."
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:url"
    content="https://your-domain.com/affiliate-disclosure"
  />

  <meta
    property="og:image"
    content="https://your-domain.com/images/product-fallback.webp"
  />
</Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-8 h-8 text-[#00D9FF]" />
            <h1
  className="text-4xl font-bold text-white"
  aria-label="Fashionable Affiliate Disclosure"
>Affiliate Disclosure</h1>
          </div>
          
          <p className="text-gray-400 mb-8">Last Updated: February 15, 2026</p>

          <article className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 space-y-8">
            <section id="transparency">
              <h2 className="text-2xl font-bold text-white mb-4">Transparency is Our Priority</h2>
              <p className="text-gray-400 leading-relaxed">
                At Fashionable, we believe in complete transparency with our users. This disclosure explains how we earn revenue through affiliate partnerships and how this supports our mission to help you find the best deals on trending fashion and beauty products.
              </p>
            </section>

            <section id="affiliate-links">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Affiliate Links?</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Affiliate links are special tracking links that allow us to earn a commission when you make a purchase through our website. When you click on a "Buy Now" button or product link on Fashionable and complete a purchase on the retailer's website, we may receive a small commission from that retailer.
              </p>
              <div className="bg-[#00D9FF]/10 border border-[#00D9FF] rounded-lg p-4">
                <p className="text-[#00D9FF] font-semibold mb-2">Important: No Extra Cost to You</p>
                <p className="text-gray-400 text-sm">
                  Using our affiliate links does NOT increase the price you pay. The price you see on our website is the same price you would pay if you went directly to the retailer's website. The commission we earn comes from the retailer's marketing budget, not from your pocket.
                </p>
              </div>
            </section>

            <section id="affiliate-partners">
              <h2 className="text-2xl font-bold text-white mb-4">Our Affiliate Partners</h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                Fashionable partners with various retailers and affiliate networks, including but not limited to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-400">
                <li>Amazon Associates</li>
                <li>ASOS Affiliate Program</li>
                <li>Sephora Affiliate Program</li>
                <li>Ulta Beauty Affiliate Program</li>
                <li>Other fashion and beauty retailers</li>
              </ul>
            </section>

            <section id="product-selection">
              <h2 className="text-2xl font-bold text-white mb-4">How We Choose Products</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Our product recommendations are based on:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-400">
                <li><strong className="text-white">Trending Status:</strong> Products that are currently viral on social media platforms like TikTok and Instagram</li>
                <li><strong className="text-white">Price Comparison:</strong> We compare prices across multiple retailers to help you find the best deal</li>
                <li><strong className="text-white">User Interest:</strong> Products that our community is actively searching for and interested in</li>
                <li><strong className="text-white">Quality and Reviews:</strong> We consider product ratings and customer reviews</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                <strong className="text-white">We do NOT:</strong> Recommend products solely because they offer higher commissions. Our goal is to help you find genuine trending products at the best prices, regardless of commission rates.
              </p>
            </section>

            <section id="price-accuracy">
              <h2 className="text-2xl font-bold text-white mb-4">Price Accuracy</h2>
              <p className="text-gray-400 leading-relaxed">
                We strive to keep our price information as accurate and up-to-date as possible. However, prices on retailer websites can change frequently. The final price you pay will be determined by the retailer at the time of purchase. We recommend verifying the price on the retailer's website before completing your purchase.
              </p>
            </section>

            <section id="editorial-independence">
              <h2 className="text-2xl font-bold text-white mb-4">Editorial Independence</h2>
              <p className="text-gray-400 leading-relaxed">
                While we earn commissions through affiliate links, this does not influence our editorial content or product selection. Our team independently researches and identifies trending products based on social media trends, user demand, and genuine popularity. We maintain complete editorial independence in our product curation and price comparison services.
              </p>
            </section>

            <section id="your-support">
              <h2 className="text-2xl font-bold text-white mb-4">Your Support Helps Us</h2>
              <p className="text-gray-400 leading-relaxed">
                When you make a purchase through our affiliate links, you're supporting Fashionable at no extra cost to yourself. These commissions help us:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-400 mt-3">
                <li>Maintain and improve our website</li>
                <li>Research and discover new trending products</li>
                <li>Provide accurate price comparisons across multiple retailers</li>
                <li>Keep our service free for all users</li>
                <li>Continue helping Gen-Z shoppers find the best deals</li>
              </ul>
            </section>

            <section id="community-support">
              <h2 className="text-2xl font-bold text-white mb-4">FTC Compliance</h2>
              <p className="text-gray-400 leading-relaxed mt-3">
  Some outbound links on Fashionable may be affiliate-tracked links, meaning we may earn a commission if you make a purchase through those links.
</p>
              <p className="text-gray-400 leading-relaxed">
                This disclosure is in accordance with the Federal Trade Commission's (FTC) guidelines concerning the use of endorsements and testimonials in advertising. We are required to disclose our affiliate relationships to maintain transparency with our users.
              </p>
            </section>

            <section id="questions">
              <h2 className="text-2xl font-bold text-white mb-4">Questions?</h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                If you have any questions about our affiliate partnerships or how we earn revenue, please don't hesitate to contact us:
              </p>
              <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-4">
                <p className="text-gray-400">
                  <strong className="text-white">Email:</strong> affiliates@fashionable.com
                </p>
              </div>
            </section>

            <section id="support-thanks" className="bg-gradient-to-r from-[#00D9FF]/10 to-[#FF006E]/10 border border-[#00D9FF] rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Thank You for Your Support!</h3>
              <p className="text-gray-400 leading-relaxed">
                We appreciate your trust in Fashionable to help you discover trending products and find the best prices. Your support through affiliate purchases allows us to continue providing this free service to the Gen-Z community.
              </p>
            </section>
          </article>
        </motion.div>
      </div>
    </div>
  );
}