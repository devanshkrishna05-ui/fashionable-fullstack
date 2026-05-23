import PocketBase from 'pocketbase';

const pocketbaseClient = new PocketBase(
  process.env.POCKETBASE_URL || 'https://fashionable-api.onrender.com'
);

export default pocketbaseClient;

export { pocketbaseClient };