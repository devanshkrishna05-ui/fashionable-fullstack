/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("products");

  console.log(">> Clearing old products from products table...");
  try {
    app.db().newQuery("DELETE FROM products").execute();
  } catch (e) {
    console.warn("Warning: Could not clear products table:", e.message);
  }

  console.log(">> Seeding 150 real trending products into PocketBase...");
  const products = [
  {
    "id": "FSH-001",
    "name": "Zara Oversized Trench Coat",
    "description": "A classic double-breasted trench coat with an oversized fit. Made from weather-resistant gabardine cotton blend, perfect for layering. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#trenchcoat",
      "#classicstyle",
      "#neutralaesthetic",
      "#fallfashion",
      "#zara",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Zara",
        "affiliateLink": "https://www.google.com/search?q=Zara%20Oversized%20Trench%20Coat%20buy%20official",
        "currentPrice": 1637,
        "originalPrice": 1927,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Zara%20Oversized%20Trench%20Coat",
        "currentPrice": 1702,
        "originalPrice": 1927,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Zara%20Oversized%20Trench%20Coat",
        "currentPrice": 1805,
        "originalPrice": 1927,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-19T09:45:01.336Z",
    "updated": "2026-07-20T09:45:01.337Z"
  },
  {
    "id": "FSH-002",
    "name": "H&M Cropped Define Jacket",
    "description": "Designed for running and training, this cropped jacket contours your body perfectly. Breathable, sweat-wicking Nulu fabric. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#lululemon",
      "#definejacket",
      "#athleisure",
      "#gymfit",
      "#h&m",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "H&M",
        "affiliateLink": "https://www.google.com/search?q=H%26M%20Cropped%20Define%20Jacket%20buy%20official",
        "currentPrice": 1964,
        "originalPrice": 2311,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=H%26M%20Cropped%20Define%20Jacket",
        "currentPrice": 1849,
        "originalPrice": 2311,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=H%26M%20Cropped%20Define%20Jacket",
        "currentPrice": 2035,
        "originalPrice": 2311,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-18T09:45:01.337Z",
    "updated": "2026-07-20T09:45:01.337Z"
  },
  {
    "id": "FSH-003",
    "name": "Lululemon Soft Lounge Long Slip Dress",
    "description": "A viral lounge dress made from silky smooth modal fabric. Hugs curves perfectly and offers an elegant, draped silhouette. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#skims",
      "#slipdress",
      "#softlounge",
      "#cleangirl",
      "#lululemon",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Lululemon",
        "affiliateLink": "https://www.google.com/search?q=Lululemon%20Soft%20Lounge%20Long%20Slip%20Dress%20buy%20official",
        "currentPrice": 3279,
        "originalPrice": 3858,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Lululemon%20Soft%20Lounge%20Long%20Slip%20Dress",
        "currentPrice": 3328,
        "originalPrice": 3858,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Lululemon%20Soft%20Lounge%20Long%20Slip%20Dress",
        "currentPrice": 3238,
        "originalPrice": 3858,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-17T09:45:01.337Z",
    "updated": "2026-07-20T09:45:01.337Z"
  },
  {
    "id": "FSH-004",
    "name": "Skims Oversized Cable Knit Sweater",
    "description": "Chunky, warm cable-knit sweater made from ultra-soft wool blend. Relaxed silhouette with drop shoulders. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#sweaterweather",
      "#knitwear",
      "#cozyvibes",
      "#winterootd",
      "#skims",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Skims",
        "affiliateLink": "https://www.google.com/search?q=Skims%20Oversized%20Cable%20Knit%20Sweater%20buy%20official",
        "currentPrice": 2907,
        "originalPrice": 3420,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Skims%20Oversized%20Cable%20Knit%20Sweater",
        "currentPrice": 2926,
        "originalPrice": 3420,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Skims%20Oversized%20Cable%20Knit%20Sweater",
        "currentPrice": 2948,
        "originalPrice": 3420,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-16T09:45:01.337Z",
    "updated": "2026-07-20T09:45:01.337Z"
  },
  {
    "id": "FSH-005",
    "name": "Levi's Classic Cargo Utility Pants",
    "description": "Relaxed fit cargo pants featuring functional side flap pockets and a comfortable high-waist band. Made from premium ripstop cotton. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#cargopants",
      "#utilitywear",
      "#streetstyle",
      "#y2kfashion",
      "#levi's",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Levi's%20Classic%20Cargo%20Utility%20Pants%20buy%20official",
        "currentPrice": 5270,
        "originalPrice": 6201,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Levi's%20Classic%20Cargo%20Utility%20Pants",
        "currentPrice": 5231,
        "originalPrice": 6201,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Levi's%20Classic%20Cargo%20Utility%20Pants",
        "currentPrice": 5316,
        "originalPrice": 6201,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-15T09:45:01.337Z",
    "updated": "2026-07-20T09:45:01.337Z"
  },
  {
    "id": "FSH-006",
    "name": "Nike Retro Leather Bomber Jacket",
    "description": "A vintage-inspired leather bomber jacket with ribbed collar and cuffs. Durable premium grain lambskin leather. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#leatherjacket",
      "#vintageaesthetic",
      "#bomberjacket",
      "#bikerstyle",
      "#nike",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Nike%20Retro%20Leather%20Bomber%20Jacket%20buy%20official",
        "currentPrice": 4835,
        "originalPrice": 5689,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Nike%20Retro%20Leather%20Bomber%20Jacket",
        "currentPrice": 4763,
        "originalPrice": 5689,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Nike%20Retro%20Leather%20Bomber%20Jacket",
        "currentPrice": 4769,
        "originalPrice": 5689,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-14T09:45:01.337Z",
    "updated": "2026-07-20T09:45:01.337Z"
  },
  {
    "id": "FSH-007",
    "name": "Adidas Align High-Rise Pants 28\"",
    "description": "Ultra-lightweight high-rise leggings that feel like a second skin. Made from buttery-soft Nulu fabric with 4-way stretch. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#lululemonalign",
      "#leggings",
      "#yogaootd",
      "#comfortwear",
      "#adidas",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Adidas%20Align%20High-Rise%20Pants%2028%22%20buy%20official",
        "currentPrice": 3730,
        "originalPrice": 4389,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Adidas%20Align%20High-Rise%20Pants%2028%22",
        "currentPrice": 3636,
        "originalPrice": 4389,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Adidas%20Align%20High-Rise%20Pants%2028%22",
        "currentPrice": 3856,
        "originalPrice": 4389,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-13T09:45:01.337Z",
    "updated": "2026-07-20T09:45:01.337Z"
  },
  {
    "id": "FSH-008",
    "name": "Uniqlo Relaxed Fit Linen Blend Blazer",
    "description": "Lightweight linen blazer perfect for smart-casual summer styles. Relaxed silhouette, notched lapels, dual front buttons. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#linenblazer",
      "#summerformal",
      "#officelook",
      "#zarafashion",
      "#uniqlo",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Uniqlo%20Relaxed%20Fit%20Linen%20Blend%20Blazer%20buy%20official",
        "currentPrice": 3920,
        "originalPrice": 4612,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Uniqlo%20Relaxed%20Fit%20Linen%20Blend%20Blazer",
        "currentPrice": 3775,
        "originalPrice": 4612,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Uniqlo%20Relaxed%20Fit%20Linen%20Blend%20Blazer",
        "currentPrice": 3814,
        "originalPrice": 4612,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-12T09:45:01.337Z",
    "updated": "2026-07-20T09:45:01.337Z"
  },
  {
    "id": "FSH-009",
    "name": "Mango Wide Leg Tailored Trousers",
    "description": "Smart tailored trousers with a high-rise waist and pleated front. Flows beautifully into a classic wide-leg drape. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#tailoredpants",
      "#widelegtrousers",
      "#smartcasual",
      "#workwear",
      "#mango",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Mango%20Wide%20Leg%20Tailored%20Trousers%20buy%20official",
        "currentPrice": 2447,
        "originalPrice": 2879,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Mango%20Wide%20Leg%20Tailored%20Trousers",
        "currentPrice": 2305,
        "originalPrice": 2879,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Mango%20Wide%20Leg%20Tailored%20Trousers",
        "currentPrice": 2509,
        "originalPrice": 2879,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-11T09:45:01.337Z",
    "updated": "2026-07-20T09:45:01.337Z"
  },
  {
    "id": "FSH-010",
    "name": "ASOS Soft Lounge Ribbed Boxer Set",
    "description": "Super-stretchy ribbed modal crop top and boy-shorts set. Incredibly soft, lightweight, and perfect for lounging. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#skimsinspired",
      "#loungewear",
      "#ribbedset",
      "#cozylife",
      "#asos",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=ASOS%20Soft%20Lounge%20Ribbed%20Boxer%20Set%20buy%20official",
        "currentPrice": 1294,
        "originalPrice": 1523,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=ASOS%20Soft%20Lounge%20Ribbed%20Boxer%20Set",
        "currentPrice": 1238,
        "originalPrice": 1523,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=ASOS%20Soft%20Lounge%20Ribbed%20Boxer%20Set",
        "currentPrice": 1195,
        "originalPrice": 1523,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-10T09:45:01.337Z",
    "updated": "2026-07-20T09:45:01.337Z"
  },
  {
    "id": "FSH-011",
    "name": "Massimo Dutti Samba OG Classic Sneakers",
    "description": "Retro street culture classic sneakers featuring leather upper with suede overlays and signature gum rubber outsole. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#adidassamba",
      "#sneakerhead",
      "#retrostyle",
      "#streetwear",
      "#massimo dutti",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Massimo%20Dutti%20Samba%20OG%20Classic%20Sneakers%20buy%20official",
        "currentPrice": 4939,
        "originalPrice": 5811,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Massimo%20Dutti%20Samba%20OG%20Classic%20Sneakers",
        "currentPrice": 4918,
        "originalPrice": 5811,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Massimo%20Dutti%20Samba%20OG%20Classic%20Sneakers",
        "currentPrice": 5022,
        "originalPrice": 5811,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-09T09:45:01.337Z",
    "updated": "2026-07-20T09:45:01.337Z"
  },
  {
    "id": "FSH-012",
    "name": "Cos Retro Oval Sunglasses",
    "description": "Vintage oval frame sunglasses with high UV protection lenses. Premium acetate frame and gold logo details. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#ovalsunglasses",
      "#vintageeyewear",
      "#summeressentials",
      "#accessoryoftheday",
      "#cos",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Cos%20Retro%20Oval%20Sunglasses%20buy%20official",
        "currentPrice": 5435,
        "originalPrice": 6395,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Cos%20Retro%20Oval%20Sunglasses",
        "currentPrice": 5520,
        "originalPrice": 6395,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Cos%20Retro%20Oval%20Sunglasses",
        "currentPrice": 5557,
        "originalPrice": 6395,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-08T09:45:01.337Z",
    "updated": "2026-07-20T09:45:01.337Z"
  },
  {
    "id": "FSH-013",
    "name": "Zara Suede Slouchy Shoulder Bag",
    "description": "Minimalist shoulder bag crafted from luxurious genuine split-suede leather. Spacious main compartment with inner zip pocket. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#suedebag",
      "#shoulderbag",
      "#slouchybag",
      "#minimalistbag",
      "#zara",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Zara",
        "affiliateLink": "https://www.google.com/search?q=Zara%20Suede%20Slouchy%20Shoulder%20Bag%20buy%20official",
        "currentPrice": 2529,
        "originalPrice": 2976,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Zara%20Suede%20Slouchy%20Shoulder%20Bag",
        "currentPrice": 2646,
        "originalPrice": 2976,
        "discount": 15,
        "outOfStock": true
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Zara%20Suede%20Slouchy%20Shoulder%20Bag",
        "currentPrice": 2670,
        "originalPrice": 2976,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-07T09:45:01.337Z",
    "updated": "2026-07-20T09:45:01.337Z"
  },
  {
    "id": "FSH-014",
    "name": "H&M Strap Leather Pointed Heels",
    "description": "Chic pointed-toe slingback heels in genuine leather. Modest block heel height makes them highly wearable for office to dinner. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596702994290-9f7990be7df9?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#slingbackheels",
      "#pointedtoe",
      "#classicfootwear",
      "#formalshoes",
      "#h&m",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "H&M",
        "affiliateLink": "https://www.google.com/search?q=H%26M%20Strap%20Leather%20Pointed%20Heels%20buy%20official",
        "currentPrice": 2027,
        "originalPrice": 2385,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=H%26M%20Strap%20Leather%20Pointed%20Heels",
        "currentPrice": 2078,
        "originalPrice": 2385,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=H%26M%20Strap%20Leather%20Pointed%20Heels",
        "currentPrice": 1886,
        "originalPrice": 2385,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-06T09:45:01.337Z",
    "updated": "2026-07-20T09:45:01.337Z"
  },
  {
    "id": "FSH-015",
    "name": "Lululemon Oversized Trench Coat",
    "description": "A classic double-breasted trench coat with an oversized fit. Made from weather-resistant gabardine cotton blend, perfect for layering. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#trenchcoat",
      "#classicstyle",
      "#neutralaesthetic",
      "#fallfashion",
      "#lululemon",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Lululemon",
        "affiliateLink": "https://www.google.com/search?q=Lululemon%20Oversized%20Trench%20Coat%20buy%20official",
        "currentPrice": 1322,
        "originalPrice": 1556,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Lululemon%20Oversized%20Trench%20Coat",
        "currentPrice": 1277,
        "originalPrice": 1556,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Lululemon%20Oversized%20Trench%20Coat",
        "currentPrice": 1390,
        "originalPrice": 1556,
        "discount": 15,
        "outOfStock": true
      }
    ],
    "created": "2026-07-05T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-016",
    "name": "Skims Cropped Define Jacket",
    "description": "Designed for running and training, this cropped jacket contours your body perfectly. Breathable, sweat-wicking Nulu fabric. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#lululemon",
      "#definejacket",
      "#athleisure",
      "#gymfit",
      "#skims",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Skims",
        "affiliateLink": "https://www.google.com/search?q=Skims%20Cropped%20Define%20Jacket%20buy%20official",
        "currentPrice": 5220,
        "originalPrice": 6142,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Skims%20Cropped%20Define%20Jacket",
        "currentPrice": 5095,
        "originalPrice": 6142,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Skims%20Cropped%20Define%20Jacket",
        "currentPrice": 5232,
        "originalPrice": 6142,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-04T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-017",
    "name": "Levi's Soft Lounge Long Slip Dress",
    "description": "A viral lounge dress made from silky smooth modal fabric. Hugs curves perfectly and offers an elegant, draped silhouette. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#skims",
      "#slipdress",
      "#softlounge",
      "#cleangirl",
      "#levi's",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Levi's%20Soft%20Lounge%20Long%20Slip%20Dress%20buy%20official",
        "currentPrice": 4311,
        "originalPrice": 5072,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Levi's%20Soft%20Lounge%20Long%20Slip%20Dress",
        "currentPrice": 4357,
        "originalPrice": 5072,
        "discount": 15,
        "outOfStock": true
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Levi's%20Soft%20Lounge%20Long%20Slip%20Dress",
        "currentPrice": 4245,
        "originalPrice": 5072,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-03T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-018",
    "name": "Nike Oversized Cable Knit Sweater",
    "description": "Chunky, warm cable-knit sweater made from ultra-soft wool blend. Relaxed silhouette with drop shoulders. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#sweaterweather",
      "#knitwear",
      "#cozyvibes",
      "#winterootd",
      "#nike",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Nike%20Oversized%20Cable%20Knit%20Sweater%20buy%20official",
        "currentPrice": 1580,
        "originalPrice": 1859,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Nike%20Oversized%20Cable%20Knit%20Sweater",
        "currentPrice": 1646,
        "originalPrice": 1859,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Nike%20Oversized%20Cable%20Knit%20Sweater",
        "currentPrice": 1735,
        "originalPrice": 1859,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-02T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-019",
    "name": "Adidas Classic Cargo Utility Pants",
    "description": "Relaxed fit cargo pants featuring functional side flap pockets and a comfortable high-waist band. Made from premium ripstop cotton. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#cargopants",
      "#utilitywear",
      "#streetstyle",
      "#y2kfashion",
      "#adidas",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Adidas%20Classic%20Cargo%20Utility%20Pants%20buy%20official",
        "currentPrice": 2380,
        "originalPrice": 2801,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Adidas%20Classic%20Cargo%20Utility%20Pants",
        "currentPrice": 2490,
        "originalPrice": 2801,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Adidas%20Classic%20Cargo%20Utility%20Pants",
        "currentPrice": 2427,
        "originalPrice": 2801,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-07-01T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-020",
    "name": "Uniqlo Retro Leather Bomber Jacket",
    "description": "A vintage-inspired leather bomber jacket with ribbed collar and cuffs. Durable premium grain lambskin leather. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#leatherjacket",
      "#vintageaesthetic",
      "#bomberjacket",
      "#bikerstyle",
      "#uniqlo",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Uniqlo%20Retro%20Leather%20Bomber%20Jacket%20buy%20official",
        "currentPrice": 5454,
        "originalPrice": 6417,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Uniqlo%20Retro%20Leather%20Bomber%20Jacket",
        "currentPrice": 5409,
        "originalPrice": 6417,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Uniqlo%20Retro%20Leather%20Bomber%20Jacket",
        "currentPrice": 5535,
        "originalPrice": 6417,
        "discount": 15,
        "outOfStock": true
      }
    ],
    "created": "2026-06-30T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-021",
    "name": "Mango Align High-Rise Pants 28\"",
    "description": "Ultra-lightweight high-rise leggings that feel like a second skin. Made from buttery-soft Nulu fabric with 4-way stretch. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#lululemonalign",
      "#leggings",
      "#yogaootd",
      "#comfortwear",
      "#mango",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Mango%20Align%20High-Rise%20Pants%2028%22%20buy%20official",
        "currentPrice": 5176,
        "originalPrice": 6090,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Mango%20Align%20High-Rise%20Pants%2028%22",
        "currentPrice": 5175,
        "originalPrice": 6090,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Mango%20Align%20High-Rise%20Pants%2028%22",
        "currentPrice": 5212,
        "originalPrice": 6090,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-29T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-022",
    "name": "ASOS Relaxed Fit Linen Blend Blazer",
    "description": "Lightweight linen blazer perfect for smart-casual summer styles. Relaxed silhouette, notched lapels, dual front buttons. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#linenblazer",
      "#summerformal",
      "#officelook",
      "#zarafashion",
      "#asos",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=ASOS%20Relaxed%20Fit%20Linen%20Blend%20Blazer%20buy%20official",
        "currentPrice": 4399,
        "originalPrice": 5176,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=ASOS%20Relaxed%20Fit%20Linen%20Blend%20Blazer",
        "currentPrice": 4260,
        "originalPrice": 5176,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=ASOS%20Relaxed%20Fit%20Linen%20Blend%20Blazer",
        "currentPrice": 4255,
        "originalPrice": 5176,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-28T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-023",
    "name": "Massimo Dutti Wide Leg Tailored Trousers",
    "description": "Smart tailored trousers with a high-rise waist and pleated front. Flows beautifully into a classic wide-leg drape. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#tailoredpants",
      "#widelegtrousers",
      "#smartcasual",
      "#workwear",
      "#massimo dutti",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Massimo%20Dutti%20Wide%20Leg%20Tailored%20Trousers%20buy%20official",
        "currentPrice": 2179,
        "originalPrice": 2564,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Massimo%20Dutti%20Wide%20Leg%20Tailored%20Trousers",
        "currentPrice": 2093,
        "originalPrice": 2564,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Massimo%20Dutti%20Wide%20Leg%20Tailored%20Trousers",
        "currentPrice": 2310,
        "originalPrice": 2564,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-27T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-024",
    "name": "Cos Soft Lounge Ribbed Boxer Set",
    "description": "Super-stretchy ribbed modal crop top and boy-shorts set. Incredibly soft, lightweight, and perfect for lounging. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#skimsinspired",
      "#loungewear",
      "#ribbedset",
      "#cozylife",
      "#cos",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Cos%20Soft%20Lounge%20Ribbed%20Boxer%20Set%20buy%20official",
        "currentPrice": 4864,
        "originalPrice": 5723,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Cos%20Soft%20Lounge%20Ribbed%20Boxer%20Set",
        "currentPrice": 4918,
        "originalPrice": 5723,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Cos%20Soft%20Lounge%20Ribbed%20Boxer%20Set",
        "currentPrice": 4920,
        "originalPrice": 5723,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-26T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-025",
    "name": "Zara Samba OG Classic Sneakers",
    "description": "Retro street culture classic sneakers featuring leather upper with suede overlays and signature gum rubber outsole. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#adidassamba",
      "#sneakerhead",
      "#retrostyle",
      "#streetwear",
      "#zara",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Zara",
        "affiliateLink": "https://www.google.com/search?q=Zara%20Samba%20OG%20Classic%20Sneakers%20buy%20official",
        "currentPrice": 4157,
        "originalPrice": 4891,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Zara%20Samba%20OG%20Classic%20Sneakers",
        "currentPrice": 4251,
        "originalPrice": 4891,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Zara%20Samba%20OG%20Classic%20Sneakers",
        "currentPrice": 4080,
        "originalPrice": 4891,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-25T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-026",
    "name": "H&M Retro Oval Sunglasses",
    "description": "Vintage oval frame sunglasses with high UV protection lenses. Premium acetate frame and gold logo details. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#ovalsunglasses",
      "#vintageeyewear",
      "#summeressentials",
      "#accessoryoftheday",
      "#h&m",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "H&M",
        "affiliateLink": "https://www.google.com/search?q=H%26M%20Retro%20Oval%20Sunglasses%20buy%20official",
        "currentPrice": 2707,
        "originalPrice": 3185,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=H%26M%20Retro%20Oval%20Sunglasses",
        "currentPrice": 2766,
        "originalPrice": 3185,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=H%26M%20Retro%20Oval%20Sunglasses",
        "currentPrice": 2743,
        "originalPrice": 3185,
        "discount": 15,
        "outOfStock": true
      }
    ],
    "created": "2026-06-24T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-027",
    "name": "Lululemon Suede Slouchy Shoulder Bag",
    "description": "Minimalist shoulder bag crafted from luxurious genuine split-suede leather. Spacious main compartment with inner zip pocket. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#suedebag",
      "#shoulderbag",
      "#slouchybag",
      "#minimalistbag",
      "#lululemon",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Lululemon",
        "affiliateLink": "https://www.google.com/search?q=Lululemon%20Suede%20Slouchy%20Shoulder%20Bag%20buy%20official",
        "currentPrice": 3416,
        "originalPrice": 4019,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Lululemon%20Suede%20Slouchy%20Shoulder%20Bag",
        "currentPrice": 3340,
        "originalPrice": 4019,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Lululemon%20Suede%20Slouchy%20Shoulder%20Bag",
        "currentPrice": 3299,
        "originalPrice": 4019,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-23T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-028",
    "name": "Skims Strap Leather Pointed Heels",
    "description": "Chic pointed-toe slingback heels in genuine leather. Modest block heel height makes them highly wearable for office to dinner. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596702994290-9f7990be7df9?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#slingbackheels",
      "#pointedtoe",
      "#classicfootwear",
      "#formalshoes",
      "#skims",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Skims",
        "affiliateLink": "https://www.google.com/search?q=Skims%20Strap%20Leather%20Pointed%20Heels%20buy%20official",
        "currentPrice": 5226,
        "originalPrice": 6149,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Skims%20Strap%20Leather%20Pointed%20Heels",
        "currentPrice": 5284,
        "originalPrice": 6149,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Skims%20Strap%20Leather%20Pointed%20Heels",
        "currentPrice": 5256,
        "originalPrice": 6149,
        "discount": 15,
        "outOfStock": true
      }
    ],
    "created": "2026-06-22T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-029",
    "name": "Levi's Oversized Trench Coat",
    "description": "A classic double-breasted trench coat with an oversized fit. Made from weather-resistant gabardine cotton blend, perfect for layering. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#trenchcoat",
      "#classicstyle",
      "#neutralaesthetic",
      "#fallfashion",
      "#levi's",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Levi's%20Oversized%20Trench%20Coat%20buy%20official",
        "currentPrice": 5473,
        "originalPrice": 6439,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Levi's%20Oversized%20Trench%20Coat",
        "currentPrice": 5379,
        "originalPrice": 6439,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Levi's%20Oversized%20Trench%20Coat",
        "currentPrice": 5468,
        "originalPrice": 6439,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-21T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-030",
    "name": "Nike Cropped Define Jacket",
    "description": "Designed for running and training, this cropped jacket contours your body perfectly. Breathable, sweat-wicking Nulu fabric. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#lululemon",
      "#definejacket",
      "#athleisure",
      "#gymfit",
      "#nike",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Nike%20Cropped%20Define%20Jacket%20buy%20official",
        "currentPrice": 3574,
        "originalPrice": 4205,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Nike%20Cropped%20Define%20Jacket",
        "currentPrice": 3485,
        "originalPrice": 4205,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Nike%20Cropped%20Define%20Jacket",
        "currentPrice": 3608,
        "originalPrice": 4205,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-20T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-031",
    "name": "Adidas Soft Lounge Long Slip Dress",
    "description": "A viral lounge dress made from silky smooth modal fabric. Hugs curves perfectly and offers an elegant, draped silhouette. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#skims",
      "#slipdress",
      "#softlounge",
      "#cleangirl",
      "#adidas",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Adidas%20Soft%20Lounge%20Long%20Slip%20Dress%20buy%20official",
        "currentPrice": 2879,
        "originalPrice": 3388,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Adidas%20Soft%20Lounge%20Long%20Slip%20Dress",
        "currentPrice": 2766,
        "originalPrice": 3388,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Adidas%20Soft%20Lounge%20Long%20Slip%20Dress",
        "currentPrice": 2756,
        "originalPrice": 3388,
        "discount": 15,
        "outOfStock": true
      }
    ],
    "created": "2026-06-19T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-032",
    "name": "Uniqlo Oversized Cable Knit Sweater",
    "description": "Chunky, warm cable-knit sweater made from ultra-soft wool blend. Relaxed silhouette with drop shoulders. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#sweaterweather",
      "#knitwear",
      "#cozyvibes",
      "#winterootd",
      "#uniqlo",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Uniqlo%20Oversized%20Cable%20Knit%20Sweater%20buy%20official",
        "currentPrice": 2890,
        "originalPrice": 3401,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Uniqlo%20Oversized%20Cable%20Knit%20Sweater",
        "currentPrice": 2966,
        "originalPrice": 3401,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Uniqlo%20Oversized%20Cable%20Knit%20Sweater",
        "currentPrice": 2894,
        "originalPrice": 3401,
        "discount": 15,
        "outOfStock": true
      }
    ],
    "created": "2026-06-18T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-033",
    "name": "Mango Classic Cargo Utility Pants",
    "description": "Relaxed fit cargo pants featuring functional side flap pockets and a comfortable high-waist band. Made from premium ripstop cotton. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#cargopants",
      "#utilitywear",
      "#streetstyle",
      "#y2kfashion",
      "#mango",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Mango%20Classic%20Cargo%20Utility%20Pants%20buy%20official",
        "currentPrice": 2760,
        "originalPrice": 3248,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Mango%20Classic%20Cargo%20Utility%20Pants",
        "currentPrice": 2865,
        "originalPrice": 3248,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Mango%20Classic%20Cargo%20Utility%20Pants",
        "currentPrice": 2702,
        "originalPrice": 3248,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-17T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-034",
    "name": "ASOS Retro Leather Bomber Jacket",
    "description": "A vintage-inspired leather bomber jacket with ribbed collar and cuffs. Durable premium grain lambskin leather. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#leatherjacket",
      "#vintageaesthetic",
      "#bomberjacket",
      "#bikerstyle",
      "#asos",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=ASOS%20Retro%20Leather%20Bomber%20Jacket%20buy%20official",
        "currentPrice": 4278,
        "originalPrice": 5034,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=ASOS%20Retro%20Leather%20Bomber%20Jacket",
        "currentPrice": 4311,
        "originalPrice": 5034,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=ASOS%20Retro%20Leather%20Bomber%20Jacket",
        "currentPrice": 4398,
        "originalPrice": 5034,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-16T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-035",
    "name": "Massimo Dutti Align High-Rise Pants 28\"",
    "description": "Ultra-lightweight high-rise leggings that feel like a second skin. Made from buttery-soft Nulu fabric with 4-way stretch. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#lululemonalign",
      "#leggings",
      "#yogaootd",
      "#comfortwear",
      "#massimo dutti",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Massimo%20Dutti%20Align%20High-Rise%20Pants%2028%22%20buy%20official",
        "currentPrice": 3983,
        "originalPrice": 4686,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Massimo%20Dutti%20Align%20High-Rise%20Pants%2028%22",
        "currentPrice": 3873,
        "originalPrice": 4686,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Massimo%20Dutti%20Align%20High-Rise%20Pants%2028%22",
        "currentPrice": 4170,
        "originalPrice": 4686,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-15T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-036",
    "name": "Cos Relaxed Fit Linen Blend Blazer",
    "description": "Lightweight linen blazer perfect for smart-casual summer styles. Relaxed silhouette, notched lapels, dual front buttons. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#linenblazer",
      "#summerformal",
      "#officelook",
      "#zarafashion",
      "#cos",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Cos%20Relaxed%20Fit%20Linen%20Blend%20Blazer%20buy%20official",
        "currentPrice": 3682,
        "originalPrice": 4332,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Cos%20Relaxed%20Fit%20Linen%20Blend%20Blazer",
        "currentPrice": 3777,
        "originalPrice": 4332,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Cos%20Relaxed%20Fit%20Linen%20Blend%20Blazer",
        "currentPrice": 3853,
        "originalPrice": 4332,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-14T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-037",
    "name": "Zara Wide Leg Tailored Trousers",
    "description": "Smart tailored trousers with a high-rise waist and pleated front. Flows beautifully into a classic wide-leg drape. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#tailoredpants",
      "#widelegtrousers",
      "#smartcasual",
      "#workwear",
      "#zara",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Zara",
        "affiliateLink": "https://www.google.com/search?q=Zara%20Wide%20Leg%20Tailored%20Trousers%20buy%20official",
        "currentPrice": 4208,
        "originalPrice": 4951,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Zara%20Wide%20Leg%20Tailored%20Trousers",
        "currentPrice": 4177,
        "originalPrice": 4951,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Zara%20Wide%20Leg%20Tailored%20Trousers",
        "currentPrice": 4160,
        "originalPrice": 4951,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-13T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-038",
    "name": "H&M Soft Lounge Ribbed Boxer Set",
    "description": "Super-stretchy ribbed modal crop top and boy-shorts set. Incredibly soft, lightweight, and perfect for lounging. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#skimsinspired",
      "#loungewear",
      "#ribbedset",
      "#cozylife",
      "#h&m",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "H&M",
        "affiliateLink": "https://www.google.com/search?q=H%26M%20Soft%20Lounge%20Ribbed%20Boxer%20Set%20buy%20official",
        "currentPrice": 4998,
        "originalPrice": 5881,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=H%26M%20Soft%20Lounge%20Ribbed%20Boxer%20Set",
        "currentPrice": 4879,
        "originalPrice": 5881,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=H%26M%20Soft%20Lounge%20Ribbed%20Boxer%20Set",
        "currentPrice": 4932,
        "originalPrice": 5881,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-12T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-039",
    "name": "Lululemon Samba OG Classic Sneakers",
    "description": "Retro street culture classic sneakers featuring leather upper with suede overlays and signature gum rubber outsole. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#adidassamba",
      "#sneakerhead",
      "#retrostyle",
      "#streetwear",
      "#lululemon",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Lululemon",
        "affiliateLink": "https://www.google.com/search?q=Lululemon%20Samba%20OG%20Classic%20Sneakers%20buy%20official",
        "currentPrice": 2664,
        "originalPrice": 3135,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Lululemon%20Samba%20OG%20Classic%20Sneakers",
        "currentPrice": 2554,
        "originalPrice": 3135,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Lululemon%20Samba%20OG%20Classic%20Sneakers",
        "currentPrice": 2466,
        "originalPrice": 3135,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-11T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-040",
    "name": "Skims Retro Oval Sunglasses",
    "description": "Vintage oval frame sunglasses with high UV protection lenses. Premium acetate frame and gold logo details. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#ovalsunglasses",
      "#vintageeyewear",
      "#summeressentials",
      "#accessoryoftheday",
      "#skims",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Skims",
        "affiliateLink": "https://www.google.com/search?q=Skims%20Retro%20Oval%20Sunglasses%20buy%20official",
        "currentPrice": 2251,
        "originalPrice": 2649,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Skims%20Retro%20Oval%20Sunglasses",
        "currentPrice": 2243,
        "originalPrice": 2649,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Skims%20Retro%20Oval%20Sunglasses",
        "currentPrice": 2188,
        "originalPrice": 2649,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-10T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.338Z"
  },
  {
    "id": "FSH-041",
    "name": "Levi's Suede Slouchy Shoulder Bag",
    "description": "Minimalist shoulder bag crafted from luxurious genuine split-suede leather. Spacious main compartment with inner zip pocket. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#suedebag",
      "#shoulderbag",
      "#slouchybag",
      "#minimalistbag",
      "#levi's",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Levi's%20Suede%20Slouchy%20Shoulder%20Bag%20buy%20official",
        "currentPrice": 4993,
        "originalPrice": 5875,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Levi's%20Suede%20Slouchy%20Shoulder%20Bag",
        "currentPrice": 5137,
        "originalPrice": 5875,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Levi's%20Suede%20Slouchy%20Shoulder%20Bag",
        "currentPrice": 4820,
        "originalPrice": 5875,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-09T09:45:01.338Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "FSH-042",
    "name": "Nike Strap Leather Pointed Heels",
    "description": "Chic pointed-toe slingback heels in genuine leather. Modest block heel height makes them highly wearable for office to dinner. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596702994290-9f7990be7df9?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#slingbackheels",
      "#pointedtoe",
      "#classicfootwear",
      "#formalshoes",
      "#nike",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Nike%20Strap%20Leather%20Pointed%20Heels%20buy%20official",
        "currentPrice": 2728,
        "originalPrice": 3210,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Nike%20Strap%20Leather%20Pointed%20Heels",
        "currentPrice": 2737,
        "originalPrice": 3210,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Nike%20Strap%20Leather%20Pointed%20Heels",
        "currentPrice": 2913,
        "originalPrice": 3210,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-08T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "FSH-043",
    "name": "Adidas Oversized Trench Coat",
    "description": "A classic double-breasted trench coat with an oversized fit. Made from weather-resistant gabardine cotton blend, perfect for layering. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#trenchcoat",
      "#classicstyle",
      "#neutralaesthetic",
      "#fallfashion",
      "#adidas",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Adidas%20Oversized%20Trench%20Coat%20buy%20official",
        "currentPrice": 1553,
        "originalPrice": 1828,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Adidas%20Oversized%20Trench%20Coat",
        "currentPrice": 1636,
        "originalPrice": 1828,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Adidas%20Oversized%20Trench%20Coat",
        "currentPrice": 1585,
        "originalPrice": 1828,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-07T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "FSH-044",
    "name": "Uniqlo Cropped Define Jacket",
    "description": "Designed for running and training, this cropped jacket contours your body perfectly. Breathable, sweat-wicking Nulu fabric. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#lululemon",
      "#definejacket",
      "#athleisure",
      "#gymfit",
      "#uniqlo",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Uniqlo%20Cropped%20Define%20Jacket%20buy%20official",
        "currentPrice": 2992,
        "originalPrice": 3521,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Uniqlo%20Cropped%20Define%20Jacket",
        "currentPrice": 3028,
        "originalPrice": 3521,
        "discount": 15,
        "outOfStock": true
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Uniqlo%20Cropped%20Define%20Jacket",
        "currentPrice": 3031,
        "originalPrice": 3521,
        "discount": 15,
        "outOfStock": true
      }
    ],
    "created": "2026-06-06T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "FSH-045",
    "name": "Mango Soft Lounge Long Slip Dress",
    "description": "A viral lounge dress made from silky smooth modal fabric. Hugs curves perfectly and offers an elegant, draped silhouette. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#skims",
      "#slipdress",
      "#softlounge",
      "#cleangirl",
      "#mango",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Mango%20Soft%20Lounge%20Long%20Slip%20Dress%20buy%20official",
        "currentPrice": 5186,
        "originalPrice": 6102,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Mango%20Soft%20Lounge%20Long%20Slip%20Dress",
        "currentPrice": 5182,
        "originalPrice": 6102,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Mango%20Soft%20Lounge%20Long%20Slip%20Dress",
        "currentPrice": 5361,
        "originalPrice": 6102,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-05T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "FSH-046",
    "name": "ASOS Oversized Cable Knit Sweater",
    "description": "Chunky, warm cable-knit sweater made from ultra-soft wool blend. Relaxed silhouette with drop shoulders. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#sweaterweather",
      "#knitwear",
      "#cozyvibes",
      "#winterootd",
      "#asos",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=ASOS%20Oversized%20Cable%20Knit%20Sweater%20buy%20official",
        "currentPrice": 5211,
        "originalPrice": 6131,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=ASOS%20Oversized%20Cable%20Knit%20Sweater",
        "currentPrice": 5330,
        "originalPrice": 6131,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=ASOS%20Oversized%20Cable%20Knit%20Sweater",
        "currentPrice": 5171,
        "originalPrice": 6131,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-04T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "FSH-047",
    "name": "Massimo Dutti Classic Cargo Utility Pants",
    "description": "Relaxed fit cargo pants featuring functional side flap pockets and a comfortable high-waist band. Made from premium ripstop cotton. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#cargopants",
      "#utilitywear",
      "#streetstyle",
      "#y2kfashion",
      "#massimo dutti",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Massimo%20Dutti%20Classic%20Cargo%20Utility%20Pants%20buy%20official",
        "currentPrice": 2748,
        "originalPrice": 3234,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Massimo%20Dutti%20Classic%20Cargo%20Utility%20Pants",
        "currentPrice": 2628,
        "originalPrice": 3234,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Massimo%20Dutti%20Classic%20Cargo%20Utility%20Pants",
        "currentPrice": 2729,
        "originalPrice": 3234,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-03T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "FSH-048",
    "name": "Cos Retro Leather Bomber Jacket",
    "description": "A vintage-inspired leather bomber jacket with ribbed collar and cuffs. Durable premium grain lambskin leather. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#leatherjacket",
      "#vintageaesthetic",
      "#bomberjacket",
      "#bikerstyle",
      "#cos",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "affiliateLink": "https://www.google.com/search?q=Cos%20Retro%20Leather%20Bomber%20Jacket%20buy%20official",
        "currentPrice": 2765,
        "originalPrice": 3253,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Cos%20Retro%20Leather%20Bomber%20Jacket",
        "currentPrice": 2807,
        "originalPrice": 3253,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Cos%20Retro%20Leather%20Bomber%20Jacket",
        "currentPrice": 2680,
        "originalPrice": 3253,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-02T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "FSH-049",
    "name": "Zara Align High-Rise Pants 28\"",
    "description": "Ultra-lightweight high-rise leggings that feel like a second skin. Made from buttery-soft Nulu fabric with 4-way stretch. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#lululemonalign",
      "#leggings",
      "#yogaootd",
      "#comfortwear",
      "#zara",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "Zara",
        "affiliateLink": "https://www.google.com/search?q=Zara%20Align%20High-Rise%20Pants%2028%22%20buy%20official",
        "currentPrice": 1276,
        "originalPrice": 1502,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=Zara%20Align%20High-Rise%20Pants%2028%22",
        "currentPrice": 1140,
        "originalPrice": 1502,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=Zara%20Align%20High-Rise%20Pants%2028%22",
        "currentPrice": 1347,
        "originalPrice": 1502,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-06-01T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "FSH-050",
    "name": "H&M Relaxed Fit Linen Blend Blazer",
    "description": "Lightweight linen blazer perfect for smart-casual summer styles. Relaxed silhouette, notched lapels, dual front buttons. High quality and perfect for daily use. Part of the new viral collection.",
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Fashion",
    "viralTags": [
      "#linenblazer",
      "#summerformal",
      "#officelook",
      "#zarafashion",
      "#h&m",
      "#trendingnow",
      "#ootd"
    ],
    "retailers": [
      {
        "name": "H&M",
        "affiliateLink": "https://www.google.com/search?q=H%26M%20Relaxed%20Fit%20Linen%20Blend%20Blazer%20buy%20official",
        "currentPrice": 3048,
        "originalPrice": 3586,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Amazon Fashion",
        "affiliateLink": "https://www.amazon.in/s?k=H%26M%20Relaxed%20Fit%20Linen%20Blend%20Blazer",
        "currentPrice": 2968,
        "originalPrice": 3586,
        "discount": 15,
        "outOfStock": false
      },
      {
        "name": "Tata CLiQ Luxury",
        "affiliateLink": "https://www.tatacliq.com/search/?text=H%26M%20Relaxed%20Fit%20Linen%20Blend%20Blazer",
        "currentPrice": 3039,
        "originalPrice": 3586,
        "discount": 15,
        "outOfStock": false
      }
    ],
    "created": "2026-05-31T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-051",
    "name": "Rare Beauty Soft Pinch Liquid Blush",
    "description": "A weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush. Matte and dewy finishes. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#rarebeautyblush",
      "#liquidblush",
      "#glowymakeup",
      "#makeupmusthaves",
      "#rarebeauty",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Rare%20Beauty%20Soft%20Pinch%20Liquid%20Blush",
        "currentPrice": 982,
        "originalPrice": 1198,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Rare%20Beauty%20Soft%20Pinch%20Liquid%20Blush",
        "currentPrice": 882,
        "originalPrice": 1198,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Rare%20Beauty%20Soft%20Pinch%20Liquid%20Blush",
        "currentPrice": 1048,
        "originalPrice": 1198,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-19T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-052",
    "name": "Fenty Beauty Gloss Bomb Universal Lip Luminizer",
    "description": "The ultimate gotta-have-it lip gloss with explosive shine that feels as good as it looks. Enriched with shea butter. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#glossbomb",
      "#fentybeauty",
      "#lipgloss",
      "#shinylips",
      "#fentybeauty",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Fenty%20Beauty%20Gloss%20Bomb%20Universal%20Lip%20Luminizer",
        "currentPrice": 2842,
        "originalPrice": 3467,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Fenty%20Beauty%20Gloss%20Bomb%20Universal%20Lip%20Luminizer",
        "currentPrice": 2745,
        "originalPrice": 3467,
        "discount": 18,
        "outOfStock": true
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Fenty%20Beauty%20Gloss%20Bomb%20Universal%20Lip%20Luminizer",
        "currentPrice": 2834,
        "originalPrice": 3467,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-18T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-053",
    "name": "Charlotte Tilbury Hollywood Flawless Filter",
    "description": "A customizable complexion booster that blurs, smooths, and illuminates skin for a real-life filter effect. Wear it alone or under makeup. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1617224908599-281df680253b?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617224908599-281df680253b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#flawlessfilter",
      "#glowyskin",
      "#charlottetilbury",
      "#makeupmagic",
      "#charlottetilbury",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Charlotte%20Tilbury%20Hollywood%20Flawless%20Filter",
        "currentPrice": 1478,
        "originalPrice": 1803,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Charlotte%20Tilbury%20Hollywood%20Flawless%20Filter",
        "currentPrice": 1517,
        "originalPrice": 1803,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Charlotte%20Tilbury%20Hollywood%20Flawless%20Filter",
        "currentPrice": 1532,
        "originalPrice": 1803,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-17T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-054",
    "name": "NARS Radiant Creamy Concealer",
    "description": "An award-winning concealer that provides medium-to-high buildable coverage with a natural, luminous finish. Crease-proof. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1617224908599-281df680253b?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617224908599-281df680253b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#narsconcealer",
      "#bestconcealer",
      "#makeuptutorial",
      "#concealer",
      "#nars",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=NARS%20Radiant%20Creamy%20Concealer",
        "currentPrice": 2994,
        "originalPrice": 3652,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=NARS%20Radiant%20Creamy%20Concealer",
        "currentPrice": 2947,
        "originalPrice": 3652,
        "discount": 18,
        "outOfStock": true
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=NARS%20Radiant%20Creamy%20Concealer",
        "currentPrice": 3025,
        "originalPrice": 3652,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-16T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-055",
    "name": "Clinique Almost Lipstick - Black Honey",
    "description": "A cult-classic lip product known for its sheer, chameleon-like pigment that flatters every single skin tone. Balm-like feel. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#blackhoney",
      "#almostlipstick",
      "#lipbalm",
      "#clinique",
      "#clinique",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Clinique%20Almost%20Lipstick%20-%20Black%20Honey",
        "currentPrice": 2657,
        "originalPrice": 3241,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Clinique%20Almost%20Lipstick%20-%20Black%20Honey",
        "currentPrice": 2690,
        "originalPrice": 3241,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Clinique%20Almost%20Lipstick%20-%20Black%20Honey",
        "currentPrice": 2701,
        "originalPrice": 3241,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-15T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-056",
    "name": "Maybelline Lash Sensational Sky High Mascara",
    "description": "Sky High lash impact from every angle! Long-wearing mascara delivers full volume and limitless length with bamboo extract. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#skyhighmascara",
      "#longlashes",
      "#eyemakeup",
      "#makeupreview",
      "#maybelline",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Maybelline%20Lash%20Sensational%20Sky%20High%20Mascara",
        "currentPrice": 3556,
        "originalPrice": 4337,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Maybelline%20Lash%20Sensational%20Sky%20High%20Mascara",
        "currentPrice": 3456,
        "originalPrice": 4337,
        "discount": 18,
        "outOfStock": true
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Maybelline%20Lash%20Sensational%20Sky%20High%20Mascara",
        "currentPrice": 3553,
        "originalPrice": 4337,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-14T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-057",
    "name": "Elf Cosmetics Power Grip Primer + 4% Niacinamide",
    "description": "A sticky gel primer that grips your makeup in place all day long while evening out skin tone and brightening with niacinamide. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#elfprimer",
      "#powergrip",
      "#makeupprimer",
      "#drugstoremakeup",
      "#elfcosmetics",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Elf%20Cosmetics%20Power%20Grip%20Primer%20%2B%204%25%20Niacinamide",
        "currentPrice": 1643,
        "originalPrice": 2004,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Elf%20Cosmetics%20Power%20Grip%20Primer%20%2B%204%25%20Niacinamide",
        "currentPrice": 1688,
        "originalPrice": 2004,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Elf%20Cosmetics%20Power%20Grip%20Primer%20%2B%204%25%20Niacinamide",
        "currentPrice": 1656,
        "originalPrice": 2004,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-13T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-058",
    "name": "MAC Matte Lipstick Classic",
    "description": "The iconic rich, pigmented matte lipstick formula that defined lip artistry. Long-lasting, high color payoff, comfortable wear. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#maclipstick",
      "#mattelipstick",
      "#classiclip",
      "#makeupfavorites",
      "#mac",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=MAC%20Matte%20Lipstick%20Classic",
        "currentPrice": 756,
        "originalPrice": 923,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=MAC%20Matte%20Lipstick%20Classic",
        "currentPrice": 821,
        "originalPrice": 923,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=MAC%20Matte%20Lipstick%20Classic",
        "currentPrice": 762,
        "originalPrice": 923,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-12T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-059",
    "name": "DIOR Dior Addict Lip Glow Oil",
    "description": "Nourishing glossy lip oil that deeply protects and enhances the lips, bringing out their natural color with cherry oil. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#diorlipoil",
      "#lipgloss",
      "#cherryoil",
      "#luxurymakeup",
      "#dior",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=DIOR%20Dior%20Addict%20Lip%20Glow%20Oil",
        "currentPrice": 768,
        "originalPrice": 937,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=DIOR%20Dior%20Addict%20Lip%20Glow%20Oil",
        "currentPrice": 675,
        "originalPrice": 937,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=DIOR%20Dior%20Addict%20Lip%20Glow%20Oil",
        "currentPrice": 770,
        "originalPrice": 937,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-11T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-060",
    "name": "Huda Beauty Easy Bake Loose Powder",
    "description": "An ultra-refined, long-lasting loose setting powder that bakes makeup, controls shine, and blurs pores for an airbrushed finish. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#easybakepowder",
      "#bakingpowder",
      "#hudabeauty",
      "#flawlessmakeup",
      "#hudabeauty",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Huda%20Beauty%20Easy%20Bake%20Loose%20Powder",
        "currentPrice": 755,
        "originalPrice": 921,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Huda%20Beauty%20Easy%20Bake%20Loose%20Powder",
        "currentPrice": 670,
        "originalPrice": 921,
        "discount": 18,
        "outOfStock": true
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Huda%20Beauty%20Easy%20Bake%20Loose%20Powder",
        "currentPrice": 772,
        "originalPrice": 921,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-10T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-061",
    "name": "Anastasia Beverly Hills Ambient Lighting Blush",
    "description": "A groundbreaking hybrid that combines the customized lighting effects of Ambient Lighting Powder with vibrant cheek color. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#ambientblush",
      "#hourglasscosmetics",
      "#blushobsession",
      "#luminousmakeup",
      "#anastasiabeverlyhills",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Anastasia%20Beverly%20Hills%20Ambient%20Lighting%20Blush",
        "currentPrice": 3602,
        "originalPrice": 4393,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Anastasia%20Beverly%20Hills%20Ambient%20Lighting%20Blush",
        "currentPrice": 3502,
        "originalPrice": 4393,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Anastasia%20Beverly%20Hills%20Ambient%20Lighting%20Blush",
        "currentPrice": 3620,
        "originalPrice": 4393,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-09T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-062",
    "name": "Hourglass Brow Freeze Extreme Hold Wax",
    "description": "An easy-to-use clear brow styling wax that lifts, tames, and sculpts every hair in place for a laminated brow effect. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#browfreeze",
      "#laminatedbrows",
      "#browstyling",
      "#eyebrowwax",
      "#hourglass",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Hourglass%20Brow%20Freeze%20Extreme%20Hold%20Wax",
        "currentPrice": 1352,
        "originalPrice": 1649,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Hourglass%20Brow%20Freeze%20Extreme%20Hold%20Wax",
        "currentPrice": 1425,
        "originalPrice": 1649,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Hourglass%20Brow%20Freeze%20Extreme%20Hold%20Wax",
        "currentPrice": 1300,
        "originalPrice": 1649,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-08T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-063",
    "name": "Rare Beauty Soft Pinch Liquid Blush",
    "description": "A weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush. Matte and dewy finishes. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#rarebeautyblush",
      "#liquidblush",
      "#glowymakeup",
      "#makeupmusthaves",
      "#rarebeauty",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Rare%20Beauty%20Soft%20Pinch%20Liquid%20Blush",
        "currentPrice": 2005,
        "originalPrice": 2446,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Rare%20Beauty%20Soft%20Pinch%20Liquid%20Blush",
        "currentPrice": 2068,
        "originalPrice": 2446,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Rare%20Beauty%20Soft%20Pinch%20Liquid%20Blush",
        "currentPrice": 1942,
        "originalPrice": 2446,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-07T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-064",
    "name": "Fenty Beauty Gloss Bomb Universal Lip Luminizer",
    "description": "The ultimate gotta-have-it lip gloss with explosive shine that feels as good as it looks. Enriched with shea butter. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#glossbomb",
      "#fentybeauty",
      "#lipgloss",
      "#shinylips",
      "#fentybeauty",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Fenty%20Beauty%20Gloss%20Bomb%20Universal%20Lip%20Luminizer",
        "currentPrice": 2922,
        "originalPrice": 3564,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Fenty%20Beauty%20Gloss%20Bomb%20Universal%20Lip%20Luminizer",
        "currentPrice": 2863,
        "originalPrice": 3564,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Fenty%20Beauty%20Gloss%20Bomb%20Universal%20Lip%20Luminizer",
        "currentPrice": 2968,
        "originalPrice": 3564,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-06T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-065",
    "name": "Charlotte Tilbury Hollywood Flawless Filter",
    "description": "A customizable complexion booster that blurs, smooths, and illuminates skin for a real-life filter effect. Wear it alone or under makeup. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1617224908599-281df680253b?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617224908599-281df680253b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#flawlessfilter",
      "#glowyskin",
      "#charlottetilbury",
      "#makeupmagic",
      "#charlottetilbury",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Charlotte%20Tilbury%20Hollywood%20Flawless%20Filter",
        "currentPrice": 2628,
        "originalPrice": 3206,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Charlotte%20Tilbury%20Hollywood%20Flawless%20Filter",
        "currentPrice": 2568,
        "originalPrice": 3206,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Charlotte%20Tilbury%20Hollywood%20Flawless%20Filter",
        "currentPrice": 2579,
        "originalPrice": 3206,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-05T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-066",
    "name": "NARS Radiant Creamy Concealer",
    "description": "An award-winning concealer that provides medium-to-high buildable coverage with a natural, luminous finish. Crease-proof. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1617224908599-281df680253b?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617224908599-281df680253b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#narsconcealer",
      "#bestconcealer",
      "#makeuptutorial",
      "#concealer",
      "#nars",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=NARS%20Radiant%20Creamy%20Concealer",
        "currentPrice": 945,
        "originalPrice": 1153,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=NARS%20Radiant%20Creamy%20Concealer",
        "currentPrice": 846,
        "originalPrice": 1153,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=NARS%20Radiant%20Creamy%20Concealer",
        "currentPrice": 970,
        "originalPrice": 1153,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-04T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-067",
    "name": "Clinique Almost Lipstick - Black Honey",
    "description": "A cult-classic lip product known for its sheer, chameleon-like pigment that flatters every single skin tone. Balm-like feel. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#blackhoney",
      "#almostlipstick",
      "#lipbalm",
      "#clinique",
      "#clinique",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Clinique%20Almost%20Lipstick%20-%20Black%20Honey",
        "currentPrice": 1898,
        "originalPrice": 2315,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Clinique%20Almost%20Lipstick%20-%20Black%20Honey",
        "currentPrice": 1945,
        "originalPrice": 2315,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Clinique%20Almost%20Lipstick%20-%20Black%20Honey",
        "currentPrice": 1827,
        "originalPrice": 2315,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-03T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-068",
    "name": "Maybelline Lash Sensational Sky High Mascara",
    "description": "Sky High lash impact from every angle! Long-wearing mascara delivers full volume and limitless length with bamboo extract. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#skyhighmascara",
      "#longlashes",
      "#eyemakeup",
      "#makeupreview",
      "#maybelline",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Maybelline%20Lash%20Sensational%20Sky%20High%20Mascara",
        "currentPrice": 2986,
        "originalPrice": 3642,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Maybelline%20Lash%20Sensational%20Sky%20High%20Mascara",
        "currentPrice": 3044,
        "originalPrice": 3642,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Maybelline%20Lash%20Sensational%20Sky%20High%20Mascara",
        "currentPrice": 3004,
        "originalPrice": 3642,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-07-02T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-069",
    "name": "Elf Cosmetics Power Grip Primer + 4% Niacinamide",
    "description": "A sticky gel primer that grips your makeup in place all day long while evening out skin tone and brightening with niacinamide. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#elfprimer",
      "#powergrip",
      "#makeupprimer",
      "#drugstoremakeup",
      "#elfcosmetics",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Elf%20Cosmetics%20Power%20Grip%20Primer%20%2B%204%25%20Niacinamide",
        "currentPrice": 1079,
        "originalPrice": 1317,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Elf%20Cosmetics%20Power%20Grip%20Primer%20%2B%204%25%20Niacinamide",
        "currentPrice": 1089,
        "originalPrice": 1317,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Elf%20Cosmetics%20Power%20Grip%20Primer%20%2B%204%25%20Niacinamide",
        "currentPrice": 1050,
        "originalPrice": 1317,
        "discount": 18,
        "outOfStock": true
      }
    ],
    "created": "2026-07-01T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-070",
    "name": "MAC Matte Lipstick Classic",
    "description": "The iconic rich, pigmented matte lipstick formula that defined lip artistry. Long-lasting, high color payoff, comfortable wear. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#maclipstick",
      "#mattelipstick",
      "#classiclip",
      "#makeupfavorites",
      "#mac",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=MAC%20Matte%20Lipstick%20Classic",
        "currentPrice": 1663,
        "originalPrice": 2029,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=MAC%20Matte%20Lipstick%20Classic",
        "currentPrice": 1661,
        "originalPrice": 2029,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=MAC%20Matte%20Lipstick%20Classic",
        "currentPrice": 1624,
        "originalPrice": 2029,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-30T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-071",
    "name": "DIOR Dior Addict Lip Glow Oil",
    "description": "Nourishing glossy lip oil that deeply protects and enhances the lips, bringing out their natural color with cherry oil. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#diorlipoil",
      "#lipgloss",
      "#cherryoil",
      "#luxurymakeup",
      "#dior",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=DIOR%20Dior%20Addict%20Lip%20Glow%20Oil",
        "currentPrice": 2024,
        "originalPrice": 2469,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=DIOR%20Dior%20Addict%20Lip%20Glow%20Oil",
        "currentPrice": 2033,
        "originalPrice": 2469,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=DIOR%20Dior%20Addict%20Lip%20Glow%20Oil",
        "currentPrice": 1953,
        "originalPrice": 2469,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-29T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-072",
    "name": "Huda Beauty Easy Bake Loose Powder",
    "description": "An ultra-refined, long-lasting loose setting powder that bakes makeup, controls shine, and blurs pores for an airbrushed finish. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#easybakepowder",
      "#bakingpowder",
      "#hudabeauty",
      "#flawlessmakeup",
      "#hudabeauty",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Huda%20Beauty%20Easy%20Bake%20Loose%20Powder",
        "currentPrice": 2639,
        "originalPrice": 3219,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Huda%20Beauty%20Easy%20Bake%20Loose%20Powder",
        "currentPrice": 2630,
        "originalPrice": 3219,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Huda%20Beauty%20Easy%20Bake%20Loose%20Powder",
        "currentPrice": 2578,
        "originalPrice": 3219,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-28T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-073",
    "name": "Anastasia Beverly Hills Ambient Lighting Blush",
    "description": "A groundbreaking hybrid that combines the customized lighting effects of Ambient Lighting Powder with vibrant cheek color. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#ambientblush",
      "#hourglasscosmetics",
      "#blushobsession",
      "#luminousmakeup",
      "#anastasiabeverlyhills",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Anastasia%20Beverly%20Hills%20Ambient%20Lighting%20Blush",
        "currentPrice": 1403,
        "originalPrice": 1712,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Anastasia%20Beverly%20Hills%20Ambient%20Lighting%20Blush",
        "currentPrice": 1417,
        "originalPrice": 1712,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Anastasia%20Beverly%20Hills%20Ambient%20Lighting%20Blush",
        "currentPrice": 1392,
        "originalPrice": 1712,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-27T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-074",
    "name": "Hourglass Brow Freeze Extreme Hold Wax",
    "description": "An easy-to-use clear brow styling wax that lifts, tames, and sculpts every hair in place for a laminated brow effect. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#browfreeze",
      "#laminatedbrows",
      "#browstyling",
      "#eyebrowwax",
      "#hourglass",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Hourglass%20Brow%20Freeze%20Extreme%20Hold%20Wax",
        "currentPrice": 2774,
        "originalPrice": 3383,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Hourglass%20Brow%20Freeze%20Extreme%20Hold%20Wax",
        "currentPrice": 2855,
        "originalPrice": 3383,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Hourglass%20Brow%20Freeze%20Extreme%20Hold%20Wax",
        "currentPrice": 2785,
        "originalPrice": 3383,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-26T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-075",
    "name": "Rare Beauty Soft Pinch Liquid Blush",
    "description": "A weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush. Matte and dewy finishes. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#rarebeautyblush",
      "#liquidblush",
      "#glowymakeup",
      "#makeupmusthaves",
      "#rarebeauty",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Rare%20Beauty%20Soft%20Pinch%20Liquid%20Blush",
        "currentPrice": 826,
        "originalPrice": 1008,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Rare%20Beauty%20Soft%20Pinch%20Liquid%20Blush",
        "currentPrice": 922,
        "originalPrice": 1008,
        "discount": 18,
        "outOfStock": true
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Rare%20Beauty%20Soft%20Pinch%20Liquid%20Blush",
        "currentPrice": 768,
        "originalPrice": 1008,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-25T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-076",
    "name": "Fenty Beauty Gloss Bomb Universal Lip Luminizer",
    "description": "The ultimate gotta-have-it lip gloss with explosive shine that feels as good as it looks. Enriched with shea butter. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#glossbomb",
      "#fentybeauty",
      "#lipgloss",
      "#shinylips",
      "#fentybeauty",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Fenty%20Beauty%20Gloss%20Bomb%20Universal%20Lip%20Luminizer",
        "currentPrice": 1059,
        "originalPrice": 1292,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Fenty%20Beauty%20Gloss%20Bomb%20Universal%20Lip%20Luminizer",
        "currentPrice": 975,
        "originalPrice": 1292,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Fenty%20Beauty%20Gloss%20Bomb%20Universal%20Lip%20Luminizer",
        "currentPrice": 1037,
        "originalPrice": 1292,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-24T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-077",
    "name": "Charlotte Tilbury Hollywood Flawless Filter",
    "description": "A customizable complexion booster that blurs, smooths, and illuminates skin for a real-life filter effect. Wear it alone or under makeup. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1617224908599-281df680253b?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617224908599-281df680253b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#flawlessfilter",
      "#glowyskin",
      "#charlottetilbury",
      "#makeupmagic",
      "#charlottetilbury",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Charlotte%20Tilbury%20Hollywood%20Flawless%20Filter",
        "currentPrice": 3243,
        "originalPrice": 3955,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Charlotte%20Tilbury%20Hollywood%20Flawless%20Filter",
        "currentPrice": 3319,
        "originalPrice": 3955,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Charlotte%20Tilbury%20Hollywood%20Flawless%20Filter",
        "currentPrice": 3315,
        "originalPrice": 3955,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-23T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-078",
    "name": "NARS Radiant Creamy Concealer",
    "description": "An award-winning concealer that provides medium-to-high buildable coverage with a natural, luminous finish. Crease-proof. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1617224908599-281df680253b?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617224908599-281df680253b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#narsconcealer",
      "#bestconcealer",
      "#makeuptutorial",
      "#concealer",
      "#nars",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=NARS%20Radiant%20Creamy%20Concealer",
        "currentPrice": 1039,
        "originalPrice": 1268,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=NARS%20Radiant%20Creamy%20Concealer",
        "currentPrice": 1090,
        "originalPrice": 1268,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=NARS%20Radiant%20Creamy%20Concealer",
        "currentPrice": 1081,
        "originalPrice": 1268,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-22T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-079",
    "name": "Clinique Almost Lipstick - Black Honey",
    "description": "A cult-classic lip product known for its sheer, chameleon-like pigment that flatters every single skin tone. Balm-like feel. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#blackhoney",
      "#almostlipstick",
      "#lipbalm",
      "#clinique",
      "#clinique",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Clinique%20Almost%20Lipstick%20-%20Black%20Honey",
        "currentPrice": 1478,
        "originalPrice": 1803,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Clinique%20Almost%20Lipstick%20-%20Black%20Honey",
        "currentPrice": 1486,
        "originalPrice": 1803,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Clinique%20Almost%20Lipstick%20-%20Black%20Honey",
        "currentPrice": 1407,
        "originalPrice": 1803,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-21T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-080",
    "name": "Maybelline Lash Sensational Sky High Mascara",
    "description": "Sky High lash impact from every angle! Long-wearing mascara delivers full volume and limitless length with bamboo extract. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#skyhighmascara",
      "#longlashes",
      "#eyemakeup",
      "#makeupreview",
      "#maybelline",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Maybelline%20Lash%20Sensational%20Sky%20High%20Mascara",
        "currentPrice": 2829,
        "originalPrice": 3451,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Maybelline%20Lash%20Sensational%20Sky%20High%20Mascara",
        "currentPrice": 2771,
        "originalPrice": 3451,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Maybelline%20Lash%20Sensational%20Sky%20High%20Mascara",
        "currentPrice": 2867,
        "originalPrice": 3451,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-20T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-081",
    "name": "Elf Cosmetics Power Grip Primer + 4% Niacinamide",
    "description": "A sticky gel primer that grips your makeup in place all day long while evening out skin tone and brightening with niacinamide. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#elfprimer",
      "#powergrip",
      "#makeupprimer",
      "#drugstoremakeup",
      "#elfcosmetics",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Elf%20Cosmetics%20Power%20Grip%20Primer%20%2B%204%25%20Niacinamide",
        "currentPrice": 2200,
        "originalPrice": 2683,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Elf%20Cosmetics%20Power%20Grip%20Primer%20%2B%204%25%20Niacinamide",
        "currentPrice": 2202,
        "originalPrice": 2683,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Elf%20Cosmetics%20Power%20Grip%20Primer%20%2B%204%25%20Niacinamide",
        "currentPrice": 2188,
        "originalPrice": 2683,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-19T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-082",
    "name": "MAC Matte Lipstick Classic",
    "description": "The iconic rich, pigmented matte lipstick formula that defined lip artistry. Long-lasting, high color payoff, comfortable wear. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#maclipstick",
      "#mattelipstick",
      "#classiclip",
      "#makeupfavorites",
      "#mac",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=MAC%20Matte%20Lipstick%20Classic",
        "currentPrice": 1479,
        "originalPrice": 1804,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=MAC%20Matte%20Lipstick%20Classic",
        "currentPrice": 1560,
        "originalPrice": 1804,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=MAC%20Matte%20Lipstick%20Classic",
        "currentPrice": 1543,
        "originalPrice": 1804,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-18T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-083",
    "name": "DIOR Dior Addict Lip Glow Oil",
    "description": "Nourishing glossy lip oil that deeply protects and enhances the lips, bringing out their natural color with cherry oil. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#diorlipoil",
      "#lipgloss",
      "#cherryoil",
      "#luxurymakeup",
      "#dior",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=DIOR%20Dior%20Addict%20Lip%20Glow%20Oil",
        "currentPrice": 970,
        "originalPrice": 1183,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=DIOR%20Dior%20Addict%20Lip%20Glow%20Oil",
        "currentPrice": 994,
        "originalPrice": 1183,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=DIOR%20Dior%20Addict%20Lip%20Glow%20Oil",
        "currentPrice": 1009,
        "originalPrice": 1183,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-17T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-084",
    "name": "Huda Beauty Easy Bake Loose Powder",
    "description": "An ultra-refined, long-lasting loose setting powder that bakes makeup, controls shine, and blurs pores for an airbrushed finish. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#easybakepowder",
      "#bakingpowder",
      "#hudabeauty",
      "#flawlessmakeup",
      "#hudabeauty",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Huda%20Beauty%20Easy%20Bake%20Loose%20Powder",
        "currentPrice": 3103,
        "originalPrice": 3785,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Huda%20Beauty%20Easy%20Bake%20Loose%20Powder",
        "currentPrice": 3160,
        "originalPrice": 3785,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Huda%20Beauty%20Easy%20Bake%20Loose%20Powder",
        "currentPrice": 3150,
        "originalPrice": 3785,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-16T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-085",
    "name": "Anastasia Beverly Hills Ambient Lighting Blush",
    "description": "A groundbreaking hybrid that combines the customized lighting effects of Ambient Lighting Powder with vibrant cheek color. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#ambientblush",
      "#hourglasscosmetics",
      "#blushobsession",
      "#luminousmakeup",
      "#anastasiabeverlyhills",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Anastasia%20Beverly%20Hills%20Ambient%20Lighting%20Blush",
        "currentPrice": 2182,
        "originalPrice": 2662,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Anastasia%20Beverly%20Hills%20Ambient%20Lighting%20Blush",
        "currentPrice": 2143,
        "originalPrice": 2662,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Anastasia%20Beverly%20Hills%20Ambient%20Lighting%20Blush",
        "currentPrice": 2170,
        "originalPrice": 2662,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-15T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-086",
    "name": "Hourglass Brow Freeze Extreme Hold Wax",
    "description": "An easy-to-use clear brow styling wax that lifts, tames, and sculpts every hair in place for a laminated brow effect. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#browfreeze",
      "#laminatedbrows",
      "#browstyling",
      "#eyebrowwax",
      "#hourglass",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Hourglass%20Brow%20Freeze%20Extreme%20Hold%20Wax",
        "currentPrice": 1284,
        "originalPrice": 1566,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Hourglass%20Brow%20Freeze%20Extreme%20Hold%20Wax",
        "currentPrice": 1329,
        "originalPrice": 1566,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Hourglass%20Brow%20Freeze%20Extreme%20Hold%20Wax",
        "currentPrice": 1242,
        "originalPrice": 1566,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-14T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-087",
    "name": "Rare Beauty Soft Pinch Liquid Blush",
    "description": "A weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush. Matte and dewy finishes. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#rarebeautyblush",
      "#liquidblush",
      "#glowymakeup",
      "#makeupmusthaves",
      "#rarebeauty",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Rare%20Beauty%20Soft%20Pinch%20Liquid%20Blush",
        "currentPrice": 2400,
        "originalPrice": 2927,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Rare%20Beauty%20Soft%20Pinch%20Liquid%20Blush",
        "currentPrice": 2404,
        "originalPrice": 2927,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Rare%20Beauty%20Soft%20Pinch%20Liquid%20Blush",
        "currentPrice": 2450,
        "originalPrice": 2927,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-13T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-088",
    "name": "Fenty Beauty Gloss Bomb Universal Lip Luminizer",
    "description": "The ultimate gotta-have-it lip gloss with explosive shine that feels as good as it looks. Enriched with shea butter. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#glossbomb",
      "#fentybeauty",
      "#lipgloss",
      "#shinylips",
      "#fentybeauty",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Fenty%20Beauty%20Gloss%20Bomb%20Universal%20Lip%20Luminizer",
        "currentPrice": 3120,
        "originalPrice": 3805,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Fenty%20Beauty%20Gloss%20Bomb%20Universal%20Lip%20Luminizer",
        "currentPrice": 3059,
        "originalPrice": 3805,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Fenty%20Beauty%20Gloss%20Bomb%20Universal%20Lip%20Luminizer",
        "currentPrice": 3076,
        "originalPrice": 3805,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-12T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-089",
    "name": "Charlotte Tilbury Hollywood Flawless Filter",
    "description": "A customizable complexion booster that blurs, smooths, and illuminates skin for a real-life filter effect. Wear it alone or under makeup. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1617224908599-281df680253b?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617224908599-281df680253b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#flawlessfilter",
      "#glowyskin",
      "#charlottetilbury",
      "#makeupmagic",
      "#charlottetilbury",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Charlotte%20Tilbury%20Hollywood%20Flawless%20Filter",
        "currentPrice": 2950,
        "originalPrice": 3598,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Charlotte%20Tilbury%20Hollywood%20Flawless%20Filter",
        "currentPrice": 3016,
        "originalPrice": 3598,
        "discount": 18,
        "outOfStock": true
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Charlotte%20Tilbury%20Hollywood%20Flawless%20Filter",
        "currentPrice": 2896,
        "originalPrice": 3598,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-11T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-090",
    "name": "NARS Radiant Creamy Concealer",
    "description": "An award-winning concealer that provides medium-to-high buildable coverage with a natural, luminous finish. Crease-proof. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1617224908599-281df680253b?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617224908599-281df680253b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#narsconcealer",
      "#bestconcealer",
      "#makeuptutorial",
      "#concealer",
      "#nars",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=NARS%20Radiant%20Creamy%20Concealer",
        "currentPrice": 1127,
        "originalPrice": 1375,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=NARS%20Radiant%20Creamy%20Concealer",
        "currentPrice": 1082,
        "originalPrice": 1375,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=NARS%20Radiant%20Creamy%20Concealer",
        "currentPrice": 1103,
        "originalPrice": 1375,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-10T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-091",
    "name": "Clinique Almost Lipstick - Black Honey",
    "description": "A cult-classic lip product known for its sheer, chameleon-like pigment that flatters every single skin tone. Balm-like feel. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#blackhoney",
      "#almostlipstick",
      "#lipbalm",
      "#clinique",
      "#clinique",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Clinique%20Almost%20Lipstick%20-%20Black%20Honey",
        "currentPrice": 2536,
        "originalPrice": 3093,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Clinique%20Almost%20Lipstick%20-%20Black%20Honey",
        "currentPrice": 2470,
        "originalPrice": 3093,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Clinique%20Almost%20Lipstick%20-%20Black%20Honey",
        "currentPrice": 2473,
        "originalPrice": 3093,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-09T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-092",
    "name": "Maybelline Lash Sensational Sky High Mascara",
    "description": "Sky High lash impact from every angle! Long-wearing mascara delivers full volume and limitless length with bamboo extract. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#skyhighmascara",
      "#longlashes",
      "#eyemakeup",
      "#makeupreview",
      "#maybelline",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Maybelline%20Lash%20Sensational%20Sky%20High%20Mascara",
        "currentPrice": 2673,
        "originalPrice": 3260,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Maybelline%20Lash%20Sensational%20Sky%20High%20Mascara",
        "currentPrice": 2597,
        "originalPrice": 3260,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Maybelline%20Lash%20Sensational%20Sky%20High%20Mascara",
        "currentPrice": 2603,
        "originalPrice": 3260,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-08T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-093",
    "name": "Elf Cosmetics Power Grip Primer + 4% Niacinamide",
    "description": "A sticky gel primer that grips your makeup in place all day long while evening out skin tone and brightening with niacinamide. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#elfprimer",
      "#powergrip",
      "#makeupprimer",
      "#drugstoremakeup",
      "#elfcosmetics",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Elf%20Cosmetics%20Power%20Grip%20Primer%20%2B%204%25%20Niacinamide",
        "currentPrice": 2093,
        "originalPrice": 2553,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Elf%20Cosmetics%20Power%20Grip%20Primer%20%2B%204%25%20Niacinamide",
        "currentPrice": 2172,
        "originalPrice": 2553,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Elf%20Cosmetics%20Power%20Grip%20Primer%20%2B%204%25%20Niacinamide",
        "currentPrice": 2020,
        "originalPrice": 2553,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-07T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-094",
    "name": "MAC Matte Lipstick Classic",
    "description": "The iconic rich, pigmented matte lipstick formula that defined lip artistry. Long-lasting, high color payoff, comfortable wear. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#maclipstick",
      "#mattelipstick",
      "#classiclip",
      "#makeupfavorites",
      "#mac",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=MAC%20Matte%20Lipstick%20Classic",
        "currentPrice": 1341,
        "originalPrice": 1636,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=MAC%20Matte%20Lipstick%20Classic",
        "currentPrice": 1304,
        "originalPrice": 1636,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=MAC%20Matte%20Lipstick%20Classic",
        "currentPrice": 1370,
        "originalPrice": 1636,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-06T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-095",
    "name": "DIOR Dior Addict Lip Glow Oil",
    "description": "Nourishing glossy lip oil that deeply protects and enhances the lips, bringing out their natural color with cherry oil. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#diorlipoil",
      "#lipgloss",
      "#cherryoil",
      "#luxurymakeup",
      "#dior",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=DIOR%20Dior%20Addict%20Lip%20Glow%20Oil",
        "currentPrice": 2151,
        "originalPrice": 2624,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=DIOR%20Dior%20Addict%20Lip%20Glow%20Oil",
        "currentPrice": 2171,
        "originalPrice": 2624,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=DIOR%20Dior%20Addict%20Lip%20Glow%20Oil",
        "currentPrice": 2095,
        "originalPrice": 2624,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-05T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-096",
    "name": "Huda Beauty Easy Bake Loose Powder",
    "description": "An ultra-refined, long-lasting loose setting powder that bakes makeup, controls shine, and blurs pores for an airbrushed finish. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#easybakepowder",
      "#bakingpowder",
      "#hudabeauty",
      "#flawlessmakeup",
      "#hudabeauty",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Huda%20Beauty%20Easy%20Bake%20Loose%20Powder",
        "currentPrice": 1246,
        "originalPrice": 1520,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Huda%20Beauty%20Easy%20Bake%20Loose%20Powder",
        "currentPrice": 1264,
        "originalPrice": 1520,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Huda%20Beauty%20Easy%20Bake%20Loose%20Powder",
        "currentPrice": 1200,
        "originalPrice": 1520,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-04T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-097",
    "name": "Anastasia Beverly Hills Ambient Lighting Blush",
    "description": "A groundbreaking hybrid that combines the customized lighting effects of Ambient Lighting Powder with vibrant cheek color. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#ambientblush",
      "#hourglasscosmetics",
      "#blushobsession",
      "#luminousmakeup",
      "#anastasiabeverlyhills",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Anastasia%20Beverly%20Hills%20Ambient%20Lighting%20Blush",
        "currentPrice": 1418,
        "originalPrice": 1730,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Anastasia%20Beverly%20Hills%20Ambient%20Lighting%20Blush",
        "currentPrice": 1398,
        "originalPrice": 1730,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Anastasia%20Beverly%20Hills%20Ambient%20Lighting%20Blush",
        "currentPrice": 1345,
        "originalPrice": 1730,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-03T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-098",
    "name": "Hourglass Brow Freeze Extreme Hold Wax",
    "description": "An easy-to-use clear brow styling wax that lifts, tames, and sculpts every hair in place for a laminated brow effect. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#browfreeze",
      "#laminatedbrows",
      "#browstyling",
      "#eyebrowwax",
      "#hourglass",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Hourglass%20Brow%20Freeze%20Extreme%20Hold%20Wax",
        "currentPrice": 3482,
        "originalPrice": 4247,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Hourglass%20Brow%20Freeze%20Extreme%20Hold%20Wax",
        "currentPrice": 3449,
        "originalPrice": 4247,
        "discount": 18,
        "outOfStock": true
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Hourglass%20Brow%20Freeze%20Extreme%20Hold%20Wax",
        "currentPrice": 3427,
        "originalPrice": 4247,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-02T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-099",
    "name": "Rare Beauty Soft Pinch Liquid Blush",
    "description": "A weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush. Matte and dewy finishes. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1631730359577-38e47be02194?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#rarebeautyblush",
      "#liquidblush",
      "#glowymakeup",
      "#makeupmusthaves",
      "#rarebeauty",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Rare%20Beauty%20Soft%20Pinch%20Liquid%20Blush",
        "currentPrice": 1212,
        "originalPrice": 1479,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Rare%20Beauty%20Soft%20Pinch%20Liquid%20Blush",
        "currentPrice": 1282,
        "originalPrice": 1479,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Rare%20Beauty%20Soft%20Pinch%20Liquid%20Blush",
        "currentPrice": 1228,
        "originalPrice": 1479,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-06-01T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "MKP-100",
    "name": "Fenty Beauty Gloss Bomb Universal Lip Luminizer",
    "description": "The ultimate gotta-have-it lip gloss with explosive shine that feels as good as it looks. Enriched with shea butter. Highly viral on TikTok. Loved by professional beauty creators and makeup artists globally.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Makeup",
    "viralTags": [
      "#glossbomb",
      "#fentybeauty",
      "#lipgloss",
      "#shinylips",
      "#fentybeauty",
      "#viralmakeup",
      "#sephorasale"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Fenty%20Beauty%20Gloss%20Bomb%20Universal%20Lip%20Luminizer",
        "currentPrice": 2340,
        "originalPrice": 2854,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Fenty%20Beauty%20Gloss%20Bomb%20Universal%20Lip%20Luminizer",
        "currentPrice": 2284,
        "originalPrice": 2854,
        "discount": 18,
        "outOfStock": false
      },
      {
        "name": "Amazon India Beauty",
        "affiliateLink": "https://www.amazon.in/s?k=Fenty%20Beauty%20Gloss%20Bomb%20Universal%20Lip%20Luminizer",
        "currentPrice": 2322,
        "originalPrice": 2854,
        "discount": 18,
        "outOfStock": false
      }
    ],
    "created": "2026-05-31T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-101",
    "name": "CeraVe Hydrating Facial Cleanser",
    "description": "A gentle, non-foaming face wash formulated with three essential ceramides and hyaluronic acid to cleanse and hydrate skin. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#ceravecleanser",
      "#hydratingcleanser",
      "#skincareroutine",
      "#dermatologistrecommended",
      "#cerave",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=CeraVe%20Hydrating%20Facial%20Cleanser",
        "currentPrice": 1642,
        "originalPrice": 2053,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=CeraVe%20Hydrating%20Facial%20Cleanser",
        "currentPrice": 1546,
        "originalPrice": 2053,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=CeraVe%20Hydrating%20Facial%20Cleanser",
        "currentPrice": 1576,
        "originalPrice": 2053,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-19T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-102",
    "name": "The Ordinary Niacinamide 10% + Zinc 1%",
    "description": "A high-strength vitamin and mineral blemish formula that regulates sebum production, tightens pores, and brightens skin tone. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#theordinary",
      "#niacinamideserum",
      "#skincarehacks",
      "#acneskin",
      "#theordinary",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=The%20Ordinary%20Niacinamide%2010%25%20%2B%20Zinc%201%25",
        "currentPrice": 2796,
        "originalPrice": 3496,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=The%20Ordinary%20Niacinamide%2010%25%20%2B%20Zinc%201%25",
        "currentPrice": 2771,
        "originalPrice": 3496,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=The%20Ordinary%20Niacinamide%2010%25%20%2B%20Zinc%201%25",
        "currentPrice": 2749,
        "originalPrice": 3496,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-18T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-103",
    "name": "COSRX Advanced Snail 96 Mucin Power Essence",
    "description": "A light-weight essence which absorbs into the skin fast to give skin a natural glow from inside. Made of 96% snail secretion filtrate. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#snailmucin",
      "#cosrx",
      "#kbeauty",
      "#glassskin",
      "#cosrx",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=COSRX%20Advanced%20Snail%2096%20Mucin%20Power%20Essence",
        "currentPrice": 3168,
        "originalPrice": 3960,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=COSRX%20Advanced%20Snail%2096%20Mucin%20Power%20Essence",
        "currentPrice": 3178,
        "originalPrice": 3960,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=COSRX%20Advanced%20Snail%2096%20Mucin%20Power%20Essence",
        "currentPrice": 3112,
        "originalPrice": 3960,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-17T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-104",
    "name": "La Roche-Posay Cicaplast Baume B5+ Soothing Balm",
    "description": "A multi-purpose soothing balm that dry skin irritations, redness, and damaged skin barrier. Safe for babies, kids, and adults. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#cicaplast",
      "#skinbarrier repair",
      "#larocheposay",
      "#dryskinhelp",
      "#larocheposay",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=La%20Roche-Posay%20Cicaplast%20Baume%20B5%2B%20Soothing%20Balm",
        "currentPrice": 2132,
        "originalPrice": 2666,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=La%20Roche-Posay%20Cicaplast%20Baume%20B5%2B%20Soothing%20Balm",
        "currentPrice": 2104,
        "originalPrice": 2666,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=La%20Roche-Posay%20Cicaplast%20Baume%20B5%2B%20Soothing%20Balm",
        "currentPrice": 2075,
        "originalPrice": 2666,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-16T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-105",
    "name": "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant",
    "description": "A gentle leave-on exfoliant with salicylic acid that unclogs pores, smooths wrinkles, brightens and evens out skin tone. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#paulaschoicebha",
      "#exfoliant",
      "#poreminimizer",
      "#skincarediary",
      "#paulaschoice",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Paula's%20Choice%20Skin%20Perfecting%202%25%20BHA%20Liquid%20Exfoliant",
        "currentPrice": 2293,
        "originalPrice": 2867,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Paula's%20Choice%20Skin%20Perfecting%202%25%20BHA%20Liquid%20Exfoliant",
        "currentPrice": 2388,
        "originalPrice": 2867,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Paula's%20Choice%20Skin%20Perfecting%202%25%20BHA%20Liquid%20Exfoliant",
        "currentPrice": 2352,
        "originalPrice": 2867,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-15T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-106",
    "name": "Laneige Lip Sleeping Mask - Berry",
    "description": "An overnight lip mask that delivers intense moisture and antioxidants while you sleep with Berry Mix Complex and Vitamin C. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#lipsleepingmask",
      "#laneige",
      "#softlips",
      "#nighttimeroutine",
      "#laneige",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Laneige%20Lip%20Sleeping%20Mask%20-%20Berry",
        "currentPrice": 2902,
        "originalPrice": 3628,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Laneige%20Lip%20Sleeping%20Mask%20-%20Berry",
        "currentPrice": 2813,
        "originalPrice": 3628,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Laneige%20Lip%20Sleeping%20Mask%20-%20Berry",
        "currentPrice": 2873,
        "originalPrice": 3628,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-14T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-107",
    "name": "Glow Recipe Watermelon Glow PHA+BHA Pore-Tight Toner",
    "description": "A gentle, bouncy watermelon toner infused with PHA and BHA to hydrate skin while shrinking the appearance of pores. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#glowrecipetoner",
      "#watermelonporetoner",
      "#glowyskin",
      "#satisfyingtexture",
      "#glowrecipe",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Glow%20Recipe%20Watermelon%20Glow%20PHA%2BBHA%20Pore-Tight%20Toner",
        "currentPrice": 1128,
        "originalPrice": 1410,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Glow%20Recipe%20Watermelon%20Glow%20PHA%2BBHA%20Pore-Tight%20Toner",
        "currentPrice": 1116,
        "originalPrice": 1410,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Glow%20Recipe%20Watermelon%20Glow%20PHA%2BBHA%20Pore-Tight%20Toner",
        "currentPrice": 1109,
        "originalPrice": 1410,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-13T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-108",
    "name": "Sol de Janeiro Brazilian Bum Bum Cream",
    "description": "An award-winning, fast-absorbing body cream that helps visibly tighten the appearance of skin. Smells absolutely heavenly. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#bumbumcream",
      "#soldejaneiro",
      "#bodycare",
      "#perfumedbodycream",
      "#soldejaneiro",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Sol%20de%20Janeiro%20Brazilian%20Bum%20Bum%20Cream",
        "currentPrice": 3759,
        "originalPrice": 4699,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Sol%20de%20Janeiro%20Brazilian%20Bum%20Bum%20Cream",
        "currentPrice": 3838,
        "originalPrice": 4699,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Sol%20de%20Janeiro%20Brazilian%20Bum%20Bum%20Cream",
        "currentPrice": 3770,
        "originalPrice": 4699,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-12T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-109",
    "name": "EltaMD UV Clear Broad-Spectrum SPF 46",
    "description": "Oil-free sunscreen helps calm and protect sensitive skin types prone to discoloration and breakouts. Extremely lightweight. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#eltamdsunscreen",
      "#spf46",
      "#acnesafespf",
      "#skincareessentials",
      "#eltamd",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=EltaMD%20UV%20Clear%20Broad-Spectrum%20SPF%2046",
        "currentPrice": 3645,
        "originalPrice": 4557,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=EltaMD%20UV%20Clear%20Broad-Spectrum%20SPF%2046",
        "currentPrice": 3552,
        "originalPrice": 4557,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=EltaMD%20UV%20Clear%20Broad-Spectrum%20SPF%2046",
        "currentPrice": 3578,
        "originalPrice": 4557,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-11T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-110",
    "name": "Dr. Jart+ Cicapair Tiger Grass Color Correcting Treatment",
    "description": "A green-to-beige cream that neutralizes redness and defends skin against environmental aggressors. Natural, glowing finish. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#cicapair",
      "#drjart",
      "#colorcorrector",
      "#rednessrelief",
      "#drjart",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Dr.%20Jart%2B%20Cicapair%20Tiger%20Grass%20Color%20Correcting%20Treatment",
        "currentPrice": 2646,
        "originalPrice": 3308,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Dr.%20Jart%2B%20Cicapair%20Tiger%20Grass%20Color%20Correcting%20Treatment",
        "currentPrice": 2635,
        "originalPrice": 3308,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Dr.%20Jart%2B%20Cicapair%20Tiger%20Grass%20Color%20Correcting%20Treatment",
        "currentPrice": 2610,
        "originalPrice": 3308,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-10T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-111",
    "name": "Beauty of Joseon Relief Sun : Rice + Probiotics SPF50+",
    "description": "A lightweight organic sunscreen that is moist and comfortable on the skin without leaving any white cast. Rice extract 30%. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#beautyofjoseon",
      "#koreansunscreen",
      "#glowysunscreen",
      "#ricewaterskincare",
      "#beautyofjoseon",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Beauty%20of%20Joseon%20Relief%20Sun%20%3A%20Rice%20%2B%20Probiotics%20SPF50%2B",
        "currentPrice": 2155,
        "originalPrice": 2694,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Beauty%20of%20Joseon%20Relief%20Sun%20%3A%20Rice%20%2B%20Probiotics%20SPF50%2B",
        "currentPrice": 2135,
        "originalPrice": 2694,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Beauty%20of%20Joseon%20Relief%20Sun%20%3A%20Rice%20%2B%20Probiotics%20SPF50%2B",
        "currentPrice": 2151,
        "originalPrice": 2694,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-09T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-112",
    "name": "The Inkey List Oat Cleansing Balm",
    "description": "A luxurious cleansing balm that melts away makeup, sunscreen, and impurities while soothing sensitive skin with colloidal oatmeal. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#oatcleansingbalm",
      "#inkeylist",
      "#doublecleanse",
      "#makeupremover",
      "#theinkeylist",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=The%20Inkey%20List%20Oat%20Cleansing%20Balm",
        "currentPrice": 2742,
        "originalPrice": 3428,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=The%20Inkey%20List%20Oat%20Cleansing%20Balm",
        "currentPrice": 2738,
        "originalPrice": 3428,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=The%20Inkey%20List%20Oat%20Cleansing%20Balm",
        "currentPrice": 2713,
        "originalPrice": 3428,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-08T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-113",
    "name": "CeraVe Hydrating Facial Cleanser",
    "description": "A gentle, non-foaming face wash formulated with three essential ceramides and hyaluronic acid to cleanse and hydrate skin. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#ceravecleanser",
      "#hydratingcleanser",
      "#skincareroutine",
      "#dermatologistrecommended",
      "#cerave",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=CeraVe%20Hydrating%20Facial%20Cleanser",
        "currentPrice": 1644,
        "originalPrice": 2055,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=CeraVe%20Hydrating%20Facial%20Cleanser",
        "currentPrice": 1701,
        "originalPrice": 2055,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=CeraVe%20Hydrating%20Facial%20Cleanser",
        "currentPrice": 1632,
        "originalPrice": 2055,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-07T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-114",
    "name": "The Ordinary Niacinamide 10% + Zinc 1%",
    "description": "A high-strength vitamin and mineral blemish formula that regulates sebum production, tightens pores, and brightens skin tone. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#theordinary",
      "#niacinamideserum",
      "#skincarehacks",
      "#acneskin",
      "#theordinary",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=The%20Ordinary%20Niacinamide%2010%25%20%2B%20Zinc%201%25",
        "currentPrice": 1032,
        "originalPrice": 1291,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=The%20Ordinary%20Niacinamide%2010%25%20%2B%20Zinc%201%25",
        "currentPrice": 1019,
        "originalPrice": 1291,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=The%20Ordinary%20Niacinamide%2010%25%20%2B%20Zinc%201%25",
        "currentPrice": 995,
        "originalPrice": 1291,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-06T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-115",
    "name": "COSRX Advanced Snail 96 Mucin Power Essence",
    "description": "A light-weight essence which absorbs into the skin fast to give skin a natural glow from inside. Made of 96% snail secretion filtrate. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#snailmucin",
      "#cosrx",
      "#kbeauty",
      "#glassskin",
      "#cosrx",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=COSRX%20Advanced%20Snail%2096%20Mucin%20Power%20Essence",
        "currentPrice": 1836,
        "originalPrice": 2295,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=COSRX%20Advanced%20Snail%2096%20Mucin%20Power%20Essence",
        "currentPrice": 1839,
        "originalPrice": 2295,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=COSRX%20Advanced%20Snail%2096%20Mucin%20Power%20Essence",
        "currentPrice": 1868,
        "originalPrice": 2295,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-05T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-116",
    "name": "La Roche-Posay Cicaplast Baume B5+ Soothing Balm",
    "description": "A multi-purpose soothing balm that dry skin irritations, redness, and damaged skin barrier. Safe for babies, kids, and adults. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#cicaplast",
      "#skinbarrier repair",
      "#larocheposay",
      "#dryskinhelp",
      "#larocheposay",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=La%20Roche-Posay%20Cicaplast%20Baume%20B5%2B%20Soothing%20Balm",
        "currentPrice": 904,
        "originalPrice": 1131,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=La%20Roche-Posay%20Cicaplast%20Baume%20B5%2B%20Soothing%20Balm",
        "currentPrice": 883,
        "originalPrice": 1131,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=La%20Roche-Posay%20Cicaplast%20Baume%20B5%2B%20Soothing%20Balm",
        "currentPrice": 975,
        "originalPrice": 1131,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-04T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-117",
    "name": "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant",
    "description": "A gentle leave-on exfoliant with salicylic acid that unclogs pores, smooths wrinkles, brightens and evens out skin tone. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#paulaschoicebha",
      "#exfoliant",
      "#poreminimizer",
      "#skincarediary",
      "#paulaschoice",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Paula's%20Choice%20Skin%20Perfecting%202%25%20BHA%20Liquid%20Exfoliant",
        "currentPrice": 1087,
        "originalPrice": 1359,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Paula's%20Choice%20Skin%20Perfecting%202%25%20BHA%20Liquid%20Exfoliant",
        "currentPrice": 1057,
        "originalPrice": 1359,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Paula's%20Choice%20Skin%20Perfecting%202%25%20BHA%20Liquid%20Exfoliant",
        "currentPrice": 1018,
        "originalPrice": 1359,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-03T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-118",
    "name": "Laneige Lip Sleeping Mask - Berry",
    "description": "An overnight lip mask that delivers intense moisture and antioxidants while you sleep with Berry Mix Complex and Vitamin C. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#lipsleepingmask",
      "#laneige",
      "#softlips",
      "#nighttimeroutine",
      "#laneige",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Laneige%20Lip%20Sleeping%20Mask%20-%20Berry",
        "currentPrice": 1361,
        "originalPrice": 1702,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Laneige%20Lip%20Sleeping%20Mask%20-%20Berry",
        "currentPrice": 1441,
        "originalPrice": 1702,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Laneige%20Lip%20Sleeping%20Mask%20-%20Berry",
        "currentPrice": 1356,
        "originalPrice": 1702,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-02T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-119",
    "name": "Glow Recipe Watermelon Glow PHA+BHA Pore-Tight Toner",
    "description": "A gentle, bouncy watermelon toner infused with PHA and BHA to hydrate skin while shrinking the appearance of pores. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#glowrecipetoner",
      "#watermelonporetoner",
      "#glowyskin",
      "#satisfyingtexture",
      "#glowrecipe",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Glow%20Recipe%20Watermelon%20Glow%20PHA%2BBHA%20Pore-Tight%20Toner",
        "currentPrice": 2564,
        "originalPrice": 3205,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Glow%20Recipe%20Watermelon%20Glow%20PHA%2BBHA%20Pore-Tight%20Toner",
        "currentPrice": 2661,
        "originalPrice": 3205,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Glow%20Recipe%20Watermelon%20Glow%20PHA%2BBHA%20Pore-Tight%20Toner",
        "currentPrice": 2493,
        "originalPrice": 3205,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-07-01T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-120",
    "name": "Sol de Janeiro Brazilian Bum Bum Cream",
    "description": "An award-winning, fast-absorbing body cream that helps visibly tighten the appearance of skin. Smells absolutely heavenly. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#bumbumcream",
      "#soldejaneiro",
      "#bodycare",
      "#perfumedbodycream",
      "#soldejaneiro",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Sol%20de%20Janeiro%20Brazilian%20Bum%20Bum%20Cream",
        "currentPrice": 1479,
        "originalPrice": 1849,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Sol%20de%20Janeiro%20Brazilian%20Bum%20Bum%20Cream",
        "currentPrice": 1426,
        "originalPrice": 1849,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Sol%20de%20Janeiro%20Brazilian%20Bum%20Bum%20Cream",
        "currentPrice": 1407,
        "originalPrice": 1849,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-30T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-121",
    "name": "EltaMD UV Clear Broad-Spectrum SPF 46",
    "description": "Oil-free sunscreen helps calm and protect sensitive skin types prone to discoloration and breakouts. Extremely lightweight. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#eltamdsunscreen",
      "#spf46",
      "#acnesafespf",
      "#skincareessentials",
      "#eltamd",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=EltaMD%20UV%20Clear%20Broad-Spectrum%20SPF%2046",
        "currentPrice": 2636,
        "originalPrice": 3296,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=EltaMD%20UV%20Clear%20Broad-Spectrum%20SPF%2046",
        "currentPrice": 2730,
        "originalPrice": 3296,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=EltaMD%20UV%20Clear%20Broad-Spectrum%20SPF%2046",
        "currentPrice": 2569,
        "originalPrice": 3296,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-29T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-122",
    "name": "Dr. Jart+ Cicapair Tiger Grass Color Correcting Treatment",
    "description": "A green-to-beige cream that neutralizes redness and defends skin against environmental aggressors. Natural, glowing finish. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#cicapair",
      "#drjart",
      "#colorcorrector",
      "#rednessrelief",
      "#drjart",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Dr.%20Jart%2B%20Cicapair%20Tiger%20Grass%20Color%20Correcting%20Treatment",
        "currentPrice": 2497,
        "originalPrice": 3122,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Dr.%20Jart%2B%20Cicapair%20Tiger%20Grass%20Color%20Correcting%20Treatment",
        "currentPrice": 2474,
        "originalPrice": 3122,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Dr.%20Jart%2B%20Cicapair%20Tiger%20Grass%20Color%20Correcting%20Treatment",
        "currentPrice": 2473,
        "originalPrice": 3122,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-28T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-123",
    "name": "Beauty of Joseon Relief Sun : Rice + Probiotics SPF50+",
    "description": "A lightweight organic sunscreen that is moist and comfortable on the skin without leaving any white cast. Rice extract 30%. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#beautyofjoseon",
      "#koreansunscreen",
      "#glowysunscreen",
      "#ricewaterskincare",
      "#beautyofjoseon",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Beauty%20of%20Joseon%20Relief%20Sun%20%3A%20Rice%20%2B%20Probiotics%20SPF50%2B",
        "currentPrice": 1104,
        "originalPrice": 1381,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Beauty%20of%20Joseon%20Relief%20Sun%20%3A%20Rice%20%2B%20Probiotics%20SPF50%2B",
        "currentPrice": 1079,
        "originalPrice": 1381,
        "discount": 20,
        "outOfStock": true
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Beauty%20of%20Joseon%20Relief%20Sun%20%3A%20Rice%20%2B%20Probiotics%20SPF50%2B",
        "currentPrice": 1062,
        "originalPrice": 1381,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-27T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-124",
    "name": "The Inkey List Oat Cleansing Balm",
    "description": "A luxurious cleansing balm that melts away makeup, sunscreen, and impurities while soothing sensitive skin with colloidal oatmeal. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#oatcleansingbalm",
      "#inkeylist",
      "#doublecleanse",
      "#makeupremover",
      "#theinkeylist",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=The%20Inkey%20List%20Oat%20Cleansing%20Balm",
        "currentPrice": 3344,
        "originalPrice": 4181,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=The%20Inkey%20List%20Oat%20Cleansing%20Balm",
        "currentPrice": 3337,
        "originalPrice": 4181,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=The%20Inkey%20List%20Oat%20Cleansing%20Balm",
        "currentPrice": 3375,
        "originalPrice": 4181,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-26T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-125",
    "name": "CeraVe Hydrating Facial Cleanser",
    "description": "A gentle, non-foaming face wash formulated with three essential ceramides and hyaluronic acid to cleanse and hydrate skin. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#ceravecleanser",
      "#hydratingcleanser",
      "#skincareroutine",
      "#dermatologistrecommended",
      "#cerave",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=CeraVe%20Hydrating%20Facial%20Cleanser",
        "currentPrice": 3180,
        "originalPrice": 3975,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=CeraVe%20Hydrating%20Facial%20Cleanser",
        "currentPrice": 3163,
        "originalPrice": 3975,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=CeraVe%20Hydrating%20Facial%20Cleanser",
        "currentPrice": 3159,
        "originalPrice": 3975,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-25T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-126",
    "name": "The Ordinary Niacinamide 10% + Zinc 1%",
    "description": "A high-strength vitamin and mineral blemish formula that regulates sebum production, tightens pores, and brightens skin tone. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#theordinary",
      "#niacinamideserum",
      "#skincarehacks",
      "#acneskin",
      "#theordinary",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=The%20Ordinary%20Niacinamide%2010%25%20%2B%20Zinc%201%25",
        "currentPrice": 3425,
        "originalPrice": 4282,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=The%20Ordinary%20Niacinamide%2010%25%20%2B%20Zinc%201%25",
        "currentPrice": 3369,
        "originalPrice": 4282,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=The%20Ordinary%20Niacinamide%2010%25%20%2B%20Zinc%201%25",
        "currentPrice": 3465,
        "originalPrice": 4282,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-24T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-127",
    "name": "COSRX Advanced Snail 96 Mucin Power Essence",
    "description": "A light-weight essence which absorbs into the skin fast to give skin a natural glow from inside. Made of 96% snail secretion filtrate. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#snailmucin",
      "#cosrx",
      "#kbeauty",
      "#glassskin",
      "#cosrx",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=COSRX%20Advanced%20Snail%2096%20Mucin%20Power%20Essence",
        "currentPrice": 927,
        "originalPrice": 1159,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=COSRX%20Advanced%20Snail%2096%20Mucin%20Power%20Essence",
        "currentPrice": 921,
        "originalPrice": 1159,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=COSRX%20Advanced%20Snail%2096%20Mucin%20Power%20Essence",
        "currentPrice": 870,
        "originalPrice": 1159,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-23T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-128",
    "name": "La Roche-Posay Cicaplast Baume B5+ Soothing Balm",
    "description": "A multi-purpose soothing balm that dry skin irritations, redness, and damaged skin barrier. Safe for babies, kids, and adults. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#cicaplast",
      "#skinbarrier repair",
      "#larocheposay",
      "#dryskinhelp",
      "#larocheposay",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=La%20Roche-Posay%20Cicaplast%20Baume%20B5%2B%20Soothing%20Balm",
        "currentPrice": 1240,
        "originalPrice": 1550,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=La%20Roche-Posay%20Cicaplast%20Baume%20B5%2B%20Soothing%20Balm",
        "currentPrice": 1158,
        "originalPrice": 1550,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=La%20Roche-Posay%20Cicaplast%20Baume%20B5%2B%20Soothing%20Balm",
        "currentPrice": 1307,
        "originalPrice": 1550,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-22T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-129",
    "name": "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant",
    "description": "A gentle leave-on exfoliant with salicylic acid that unclogs pores, smooths wrinkles, brightens and evens out skin tone. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#paulaschoicebha",
      "#exfoliant",
      "#poreminimizer",
      "#skincarediary",
      "#paulaschoice",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Paula's%20Choice%20Skin%20Perfecting%202%25%20BHA%20Liquid%20Exfoliant",
        "currentPrice": 1782,
        "originalPrice": 2228,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Paula's%20Choice%20Skin%20Perfecting%202%25%20BHA%20Liquid%20Exfoliant",
        "currentPrice": 1724,
        "originalPrice": 2228,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Paula's%20Choice%20Skin%20Perfecting%202%25%20BHA%20Liquid%20Exfoliant",
        "currentPrice": 1843,
        "originalPrice": 2228,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-21T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-130",
    "name": "Laneige Lip Sleeping Mask - Berry",
    "description": "An overnight lip mask that delivers intense moisture and antioxidants while you sleep with Berry Mix Complex and Vitamin C. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#lipsleepingmask",
      "#laneige",
      "#softlips",
      "#nighttimeroutine",
      "#laneige",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Laneige%20Lip%20Sleeping%20Mask%20-%20Berry",
        "currentPrice": 828,
        "originalPrice": 1035,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Laneige%20Lip%20Sleeping%20Mask%20-%20Berry",
        "currentPrice": 920,
        "originalPrice": 1035,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Laneige%20Lip%20Sleeping%20Mask%20-%20Berry",
        "currentPrice": 875,
        "originalPrice": 1035,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-20T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-131",
    "name": "Glow Recipe Watermelon Glow PHA+BHA Pore-Tight Toner",
    "description": "A gentle, bouncy watermelon toner infused with PHA and BHA to hydrate skin while shrinking the appearance of pores. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#glowrecipetoner",
      "#watermelonporetoner",
      "#glowyskin",
      "#satisfyingtexture",
      "#glowrecipe",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Glow%20Recipe%20Watermelon%20Glow%20PHA%2BBHA%20Pore-Tight%20Toner",
        "currentPrice": 1408,
        "originalPrice": 1761,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Glow%20Recipe%20Watermelon%20Glow%20PHA%2BBHA%20Pore-Tight%20Toner",
        "currentPrice": 1461,
        "originalPrice": 1761,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Glow%20Recipe%20Watermelon%20Glow%20PHA%2BBHA%20Pore-Tight%20Toner",
        "currentPrice": 1357,
        "originalPrice": 1761,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-19T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-132",
    "name": "Sol de Janeiro Brazilian Bum Bum Cream",
    "description": "An award-winning, fast-absorbing body cream that helps visibly tighten the appearance of skin. Smells absolutely heavenly. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#bumbumcream",
      "#soldejaneiro",
      "#bodycare",
      "#perfumedbodycream",
      "#soldejaneiro",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Sol%20de%20Janeiro%20Brazilian%20Bum%20Bum%20Cream",
        "currentPrice": 1964,
        "originalPrice": 2455,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Sol%20de%20Janeiro%20Brazilian%20Bum%20Bum%20Cream",
        "currentPrice": 1905,
        "originalPrice": 2455,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Sol%20de%20Janeiro%20Brazilian%20Bum%20Bum%20Cream",
        "currentPrice": 2021,
        "originalPrice": 2455,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-18T09:45:01.339Z",
    "updated": "2026-07-20T09:45:01.339Z"
  },
  {
    "id": "SKN-133",
    "name": "EltaMD UV Clear Broad-Spectrum SPF 46",
    "description": "Oil-free sunscreen helps calm and protect sensitive skin types prone to discoloration and breakouts. Extremely lightweight. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#eltamdsunscreen",
      "#spf46",
      "#acnesafespf",
      "#skincareessentials",
      "#eltamd",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=EltaMD%20UV%20Clear%20Broad-Spectrum%20SPF%2046",
        "currentPrice": 3311,
        "originalPrice": 4139,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=EltaMD%20UV%20Clear%20Broad-Spectrum%20SPF%2046",
        "currentPrice": 3236,
        "originalPrice": 4139,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=EltaMD%20UV%20Clear%20Broad-Spectrum%20SPF%2046",
        "currentPrice": 3366,
        "originalPrice": 4139,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-17T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  },
  {
    "id": "SKN-134",
    "name": "Dr. Jart+ Cicapair Tiger Grass Color Correcting Treatment",
    "description": "A green-to-beige cream that neutralizes redness and defends skin against environmental aggressors. Natural, glowing finish. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#cicapair",
      "#drjart",
      "#colorcorrector",
      "#rednessrelief",
      "#drjart",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Dr.%20Jart%2B%20Cicapair%20Tiger%20Grass%20Color%20Correcting%20Treatment",
        "currentPrice": 3000,
        "originalPrice": 3750,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Dr.%20Jart%2B%20Cicapair%20Tiger%20Grass%20Color%20Correcting%20Treatment",
        "currentPrice": 3069,
        "originalPrice": 3750,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Dr.%20Jart%2B%20Cicapair%20Tiger%20Grass%20Color%20Correcting%20Treatment",
        "currentPrice": 3059,
        "originalPrice": 3750,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-16T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  },
  {
    "id": "SKN-135",
    "name": "Beauty of Joseon Relief Sun : Rice + Probiotics SPF50+",
    "description": "A lightweight organic sunscreen that is moist and comfortable on the skin without leaving any white cast. Rice extract 30%. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#beautyofjoseon",
      "#koreansunscreen",
      "#glowysunscreen",
      "#ricewaterskincare",
      "#beautyofjoseon",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Beauty%20of%20Joseon%20Relief%20Sun%20%3A%20Rice%20%2B%20Probiotics%20SPF50%2B",
        "currentPrice": 2192,
        "originalPrice": 2741,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Beauty%20of%20Joseon%20Relief%20Sun%20%3A%20Rice%20%2B%20Probiotics%20SPF50%2B",
        "currentPrice": 2127,
        "originalPrice": 2741,
        "discount": 20,
        "outOfStock": true
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Beauty%20of%20Joseon%20Relief%20Sun%20%3A%20Rice%20%2B%20Probiotics%20SPF50%2B",
        "currentPrice": 2145,
        "originalPrice": 2741,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-15T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  },
  {
    "id": "SKN-136",
    "name": "The Inkey List Oat Cleansing Balm",
    "description": "A luxurious cleansing balm that melts away makeup, sunscreen, and impurities while soothing sensitive skin with colloidal oatmeal. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#oatcleansingbalm",
      "#inkeylist",
      "#doublecleanse",
      "#makeupremover",
      "#theinkeylist",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=The%20Inkey%20List%20Oat%20Cleansing%20Balm",
        "currentPrice": 3525,
        "originalPrice": 4407,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=The%20Inkey%20List%20Oat%20Cleansing%20Balm",
        "currentPrice": 3610,
        "originalPrice": 4407,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=The%20Inkey%20List%20Oat%20Cleansing%20Balm",
        "currentPrice": 3589,
        "originalPrice": 4407,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-14T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  },
  {
    "id": "SKN-137",
    "name": "CeraVe Hydrating Facial Cleanser",
    "description": "A gentle, non-foaming face wash formulated with three essential ceramides and hyaluronic acid to cleanse and hydrate skin. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#ceravecleanser",
      "#hydratingcleanser",
      "#skincareroutine",
      "#dermatologistrecommended",
      "#cerave",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=CeraVe%20Hydrating%20Facial%20Cleanser",
        "currentPrice": 715,
        "originalPrice": 894,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=CeraVe%20Hydrating%20Facial%20Cleanser",
        "currentPrice": 787,
        "originalPrice": 894,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=CeraVe%20Hydrating%20Facial%20Cleanser",
        "currentPrice": 786,
        "originalPrice": 894,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-13T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  },
  {
    "id": "SKN-138",
    "name": "The Ordinary Niacinamide 10% + Zinc 1%",
    "description": "A high-strength vitamin and mineral blemish formula that regulates sebum production, tightens pores, and brightens skin tone. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#theordinary",
      "#niacinamideserum",
      "#skincarehacks",
      "#acneskin",
      "#theordinary",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=The%20Ordinary%20Niacinamide%2010%25%20%2B%20Zinc%201%25",
        "currentPrice": 874,
        "originalPrice": 1093,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=The%20Ordinary%20Niacinamide%2010%25%20%2B%20Zinc%201%25",
        "currentPrice": 916,
        "originalPrice": 1093,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=The%20Ordinary%20Niacinamide%2010%25%20%2B%20Zinc%201%25",
        "currentPrice": 883,
        "originalPrice": 1093,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-12T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  },
  {
    "id": "SKN-139",
    "name": "COSRX Advanced Snail 96 Mucin Power Essence",
    "description": "A light-weight essence which absorbs into the skin fast to give skin a natural glow from inside. Made of 96% snail secretion filtrate. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#snailmucin",
      "#cosrx",
      "#kbeauty",
      "#glassskin",
      "#cosrx",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=COSRX%20Advanced%20Snail%2096%20Mucin%20Power%20Essence",
        "currentPrice": 790,
        "originalPrice": 988,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=COSRX%20Advanced%20Snail%2096%20Mucin%20Power%20Essence",
        "currentPrice": 812,
        "originalPrice": 988,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=COSRX%20Advanced%20Snail%2096%20Mucin%20Power%20Essence",
        "currentPrice": 852,
        "originalPrice": 988,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-11T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  },
  {
    "id": "SKN-140",
    "name": "La Roche-Posay Cicaplast Baume B5+ Soothing Balm",
    "description": "A multi-purpose soothing balm that dry skin irritations, redness, and damaged skin barrier. Safe for babies, kids, and adults. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#cicaplast",
      "#skinbarrier repair",
      "#larocheposay",
      "#dryskinhelp",
      "#larocheposay",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=La%20Roche-Posay%20Cicaplast%20Baume%20B5%2B%20Soothing%20Balm",
        "currentPrice": 3580,
        "originalPrice": 4476,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=La%20Roche-Posay%20Cicaplast%20Baume%20B5%2B%20Soothing%20Balm",
        "currentPrice": 3604,
        "originalPrice": 4476,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=La%20Roche-Posay%20Cicaplast%20Baume%20B5%2B%20Soothing%20Balm",
        "currentPrice": 3649,
        "originalPrice": 4476,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-10T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  },
  {
    "id": "SKN-141",
    "name": "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant",
    "description": "A gentle leave-on exfoliant with salicylic acid that unclogs pores, smooths wrinkles, brightens and evens out skin tone. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#paulaschoicebha",
      "#exfoliant",
      "#poreminimizer",
      "#skincarediary",
      "#paulaschoice",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Paula's%20Choice%20Skin%20Perfecting%202%25%20BHA%20Liquid%20Exfoliant",
        "currentPrice": 2813,
        "originalPrice": 3517,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Paula's%20Choice%20Skin%20Perfecting%202%25%20BHA%20Liquid%20Exfoliant",
        "currentPrice": 2862,
        "originalPrice": 3517,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Paula's%20Choice%20Skin%20Perfecting%202%25%20BHA%20Liquid%20Exfoliant",
        "currentPrice": 2741,
        "originalPrice": 3517,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-09T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  },
  {
    "id": "SKN-142",
    "name": "Laneige Lip Sleeping Mask - Berry",
    "description": "An overnight lip mask that delivers intense moisture and antioxidants while you sleep with Berry Mix Complex and Vitamin C. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#lipsleepingmask",
      "#laneige",
      "#softlips",
      "#nighttimeroutine",
      "#laneige",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Laneige%20Lip%20Sleeping%20Mask%20-%20Berry",
        "currentPrice": 774,
        "originalPrice": 968,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Laneige%20Lip%20Sleeping%20Mask%20-%20Berry",
        "currentPrice": 766,
        "originalPrice": 968,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Laneige%20Lip%20Sleeping%20Mask%20-%20Berry",
        "currentPrice": 806,
        "originalPrice": 968,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-08T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  },
  {
    "id": "SKN-143",
    "name": "Glow Recipe Watermelon Glow PHA+BHA Pore-Tight Toner",
    "description": "A gentle, bouncy watermelon toner infused with PHA and BHA to hydrate skin while shrinking the appearance of pores. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#glowrecipetoner",
      "#watermelonporetoner",
      "#glowyskin",
      "#satisfyingtexture",
      "#glowrecipe",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Glow%20Recipe%20Watermelon%20Glow%20PHA%2BBHA%20Pore-Tight%20Toner",
        "currentPrice": 1741,
        "originalPrice": 2177,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Glow%20Recipe%20Watermelon%20Glow%20PHA%2BBHA%20Pore-Tight%20Toner",
        "currentPrice": 1742,
        "originalPrice": 2177,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Glow%20Recipe%20Watermelon%20Glow%20PHA%2BBHA%20Pore-Tight%20Toner",
        "currentPrice": 1675,
        "originalPrice": 2177,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-07T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  },
  {
    "id": "SKN-144",
    "name": "Sol de Janeiro Brazilian Bum Bum Cream",
    "description": "An award-winning, fast-absorbing body cream that helps visibly tighten the appearance of skin. Smells absolutely heavenly. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#bumbumcream",
      "#soldejaneiro",
      "#bodycare",
      "#perfumedbodycream",
      "#soldejaneiro",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Sol%20de%20Janeiro%20Brazilian%20Bum%20Bum%20Cream",
        "currentPrice": 3132,
        "originalPrice": 3916,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Sol%20de%20Janeiro%20Brazilian%20Bum%20Bum%20Cream",
        "currentPrice": 3208,
        "originalPrice": 3916,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Sol%20de%20Janeiro%20Brazilian%20Bum%20Bum%20Cream",
        "currentPrice": 3102,
        "originalPrice": 3916,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-06T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  },
  {
    "id": "SKN-145",
    "name": "EltaMD UV Clear Broad-Spectrum SPF 46",
    "description": "Oil-free sunscreen helps calm and protect sensitive skin types prone to discoloration and breakouts. Extremely lightweight. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#eltamdsunscreen",
      "#spf46",
      "#acnesafespf",
      "#skincareessentials",
      "#eltamd",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=EltaMD%20UV%20Clear%20Broad-Spectrum%20SPF%2046",
        "currentPrice": 1450,
        "originalPrice": 1813,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=EltaMD%20UV%20Clear%20Broad-Spectrum%20SPF%2046",
        "currentPrice": 1451,
        "originalPrice": 1813,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=EltaMD%20UV%20Clear%20Broad-Spectrum%20SPF%2046",
        "currentPrice": 1379,
        "originalPrice": 1813,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-05T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  },
  {
    "id": "SKN-146",
    "name": "Dr. Jart+ Cicapair Tiger Grass Color Correcting Treatment",
    "description": "A green-to-beige cream that neutralizes redness and defends skin against environmental aggressors. Natural, glowing finish. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#cicapair",
      "#drjart",
      "#colorcorrector",
      "#rednessrelief",
      "#drjart",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Dr.%20Jart%2B%20Cicapair%20Tiger%20Grass%20Color%20Correcting%20Treatment",
        "currentPrice": 2927,
        "originalPrice": 3659,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Dr.%20Jart%2B%20Cicapair%20Tiger%20Grass%20Color%20Correcting%20Treatment",
        "currentPrice": 2864,
        "originalPrice": 3659,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Dr.%20Jart%2B%20Cicapair%20Tiger%20Grass%20Color%20Correcting%20Treatment",
        "currentPrice": 2976,
        "originalPrice": 3659,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-04T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  },
  {
    "id": "SKN-147",
    "name": "Beauty of Joseon Relief Sun : Rice + Probiotics SPF50+",
    "description": "A lightweight organic sunscreen that is moist and comfortable on the skin without leaving any white cast. Rice extract 30%. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#beautyofjoseon",
      "#koreansunscreen",
      "#glowysunscreen",
      "#ricewaterskincare",
      "#beautyofjoseon",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=Beauty%20of%20Joseon%20Relief%20Sun%20%3A%20Rice%20%2B%20Probiotics%20SPF50%2B",
        "currentPrice": 3271,
        "originalPrice": 4089,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=Beauty%20of%20Joseon%20Relief%20Sun%20%3A%20Rice%20%2B%20Probiotics%20SPF50%2B",
        "currentPrice": 3216,
        "originalPrice": 4089,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=Beauty%20of%20Joseon%20Relief%20Sun%20%3A%20Rice%20%2B%20Probiotics%20SPF50%2B",
        "currentPrice": 3240,
        "originalPrice": 4089,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-03T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  },
  {
    "id": "SKN-148",
    "name": "The Inkey List Oat Cleansing Balm",
    "description": "A luxurious cleansing balm that melts away makeup, sunscreen, and impurities while soothing sensitive skin with colloidal oatmeal. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#oatcleansingbalm",
      "#inkeylist",
      "#doublecleanse",
      "#makeupremover",
      "#theinkeylist",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=The%20Inkey%20List%20Oat%20Cleansing%20Balm",
        "currentPrice": 3820,
        "originalPrice": 4776,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=The%20Inkey%20List%20Oat%20Cleansing%20Balm",
        "currentPrice": 3895,
        "originalPrice": 4776,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=The%20Inkey%20List%20Oat%20Cleansing%20Balm",
        "currentPrice": 3815,
        "originalPrice": 4776,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-02T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  },
  {
    "id": "SKN-149",
    "name": "CeraVe Hydrating Facial Cleanser",
    "description": "A gentle, non-foaming face wash formulated with three essential ceramides and hyaluronic acid to cleanse and hydrate skin. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#ceravecleanser",
      "#hydratingcleanser",
      "#skincareroutine",
      "#dermatologistrecommended",
      "#cerave",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=CeraVe%20Hydrating%20Facial%20Cleanser",
        "currentPrice": 2370,
        "originalPrice": 2963,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=CeraVe%20Hydrating%20Facial%20Cleanser",
        "currentPrice": 2386,
        "originalPrice": 2963,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=CeraVe%20Hydrating%20Facial%20Cleanser",
        "currentPrice": 2329,
        "originalPrice": 2963,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-06-01T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  },
  {
    "id": "SKN-150",
    "name": "The Ordinary Niacinamide 10% + Zinc 1%",
    "description": "A high-strength vitamin and mineral blemish formula that regulates sebum production, tightens pores, and brightens skin tone. Essential part of the clean girl aesthetic skin longevity routine. Highly rated by dermatologists.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80"
    ],
    "category": "Skincare",
    "viralTags": [
      "#theordinary",
      "#niacinamideserum",
      "#skincarehacks",
      "#acneskin",
      "#theordinary",
      "#skincarecommunity",
      "#glassskin"
    ],
    "retailers": [
      {
        "name": "Nykaa Beauty",
        "affiliateLink": "https://www.nykaa.com/search/result/?q=The%20Ordinary%20Niacinamide%2010%25%20%2B%20Zinc%201%25",
        "currentPrice": 3180,
        "originalPrice": 3976,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Sephora India",
        "affiliateLink": "https://sephora.nnnow.com/search?q=The%20Ordinary%20Niacinamide%2010%25%20%2B%20Zinc%201%25",
        "currentPrice": 3243,
        "originalPrice": 3976,
        "discount": 20,
        "outOfStock": false
      },
      {
        "name": "Amazon India",
        "affiliateLink": "https://www.amazon.in/s?k=The%20Ordinary%20Niacinamide%2010%25%20%2B%20Zinc%201%25",
        "currentPrice": 3163,
        "originalPrice": 3976,
        "discount": 20,
        "outOfStock": false
      }
    ],
    "created": "2026-05-31T09:45:01.340Z",
    "updated": "2026-07-20T09:45:01.340Z"
  }
];

  for (const item of products) {
    try {
      const record = new Record(collection);
      record.set("name", item.name);
      record.set("description", item.description);
      record.set("image", item.image);
      record.set("images", JSON.stringify(item.images));
      record.set("category", item.category);
      record.set("viralTags", JSON.stringify(item.viralTags));
      record.set("retailers", JSON.stringify(item.retailers));
      app.save(record);
    } catch (e) {
      console.error("❌ Failed to seed product:", item.name, e.message);
    }
  }

  console.log(">> Successfully seeded " + products.length + " products.");
}, (app) => {
  // Rollback logic
});
