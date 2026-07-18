/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collectionNames = ["products", "priceAlerts", "restockWaitlist", "reviews", "clickTracking"];
  
  for (const name of collectionNames) {
    try {
      const collection = app.findCollectionByNameOrId(name);
      
      let hasCreated = false;
      let hasUpdated = false;
      
      for (const field of collection.fields) {
        if (field.name === 'created') hasCreated = true;
        if (field.name === 'updated') hasUpdated = true;
      }
      
      if (!hasCreated) {
        collection.fields.add(new Field({
          name: "created",
          type: "autodate",
          onCreate: true,
          onUpdate: false
        }));
        console.log(`Added created field to collection: ${name}`);
      }
      
      if (!hasUpdated) {
        collection.fields.add(new Field({
          name: "updated",
          type: "autodate",
          onCreate: true,
          onUpdate: true
        }));
        console.log(`Added updated field to collection: ${name}`);
      }
      
      app.save(collection);
    } catch (e) {
      console.warn(`Could not update fields for collection ${name}:`, e.message);
    }
  }
})
