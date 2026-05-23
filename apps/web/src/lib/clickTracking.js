const CLICK_STORAGE_KEY = 'fashionable_click_tracking';
const MAX_STORED_CLICKS = 100;

const isBrowser = typeof window !== 'undefined';

const safeString = (value, fallback = '') =>
  typeof value === 'string' && value.trim() ? value.trim() : fallback;

const safeNumber = (value) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
};

const isSafeHttpUrl = (value) => {
  if (typeof value !== 'string' || !value.trim()) return false;

  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

export function getTrackedClicks() {
  if (!isBrowser) return [];

  try {
    const raw = window.localStorage.getItem(CLICK_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Click tracking read failed:', error);
    return [];
  }
}

export function clearTrackedClicks() {
  if (!isBrowser) return;

  try {
    window.localStorage.removeItem(CLICK_STORAGE_KEY);
  } catch (error) {
    console.error('Click tracking clear failed:', error);
  }
}

export function trackAffiliateClick(data = {}) {
  if (!isBrowser) return false;

  const affiliateLink = safeString(data.affiliateLink);

  if (!isSafeHttpUrl(affiliateLink)) {
    console.warn('Blocked unsafe affiliate tracking URL:', affiliateLink);
    return false;
  }

  try {
    const clicks = getTrackedClicks();

    const newClick = {
      id:
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      productId: safeString(data.productId, 'unknown-product'),
      productName: safeString(data.productName, 'Unknown Product'),
      retailerName: safeString(data.retailerName, 'Unknown Retailer'),
      affiliateLink,
      price: safeNumber(data.currentPrice),
      time: new Date().toISOString(),
      source: safeString(data.source, 'web'),
    };

    const updatedClicks = [newClick, ...clicks].slice(0, MAX_STORED_CLICKS);

    window.localStorage.setItem(CLICK_STORAGE_KEY, JSON.stringify(updatedClicks));

    return true;
  } catch (error) {
    console.error('Affiliate click tracking failed:', error);
    return false;
  }
}