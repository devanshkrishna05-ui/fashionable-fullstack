import PocketBase from 'pocketbase';

const pocketbaseUrl = process.env.POCKETBASE_URL || 'https://pocketbase-app-production-964e.up.railway.app';

if (!process.env.POCKETBASE_URL) {
  console.warn('[WARNING] POCKETBASE_URL not set, using default: ' + pocketbaseUrl);
}

const pocketbaseClient = new PocketBase(pocketbaseUrl);

export default pocketbaseClient;