/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // Create products collection if it doesn't exist
  try {
    app.findCollectionByNameOrId("products");
  } catch (e) {
    const productsCollection = new Collection({
      name: "products",
      type: "base",
      system: false,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      listRule: "",
      viewRule: "",
      fields: [
        {
          system: false,
          id: "name",
          name: "name",
          type: "text",
          required: true,
          presentable: true,
          unique: false,
          options: {
            minLength: 1,
            maxLength: 255,
          },
        },
        {
          system: false,
          id: "description",
          name: "description",
          type: "editor",
          required: false,
          presentable: false,
        },
        {
          system: false,
          id: "image",
          name: "image",
          type: "text",
          required: false,
          presentable: false,
        },
        {
          system: false,
          id: "images",
          name: "images",
          type: "json",
          required: false,
          presentable: false,
        },
        {
          system: false,
          id: "category",
          name: "category",
          type: "text",
          required: false,
          presentable: true,
        },
        {
          system: false,
          id: "viralTags",
          name: "viralTags",
          type: "json",
          required: false,
          presentable: true,
        },
        {
          system: false,
          id: "retailers",
          name: "retailers",
          type: "json",
          required: false,
          presentable: false,
        },
      ],
    });
    app.save(productsCollection);
  }

  // Create priceAlerts collection if it doesn't exist
  try {
    app.findCollectionByNameOrId("priceAlerts");
  } catch (e) {
    const priceAlertsCollection = new Collection({
      name: "priceAlerts",
      type: "base",
      system: false,
      createRule: "",
      updateRule: "",
      deleteRule: "",
      listRule: "",
      viewRule: "",
      fields: [
        {
          system: false,
          id: "userId",
          name: "userId",
          type: "text",
          required: true,
          presentable: false,
        },
        {
          system: false,
          id: "productId",
          name: "productId",
          type: "text",
          required: true,
          presentable: false,
        },
        {
          system: false,
          id: "targetPrice",
          name: "targetPrice",
          type: "number",
          required: true,
          presentable: false,
        },
        {
          system: false,
          id: "currentPrice",
          name: "currentPrice",
          type: "number",
          required: false,
          presentable: false,
        },
        {
          system: false,
          id: "isActive",
          name: "isActive",
          type: "bool",
          required: false,
          presentable: false,
        },
      ],
    });
    app.save(priceAlertsCollection);
  }

  // Create restockWaitlist collection if it doesn't exist
  try {
    app.findCollectionByNameOrId("restockWaitlist");
  } catch (e) {
    const restockWaitlistCollection = new Collection({
      name: "restockWaitlist",
      type: "base",
      system: false,
      createRule: "",
      updateRule: "",
      deleteRule: "",
      listRule: "",
      viewRule: "",
      fields: [
        {
          system: false,
          id: "userId",
          name: "userId",
          type: "text",
          required: true,
          presentable: false,
        },
        {
          system: false,
          id: "productId",
          name: "productId",
          type: "text",
          required: true,
          presentable: false,
        },
        {
          system: false,
          id: "notificationSent",
          name: "notificationSent",
          type: "bool",
          required: false,
          presentable: false,
        },
      ],
    });
    app.save(restockWaitlistCollection);
  }

  // Create reviews collection if it doesn't exist
  try {
    app.findCollectionByNameOrId("reviews");
  } catch (e) {
    const reviewsCollection = new Collection({
      name: "reviews",
      type: "base",
      system: false,
      createRule: "",
      updateRule: "",
      deleteRule: "",
      listRule: "",
      viewRule: "",
      fields: [
        {
          system: false,
          id: "userId",
          name: "userId",
          type: "text",
          required: true,
          presentable: false,
        },
        {
          system: false,
          id: "productId",
          name: "productId",
          type: "text",
          required: true,
          presentable: false,
        },
        {
          system: false,
          id: "rating",
          name: "rating",
          type: "number",
          required: true,
          presentable: true,
        },
        {
          system: false,
          id: "comment",
          name: "comment",
          type: "text",
          required: false,
          presentable: true,
        },
      ],
    });
    app.save(reviewsCollection);
  }

  // Create clickTracking collection if it doesn't exist
  try {
    app.findCollectionByNameOrId("clickTracking");
  } catch (e) {
    const clickTrackingCollection = new Collection({
      name: "clickTracking",
      type: "base",
      system: false,
      createRule: "",
      updateRule: "",
      deleteRule: "",
      listRule: "",
      viewRule: "",
      fields: [
        {
          system: false,
          id: "productId",
          name: "productId",
          type: "text",
          required: true,
          presentable: false,
        },
        {
          system: false,
          id: "retailerId",
          name: "retailerId",
          type: "text",
          required: true,
          presentable: false,
        },
        {
          system: false,
          id: "retailerName",
          name: "retailerName",
          type: "text",
          required: true,
          presentable: true,
        },
        {
          system: false,
          id: "userAgent",
          name: "userAgent",
          type: "text",
          required: false,
          presentable: false,
        },
      ],
    });
    app.save(clickTrackingCollection);
  }
}, (app) => {
  // Rollback - collections will be deleted by PocketBase if needed
});
