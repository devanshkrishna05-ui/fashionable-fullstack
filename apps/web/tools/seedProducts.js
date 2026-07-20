import PocketBase from 'pocketbase';
import { mockProducts } from '../src/data/mockProductData.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load env variables if available
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

// Configuration
const PB_URL = process.env.VITE_POCKETBASE_URL || process.env.POCKETBASE_URL || 'http://localhost:8090';
const ADMIN_EMAIL = process.env.PB_ADMIN_EMAIL || process.argv[2];
const ADMIN_PASSWORD = process.env.PB_ADMIN_PASSWORD || process.argv[3];

async function seed() {
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error('❌ Error: PocketBase Admin email and password are required.');
    console.log('\nUsage:');
    console.log('  node tools/seedProducts.js <admin-email> <admin-password>');
    console.log('\nAlternatively, set PB_ADMIN_EMAIL and PB_ADMIN_PASSWORD in your environment or .env.local file.');
    process.exit(1);
  }

  console.log(`📡 Connecting to PocketBase at: ${PB_URL}`);
  const pb = new PocketBase(PB_URL);

  try {
    console.log('🔑 Authenticating as admin...');
    await pb.admins.authWithPassword(ADMIN_EMAIL, ADMIN_PASSWORD);
    console.log('✅ Authentication successful!');

    console.log('🔍 Checking for products collection...');
    const collections = await pb.collections.getFullList();
    const hasProducts = collections.some(c => c.name === 'products');

    if (!hasProducts) {
      throw new Error("The 'products' collection does not exist in the database. Please run migrations or start the dev server first.");
    }

    console.log('🗑️ Clearing old products from the database...');
    const existingProducts = await pb.collection('products').getFullList({ fields: 'id' });
    console.log(`   Found ${existingProducts.length} existing products to delete.`);
    
    // Delete existing products
    for (const prod of existingProducts) {
      await pb.collection('products').delete(prod.id);
    }
    console.log('✅ Old products cleared!');

    console.log(`📦 Seeding ${mockProducts.length} products...`);
    let seededCount = 0;

    for (const item of mockProducts) {
      try {
        const payload = {
          name: item.name,
          description: item.description,
          image: item.image,
          images: item.images, // JSON field
          category: item.category,
          viralTags: item.viralTags, // JSON field
          retailers: item.retailers, // JSON field
        };

        await pb.collection('products').create(payload);
        seededCount++;
        if (seededCount % 10 === 0 || seededCount === mockProducts.length) {
          console.log(`   Progress: [${seededCount}/${mockProducts.length}] products seeded.`);
        }
      } catch (err) {
        console.error(`❌ Failed to seed product "${item.name}":`, err.message);
      }
    }

    console.log(`\n🎉 Success! Seeded ${seededCount} products successfully.`);
  } catch (error) {
    console.error('❌ Database seeding failed:', error.message);
    process.exit(1);
  }
}

seed();
