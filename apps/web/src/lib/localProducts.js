const ADMIN_PRODUCTS_KEY = 'fashionable_admin_products';
const FALLBACK_IMAGE = '/images/product-fallback.webp';

const isBrowser = () => typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

const isSafeHttpUrl = (value) => {
  if (typeof value !== 'string' || !value.trim()) return false;

  try {
    const parsed = new URL(value.trim());
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
};

const sanitizeImageList = (product) => {
  const images = Array.isArray(product?.images)
    ? product.images
        .filter((img) => typeof img === 'string')
        .map((img) => img.trim())
        .filter((img) => img.length > 0 && isSafeHttpUrl(img))
    : [];

  if (images.length > 0) return images;

  if (typeof product?.image === 'string' && isSafeHttpUrl(product.image)) {
    return [product.image.trim()];
  }

  return [FALLBACK_IMAGE];
};

const sanitizeRetailers = (retailers) => {
  if (!Array.isArray(retailers)) return [];

  return retailers
    .filter((retailer) => retailer && typeof retailer === 'object')
    .map((retailer) => {
      const currentPrice = Number(retailer.currentPrice);
      const originalPrice = Number(retailer.originalPrice);

      return {
        name:
          typeof retailer.name === 'string' && retailer.name.trim()
            ? retailer.name.trim()
            : 'Unknown Retailer',
        affiliateLink: isSafeHttpUrl(retailer.affiliateLink)
          ? retailer.affiliateLink.trim()
          : '',
        currentPrice: Number.isFinite(currentPrice) && currentPrice >= 0 ? currentPrice : null,
        originalPrice: Number.isFinite(originalPrice) && originalPrice > 0 ? originalPrice : null,
        discount:
          Number.isFinite(Number(retailer.discount)) && Number(retailer.discount) >= 0
            ? Number(retailer.discount)
            : 0,
        outOfStock: Boolean(retailer.outOfStock),
      };
    })
    .filter(
      (retailer) =>
        retailer.name &&
        retailer.affiliateLink &&
        retailer.currentPrice !== null &&
        retailer.originalPrice !== null
    );
};

export function getAdminProducts() {
  if (!isBrowser()) return [];

  try {
    const raw = window.localStorage.getItem(ADMIN_PRODUCTS_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.map((product, index) => {
      const images = sanitizeImageList(product);

      return {
        id: product?.id ? String(product.id) : String(index + 1),
        name:
          typeof product?.name === 'string' && product.name.trim()
            ? product.name.trim()
            : 'Untitled Product',
        description:
          typeof product?.description === 'string' && product.description.trim()
            ? product.description.trim()
            : '',
        image: images[0],
        images,
        category:
          typeof product?.category === 'string' && product.category.trim()
            ? product.category.trim()
            : 'Fashion',
        viralTags: Array.isArray(product?.viralTags)
          ? product.viralTags.filter((tag) => typeof tag === 'string' && tag.trim())
          : typeof product?.viralTags === 'string'
            ? product.viralTags
                .split(',')
                .map((tag) => tag.trim())
                .filter(Boolean)
            : [],
        retailers: sanitizeRetailers(product?.retailers),
      };
    });
  } catch (error) {
    console.error('Error reading admin products from localStorage:', error);
    return [];
  }
}

export function getAllProducts(mockProducts = []) {
  const adminProducts = getAdminProducts();
  return adminProducts.length > 0 ? adminProducts : mockProducts;
}