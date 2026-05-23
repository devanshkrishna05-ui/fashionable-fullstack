import PocketBase from 'pocketbase';

const pocketbaseClient = new PocketBase(
  'https://fashionable-api.onrender.com'
);

export default pocketbaseClient;