const fs = require('fs');
const path = require('path');
const https = require('https');

const HOST = 'https://getfashionable.shop';
const POCKETBASE_URL = 'https://pocketbase-app-production-964e.up.railway.app';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Static routes
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/trending', priority: '1.0', changefreq: 'daily' },
  { path: '/visual-search', priority: '0.8', changefreq: 'weekly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.5', changefreq: 'monthly' },
  { path: '/affiliate-disclosure', priority: '0.5', changefreq: 'monthly' },
  { path: '/terms', priority: '0.5', changefreq: 'monthly' },
  { path: '/faq', priority: '0.6', changefreq: 'weekly' }
];

function fetchProducts() {
  return new Promise((resolve) => {
    const url = `${POCKETBASE_URL}/api/collections/products/records?perPage=500&fields=id,updated`;
    console.log(`📡 Fetching live products from PocketBase: ${url}`);
    
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          if (res.statusCode === 200) {
            const parsed = JSON.parse(data);
            resolve(parsed.items || []);
          } else {
            console.warn(`⚠️ PocketBase API returned status ${res.statusCode}. Falling back to static routes.`);
            resolve([]);
          }
        } catch (e) {
          console.warn('⚠️ Failed to parse PocketBase response. Falling back to static routes.');
          resolve([]);
        }
      });
    }).on('error', (err) => {
      console.warn('⚠️ Network error fetching products from PocketBase:', err.message);
      resolve([]);
    });
  });
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return new Date().toISOString().split('T')[0];
    return d.toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

async function generateSitemap() {
  console.log('🔄 IndexNow Automation: Generating dynamic sitemap.xml...');

  const products = await fetchProducts();
  console.log(`📦 Found ${products.length} live products in backend to index.`);

  const today = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // 1. Add static routes
  staticRoutes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${HOST}${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  // 2. Add dynamic product routes
  products.forEach(product => {
    if (!product || !product.id) return;
    const lastMod = formatDate(product.updated || today);
    xml += '  <url>\n';
    xml += `    <loc>${HOST}/product/${product.id}</loc>\n`;
    xml += `    <lastmod>${lastMod}</lastmod>\n`;
    xml += '    <changefreq>daily</changefreq>\n';
    xml += '    <priority>0.9</priority>\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';

  fs.writeFileSync(OUTPUT_PATH, xml, 'utf8');
  console.log(`✅ Success! Dynamic sitemap written to ${OUTPUT_PATH}`);
}

generateSitemap();
