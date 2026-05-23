import pb from '@/lib/pocketbaseClient';

const PRODUCT_COLLECTION = 'products';
const CACHE_TTL_MS = 60 * 1000;
const REQUEST_TIMEOUT_MS = 8000;

let productsCache = {
  data: null,
  timestamp: 0,
};

const withTimeout = async (promise, timeoutMs = REQUEST_TIMEOUT_MS) => {
  let timeoutId;

  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = globalThis.setTimeout(() => {
      reject(new Error('PocketBase request timeout'));
    }, timeoutMs);
  });

  try {
    return await Promise.race([promise, timeoutPromise]);
  } finally {
    globalThis.clearTimeout(timeoutId);
  }
};

const getFileUrl = (record, fileName) => {
  if (!record || !fileName || typeof fileName !== 'string') return '';

  const cleanedFileName = fileName.trim();
  if (!cleanedFileName) return '';

  if (
    cleanedFileName.startsWith('http://') ||
    cleanedFileName.startsWith('https://')
  ) {
    return cleanedFileName;
  }

  try {
    return pb.files.getURL(record, cleanedFileName);
  } catch (error) {
    console.error('Failed to build PocketBase file URL:', error);
    return '';
  }
};

const normalizeImages = (product) => {
  if (!product || !Array.isArray(product.images)) return [];

  return product.images
    .filter((file) => typeof file === 'string' && file.trim())
    .map((file) => getFileUrl(product, file.trim()))
    .filter(Boolean);
};

const normalizeSingleImage = (product) => {
  if (!product) return '';

  if (typeof product.image === 'string' && product.image.trim()) {
    return getFileUrl(product, product.image.trim());
  }

  const gallery = normalizeImages(product);
  return gallery[0] || '';
};

const normalizeTags = (viralTags) => {
  if (Array.isArray(viralTags)) {
    return viralTags
      .filter((tag) => typeof tag === 'string')
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  if (typeof viralTags === 'string') {
    return viralTags
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return [];
};

const normalizeCategory = (category) => {
  if (Array.isArray(category)) {
    return category.find((item) => typeof item === 'string' && item.trim()) || 'Fashion';
  }

  if (typeof category === 'string' && category.trim()) {
    return category.trim();
  }

  return 'Fashion';
};

const isSafeHttpUrl = (value) => {
  if (typeof value !== 'string' || !value.trim()) return false;

  try {
    const parsedUrl = new URL(value.trim());
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
  } catch {
    return false;
  }
};

const normalizeRetailers = (retailers = []) => {
  if (!Array.isArray(retailers)) return [];

  return retailers
    .filter(Boolean)
    .map((retailer) => ({
      name:
        typeof retailer?.name === 'string' && retailer.name.trim()
          ? retailer.name.trim()
          : 'Unknown Retailer',
      currentPrice:
  Number.isFinite(Number(retailer?.currentPrice)) &&
  Number(retailer.currentPrice) > 0
    ? Number(retailer.currentPrice)
    : null,
      originalPrice:
  Number.isFinite(Number(retailer?.originalPrice)) &&
  Number(retailer.originalPrice) > 0
    ? Number(retailer.originalPrice)
    : null,
      discount: Number.isFinite(Number(retailer?.discount))
        ? Number(retailer.discount)
        : 0,
      affiliateLink: isSafeHttpUrl(retailer?.affiliateLink)
  ? retailer.affiliateLink.trim()
  : '',
      outOfStock: Boolean(retailer?.outOfStock),
    }));
};

const normalizeProduct = (product) => ({
  id: product?.id || '',
  name:
    typeof product?.name === 'string' && product.name.trim()
      ? product.name.trim()
      : 'Untitled Product',
  description:
    typeof product?.description === 'string' && product.description.trim()
      ? product.description.trim()
      : '',
  image: normalizeSingleImage(product),
  images: normalizeImages(product),
  category: normalizeCategory(product?.category),
  viralTags: normalizeTags(product?.viralTags),
  retailers: normalizeRetailers(product?.retailers),
  created: product?.created || null,
  updated: product?.updated || null,
});

const buildProductPayload = (productData = {}) => ({
  name: productData.name?.trim() || '',
  description: productData.description?.trim() || '',
  image: productData.image || '',
  images: Array.isArray(productData.images)
    ? productData.images.filter(Boolean)
    : [],
  category: Array.isArray(productData.category)
    ? productData.category.filter(Boolean)
    : productData.category?.trim() || 'Fashion',
  viralTags: normalizeTags(productData.viralTags),
  retailers: normalizeRetailers(productData.retailers),
});

export const clearProductsCache = () => {
  productsCache = {
    data: null,
    timestamp: 0,
  };
};

export const fetchProductsFromPocketBase = async ({ forceRefresh = false } = {}) => {
  const now = Date.now();

  if (
    !forceRefresh &&
    productsCache.data &&
    now - productsCache.timestamp < CACHE_TTL_MS
  ) {
    return productsCache.data;
  }

  try {
    const records = await withTimeout(
      pb.collection(PRODUCT_COLLECTION).getFullList({
        sort: '-created',
        $autoCancel: false,
      })
    );

    const normalizedProducts = Array.isArray(records)
      ? records.map(normalizeProduct)
      : [];

    productsCache = {
      data: normalizedProducts,
      timestamp: Date.now(),
    };

    return normalizedProducts;
  } catch (error) {
    console.error('Failed to fetch products from PocketBase:', error);

    return productsCache.data || [];
  }
};

export const fetchProductByIdFromPocketBase = async (id) => {
  if (!id) return null;

  try {
    const record = await withTimeout(
      pb.collection(PRODUCT_COLLECTION).getOne(id, {
        $autoCancel: false,
      })
    );

    return normalizeProduct(record);
  } catch (error) {
    console.error(`Failed to fetch product ${id} from PocketBase:`, error);
    return null;
  }
};

export const createProductInPocketBase = async (productData) => {
  const payload = buildProductPayload(productData);

  const record = await withTimeout(
    pb.collection(PRODUCT_COLLECTION).create(payload)
  );

  clearProductsCache();
  return normalizeProduct(record);
};

export const updateProductInPocketBase = async (id, productData) => {
  if (!id) throw new Error('Product id is required for update');

  const payload = buildProductPayload(productData);

  const record = await withTimeout(
    pb.collection(PRODUCT_COLLECTION).update(id, payload)
  );

  clearProductsCache();
  return normalizeProduct(record);
};

export const deleteProductFromPocketBase = async (id) => {
  if (!id) throw new Error('Product id is required for delete');

  await withTimeout(pb.collection(PRODUCT_COLLECTION).delete(id));
  clearProductsCache();
};