
import { Router } from 'express';

const router = Router();

// In-memory cache for the sitemap
let sitemapCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

router.get('/', async (req, res) => {
  try {
    const now = Date.now();
    
    // Return cached sitemap if it exists and is still valid
    if (sitemapCache && cacheTimestamp && (now - cacheTimestamp < CACHE_DURATION)) {
      res.header('Content-Type', 'application/xml; charset=utf-8');
      return res.send(sitemapCache);
    }

    const today = new Date().toISOString().split('T')[0];
    
    // Define static pages with their respective priorities
    const staticPages = [
      { url: '/', priority: 1.0 },
      { url: '/trending', priority: 0.9 },
      { url: '/visual-search', priority: 0.8 },
      { url: '/about', priority: 0.7 },
      { url: '/contact', priority: 0.7 },
      { url: '/faq', priority: 0.6 },
      { url: '/privacy', priority: 0.5 },
      { url: '/affiliate-disclosure', priority: 0.5 },
      { url: '/terms', priority: 0.5 },
    ];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Append static pages to XML
    for (const page of staticPages) {
      xml += `  <url>\n`;
      xml += `    <loc>https://getfashionable.shop${page.url}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>daily</changefreq>\n`;
      xml += `    <priority>${page.priority.toFixed(1)}</priority>\n`;
      xml += `  </url>\n`;
    }

    // Dynamically fetch products from PocketBase (source of truth)
    try {
      const pbUrl = process.env.POCKETBASE_URL || 'https://fashionable-api.onrender.com';
      const response = await fetch(`${pbUrl}/api/collections/products/records?perPage=500`);
      
      if (response.ok) {
        const data = await response.json();
        const products = data.items || [];
        
        for (const product of products) {
          const lastmod = product.updated ? product.updated.split(' ')[0] : today;
          xml += `  <url>\n`;
          xml += `    <loc>https://getfashionable.shop/product/${product.id}</loc>\n`;
          xml += `    <lastmod>${lastmod}</lastmod>\n`;
          xml += `    <changefreq>weekly</changefreq>\n`;
          xml += `    <priority>0.8</priority>\n`;
          xml += `  </url>\n`;
        }
      } else {
        console.warn('Failed to fetch products for sitemap, status:', response.status);
      }
    } catch (pbError) {
      console.error('Error fetching products for sitemap:', pbError);
      // Continue generating sitemap with just static pages if DB fetch fails
    }

    xml += `</urlset>`;

    // Update cache
    sitemapCache = xml;
    cacheTimestamp = now;

    // Send response
    res.header('Content-Type', 'application/xml; charset=utf-8');
    res.send(xml);
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.status(500).send('Error generating sitemap');
  }
});

export default router;
