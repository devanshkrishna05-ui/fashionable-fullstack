import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, TrendingUp, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Trending Products',
      description: 'We track viral fashion and beauty products across social media platforms to bring you the hottest trends.'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Best Prices',
      description: 'Compare prices across multiple retailers instantly and never overpay for trending products again.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Gen-Z Focused',
      description: 'Built by Gen-Z, for Gen-Z. We understand what you want and how you shop.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Driven',
      description: 'Our product selection is based on what the community is searching for and loving.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12">

      <Helmet>
  <title>About Fashionable | Fashion & Beauty Price Comparison Platform</title>
  <meta
    name="description"
    content="Learn about Fashionable, a Gen Z focused fashion and beauty price comparison platform helping shoppers discover trending products and compare prices across retailers."
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://your-domain.com/about" />

  <meta
    property="og:title"
    content="About Fashionable | Fashion & Beauty Price Comparison Platform"
  />
  <meta
    property="og:description"
    content="Fashionable helps shoppers discover trending fashion, makeup and skincare products at better prices across multiple retailers."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://your-domain.com/about" />
  <meta property="og:image" content="https://your-domain.com/images/product-fallback.webp" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Fashionable" />
  <meta
    name="twitter:description"
    content="Discover how Fashionable helps Gen Z shoppers compare prices on trending fashion and beauty products."
  />
  <meta name="twitter:image" content="https://your-domain.com/images/product-fallback.webp" />
</Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-[#00D9FF] to-[#FF006E] bg-clip-text text-transparent">Fashionable</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            We're on a mission to help Gen-Z discover trending fashion and beauty products at the best prices across multiple retailers.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#00D9FF]/10 to-[#FF006E]/10 border border-[#00D9FF] rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Fashionable was created to solve a simple problem: finding trending products shouldn't mean overpaying. 
            We believe that everyone deserves access to the latest fashion and beauty trends without breaking the bank. 
            By comparing prices across multiple retailers, we empower you to make informed purchasing decisions and save money on the products you love.
          </p>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How Fashionable Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 text-center">
              <div className="bg-gradient-to-r from-[#00D9FF] to-[#FF006E] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Discover Trends</h3>
              <p className="text-gray-400">
                We track viral products across TikTok, Instagram, and other social platforms to find what's trending.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 text-center">
              <div className="bg-gradient-to-r from-[#00D9FF] to-[#FF006E] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Compare Prices</h3>
              <p className="text-gray-400">
                We search multiple retailers to find you the best price on each product, saving you time and money.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 text-center">
              <div className="bg-gradient-to-r from-[#00D9FF] to-[#FF006E] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Shop Smart</h3>
              <p className="text-gray-400">
                Click through to your preferred retailer and purchase with confidence, knowing you got the best deal.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Fashionable?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#00D9FF] transition-all duration-300"
              >
                <div className="text-[#00D9FF] mb-4">{feature.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-white font-semibold text-xl mb-2">🎯 Transparency</h3>
              <p className="leading-relaxed">
                We're upfront about our affiliate partnerships and how we earn revenue. No hidden fees, no surprises.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl mb-2">💡 Innovation</h3>
              <p className="leading-relaxed">
                We continuously improve our platform to provide the best user experience and most accurate price comparisons.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl mb-2">🤝 Community</h3>
              <p className="leading-relaxed">
                We listen to our users and adapt our service based on what the Gen-Z community wants and needs.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl mb-2">💰 Value</h3>
              <p className="leading-relaxed">
                We're committed to helping you save money and get the best value on every purchase.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Saving?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Join thousands of savvy shoppers who use Fashionable to find the best deals on trending products.
          </p>
          <Link to="/trending">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#00D9FF] to-[#FF006E] text-white font-bold px-10 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all duration-300"
            >
              Explore Trending Products
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}