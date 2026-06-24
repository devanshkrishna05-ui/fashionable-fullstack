import PocketBase from 'pocketbase';

const pocketbaseUrl = process.env.POCKETBASE_URL || 'https://fashionable-api.onrender.com';

if (!process.env.POCKETBASE_URL) {
  console.warn('[WARNING] POCKETBASE_URL not set, using default: ' + pocketbaseUrl);
}

const pocketbaseClient = new PocketBase(pocketbaseUrl);

export default pocketbaseClient;