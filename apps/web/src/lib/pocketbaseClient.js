import PocketBase from 'pocketbase';

const pb = new PocketBase(
  import.meta.env.VITE_POCKETBASE_URL || 'https://fashionable-api.onrender.com'
);

// SAFE METHOD
pb.autoCancellation(false);

export default pb;