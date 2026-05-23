import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Bell, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import pb from '@/lib/pocketbaseClient';
import PriceAlertModal from '@/components/PriceAlertModal.jsx';
import RestockWaitlistModal from '@/components/RestockWaitlistModal.jsx';
import { formatINR } from '@/lib/priceFormatter';
import { trackAffiliateClick } from '@/lib/clickTracking';
const FALLBACK_IMAGE = '/images/product-fallback.webp';

const getViralTagColor = (tag) => {
  switch (tag) {
    case 'Viral Reel':
      return 'bg-gradient-to-r from-pink-500 to-purple-500';
    case 'Best Seller':
      return 'bg-gradient-to-r from-cyan-500 to-blue-500';
    case 'New Drop':
      return 'bg-gradient-to-r from-green-400 to-emerald-500';
    default:
      return 'bg-gray-500';
  }
};
export default function ProductCard({ product }) {
  const { toast } = useToast();
  const { currentUser } = useAuth();

  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [hasAlert, setHasAlert] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [fallbackFailed, setFallbackFailed] = useState(false);

  const productId = product?.id || '';
  const productName =
    typeof product?.name === 'string' && product.name.trim()
      ? product.name.trim()
      : 'Untitled Product';

  const productDescription =
    typeof product?.description === 'string' && product.description.trim()
      ? product.description.trim()
      : 'No description available.';

  const productTags = Array.isArray(product?.viralTags)
    ? product.viralTags.filter((tag) => typeof tag === 'string' && tag.trim())
    : [];

  const productLink = productId ? `/product/${productId}` : '#';

  const retailers = Array.isArray(product?.retailers) ? product.retailers : [];

  const validRetailers = retailers.filter(
    (r) =>
      r &&
      typeof r.currentPrice !== 'undefined' &&
      !Number.isNaN(Number(r.currentPrice))
  );

  const lowestPrice =
    validRetailers.length > 0
      ? Math.min(...validRetailers.map((r) => Number(r.currentPrice)))
      : 0;

  const lowestRetailer =
    validRetailers.find((r) => Number(r.currentPrice) === lowestPrice) || null;

  const isOutOfStock =
    validRetailers.length > 0 ? validRetailers.every((r) => r.outOfStock) : true;

  const hasValidRetailers = validRetailers.length > 0;

  const hasPurchasableRetailer =
    !!lowestRetailer &&
    typeof lowestRetailer?.affiliateLink === 'string' &&
    lowestRetailer.affiliateLink.trim().length > 0 &&
    !lowestRetailer?.outOfStock;
    
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
    .filter((img) => img.length > 0)
    .filter((img) => img === FALLBACK_IMAGE || isSafeHttpUrl(img));
};

  const productImages = useMemo(() => {
    const imagesFromArray = normalizeImageList(product?.images);
    if (imagesFromArray.length > 0) return imagesFromArray;

   if (
  typeof product?.image === 'string' &&
  product.image.trim() &&
  isSafeHttpUrl(product.image)
) {
  return [product.image.trim()];
}

    return [FALLBACK_IMAGE];
  }, [product?.images, product?.image]);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    setFallbackFailed(false);
  }, [productId, product?.image, product?.images]);

  const primaryImage = imageError ? FALLBACK_IMAGE : productImages[0];
  const showImageElement = !fallbackFailed;

  useEffect(() => {
    const checkAlert = async () => {
      if (!currentUser || !productId) {
        setHasAlert(false);
        return;
      }

      try {
        const alerts = await pb.collection('priceAlerts').getList(1, 1, {
          filter: `userId = "${currentUser.id}" && productId = "${productId}" && isActive = true`,
          $autoCancel: false,
        });
        setHasAlert(alerts.totalItems > 0);
      } catch (e) {
        console.error('Error checking alerts', e);
        setHasAlert(false);
      }
    };

    checkAlert();
  }, [currentUser, productId]);



  const handleBuyClick = useCallback(async (retailer) => {
    if (!retailer) {
      toast({
        title: 'Retailer Missing',
        description: 'Retailer data available nahi hai.',
        variant: 'destructive',
      });
      return;
    }

    const affiliateUrl =
      typeof retailer?.affiliateLink === 'string'
        ? retailer.affiliateLink.trim()
        : '';

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
  }, [productId, productName, toast]);

  const handlePriceAlertClick = useCallback(() => {
  if (!currentUser) {
    toast({
      title: 'Login Required',
      description: 'Please login to set price alerts.',
    });
    return;
  }

  setIsAlertModalOpen(true);
}, [currentUser, toast]);

 

 return (
  <>
    <div className="h-full flex flex-col bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#2a2a2a] hover:border-[#00D9FF] hover:shadow-[0_0_20px_rgba(0,217,255,0.15)] transition-colors duration-300">
      {productId ? (
        <Link to={productLink} className="relative block aspect-[4/5] overflow-hidden bg-[#111]">
          <div className="relative w-full h-full bg-[#111]">
            {!imageLoaded && showImageElement && (
              <div className="absolute inset-0 animate-pulse bg-[#1a1a1a]" />
            )}

            {showImageElement ? (
              <img
                src={primaryImage}
                alt={`${productName} product image`}
                loading="lazy"
                decoding="async"
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  const attemptedSrc = e.currentTarget.currentSrc || e.currentTarget.src;

                  if (!imageError && attemptedSrc !== FALLBACK_IMAGE) {
                    setImageError(true);
                    setImageLoaded(false);
                    return;
                  }

                  setFallbackFailed(true);
                  setImageLoaded(true);
                }}
                className={`w-full h-full object-cover transition-all duration-300 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[#111] text-gray-500 text-sm font-medium px-4 text-center">
                Image unavailable
              </div>
            )}
          </div>

          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {productTags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className={`${getViralTagColor(tag)} text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg`}
              >
                {tag}
              </span>
            ))}
          </div>

          {lowestRetailer && Number(lowestRetailer?.discount) > 0 && (
            <div className="absolute top-2 right-2 bg-[#00D9FF] text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg">
              -{Math.round(Number(lowestRetailer.discount))}%
            </div>
          )}

          {hasAlert && (
            <div className="absolute bottom-2 right-2 bg-[#FF006E] text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
              <Bell className="w-3 h-3" /> Alert On
            </div>
          )}
        </Link>
      ) : (
        <div className="relative block aspect-[4/5] overflow-hidden bg-[#111]">
          <div className="relative w-full h-full bg-[#111]">
            {!imageLoaded && showImageElement && (
              <div className="absolute inset-0 animate-pulse bg-[#1a1a1a]" />
            )}

            {showImageElement ? (
              <img
                src={primaryImage}
                alt={`${productName} product image`}
                loading="lazy"
                decoding="async"
                width="400"
                height="500"
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  const attemptedSrc = e.currentTarget.currentSrc || e.currentTarget.src;

                  if (!imageError && attemptedSrc !== FALLBACK_IMAGE) {
                    setImageError(true);
                    setImageLoaded(false);
                    return;
                  }

                  setFallbackFailed(true);
                  setImageLoaded(true);
                }}
                className={`w-full h-full object-cover transition-all duration-300 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[#111] text-gray-500 text-sm font-medium px-4 text-center">
                Image unavailable
              </div>
            )}
          </div>

          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {productTags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className={`${getViralTagColor(tag)} text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg`}
              >
                {tag}
              </span>
            ))}
          </div>

          {lowestRetailer && Number(lowestRetailer?.discount) > 0 && (
            <div className="absolute top-2 right-2 bg-[#00D9FF] text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg">
              -{Math.round(Number(lowestRetailer.discount))}%
            </div>
          )}

          {hasAlert && (
            <div className="absolute bottom-2 right-2 bg-[#FF006E] text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
              <Bell className="w-3 h-3" /> Alert On
            </div>
          )}
        </div>
      )}

      <div className="p-4 flex flex-col flex-grow">
        {productId ? (
          <Link to={productLink}>
            <h3 className="text-white font-bold text-lg mb-2 hover:text-[#00D9FF] transition-colors line-clamp-2 min-h-[3.5rem]">
              {productName}
            </h3>
          </Link>
        ) : (
          <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">
            {productName}
          </h3>
        )}

        <p className="text-gray-400 text-sm mb-3 line-clamp-2 flex-grow">
          {productDescription}
        </p>

        {hasValidRetailers ? (
          <>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-[#00D9FF] font-bold text-2xl">
                {formatINR(lowestPrice)}
              </span>
              <span className="text-gray-500 line-through text-sm">
                {formatINR(
                  Number.isFinite(Number(lowestRetailer?.originalPrice))
                    ? Number(lowestRetailer.originalPrice)
                    : lowestPrice
                )}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#00D9FF] text-black text-xs font-bold px-2 py-1 rounded">
                Lowest Price
              </span>
              <span className="text-gray-400 text-xs">
                at {lowestRetailer?.name?.trim() || 'Retailer'}
              </span>
            </div>
          </>
        ) : (
          <div className="mb-4">
            <span className="text-gray-500 text-sm">Price currently unavailable</span>
          </div>
        )}

        <div className="space-y-2 mt-auto">
          {isOutOfStock ? (
            <button
              onClick={() => setIsWaitlistModalOpen(true)}
              className="w-full bg-[#2a2a2a] border border-[#FF006E] text-[#FF006E] hover:bg-[#FF006E] hover:text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Notify When Available</span>
            </button>
          ) : (
            <>
              <button
                onClick={() => handleBuyClick(lowestRetailer)}
                disabled={!hasPurchasableRetailer}
                aria-label={`Buy ${productName} on ${lowestRetailer?.name || 'retailer'}`}
                className="w-full bg-gradient-to-r from-[#FF006E] to-[#00D9FF] hover:from-[#00D9FF] hover:to-[#FF006E] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Buy on {lowestRetailer?.name || 'Retailer'}</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex gap-2">
                {productId ? (
                  <Link
                    to={productLink}
                    aria-label={`Compare prices for ${productName}`}
                    className="flex-1 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center border border-[#00D9FF] text-sm flex items-center justify-center"
                  >
                    Compare
                  </Link>
                ) : (
                  <div className="flex-1 bg-[#2a2a2a] text-gray-500 font-semibold py-2 px-4 rounded-lg text-center border border-[#2a2a2a] text-sm flex items-center justify-center">
                    Compare
                  </div>
                )}

               <button
  onClick={handlePriceAlertClick}
  aria-label={hasAlert ? 'Price alert enabled' : 'Set price alert'}
  className={`px-3 rounded-lg border transition-all duration-300 flex items-center justify-center ${
    hasAlert
      ? 'bg-[#FF006E]/20 border-[#FF006E] text-[#FF006E]'
      : 'bg-[#2a2a2a] border-[#2a2a2a] text-gray-400 hover:text-[#00D9FF] hover:border-[#00D9FF]'
  }`}
  title="Set Price Alert"
>
  <Bell className="w-5 h-5" />
</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>

 {isAlertModalOpen && (
  <PriceAlertModal
    isOpen={isAlertModalOpen}
    onClose={() => setIsAlertModalOpen(false)}
    product={product}
    onAlertUpdated={() => setHasAlert(true)}
  />
)}

{isWaitlistModalOpen && (
  <RestockWaitlistModal
    isOpen={isWaitlistModalOpen}
    onClose={() => setIsWaitlistModalOpen(false)}
    product={product}
  />
)}
    </>
  );
}