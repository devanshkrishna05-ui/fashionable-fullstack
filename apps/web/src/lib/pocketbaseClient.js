import PocketBase from 'pocketbase';

const pocketbaseUrl = import.meta.env.VITE_POCKETBASE_URL || 'https://pocketbase-app-production-964e.up.railway.app';
const pocketbaseClient = new PocketBase(pocketbaseUrl);

export default pocketbaseClient;