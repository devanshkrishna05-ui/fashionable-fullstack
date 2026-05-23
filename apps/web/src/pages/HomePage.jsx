import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { TrendingUp, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { mockProducts } from '@/data/mockProductData';
import { getAllProducts } from '@/lib/localProducts';

  const HERO_IMAGES = [
    { url: 'https://images.unsplash.com/photo-1583932387991-48b0308efc9a', alt: 'Trendy fashion outfit with denim jacket' },
    { url: 'https://images.unsplash.com/photo-1608979002523-9d5c42b613de', alt: 'Beauty and makeup products' },
    { url: 'https://images.unsplash.com/photo-1684407261522-48ad66a060e9', alt: 'Stylish accessories and bags' }
  ];

  const CATEGORIES = [
    { name: 'Fashion', icon: '👗', color: 'from-pink-500 to-purple-500', image: 'https://images.unsplash.com/photo-1583932387991-48b0308efc9a' },
    { name: 'Makeup', icon: '💄', color: 'from-cyan-500 to-blue-500', image: 'https://images.unsplash.com/photo-1608979002523-9d5c42b613de' },
    { name: 'Skincare', icon: '✨', color: 'from-green-400 to-emerald-500', image: 'https://images.unsplash.com/photo-1619853650725-25296cc83ddb' }
  ];

export default function HomePage() {

const featuredProducts = useMemo(() => {
  return getAllProducts(mockProducts).slice(0, 8);
}, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      
      <Helmet>
  <title>
    Fashionable - Discover Trending Fashion & Beauty at the Best Prices
  </title>

  <meta
    name="description"
    content="Compare prices on trending fashion, makeup and skincare products across multiple retailers. Discover viral Gen Z beauty and fashion deals in one place."
  />

  <meta
    name="keywords"
    content="fashion deals, beauty deals, makeup deals, skincare deals, price comparison, trending fashion, Gen Z fashion"
  />

  <link
    rel="canonical"
    href="https://your-domain.com/"
  />

  <meta
    property="og:title"
    content="Fashionable - Trending Fashion & Beauty Price Comparison"
  />

  <meta
    property="og:description"
    content="Find trending fashion, makeup and skincare products at the best prices across multiple retailers."
  />

  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:url"
    content="https://your-domain.com/"
  />

  <meta
    property="og:image"
    content="https://your-domain.com/images/product-fallback.webp"
  />

  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="Fashionable - Trending Fashion & Beauty Deals"
  />

  <meta
    name="twitter:description"
    content="Compare trending fashion and beauty products across retailers and save money."
  />

  <meta
    name="twitter:image"
    content="https://your-domain.com/images/product-fallback.webp"
  />
</Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00D9FF]/20 via-[#FF006E]/10 to-[#0a0a0a]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D9FF]/20 to-[#FF006E]/20 border border-[#00D9FF] rounded-full px-4 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-[#00D9FF]" />
                <span className="text-[#00D9FF] font-semibold text-sm">Trending Now</span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Discover Trending Fashion & Beauty at the{' '}
                <span className="bg-gradient-to-r from-[#00D9FF] to-[#FF006E] bg-clip-text text-transparent">
                  Best Prices
                </span>
              </h1>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Compare prices across multiple retailers and find the hottest trending products. 
                Never overpay for fashion and beauty again.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/trending">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-gradient-to-r from-[#00D9FF] to-[#FF006E] text-white font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Explore Trending</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-[#1a1a1a] border border-[#2a2a2a] text-white font-bold px-8 py-4 rounded-xl hover:border-[#00D9FF] transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Hero Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {HERO_IMAGES.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className={`${index === 0 ? 'col-span-2' : ''} relative rounded-2xl overflow-hidden border-2 border-[#2a2a2a] hover:border-[#00D9FF] transition-all duration-300 group`}
                >
                  <img
  src={image.url}
  alt={image.alt}
  loading={index === 0 ? 'eager' : 'lazy'}
  fetchPriority={index === 0 ? 'high' : 'auto'}
  decoding="async"
  width="640"
  height="360"
  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Shop by Category</h2>
            <p className="text-gray-400 text-lg">Explore trending products in your favorite categories</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATEGORIES.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/trending?category=${category.name}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative h-64 rounded-2xl overflow-hidden border-2 border-[#2a2a2a] hover:border-[#00D9FF] transition-all duration-300 group cursor-pointer"
                  >
                    <img
  src={category.image}
  alt={`${category.name} category`}
  loading="lazy"
  decoding="async"
  width="640"
  height="360"
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
/>
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-6xl mb-4">{category.icon}</span>
                      <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D9FF]/20 to-[#FF006E]/20 border border-[#00D9FF] rounded-full px-4 py-2 mb-4">
              <TrendingUp className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-[#00D9FF] font-semibold text-sm">Hot Right Now</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Featured Trending Products</h2>
            <p className="text-gray-400 text-lg">The most viral products everyone's buying</p>
          </motion.div>

       

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link to="/trending">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#00D9FF] to-[#FF006E] text-white font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all duration-300 inline-flex items-center gap-2 group"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>View All Trending Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Never Overpay for Fashion & Beauty Again
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join thousands of savvy shoppers who use Fashionable to find the best deals on trending products
            </p>
            <Link to="/trending">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#00D9FF] to-[#FF006E] text-white font-bold px-10 py-5 rounded-xl text-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all duration-300"
              >
                Start Saving Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}