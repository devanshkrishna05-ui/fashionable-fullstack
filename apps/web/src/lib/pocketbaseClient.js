import PocketBase from 'pocketbase';

const pocketbaseUrl = import.meta.env.VITE_POCKETBASE_URL || 'https://fashionable-api.onrender.com';
const pocketbaseClient = new PocketBase(pocketbaseUrl);

export default pocketbaseClient;