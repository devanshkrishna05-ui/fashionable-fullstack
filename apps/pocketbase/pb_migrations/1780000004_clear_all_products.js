/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  try {
    app.db().newQuery("DELETE FROM products").execute();
    console.log("Successfully cleared all products from database.");
  } catch (e) {
    console.warn("Error clearing products:", e.message);
  }
})
