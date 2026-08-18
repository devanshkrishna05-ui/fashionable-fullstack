/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  try {
    const collection = app.findCollectionByNameOrId("products");
    collection.createRule = "";
    collection.updateRule = "";
    collection.deleteRule = "";
    collection.listRule = "";
    collection.viewRule = "";
    app.save(collection);
    console.log(">> Successfully updated products collection rules to public!");
  } catch (e) {
    console.warn("Notice: Could not update products collection rules:", e.message);
  }
}, (app) => {
  // Rollback logic
});
