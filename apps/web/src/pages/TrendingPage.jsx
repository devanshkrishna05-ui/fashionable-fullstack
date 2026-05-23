import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Search, Filter } from 'lucide-react';
import { fetchProductsFromPocketBase } from '@/lib/productApi';
import ProductCard from '@/components/ProductCard.jsx';
import { mockProducts } from '@/data/mockProductData';
import { getAllProducts } from '@/lib/localProducts';

const CATEGORIES = ['All', 'Fashion', 'Makeup', 'Skincare'];
const INITIAL_VISIBLE_PRODUCTS = 4;
export default function TrendingPage() {
  const FALLBACK_PRODUCTS = getAllProducts(mockProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [loadError, setLoadError] = useState('');
const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_PRODUCTS);
  
useEffect(() =>  {

  const timer = window.setTimeout(() => {

    setDebouncedSearchTerm(searchTerm.trim().toLowerCase());

  }, 250);


  return () => window.clearTimeout(timer);
}, [searchTerm]);
 

useEffect(() => {
  let isMounted = true;

  const loadProducts = async () => {

    try {

      setIsLoadingProducts(true);
      setLoadError('');

      const records = await fetchProductsFromPocketBase();

      if (!isMounted) return;

      setProducts(Array.isArray(records) && records.length > 0 ? records : FALLBACK_PRODUCTS);
    } catch (error) {
      if (!isMounted) return;

      console.error('Failed to load trending products from PocketBase:', error);
      setLoadError('Live products load nahi hue. Fallback products dikha rahe hain.');
      setProducts(FALLBACK_PRODUCTS);
    } finally {
      if (isMounted) {
        setIsLoadingProducts(false);
      }
    }
  };

  loadProducts();

  return () => {
    isMounted = false;
  };
}, []);

useEffect(() => {
  setVisibleCount(INITIAL_VISIBLE_PRODUCTS);
}, [selectedCategory, debouncedSearchTerm]);
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const productCategory = Array.isArray(product.category)
        ? product.category[0]

        : product.category || 'Fashion';

      const productName = product?.name?.toLowerCase?.() || '';

      const productDescription = product?.description?.toLowerCase?.() || '';
      const query = debouncedSearchTerm;

      const matchesCategory =
        selectedCategory === 'All' || productCategory === selectedCategory;

      const matchesSearch =
        productName.includes(query) || productDescription.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, debouncedSearchTerm]);
  const visibleProducts = useMemo(() => {
  return filteredProducts.slice(0, visibleCount);
}, [filteredProducts, visibleCount]);

const hasMoreProducts = visibleProducts.length < filteredProducts.length;
const handleLoadMore = () => {
  setVisibleCount((prevCount) => prevCount + INITIAL_VISIBLE_PRODUCTS);
};

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-8">
     <Helmet>
  <title>Trending Fashion, Makeup & Skincare Products | Fashionable</title>
  <meta
    name="description"
    content="Discover trending fashion, makeup and skincare products. Compare prices across retailers, explore viral Gen Z picks and find the best beauty and fashion deals on Fashionable."
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://your-domain.com/trending" />

  <meta property="og:title" content="Trending Fashion, Makeup & Skincare Products | Fashionable" />
  <meta
    property="og:description"
    content="Explore viral fashion, makeup and skincare products with price comparison across multiple retailers."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://your-domain.com/trending" />
  <meta property="og:image" content="https://your-domain.com/images/product-fallback.webp" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Trending Fashion, Makeup & Skincare Products | Fashionable" />
  <meta
    name="twitter:description"
    content="Compare trending fashion and beauty products across retailers and discover viral deals."
  />
  <meta name="twitter:image" content="https://your-domain.com/images/product-fallback.webp" />
</Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Trending Now</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the hottest fashion and beauty products that everyone's talking about
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="mb-6">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-gray-400">
              <Filter className="w-5 h-5" />
              <span className="font-semibold">Filter:</span>
            </div>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#00D9FF] to-[#FF006E] text-white shadow-[0_0_15px_rgba(0,217,255,0.5)]'
                    : 'bg-[#1a1a1a] text-gray-400 hover:text-white hover:bg-[#2a2a2a] border border-[#2a2a2a]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6"
        >
          {isLoadingProducts ? (
            <p className="text-gray-400 text-center">Products load ho rahe hain...</p>
          ) : loadError ? (
            <p className="text-red-400 text-center">{loadError}</p>
          ) : (
            <p className="text-gray-400 text-center">
              Showing <span className="text-[#00D9FF] font-semibold">{filteredProducts.length}</span> products
            </p>
          )}
        </motion.div>

        {isLoadingProducts ? (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="text-center py-20 text-gray-400"
  >
    Loading trending products...
  </motion.div>
) : filteredProducts.length > 0 ? (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {visibleProducts.map((product) => (
        <div key={product.id || product.name}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>

    {hasMoreProducts && (
      <div className="text-center mt-10">
        <button
          type="button"
          onClick={handleLoadMore}
          className="bg-[#1a1a1a] border border-[#00D9FF] text-[#00D9FF] hover:bg-[#00D9FF] hover:text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300"
        >
          Load More
        </button>
      </div>
    )}
  </>
) : (
  <div className="text-center py-20">
    <div className="text-6xl mb-4">{loadError ? '⚠️' : '🔍'}</div>
    <h3 className="text-2xl font-bold text-white mb-2">
      {loadError ? 'Products load nahi hue' : 'No products found'}
    </h3>
    <p className="text-gray-400">
      {loadError ? loadError : 'Try adjusting your filters or search term'}
    </p>
  </div>
)}
        
      </div>
    </div>
  );
}