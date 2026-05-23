import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, TrendingUp, Bell, Mail } from 'lucide-react';
import { mockProducts } from '@/data/mockProductData';
import { getAllProducts } from '@/lib/localProducts';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import pb from '@/lib/pocketbaseClient';
import PriceAlertModal from '@/components/PriceAlertModal.jsx';
import RestockWaitlistModal from '@/components/RestockWaitlistModal.jsx';
import ReviewsSection from '@/components/ReviewsSection.jsx';
import { formatINR } from '@/lib/priceFormatter';
import { trackAffiliateClick } from '../lib/clickTracking';
 const isSafeHttpUrl = (value) => {
    if (typeof value !== 'string' || !value.trim()) return false;
    try {
      const parsed = new URL(value);
      return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
      return false;
    }
  }; 

const normalizeImageList = (value) => {
    if (!Array.isArray(value)) return [];
    return value
      .filter((img) => typeof img === 'string')
      .map((img) => img.trim())
      .filter((img) => img.length > 0);
  };


export default function PriceComparison() {
  const { id } = useParams();
  const { toast } = useToast();
  const { currentUser } = useAuth();

  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [existingAlert, setExistingAlert] = useState(null);
  const [mainImageLoaded, setMainImageLoaded] = useState(false);
  const [mainImageError, setMainImageError] = useState(false);
  const [fallbackFailed, setFallbackFailed] = useState(false);

  const FALLBACK_IMAGE = '/images/product-fallback.webp';

 const allProducts = useMemo(() => getAllProducts(mockProducts), []);

const product = useMemo(() => {
  const foundProduct =
    allProducts.find((p) => String(p?.id) === String(id)) || null;

  if (!foundProduct) {
    console.warn(`Product not found for id: ${id}`);
  }

  return foundProduct;
}, [allProducts, id]);


  const productId = product?.id || '';
  const productName =
    typeof product?.name === 'string' && product.name.trim()
      ? product.name.trim()
      : 'Untitled Product';

  const productDescription =
    typeof product?.description === 'string' && product.description.trim()
      ? product.description.trim()
      : 'No description available.';

  const productCategory =
    typeof product?.category === 'string' && product.category.trim()
      ? product.category.trim()
      : 'Uncategorized';

  const productTags = Array.isArray(product?.viralTags)
    ? product.viralTags.filter((tag) => typeof tag === 'string' && tag.trim())
    : [];

  
  const galleryImages = useMemo(() => {
    const imagesFromArray = normalizeImageList(product?.images);
    if (imagesFromArray.length > 0) return imagesFromArray;

    if (typeof product?.image === 'string' && product.image.trim()) {
      return [product.image.trim()];
    }

    return [FALLBACK_IMAGE];
  }, [product?.images, product?.image]);

  const retailers = Array.isArray(product?.retailers) ? product.retailers : [];

  const validRetailers = useMemo(
    () =>
      retailers.filter(
        (r) =>
          r &&
          typeof r.currentPrice !== 'undefined' &&
          Number(r.currentPrice) > 0
          
      ),
    [retailers]
  );

  const sortedRetailers = useMemo(
    () => [...validRetailers].sort((a, b) => Number(a.currentPrice) - Number(b.currentPrice)),
    [validRetailers]
  );

  const lowestRetailer = sortedRetailers[0] || null;

  const lowestPrice = lowestRetailer ? Number(lowestRetailer.currentPrice) : 0;

  const isOutOfStock =
    validRetailers.length > 0 ? validRetailers.every((r) => r.outOfStock) : true;

 

  const loadExistingAlert = useCallback(async () => {
    if (!currentUser || !productId) {
      setExistingAlert(null);
      return;
    }

    try {
      const alerts = await pb.collection('priceAlerts').getList(1, 1, {
        filter: `userId = "${currentUser.id}" && productId = "${productId}"`,
        $autoCancel: false,
      });

      if (alerts.totalItems > 0) {
        setExistingAlert(alerts.items[0]);
      } else {
        setExistingAlert(null);
      }
    } catch (error) {
      console.error('Error checking alerts', error);
      setExistingAlert(null);
    }
  }, [currentUser, productId]);

  useEffect(() => {
    setSelectedImage(galleryImages[0] || FALLBACK_IMAGE);
    setMainImageLoaded(false);
    setMainImageError(false);
    setFallbackFailed(false);
  }, [galleryImages]);

  useEffect(() => {
    loadExistingAlert();
  }, [loadExistingAlert]);

  const displayImage = mainImageError
    ? FALLBACK_IMAGE
    : selectedImage || galleryImages[0] || FALLBACK_IMAGE;

  const handleRetailerClick = async (retailer) => {
    const affiliateUrl =
      typeof retailer?.affiliateLink === 'string' ? retailer.affiliateLink.trim() : '';

    if (!isSafeHttpUrl(affiliateUrl)) {
      toast({
        title: 'Invalid Link',
        description: 'Affiliate link valid nahi hai.',
        variant: 'destructive',
      });
      return;
    }

    try {
      await Promise.resolve(
        trackAffiliateClick({
          productId,
          productName,
          retailerName: retailer?.name || 'Unknown Retailer',
          affiliateLink: affiliateUrl,
          currentPrice: retailer?.currentPrice ?? null,
        })
      );
    } catch (error) {
      console.error('Affiliate click tracking failed:', error);
    }

    window.open(affiliateUrl, '_blank', 'noopener,noreferrer');
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
          <Link to="/trending" className="text-[#00D9FF] hover:underline">
            Back to Trending
          </Link>
        </div>
      </div>
    );
  }

  const originalReferencePrice = Number.isFinite(Number(lowestRetailer?.originalPrice))
    ? Number(lowestRetailer.originalPrice)
    : lowestPrice;

  const savingsAmount =
    originalReferencePrice > lowestPrice ? originalReferencePrice - lowestPrice : 0;

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-8">
      <Helmet>
  <title>{`${productName} Price Comparison | Fashionable`}</title>

  <meta
    name="description"
    content={`Compare prices for ${productName} across multiple retailers. Discover deals, discounts and trending fashion & beauty products on Fashionable.`}
  />

  <meta
    name="keywords"
    content={`${productName}, ${productCategory}, fashion deals, beauty deals, price comparison, affiliate shopping`}
  />

  <meta name="robots" content="index, follow" />

  <link
    rel="canonical"
    href={`https://your-domain.com/product/${productId}`}
  />

  <meta
    property="og:title"
    content={`${productName} Price Comparison | Fashionable`}
  />

  <meta
    property="og:description"
    content={`Compare prices and discover the best deals for ${productName}.`}
  />

  <meta property="og:type" content="product" />

  <meta
    property="og:url"
    content={`https://your-domain.com/product/${productId}`}
  />

  <meta
    property="og:image"
    content={displayImage}
  />

  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content={`${productName} Price Comparison | Fashionable`}
  />

  <meta
    name="twitter:description"
    content={`Find the best price for ${productName} on Fashionable.`}
  />

  <meta
    name="twitter:image"
    content={displayImage}
  />
