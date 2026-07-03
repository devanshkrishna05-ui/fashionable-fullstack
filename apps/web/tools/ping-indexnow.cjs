const fs = require('fs');
const path = require('path');
const https = require('https');

const HOST = 'getfashionable.shop';
const KEY = 'f2ac1c30559b4c09a80e1b1d4c20790d';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

function pingIndexNow() {
  console.log('🚀 IndexNow Automation: Initiating Search Engine Ping...');

  // Read sitemap
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('❌ Sitemap not found at:', SITEMAP_PATH);
    return;
  }

  const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');

  // Extract URLs using regex
  const urlRegex = /<loc>(https:\/\/getfashionable\.shop\/[^<]*)<\/loc>/g;
  const urls = [];
  let match;

  while ((match = urlRegex.exec(sitemapContent)) !== null) {
    urls.push(match[1]);
  }

  if (urls.length === 0) {
    console.warn('⚠️ No URLs found in sitemap.xml. Skipping ping.');
    return;
  }

  console.log(`📋 Found ${urls.length} URLs in sitemap to notify search engines about.`);

  // Prepare payload
  const payload = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': payload.length
    }
  };

  // Perform POST request
  const req = https.request(options, (res) => {
    console.log(`📡 IndexNow API Response Status: ${res.statusCode} ${res.statusMessage}`);
    
    let responseBody = '';
    res.on('data', (chunk) => {
      responseBody += chunk;
    });

    res.on('end', () => {
      if (res.statusCode === 200) {
        console.log('✅ Success! Search engines (Bing, Yandex, etc.) notified of all pages.');
      } else if (res.statusCode === 202) {
        console.log('✅ Success (202 Accepted)! Search engines will process the pinged URLs.');
      } else {
        console.error(`❌ Failed! IndexNow returned an error: ${responseBody}`);
      }
    });
  });

  req.on('error', (err) => {
    console.error('❌ Network error while pinging IndexNow API:', err.message);
  });

  req.write(payload);
  req.end();
}

// Execute the ping
pingIndexNow();
