/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("products");

  // Check if any products exist
  try {
    const existing = app.findRecordsByFilter("products", "name != ''", "", 1);
    if (existing.length > 0) {
      console.log(">> Products collection already has data. Skipping seed migration.");
      return;
    }
  } catch (e) {
    // Collection might be empty
  }

  console.log(">> Seeding mock product data into PocketBase...");

  const productsData = [
    {
      name: "Oversized Denim Jacket",
      description: "Trending vintage-style oversized denim jacket perfect for layering",
      image: "https://images.unsplash.com/photo-1583932387991-48b0308efc9a",
      category: "Fashion",
      viralTags: ["Viral Reel", "Best Seller"],
      retailers: [
        { name: "Amazon", currentPrice: 3899, originalPrice: 6999, discount: 44, affiliateLink: "https://amazon.in" },
        { name: "Myntra", currentPrice: 4299, originalPrice: 6999, discount: 38, affiliateLink: "https://myntra.com" },
        { name: "Ajio", currentPrice: 3999, originalPrice: 6500, discount: 38, affiliateLink: "https://ajio.com" }
      ]
    },
    {
      name: "Glossy Lip Tint Set",
      description: "Viral TikTok lip tint collection with 5 trending shades",
      image: "https://images.unsplash.com/photo-1608979002523-9d5c42b613de",
      category: "Makeup",
      viralTags: ["Viral Reel"],
      retailers: [
        { name: "Nykaa", currentPrice: 1299, originalPrice: 1999, discount: 35, affiliateLink: "https://nykaa.com" },
        { name: "Tira", currentPrice: 1350, originalPrice: 1999, discount: 32, affiliateLink: "https://tira.com" },
        { name: "Amazon", currentPrice: 1199, originalPrice: 1999, discount: 40, affiliateLink: "https://amazon.in" }
      ]
    },
    {
      name: "Mini Crossbody Bag",
      description: "Trendy mini bag with chain strap - perfect for nights out",
      image: "https://images.unsplash.com/photo-1684407261522-48ad66a060e9",
      category: "Fashion",
      viralTags: ["New Drop"],
      retailers: [
        { name: "Amazon", currentPrice: 1499, originalPrice: 2999, discount: 50, affiliateLink: "https://amazon.in" },
        { name: "H&M", currentPrice: 1799, originalPrice: 2999, discount: 40, affiliateLink: "https://hm.com" },
        { name: "Myntra", currentPrice: 1599, originalPrice: 2499, discount: 36, affiliateLink: "https://myntra.com" }
      ]
    },
    {
      name: "Chunky Platform Sneakers",
      description: "Y2K inspired platform sneakers - the ultimate Gen-Z staple",
      image: "https://images.unsplash.com/photo-1582257857588-4dd1f87a7118",
      category: "Fashion",
      viralTags: ["Best Seller", "Viral Reel"],
      retailers: [
        { name: "Nike", currentPrice: 7499, originalPrice: 9999, discount: 25, affiliateLink: "https://nike.com" },
        { name: "VegNonVeg", currentPrice: 7999, originalPrice: 9999, discount: 20, affiliateLink: "https://vegnonveg.com" },
        { name: "Myntra", currentPrice: 6999, originalPrice: 9999, discount: 30, affiliateLink: "https://myntra.com" }
      ]
    },
    {
      name: "Hyaluronic Acid Serum",
      description: "Viral skincare serum for plump, hydrated skin",
      image: "https://images.unsplash.com/photo-1619853650725-25296cc83ddb",
      category: "Skincare",
      viralTags: ["Viral Reel"],
      retailers: [
        { name: "The Ordinary", currentPrice: 650, originalPrice: 850, discount: 23, affiliateLink: "https://theordinary.com" },
        { name: "Nykaa", currentPrice: 700, originalPrice: 850, discount: 17, affiliateLink: "https://nykaa.com" },
        { name: "Amazon", currentPrice: 600, originalPrice: 850, discount: 29, affiliateLink: "https://amazon.in" }
      ]
    }
  ];

  for (const item of productsData) {
    const record = new Record(collection);
    record.set("name", item.name);
    record.set("description", item.description);
    record.set("image", item.image);
    record.set("images", JSON.stringify([item.image]));
    record.set("category", item.category);
    record.set("viralTags", JSON.stringify(item.viralTags));
    record.set("retailers", JSON.stringify(item.retailers));
    app.save(record);
  }

  console.log(">> Seeding completed successfully.");
}, (app) => {
  // Rollback logic
})