</Helmet>

<script type="application/ld+json">
  {JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productName,
    image: displayImage,
    description: productDescription,
    category: productCategory,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: lowestPrice,
      availability: isOutOfStock
        ? 'https://schema.org/OutOfStock'
        : 'https://schema.org/InStock',
    },
  })}
</script>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/trending"
          className="inline-flex items-center gap-2 text-[#00D9FF] hover:text-[#FF006E] transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Trending</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-[#2a2a2a] hover:border-[#00D9FF] transition-all duration-300 bg-[#111]">
              {!mainImageLoaded && !fallbackFailed && (
                <div className="absolute inset-0 animate-pulse bg-[#1a1a1a]" />
              )}

              {!fallbackFailed ? (
               <img
                src={displayImage}
                alt={`${productName} product image`}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="700"
                height="700"
               
                  onLoad={() => setMainImageLoaded(true)}
                  onError={(e) => {
                    const attemptedSrc = e.currentTarget.currentSrc || e.currentTarget.src;

                    if (!mainImageError && attemptedSrc !== FALLBACK_IMAGE) {
                      setMainImageError(true);
                      setMainImageLoaded(false);
                      return;
                    }

                    setFallbackFailed(true);
                    setMainImageLoaded(true);
                  }}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    mainImageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-[#111] text-gray-500 text-sm font-medium px-4 text-center">
                  Image unavailable
                </div>
              )}
            </div>

            {galleryImages.length > 1 && (
              <div className="mt-4 flex gap-2 overflow-x-auto">
                {galleryImages.map((img, index) => (
                  <button
                    key={`${img}-${index}`}
                    type="button"
                    onClick={() => {
                      setSelectedImage(img);
                      setMainImageLoaded(false);
                      setMainImageError(false);
                      setFallbackFailed(false);
                    }}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 flex-shrink-0 ${
                      selectedImage === img ? 'border-[#00D9FF]' : 'border-[#2a2a2a]'
                    }`}
                    aria-label={`View image ${index + 1} of ${productName}`}
                  >
                    <img
                      src={img}
                      alt={`${productName} thumbnail ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.src = FALLBACK_IMAGE;
                      }}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {productTags.map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="bg-gradient-to-r from-[#FF006E] to-[#00D9FF] text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
        
            <div className="mb-4">
              <span className="text-[#00D9FF] text-sm font-semibold uppercase tracking-wide">
                {productCategory}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-white mb-4">{productName}</h1>

            <p className="text-gray-400 text-lg mb-6">{productDescription}</p>

            {lowestRetailer ? (
              <div className="bg-gradient-to-r from-[#00D9FF]/10 to-[#FF006E]/10 border border-[#00D9FF] rounded-xl p-6 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-[#00D9FF]" />
                  <span className="text-white font-semibold">Lowest Price Found</span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-bold text-[#00D9FF]">
                    {formatINR(lowestPrice)}
                  </span>
                  <span className="text-gray-500 line-through text-xl">
                    {formatINR(originalReferencePrice)}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mt-2">
                  Save up to {formatINR(savingsAmount)}{' '}
                  {Number(lowestRetailer?.discount) > 0
                    ? `(${Math.round(Number(lowestRetailer.discount))}% off)`
                    : ''}
                </p>
              </div>
            ) : (
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 mb-6 text-gray-400">
                Price data currently unavailable.
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              {isOutOfStock ? (
                <button
                  onClick={() => setIsWaitlistModalOpen(true)}
                  className="flex-1 bg-[#2a2a2a] border border-[#FF006E] text-[#FF006E] hover:bg-[#FF006E] hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Notify When Available
                </button>
              ) : (
                <button
                  onClick={() => {
                    if (!currentUser) {
                      toast({
                        title: 'Login Required',
                        description: 'Please login to set price alerts.',
                      });
                      return;
                    }
                    setIsAlertModalOpen(true);
                  }}
                  className={`flex-1 font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border ${
                    existingAlert
                      ? 'bg-[#FF006E]/20 border-[#FF006E] text-[#FF006E]'
                      : 'bg-[#1a1a1a] border-[#2a2a2a] text-white hover:border-[#00D9FF] hover:text-[#00D9FF]'
                  }`}
                >
                  <Bell className="w-5 h-5" />
                  {existingAlert ? 'Update Price Alert' : 'Set Price Alert'}
                </button>
              )}
            </div>

            {existingAlert && (
              <div className="mt-4 p-3 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] text-sm text-gray-400">
                <p>
                  Active Alert:{' '}
                  {existingAlert.targetPrice
                    ? `Target ${formatINR(existingAlert.targetPrice)}`
                    : `Drop ${existingAlert.percentageDrop}%`}
                </p>
              </div>
            )}
          </div>
        </div>

        <div
        >
          <h2 className="text-3xl font-bold text-white mb-6">Price Comparison</h2>

          <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-4 bg-[#0a0a0a] border-b border-[#2a2a2a]">
              <span className="text-gray-400 font-semibold text-sm uppercase">Retailer</span>
              <span className="text-gray-400 font-semibold text-sm uppercase">Price</span>
              <span className="text-gray-400 font-semibold text-sm uppercase">Discount</span>
              <span className="text-gray-400 font-semibold text-sm uppercase">Action</span>
            </div>

            {sortedRetailers.length > 0 ? (
              sortedRetailers.map((retailer, index) => {
                const retailerUrl = typeof retailer?.affiliateLink === 'string'
                  ? retailer.affiliateLink.trim()
                  : '';

                const canBuy = isSafeHttpUrl(retailerUrl);

                return (
                  <div
                    key={`${retailer?.name || 'retailer'}-${index}`}
                    className={`grid grid-cols-4 gap-4 p-4 items-center border-b border-[#2a2a2a] last:border-b-0 ${
                      Number(retailer.currentPrice) === lowestPrice
                        ? 'bg-gradient-to-r from-[#00D9FF]/10 to-[#FF006E]/10 border-l-4 border-l-[#00D9FF]'
                        : 'hover:bg-[#2a2a2a]/30'
                    } transition-all duration-300`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">
                        {retailer?.name || 'Retailer'}
                      </span>
                      {Number(retailer.currentPrice) === lowestPrice && (
                        <span className="bg-[#00D9FF] text-black text-xs font-bold px-2 py-0.5 rounded">
                          BEST
                        </span>
                      )}
                    </div>

                    <div>
                      <div className="text-white font-bold text-lg">
                        {formatINR(Number(retailer.currentPrice))}
                      </div>
                      <div className="text-gray-500 line-through text-sm">
                        {formatINR(
                          Number.isFinite(Number(retailer?.originalPrice))
                            ? Number(retailer.originalPrice)
                            : Number(retailer.currentPrice)
                        )}
                      </div>
                    </div>

                    <div>
                      <span className="bg-green-500/20 text-green-400 font-semibold px-3 py-1 rounded-full text-sm">
                        -{Math.max(0, Math.round(Number(retailer?.discount) || 0))}%
                      </span>
                    </div>

                    <div>
                      <button
                        onClick={() => handleRetailerClick(retailer)}
                        disabled={!canBuy}
                        className={`w-full ${
                          Number(retailer.currentPrice) === lowestPrice
                            ? 'bg-gradient-to-r from-[#00D9FF] to-[#FF006E] hover:shadow-[0_0_20px_rgba(0,217,255,0.5)]'
                            : 'bg-[#2a2a2a] hover:bg-[#3a3a3a]'
                        } text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        <span>Buy Now</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-6 text-gray-400">No retailer pricing available.</div>
            )}
          </div>
        </div>

        <React.Suspense fallback={<div className="text-gray-400 text-center py-6">Loading reviews...</div>}>
  <ReviewsSection productId={productId} />
</React.Suspense>

        <div
          className="mt-8 p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg"
        >
          <p className="text-gray-400 text-sm">
            <strong className="text-white">Note:</strong> Prices are updated regularly but may vary.
            Fashionable may earn a commission from purchases made through affiliate links at no extra cost to you.
            See our{' '}
            <Link to="/affiliate-disclosure" className="text-[#00D9FF] hover:underline">
              Affiliate Disclosure
            </Link>.
          </p>
        </div>

       {isAlertModalOpen && (
  <PriceAlertModal
    isOpen={isAlertModalOpen}
    onClose={() => setIsAlertModalOpen(false)}
    product={product}
    existingAlert={existingAlert}
    onAlertUpdated={loadExistingAlert}
  />
)}

        {isWaitlistModalOpen && (
  <RestockWaitlistModal
    isOpen={isWaitlistModalOpen}
    onClose={() => setIsWaitlistModalOpen(false)}
    product={product}
  />
)}
      </div>
    </div>
  );
}