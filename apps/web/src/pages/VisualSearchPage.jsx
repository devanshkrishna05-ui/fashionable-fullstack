import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Upload, Image as ImageIcon, Search, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { mockProducts } from '@/data/mockProductData';
import ProductCard from '@/components/ProductCard.jsx';

export default function VisualSearchPage() {
  const { toast } = useToast();
  const [dragActive, setDragActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem('recentVisualSearches');
    return saved ? JSON.parse(saved) : [];
  });

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const processImage = (file) => {
    // Validate file
    if (!file.type.startsWith('image/')) {
      toast({ title: "Invalid File", description: "Please upload an image file.", variant: "destructive" });
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast({ title: "File Too Large", description: "Image must be under 5MB.", variant: "destructive" });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target.result);
      setIsProcessing(true);
      
      // Simulate processing delay
      setTimeout(() => {
        // Mock results - return random products
        const shuffled = [...mockProducts].sort(() => 0.5 - Math.random());
        const matchedProducts = shuffled.slice(0, 4);
        setResults(matchedProducts);
        setIsProcessing(false);
        
        // Save to recent searches
        const newRecent = [e.target.result, ...recentSearches.slice(0, 5)];
        setRecentSearches(newRecent);
        localStorage.setItem('recentVisualSearches', JSON.stringify(newRecent));
        
        toast({ title: "Search Complete", description: `Found ${matchedProducts.length} similar products!` });
      }, 2000);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processImage(e.dataTransfer.files[0]);
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      processImage(e.target.files[0]);
    }
  };

  const clearSearch = () => {
    setSelectedImage(null);
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12">
      <Helmet>
        <title>Visual Search | Fashionable</title>
        <meta name="description" content="Find fashion and beauty products by uploading an image. Visual search powered by AI." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Find Products by <span className="bg-gradient-to-r from-[#00D9FF] to-[#FF006E] bg-clip-text text-transparent">Image</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Upload a photo or screenshot to find similar trending products instantly.
          </p>
        </motion.div>

        {/* Upload Area */}
        {!selectedImage ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                dragActive 
                  ? 'border-[#00D9FF] bg-[#00D9FF]/5' 
                  : 'border-[#2a2a2a] bg-[#1a1a1a] hover:border-[#00D9FF]/50'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleChange}
                accept="image/*"
              />
              
              <div className="flex flex-col items-center gap-4">
                <div className="bg-[#2a2a2a] p-4 rounded-full">
                  <Upload className="w-8 h-8 text-[#00D9FF]" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">Click or drag image here</p>
                  <p className="text-gray-400 text-sm">Supports JPG, PNG, WEBP (Max 5MB)</p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Search Results</h2>
              <button 
                onClick={clearSearch}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" /> Clear Search
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Source Image */}
              <div className="w-full md:w-1/3">
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                  <p className="text-sm font-medium text-gray-400 mb-3">Your Image</p>
                  <div className="aspect-square rounded-lg overflow-hidden relative">
                    <img src={selectedImage} alt="Search source" className="w-full h-full object-cover" />
                    {isProcessing && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-8 h-8 border-2 border-[#00D9FF] border-t-transparent rounded-full animate-spin"></div>
                          <span className="text-[#00D9FF] font-bold text-sm">Analyzing...</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Results Grid */}
              <div className="w-full md:w-2/3">
                {isProcessing ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-[#1a1a1a] rounded-xl h-80 animate-pulse"></div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {results.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Recent Searches */}
        {recentSearches.length > 0 && !selectedImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <ImageIcon className="w-6 h-6 text-[#FF006E]" /> Recent Searches
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {recentSearches.map((img, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedImage(img);
                    setIsProcessing(true);
                    setTimeout(() => {
                      const shuffled = [...mockProducts].sort(() => 0.5 - Math.random());
                      setResults(shuffled.slice(0, 4));
                      setIsProcessing(false);
                    }, 1500);
                  }}
                  className="flex-shrink-0 w-32 h-32 rounded-xl overflow-hidden border border-[#2a2a2a] hover:border-[#00D9FF] transition-all group relative"
                >
                  <img src={img} alt={`Recent search ${index + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}