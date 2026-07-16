/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("products");

  console.log(">> Seeding 150 Gen Z Products into PocketBase...");
  const products = [
  {
    "name": "Oversized Graphic T-Shirt",
    "description": "Drop-shoulder, 180+ GSM, 100% cotton graphic t-shirt.",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 199,
        "originalPrice": 1300,
        "discount": 85,
        "affiliateLink": "https://www.myntra.com/oversized-graphic-tshirt-women"
      },
      {
        "name": "Bewakoof",
        "currentPrice": 199,
        "originalPrice": 1300,
        "discount": 85,
        "affiliateLink": "https://www.bewakoof.com/women-oversized-t-shirts"
      },
      {
        "name": "Amazon",
        "currentPrice": 199,
        "originalPrice": 1300,
        "discount": 85,
        "affiliateLink": "https://www.amazon.in/s?k=oversized+graphic+t-shirt+women"
      }
    ]
  },
  {
    "name": "Crop Top (Solid/Basic)",
    "description": "Essential solid color basic crop top, stretchy and soft.",
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 149,
        "originalPrice": 999,
        "discount": 85,
        "affiliateLink": "https://www.myntra.com/crop-tops"
      },
      {
        "name": "Meesho",
        "currentPrice": 149,
        "originalPrice": 999,
        "discount": 85,
        "affiliateLink": "https://www.meesho.com/crop-tops-for-women/pl/x3w"
      },
      {
        "name": "Amazon",
        "currentPrice": 149,
        "originalPrice": 999,
        "discount": 85,
        "affiliateLink": "https://www.amazon.in/s?k=women%27s+solid+crop+top"
      }
    ]
  },
  {
    "name": "Ribbed Crop Top",
    "description": "Textured ribbed fabric crop top, perfect for casual layerings.",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 199,
        "originalPrice": 999,
        "discount": 80,
        "affiliateLink": "https://www.myntra.com/ribbed-crop-tops"
      },
      {
        "name": "AJIO",
        "currentPrice": 199,
        "originalPrice": 999,
        "discount": 80,
        "affiliateLink": "https://www.ajio.com/s/women-ribbed-crop-tops"
      }
    ]
  },
  {
    "name": "Corset Top",
    "description": "Structured bodice corset top for party and Y2K aesthetic look.",
    "image": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 699,
        "originalPrice": 2500,
        "discount": 72,
        "affiliateLink": "https://www.myntra.com/corset-tops"
      },
      {
        "name": "Meesho",
        "currentPrice": 699,
        "originalPrice": 2500,
        "discount": 72,
        "affiliateLink": "https://www.meesho.com/corset-tops/pl/x3w"
      },
      {
        "name": "NykaaFashion",
        "currentPrice": 699,
        "originalPrice": 2500,
        "discount": 72,
        "affiliateLink": "https://www.nykaafashion.com/women/western-wear/tops/corset/c/10632"
      }
    ]
  },
  {
    "name": "Baby Tee (Y2K Fitted)",
    "description": "Fitted 90s nostalgia short-sleeve baby tee.",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 199,
        "originalPrice": 999,
        "discount": 80,
        "affiliateLink": "https://www.myntra.com/y2k-baby-tee"
      },
      {
        "name": "AJIO",
        "currentPrice": 199,
        "originalPrice": 999,
        "discount": 80,
        "affiliateLink": "https://www.ajio.com/s/y2k-tops-women"
      },
      {
        "name": "Meesho",
        "currentPrice": 199,
        "originalPrice": 999,
        "discount": 80,
        "affiliateLink": "https://www.meesho.com/search?q=Y2K+baby+tee+women"
      }
    ]
  },
  {
    "name": "Peplum Top",
    "description": "Flared peplum waist top, perfect for semi-formal events.",
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 249,
        "originalPrice": 1499,
        "discount": 83,
        "affiliateLink": "https://www.myntra.com/peplum-tops"
      },
      {
        "name": "Flipkart",
        "currentPrice": 249,
        "originalPrice": 1499,
        "discount": 83,
        "affiliateLink": "https://www.flipkart.com/search?q=peplum+top+women"
      },
      {
        "name": "Meesho",
        "currentPrice": 249,
        "originalPrice": 1499,
        "discount": 83,
        "affiliateLink": "https://www.meesho.com/peplum-tops/pl/x3w"
      }
    ]
  },
  {
    "name": "Oversized Boyfriend Shirt",
    "description": "Comfortable oversized button-down boyfriend shirt.",
    "image": "https://images.unsplash.com/photo-1553808373-92f1019d1680?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 399,
        "originalPrice": 1499,
        "discount": 73,
        "affiliateLink": "https://www.myntra.com/oversized-shirts-women"
      },
      {
        "name": "AJIO",
        "currentPrice": 399,
        "originalPrice": 1499,
        "discount": 73,
        "affiliateLink": "https://www.ajio.com/s/oversized-fit-shirts-women"
      }
    ]
  },
  {
    "name": "Baggy/Wide-Leg Jeans",
    "description": "Super relaxed fit baggy wide-leg denims.",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 299,
        "originalPrice": 2000,
        "discount": 85,
        "affiliateLink": "https://www.myntra.com/wide-leg-jeans-women"
      },
      {
        "name": "Amazon",
        "currentPrice": 299,
        "originalPrice": 2000,
        "discount": 85,
        "affiliateLink": "https://www.amazon.in/s?k=women%27s+baggy+wide+leg+jeans"
      }
    ]
  },
  {
    "name": "Cargo Pants Women",
    "description": "Utility-inspired cargo pants with multi-pockets.",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 299,
        "originalPrice": 1800,
        "discount": 83,
        "affiliateLink": "https://www.myntra.com/cargo-pants-women"
      },
      {
        "name": "AJIO",
        "currentPrice": 299,
        "originalPrice": 1800,
        "discount": 83,
        "affiliateLink": "https://www.ajio.com/s/women-cargo-pants"
      },
      {
        "name": "Flipkart",
        "currentPrice": 299,
        "originalPrice": 1800,
        "discount": 83,
        "affiliateLink": "https://www.flipkart.com/search?q=cargo+pants+women"
      }
    ]
  },
  {
    "name": "Wide-Leg/Parallel Trousers",
    "description": "High-waist parallel leg trousers for office and college wear.",
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 349,
        "originalPrice": 1999,
        "discount": 83,
        "affiliateLink": "https://www.myntra.com/wide-leg-trousers-women"
      },
      {
        "name": "AJIO",
        "currentPrice": 349,
        "originalPrice": 1999,
        "discount": 83,
        "affiliateLink": "https://www.ajio.com/s/women-wide-leg-trousers"
      },
      {
        "name": "Meesho",
        "currentPrice": 349,
        "originalPrice": 1999,
        "discount": 83,
        "affiliateLink": "https://www.meesho.com/parallel-trousers-women/pl/x3w"
      }
    ]
  },
  {
    "name": "High-Waist Mom Jeans",
    "description": "Retro high-rise Mom jeans with slightly tapered leg.",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 499,
        "originalPrice": 2499,
        "discount": 80,
        "affiliateLink": "https://www.myntra.com/mom-jeans-women"
      },
      {
        "name": "AJIO",
        "currentPrice": 499,
        "originalPrice": 2499,
        "discount": 80,
        "affiliateLink": "https://www.ajio.com/s/women-mom-jeans"
      },
      {
        "name": "Amazon",
        "currentPrice": 499,
        "originalPrice": 2499,
        "discount": 80,
        "affiliateLink": "https://www.amazon.in/s?k=high+waist+mom+jeans+women"
      }
    ]
  },
  {
    "name": "Biker Shorts Women",
    "description": "Stretchable high-rise athletic biker shorts.",
    "image": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 299,
        "originalPrice": 999,
        "discount": 70,
        "affiliateLink": "https://www.myntra.com/biker-shorts-women"
      },
      {
        "name": "Meesho",
        "currentPrice": 299,
        "originalPrice": 999,
        "discount": 70,
        "affiliateLink": "https://www.meesho.com/biker-shorts-women/pl/x3w"
      },
      {
        "name": "Flipkart",
        "currentPrice": 299,
        "originalPrice": 999,
        "discount": 70,
        "affiliateLink": "https://www.flipkart.com/search?q=biker+shorts+women"
      }
    ]
  },
  {
    "name": "Joggers/Track Pants Women",
    "description": "Relaxed fleece or cotton track pants/joggers.",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 299,
        "originalPrice": 1499,
        "discount": 80,
        "affiliateLink": "https://www.myntra.com/women-joggers-track-pants"
      },
      {
        "name": "Flipkart",
        "currentPrice": 299,
        "originalPrice": 1499,
        "discount": 80,
        "affiliateLink": "https://www.flipkart.com/clothing/bottomwear/track-pants/women-track-pants/pr?sid=clo,v84,jlr,v2s"
      },
      {
        "name": "AJIO",
        "currentPrice": 299,
        "originalPrice": 1499,
        "discount": 80,
        "affiliateLink": "https://www.ajio.com/s/women-track-pants-joggers"
      }
    ]
  },
  {
    "name": "Palazzo Pants Women",
    "description": "Wide flared comfortable palazzo pants.",
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 199,
        "originalPrice": 999,
        "discount": 80,
        "affiliateLink": "https://www.myntra.com/palazzo-pants-women"
      },
      {
        "name": "Meesho",
        "currentPrice": 199,
        "originalPrice": 999,
        "discount": 80,
        "affiliateLink": "https://www.meesho.com/palazzo-pants-women/pl/x3w"
      },
      {
        "name": "GoColors",
        "currentPrice": 199,
        "originalPrice": 999,
        "discount": 80,
        "affiliateLink": "https://www.gocolors.com/palazzo"
      }
    ]
  },
  {
    "name": "Mini Skirt Pleated A-Line",
    "description": "A-line silhouette pleated mini skirt.",
    "image": "https://images.unsplash.com/photo-1553808373-92f1019d1680?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 399,
        "originalPrice": 1499,
        "discount": 73,
        "affiliateLink": "https://www.myntra.com/pleated-mini-skirts-women"
      },
      {
        "name": "AJIO",
        "currentPrice": 399,
        "originalPrice": 1499,
        "discount": 73,
        "affiliateLink": "https://www.ajio.com/s/women-pleated-a-line-skirt"
      }
    ]
  },
  {
    "name": "Casual Cotton Co-ord Set Women",
    "description": "Matching top and bottom casual cotton co-ord set.",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 349,
        "originalPrice": 2499,
        "discount": 86,
        "affiliateLink": "https://www.myntra.com/co-ord-sets-women"
      },
      {
        "name": "Meesho",
        "currentPrice": 349,
        "originalPrice": 2499,
        "discount": 86,
        "affiliateLink": "https://www.meesho.com/co-ord-sets-women/pl/x3w"
      },
      {
        "name": "Amazon",
        "currentPrice": 349,
        "originalPrice": 2499,
        "discount": 86,
        "affiliateLink": "https://www.amazon.in/s?k=cotton+co-ord+sets+for+women"
      }
    ]
  },
  {
    "name": "Athleisure Co-ord Set Women",
    "description": "Activewear matching set (leggings + sports bra/top).",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 599,
        "originalPrice": 2499,
        "discount": 76,
        "affiliateLink": "https://www.myntra.com/women-activewear-co-ords"
      },
      {
        "name": "AJIO",
        "currentPrice": 599,
        "originalPrice": 2499,
        "discount": 76,
        "affiliateLink": "https://www.ajio.com/s/women-activewear-co-ord-sets"
      }
    ]
  },
  {
    "name": "Ethnic Co-ord Set Kurta Pant",
    "description": "Indo-western style printed ethnic co-ord set.",
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 399,
        "originalPrice": 2999,
        "discount": 87,
        "affiliateLink": "https://www.myntra.com/ethnic-co-ord-sets"
      },
      {
        "name": "Meesho",
        "currentPrice": 399,
        "originalPrice": 2999,
        "discount": 87,
        "affiliateLink": "https://www.meesho.com/ethnic-co-ord-sets/pl/x3w"
      },
      {
        "name": "Libas",
        "currentPrice": 399,
        "originalPrice": 2999,
        "discount": 87,
        "affiliateLink": "https://www.libas.in/collections/co-ord-sets"
      }
    ]
  },
  {
    "name": "Shirt & Trouser Co-ord Set",
    "description": "Chic matching solid shirt and parallel trousers co-ord.",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 599,
        "originalPrice": 2999,
        "discount": 80,
        "affiliateLink": "https://www.myntra.com/shirt-trouser-co-ord-set-women"
      },
      {
        "name": "AJIO",
        "currentPrice": 599,
        "originalPrice": 2999,
        "discount": 80,
        "affiliateLink": "https://www.ajio.com/s/women-shirt-trouser-co-ord-set"
      }
    ]
  },
  {
    "name": "Cropped Blazer Trouser Set",
    "description": "Formal cropped blazer and matching pants set.",
    "image": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 999,
        "originalPrice": 3999,
        "discount": 75,
        "affiliateLink": "https://www.myntra.com/blazer-co-ord-sets"
      },
      {
        "name": "Amazon",
        "currentPrice": 999,
        "originalPrice": 3999,
        "discount": 75,
        "affiliateLink": "https://www.amazon.in/s?k=women%27s+cropped+blazer+and+pants+set"
      }
    ]
  },
  {
    "name": "Bodycon Mini Dress",
    "description": "Fitted stretch bodycon dress for party wear.",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 699,
        "originalPrice": 3500,
        "discount": 80,
        "affiliateLink": "https://www.myntra.com/bodycon-dresses"
      },
      {
        "name": "AJIO",
        "currentPrice": 699,
        "originalPrice": 3500,
        "discount": 80,
        "affiliateLink": "https://www.ajio.com/s/women-bodycon-dresses"
      },
      {
        "name": "Flipkart",
        "currentPrice": 699,
        "originalPrice": 3500,
        "discount": 80,
        "affiliateLink": "https://www.flipkart.com/search?q=bodycon+mini+dress+women"
      }
    ]
  },
  {
    "name": "Corset Bodycon Mini Dress",
    "description": "Premium corset waist fitted mini dress.",
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 1000,
        "originalPrice": 5500,
        "discount": 82,
        "affiliateLink": "https://www.myntra.com/corset-bodycon-dress"
      },
      {
        "name": "Meesho",
        "currentPrice": 1000,
        "originalPrice": 5500,
        "discount": 82,
        "affiliateLink": "https://www.meesho.com/corset-bodycon-dress/pl/x3w"
      }
    ]
  },
  {
    "name": "A-Line Midi Dress Women",
    "description": "Flowy flared A-line mid-length dress.",
    "image": "https://images.unsplash.com/photo-1553808373-92f1019d1680?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 399,
        "originalPrice": 2499,
        "discount": 84,
        "affiliateLink": "https://www.myntra.com/a-line-midi-dresses"
      },
      {
        "name": "AJIO",
        "currentPrice": 399,
        "originalPrice": 2499,
        "discount": 84,
        "affiliateLink": "https://www.ajio.com/s/women-a-line-midi-dress"
      },
      {
        "name": "MaxFashion",
        "currentPrice": 399,
        "originalPrice": 2499,
        "discount": 84,
        "affiliateLink": "https://www.maxfashion.in/in/en/c/women-western-wear-dresses"
      }
    ]
  },
  {
    "name": "Wrap Dress Women",
    "description": "Adjustable wrap-around casual/party dress.",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 699,
        "originalPrice": 2999,
        "discount": 77,
        "affiliateLink": "https://www.myntra.com/wrap-dresses-women"
      },
      {
        "name": "Flipkart",
        "currentPrice": 699,
        "originalPrice": 2999,
        "discount": 77,
        "affiliateLink": "https://www.flipkart.com/search?q=wrap+dress+women"
      }
    ]
  },
  {
    "name": "Tiered Maxi Dress Women",
    "description": "Boho-chic layered tiered long maxi dress.",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 449,
        "originalPrice": 2999,
        "discount": 85,
        "affiliateLink": "https://www.myntra.com/tiered-maxi-dresses"
      },
      {
        "name": "AJIO",
        "currentPrice": 449,
        "originalPrice": 2999,
        "discount": 85,
        "affiliateLink": "https://www.ajio.com/s/women-tiered-maxi-dress"
      },
      {
        "name": "Amazon",
        "currentPrice": 449,
        "originalPrice": 2999,
        "discount": 85,
        "affiliateLink": "https://www.amazon.in/s?k=tiered+maxi+dress+for+women"
      }
    ]
  },
  {
    "name": "Cotton Kurti Daily Wear",
    "description": "Breathable daily casual cotton kurti.",
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 199,
        "originalPrice": 1299,
        "discount": 85,
        "affiliateLink": "https://www.myntra.com/cotton-kurtis"
      },
      {
        "name": "Meesho",
        "currentPrice": 199,
        "originalPrice": 1299,
        "discount": 85,
        "affiliateLink": "https://www.meesho.com/cotton-kurtis/pl/x3w"
      },
      {
        "name": "Libas",
        "currentPrice": 199,
        "originalPrice": 1299,
        "discount": 85,
        "affiliateLink": "https://www.libas.in/collections/cotton-kurtis"
      }
    ]
  },
  {
    "name": "Kurta Palazzo Pant Set",
    "description": "Matching ethnic kurta and palazzo/pants.",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 399,
        "originalPrice": 2499,
        "discount": 84,
        "affiliateLink": "https://www.myntra.com/kurta-palazzo-set-women"
      },
      {
        "name": "AJIO",
        "currentPrice": 399,
        "originalPrice": 2499,
        "discount": 84,
        "affiliateLink": "https://www.ajio.com/s/women-kurta-palazzo-set"
      },
      {
        "name": "Meesho",
        "currentPrice": 399,
        "originalPrice": 2499,
        "discount": 84,
        "affiliateLink": "https://www.meesho.com/kurta-palazzo-set/pl/x3w"
      }
    ]
  },
  {
    "name": "Chikankari Kurta Women",
    "description": "Handcrafted lucknowi chikankari work kurta.",
    "image": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 499,
        "originalPrice": 2999,
        "discount": 83,
        "affiliateLink": "https://www.myntra.com/chikankari-kurtas"
      },
      {
        "name": "Fabindia",
        "currentPrice": 499,
        "originalPrice": 2999,
        "discount": 83,
        "affiliateLink": "https://www.fabindia.com/women/ethnic-wear/kurtas"
      },
      {
        "name": "Amazon",
        "currentPrice": 499,
        "originalPrice": 2999,
        "discount": 83,
        "affiliateLink": "https://www.amazon.in/s?k=Chikankari+kurta+women"
      }
    ]
  },
  {
    "name": "Georgette Chiffon Saree",
    "description": "Lightweight transparent georgette chiffon saree.",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 299,
        "originalPrice": 4999,
        "discount": 94,
        "affiliateLink": "https://www.myntra.com/georgette-sarees"
      },
      {
        "name": "Flipkart",
        "currentPrice": 299,
        "originalPrice": 4999,
        "discount": 94,
        "affiliateLink": "https://www.flipkart.com/search?q=georgette+chiffon+saree"
      },
      {
        "name": "Amazon",
        "currentPrice": 299,
        "originalPrice": 4999,
        "discount": 94,
        "affiliateLink": "https://www.amazon.in/s?k=georgette+chiffon+saree"
      }
    ]
  },
  {
    "name": "Pre-Draped Ready-to-Wear Saree",
    "description": "One-minute pre-draped saree with stitched pleats.",
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 999,
        "originalPrice": 4999,
        "discount": 80,
        "affiliateLink": "https://www.myntra.com/ready-to-wear-saree"
      },
      {
        "name": "AJIO",
        "currentPrice": 999,
        "originalPrice": 4999,
        "discount": 80,
        "affiliateLink": "https://www.ajio.com/s/women-ready-to-wear-saree"
      },
      {
        "name": "HouseOfIndya",
        "currentPrice": 999,
        "originalPrice": 4999,
        "discount": 80,
        "affiliateLink": "https://www.houseofindya.com/pre-draped-sarees"
      }
    ]
  },
  {
    "name": "Oversized Hoodie Women",
    "description": "Warm and cozy drop-shoulder baggy hoodie.",
    "image": "https://images.unsplash.com/photo-1553808373-92f1019d1680?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 399,
        "originalPrice": 1999,
        "discount": 80,
        "affiliateLink": "https://www.myntra.com/oversized-hoodies-women"
      },
      {
        "name": "AJIO",
        "currentPrice": 399,
        "originalPrice": 1999,
        "discount": 80,
        "affiliateLink": "https://www.ajio.com/s/women-oversized-hoodies"
      },
      {
        "name": "Amazon",
        "currentPrice": 399,
        "originalPrice": 1999,
        "discount": 80,
        "affiliateLink": "https://www.amazon.in/s?k=oversized+hoodie+women"
      }
    ]
  },
  {
    "name": "Crop Denim Jacket Shrug",
    "description": "Distressed light-wash crop denim jacket.",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 399,
        "originalPrice": 2499,
        "discount": 84,
        "affiliateLink": "https://www.myntra.com/denim-shrugs-women"
      },
      {
        "name": "Flipkart",
        "currentPrice": 399,
        "originalPrice": 2499,
        "discount": 84,
        "affiliateLink": "https://www.flipkart.com/search?q=cropped+denim+jacket+women"
      },
      {
        "name": "Meesho",
        "currentPrice": 399,
        "originalPrice": 2499,
        "discount": 84,
        "affiliateLink": "https://www.meesho.com/search?q=crop+denim+jacket+women"
      }
    ]
  },
  {
    "name": "Longline Tasselled Shrug",
    "description": "Bohemian style thin longline shrug with tassels.",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 349,
        "originalPrice": 1499,
        "discount": 77,
        "affiliateLink": "https://www.myntra.com/longline-shrugs"
      },
      {
        "name": "Meesho",
        "currentPrice": 349,
        "originalPrice": 1499,
        "discount": 77,
        "affiliateLink": "https://www.meesho.com/longline-shrug/pl/x3w"
      },
      {
        "name": "Amazon",
        "currentPrice": 349,
        "originalPrice": 1499,
        "discount": 77,
        "affiliateLink": "https://www.amazon.in/s?k=longline+tasselled+shrug+women"
      }
    ]
  },
  {
    "name": "Oversized Blazer Women",
    "description": "Relaxed structure boyfriend oversized blazer.",
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 899,
        "originalPrice": 3499,
        "discount": 74,
        "affiliateLink": "https://www.myntra.com/oversized-blazers-women"
      },
      {
        "name": "AJIO",
        "currentPrice": 899,
        "originalPrice": 3499,
        "discount": 74,
        "affiliateLink": "https://www.ajio.com/s/women-oversized-blazers"
      },
      {
        "name": "Amazon",
        "currentPrice": 899,
        "originalPrice": 3499,
        "discount": 74,
        "affiliateLink": "https://www.amazon.in/s?k=women%27s+oversized+blazer"
      }
    ]
  },
  {
    "name": "Chunky Platform Sneakers",
    "description": "Trendy platform retro-style chunky sneakers.",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 700,
        "originalPrice": 15000,
        "discount": 95,
        "affiliateLink": "https://www.myntra.com/platform-sneakers-women"
      },
      {
        "name": "Flipkart",
        "currentPrice": 700,
        "originalPrice": 15000,
        "discount": 95,
        "affiliateLink": "https://www.flipkart.com/search?q=chunky+platform+sneakers+women"
      },
      {
        "name": "Puma",
        "currentPrice": 700,
        "originalPrice": 15000,
        "discount": 95,
        "affiliateLink": "https://in.puma.com/in/en/women/shoes/sneakers"
      }
    ]
  },
  {
    "name": "Platform Block Heels Women",
    "description": "Sturdy block heel sandals with ankle strap.",
    "image": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 499,
        "originalPrice": 3499,
        "discount": 86,
        "affiliateLink": "https://www.myntra.com/platform-block-heels-women"
      },
      {
        "name": "Amazon",
        "currentPrice": 499,
        "originalPrice": 3499,
        "discount": 86,
        "affiliateLink": "https://www.amazon.in/s?k=platform+block+heels+women"
      }
    ]
  },
  {
    "name": "Strappy Stiletto Heels Women",
    "description": "Elegant ankle-wrap lace up stiletto heels.",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 799,
        "originalPrice": 4999,
        "discount": 84,
        "affiliateLink": "https://www.myntra.com/strappy-heels-women"
      },
      {
        "name": "Amazon",
        "currentPrice": 799,
        "originalPrice": 4999,
        "discount": 84,
        "affiliateLink": "https://www.amazon.in/s?k=strappy+stiletto+heels+women"
      }
    ]
  },
  {
    "name": "White Casual Sneakers Women",
    "description": "Clean everyday basic white tennis sneakers.",
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 499,
        "originalPrice": 8000,
        "discount": 94,
        "affiliateLink": "https://www.myntra.com/white-sneakers-women"
      },
      {
        "name": "AJIO",
        "currentPrice": 499,
        "originalPrice": 8000,
        "discount": 94,
        "affiliateLink": "https://www.ajio.com/s/women-white-sneakers"
      },
      {
        "name": "Amazon",
        "currentPrice": 499,
        "originalPrice": 8000,
        "discount": 94,
        "affiliateLink": "https://www.amazon.in/s?k=white+casual+sneakers+women"
      }
    ]
  },
  {
    "name": "Crossbody Sling Bag Women",
    "description": "Versatile small crossbody leather/PU sling bag.",
    "image": "https://images.unsplash.com/photo-1553808373-92f1019d1680?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 199,
        "originalPrice": 3500,
        "discount": 94,
        "affiliateLink": "https://www.myntra.com/sling-bags-women"
      },
      {
        "name": "Amazon",
        "currentPrice": 199,
        "originalPrice": 3500,
        "discount": 94,
        "affiliateLink": "https://www.amazon.in/s?k=crossbody+sling+bag+women"
      },
      {
        "name": "Flipkart",
        "currentPrice": 199,
        "originalPrice": 3500,
        "discount": 94,
        "affiliateLink": "https://www.flipkart.com/search?q=crossbody+sling+bag+women"
      }
    ]
  },
  {
    "name": "Mini Micro Bag Women",
    "description": "Chic tiny micro-handbag statement piece.",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 399,
        "originalPrice": 2499,
        "discount": 84,
        "affiliateLink": "https://www.myntra.com/mini-bags-women"
      },
      {
        "name": "Miraggio",
        "currentPrice": 399,
        "originalPrice": 2499,
        "discount": 84,
        "affiliateLink": "https://www.miraggiolife.com/collections/mini-bags"
      },
      {
        "name": "Amazon",
        "currentPrice": 399,
        "originalPrice": 2499,
        "discount": 84,
        "affiliateLink": "https://www.amazon.in/s?k=mini+micro+bag+women"
      }
    ]
  },
  {
    "name": "Baguette Bag (Y2K)",
    "description": "Retro shoulder baguette bag with zip closure.",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 399,
        "originalPrice": 2999,
        "discount": 87,
        "affiliateLink": "https://www.myntra.com/baguette-bags"
      },
      {
        "name": "HM",
        "currentPrice": 399,
        "originalPrice": 2999,
        "discount": 87,
        "affiliateLink": "https://www2.hm.com/en_in/women/accessories/bags.html"
      },
      {
        "name": "Meesho",
        "currentPrice": 399,
        "originalPrice": 2999,
        "discount": 87,
        "affiliateLink": "https://www.meesho.com/search?q=baguette+bag+Y2K+women"
      }
    ]
  },
  {
    "name": "Belt Bag/Fanny Pack",
    "description": "Hands-free waist belt pouch/bag.",
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 299,
        "originalPrice": 1999,
        "discount": 85,
        "affiliateLink": "https://www.myntra.com/waist-pouch-women"
      },
      {
        "name": "Amazon",
        "currentPrice": 299,
        "originalPrice": 1999,
        "discount": 85,
        "affiliateLink": "https://www.amazon.in/s?k=belt+bag+fanny+pack+women"
      },
      {
        "name": "Fastrack",
        "currentPrice": 299,
        "originalPrice": 1999,
        "discount": 85,
        "affiliateLink": "https://www.fastrack.in/shop/bags/waist-bags"
      }
    ]
  },
  {
    "name": "Layered Chain Necklace Set",
    "description": "Multi-row golden/silver minimalist layered chain.",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 99,
        "originalPrice": 1499,
        "discount": 93,
        "affiliateLink": "https://www.myntra.com/layered-necklace"
      },
      {
        "name": "JokerWitch",
        "currentPrice": 99,
        "originalPrice": 1499,
        "discount": 93,
        "affiliateLink": "https://jokerandwitch.com/"
      },
      {
        "name": "Amazon",
        "currentPrice": 99,
        "originalPrice": 1499,
        "discount": 93,
        "affiliateLink": "https://www.amazon.in/s?k=layered+chain+necklace+set+women"
      }
    ]
  },
  {
    "name": "Chunky Hoops Statement Earrings",
    "description": "Bold lightweight thick hollow hoop earrings.",
    "image": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 79,
        "originalPrice": 999,
        "discount": 92,
        "affiliateLink": "https://www.myntra.com/chunky-hoops"
      },
      {
        "name": "Palmonas",
        "currentPrice": 79,
        "originalPrice": 999,
        "discount": 92,
        "affiliateLink": "https://palmonas.com/"
      },
      {
        "name": "Amazon",
        "currentPrice": 79,
        "originalPrice": 999,
        "discount": 92,
        "affiliateLink": "https://www.amazon.in/s?k=chunky+hoop+earrings+women"
      }
    ]
  },
  {
    "name": "Oxidized Silver Jhumkas Choker",
    "description": "Boho tribal style oxidized silver ethnic jewelry.",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 99,
        "originalPrice": 999,
        "discount": 90,
        "affiliateLink": "https://www.myntra.com/oxidized-jewellery"
      },
      {
        "name": "Meesho",
        "currentPrice": 99,
        "originalPrice": 999,
        "discount": 90,
        "affiliateLink": "https://www.meesho.com/oxidized-jewellery/pl/x3w"
      },
      {
        "name": "Amazon",
        "currentPrice": 99,
        "originalPrice": 999,
        "discount": 90,
        "affiliateLink": "https://www.amazon.in/s?k=oxidized+silver+jhumkas+choker+set"
      }
    ]
  },
  {
    "name": "Zodiac/Initial Personalized Jewelry",
    "description": "Custom alphabet/constellation pendant necklace.",
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 199,
        "originalPrice": 1499,
        "discount": 87,
        "affiliateLink": "https://www.myntra.com/zodiac-jewelry"
      },
      {
        "name": "GIVA",
        "currentPrice": 199,
        "originalPrice": 1499,
        "discount": 87,
        "affiliateLink": "https://www.giva.co/collections/zodiac-jewelry"
      },
      {
        "name": "Mesmerize",
        "currentPrice": 199,
        "originalPrice": 1499,
        "discount": 87,
        "affiliateLink": "https://www.mesmerizeindia.com/collections/zodiac-jewelry"
      }
    ]
  },
  {
    "name": "Claw Clips Set",
    "description": "Matte finish sturdy plastic hair claw clips.",
    "image": "https://images.unsplash.com/photo-1553808373-92f1019d1680?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 50,
        "originalPrice": 500,
        "discount": 90,
        "affiliateLink": "https://www.myntra.com/claw-clips"
      },
      {
        "name": "Amazon",
        "currentPrice": 50,
        "originalPrice": 500,
        "discount": 90,
        "affiliateLink": "https://www.amazon.in/s?k=claw+clips+set+women"
      },
      {
        "name": "Meesho",
        "currentPrice": 50,
        "originalPrice": 500,
        "discount": 90,
        "affiliateLink": "https://www.meesho.com/search?q=claw+clip+set+women"
      }
    ]
  },
  {
    "name": "Silk Satin Scrunchie Set",
    "description": "Hair-friendly soft premium satin scrunchies.",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 69,
        "originalPrice": 499,
        "discount": 86,
        "affiliateLink": "https://www.myntra.com/scrunchies"
      },
      {
        "name": "Amazon",
        "currentPrice": 69,
        "originalPrice": 499,
        "discount": 86,
        "affiliateLink": "https://www.amazon.in/s?k=silk+satin+scrunchie+set"
      },
      {
        "name": "SilvrBear",
        "currentPrice": 69,
        "originalPrice": 499,
        "discount": 86,
        "affiliateLink": "https://silvrbear.com/"
      }
    ]
  },
  {
    "name": "Retro Cat-Eye Sunglasses",
    "description": "Bold thick frame retro cat-eye sunglasses.",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 199,
        "originalPrice": 1500,
        "discount": 87,
        "affiliateLink": "https://www.myntra.com/cat-eye-sunglasses-women"
      },
      {
        "name": "Lenskart",
        "currentPrice": 199,
        "originalPrice": 1500,
        "discount": 87,
        "affiliateLink": "https://www.lenskart.com/sunglasses/cat-eye-sunglasses.html"
      },
      {
        "name": "Amazon",
        "currentPrice": 199,
        "originalPrice": 1500,
        "discount": 87,
        "affiliateLink": "https://www.amazon.in/s?k=retro+cat+eye+sunglasses+women"
      }
    ]
  },
  {
    "name": "Oversized Tinted Sunglasses",
    "description": "70s style gradient tinted large square sunglasses.",
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop",
    "category": "Fashion",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Myntra",
        "currentPrice": 249,
        "originalPrice": 2499,
        "discount": 90,
        "affiliateLink": "https://www.myntra.com/oversized-sunglasses-women"
      },
      {
        "name": "Lenskart",
        "currentPrice": 249,
        "originalPrice": 2499,
        "discount": 90,
        "affiliateLink": "https://www.lenskart.com/sunglasses.html"
      },
      {
        "name": "Amazon",
        "currentPrice": 249,
        "originalPrice": 2499,
        "discount": 90,
        "affiliateLink": "https://www.amazon.in/s?k=oversized+tinted+sunglasses+women"
      }
    ]
  },
  {
    "name": "Maybelline Super Stay Matte Ink",
    "description": "16-hour long-wear smudgeproof transferproof liquid lipstick.",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 499,
        "originalPrice": 799,
        "discount": 38,
        "affiliateLink": "https://www.nykaa.com/maybelline-new-york-super-stay-matte-ink-liquid-lipstick/p/292073"
      },
      {
        "name": "Amazon",
        "currentPrice": 499,
        "originalPrice": 799,
        "discount": 38,
        "affiliateLink": "https://www.amazon.in/s?k=Maybelline+Super+Stay+Matte+Ink"
      }
    ]
  },
  {
    "name": "SUGAR Cosmetics Matte As Hell Crayon",
    "description": "Highly pigmented velvet matte crayon lipstick.",
    "image": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "SUGAR",
        "currentPrice": 549,
        "originalPrice": 799,
        "discount": 31,
        "affiliateLink": "https://in.sugarcosmetics.com"
      },
      {
        "name": "Flipkart",
        "currentPrice": 549,
        "originalPrice": 799,
        "discount": 31,
        "affiliateLink": "https://www.flipkart.com/search?q=SUGAR+Matte+As+Hell+Crayon+Lipstick"
      },
      {
        "name": "Purplle",
        "currentPrice": 549,
        "originalPrice": 799,
        "discount": 31,
        "affiliateLink": "https://www.purplle.com/brand/sugar-cosmetics"
      }
    ]
  },
  {
    "name": "SUGAR Cosmetics Smudge Me Not",
    "description": "Ultra-matte transfer-proof liquid lipstick.",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 499,
        "originalPrice": 799,
        "discount": 38,
        "affiliateLink": "https://www.nykaa.com/sugar-cosmetics-smudge-me-not-liquid-lipstick/p/297989"
      },
      {
        "name": "SUGAR",
        "currentPrice": 499,
        "originalPrice": 799,
        "discount": 38,
        "affiliateLink": "https://in.sugarcosmetics.com"
      }
    ]
  },
  {
    "name": "Nykaa Matte To Last Liquid Lipstick",
    "description": "Curated liquid lip colors suited for Indian skin tones.",
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 399,
        "originalPrice": 549,
        "discount": 27,
        "affiliateLink": "https://www.nykaa.com/nykaa-matte-to-last-transferproof-liquid-lipstick/p/463085"
      }
    ]
  },
  {
    "name": "Nykaa So Creme Creamy Matte",
    "description": "Comfortable daily wear creamy bullet lipstick.",
    "image": "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 399,
        "originalPrice": 499,
        "discount": 20,
        "affiliateLink": "https://www.nykaa.com/nykaa-so-creme-creamy-matte-lipstick/p/449270"
      }
    ]
  },
  {
    "name": "Swiss Beauty Pure Matte Mousse",
    "description": "Lightweight whipped formula velvety matte mousse lipstick.",
    "image": "https://images.unsplash.com/photo-1631730359575-38e4755d772b?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 249,
        "originalPrice": 399,
        "discount": 38,
        "affiliateLink": "https://www.nykaa.com/swiss-beauty-mudpie-mousse-lipstick/p/7932937"
      },
      {
        "name": "Myntra",
        "currentPrice": 249,
        "originalPrice": 399,
        "discount": 38,
        "affiliateLink": "https://www.myntra.com/search?q=swiss+beauty+mudpie+mousse+lipstick"
      }
    ]
  },
  {
    "name": "MARS Love Track Velvet Lip Tint",
    "description": "Featherlight lip and cheek tint with velvet finish.",
    "image": "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 199,
        "originalPrice": 299,
        "discount": 33,
        "affiliateLink": "https://www.nykaa.com/mars-love-track-velvet-lip-tint/p/7617795"
      },
      {
        "name": "MARS",
        "currentPrice": 199,
        "originalPrice": 299,
        "discount": 33,
        "affiliateLink": "https://marscosmetics.in/products/love-track-velvet-lip-tint"
      }
    ]
  },
  {
    "name": "MARS Candylicious Sheer Lip Gloss",
    "description": "Non-sticky glass-like high-shine lip gloss.",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 149,
        "originalPrice": 249,
        "discount": 40,
        "affiliateLink": "https://www.nykaa.com/mars-candylicious-sheer-lip-gloss/p/7625011"
      },
      {
        "name": "MARS",
        "currentPrice": 149,
        "originalPrice": 249,
        "discount": 40,
        "affiliateLink": "https://marscosmetics.in"
      }
    ]
  },
  {
    "name": "Swiss Beauty Moist Heist Lip Oil",
    "description": "Hydrating tinted gloss oil for juicy lips.",
    "image": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 249,
        "originalPrice": 399,
        "discount": 38,
        "affiliateLink": "https://www.nykaa.com/swiss-beauty-moist-heist-shimmer-lip-oil/p/8540521"
      },
      {
        "name": "SwissBeauty",
        "currentPrice": 249,
        "originalPrice": 399,
        "discount": 38,
        "affiliateLink": "https://www.swissbeauty.in"
      }
    ]
  },
  {
    "name": "Rom&nd Juicy Lasting Tint",
    "description": "Viral K-beauty glassy finish long-lasting lip stain.",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 699,
        "originalPrice": 950,
        "discount": 26,
        "affiliateLink": "https://www.nykaa.com/romand-juicy-lasting-tint/p/5151970"
      },
      {
        "name": "Flipkart",
        "currentPrice": 699,
        "originalPrice": 950,
        "discount": 26,
        "affiliateLink": "https://www.flipkart.com/search?q=Romand+Juicy+Lasting+Tint"
      }
    ]
  },
  {
    "name": "Etude House Water Gel Tint",
    "description": "Refreshing watery fruit stain lip and cheek tint.",
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 550,
        "originalPrice": 750,
        "discount": 27,
        "affiliateLink": "https://www.nykaa.com/etude-dear-darling-water-gel-lip-and-cheek-tint/p/5118419"
      },
      {
        "name": "Tira",
        "currentPrice": 550,
        "originalPrice": 750,
        "discount": 27,
        "affiliateLink": "https://www.tirabeauty.com"
      }
    ]
  },
  {
    "name": "Lakme Extraordin-airy Lip Mousse",
    "description": "Aero-whipped matte lip mousse.",
    "image": "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 399,
        "originalPrice": 599,
        "discount": 33,
        "affiliateLink": "https://www.nykaa.com/lakme-xtraordin-airy-lip-mousse/p/5847901"
      },
      {
        "name": "Tira",
        "currentPrice": 399,
        "originalPrice": 599,
        "discount": 33,
        "affiliateLink": "https://www.tirabeauty.com"
      }
    ]
  },
  {
    "name": "Maybelline Fit Me Matte Foundation",
    "description": "India's #1 liquid foundation for pores and oil control.",
    "image": "https://images.unsplash.com/photo-1631730359575-38e4755d772b?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 357,
        "originalPrice": 649,
        "discount": 45,
        "affiliateLink": "https://www.nykaa.com/maybelline-new-york-fit-me-matte-poreless-liquid-foundation/p/297961"
      },
      {
        "name": "Maybelline",
        "currentPrice": 357,
        "originalPrice": 649,
        "discount": 45,
        "affiliateLink": "https://www.maybelline.co.in"
      }
    ]
  },
  {
    "name": "Maybelline Fit Me Compact Powder",
    "description": "Mattifying face compact powder with SPF 28.",
    "image": "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 299,
        "originalPrice": 449,
        "discount": 33,
        "affiliateLink": "https://www.nykaa.com/maybelline-fit-me-compact-powder/p/350008"
      },
      {
        "name": "Flipkart",
        "currentPrice": 299,
        "originalPrice": 449,
        "discount": 33,
        "affiliateLink": "https://www.flipkart.com/search?q=Maybelline+Fit+Me+Compact+Powder"
      }
    ]
  },
  {
    "name": "Maybelline Instant Age Rewind Concealer",
    "description": "Global cult favorite under-eye treatment concealer.",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 419,
        "originalPrice": 699,
        "discount": 40,
        "affiliateLink": "https://www.nykaa.com/maybelline-new-york-instant-age-rewind-eraser-concealer/p/13503"
      },
      {
        "name": "Purplle",
        "currentPrice": 419,
        "originalPrice": 699,
        "discount": 40,
        "affiliateLink": "https://www.purplle.com/search?q=maybelline+instant+age+rewind"
      }
    ]
  },
  {
    "name": "Maybelline Fit Me Concealer",
    "description": "Natural-looking medium coverage daily liquid concealer.",
    "image": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 449,
        "originalPrice": 599,
        "discount": 25,
        "affiliateLink": "https://www.nykaa.com/maybelline-new-york-fit-me-concealer/p/298002"
      },
      {
        "name": "Tira",
        "currentPrice": 449,
        "originalPrice": 599,
        "discount": 25,
        "affiliateLink": "https://www.tirabeauty.com"
      }
    ]
  },
  {
    "name": "Lakme Mattereal Mousse Foundation",
    "description": "Featherlight matte mousse foundation for natural look.",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 599,
        "originalPrice": 799,
        "discount": 25,
        "affiliateLink": "https://www.nykaa.com/lakme-xtraordin-airy-mattereal-mousse-foundation/p/7670085"
      },
      {
        "name": "Flipkart",
        "currentPrice": 599,
        "originalPrice": 799,
        "discount": 25,
        "affiliateLink": "https://www.flipkart.com/search?q=Lakme+Mattereal+Mousse+Foundation"
      }
    ]
  },
  {
    "name": "Insight Cosmetics 5-in-1 Foundation",
    "description": "Ultra-affordable multifunctional serum foundation.",
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 299,
        "originalPrice": 399,
        "discount": 25,
        "affiliateLink": "https://www.nykaa.com/insight-cosmetics-skin-tint-5-in-1-multifunctional-serum-foundation/p/7838461"
      }
    ]
  },
  {
    "name": "TIRTIR Mask Fit Cushion Foundation",
    "description": "Viral K-beauty high-coverage mask-proof cushion.",
    "image": "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 1200,
        "originalPrice": 1800,
        "discount": 33,
        "affiliateLink": "https://www.nykaa.com/tirtir-mask-fit-red-cushion-foundation/p/8156989"
      },
      {
        "name": "Tira",
        "currentPrice": 1200,
        "originalPrice": 1800,
        "discount": 33,
        "affiliateLink": "https://www.tirabeauty.com/brand/tirtir"
      }
    ]
  },
  {
    "name": "Lakme CC Cream",
    "description": "Complexion care cream with light coverage and SPF.",
    "image": "https://images.unsplash.com/photo-1631730359575-38e4755d772b?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 249,
        "originalPrice": 399,
        "discount": 38,
        "affiliateLink": "https://www.nykaa.com/lakme-9-to-5-cc-cream/p/13496"
      },
      {
        "name": "Flipkart",
        "currentPrice": 249,
        "originalPrice": 399,
        "discount": 38,
        "affiliateLink": "https://www.flipkart.com/search?q=Lakme+CC+Cream"
      }
    ]
  },
  {
    "name": "Mamaearth CC Serum",
    "description": "Natural glowing finish CC serum for lightweight daily wear.",
    "image": "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 499,
        "originalPrice": 699,
        "discount": 29,
        "affiliateLink": "https://www.nykaa.com/mamaearth-hydra-glow-cc-serum/p/6962553"
      },
      {
        "name": "Mamaearth",
        "currentPrice": 499,
        "originalPrice": 699,
        "discount": 29,
        "affiliateLink": "https://mamaearth.in"
      }
    ]
  },
  {
    "name": "NY Bae Foundation Concealer Stick",
    "description": "Easy to use travel-friendly budget base stick.",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Purplle",
        "currentPrice": 150,
        "originalPrice": 300,
        "discount": 50,
        "affiliateLink": "https://www.purplle.com/brand/ny-bae"
      },
      {
        "name": "Flipkart",
        "currentPrice": 150,
        "originalPrice": 300,
        "discount": 50,
        "affiliateLink": "https://www.flipkart.com/search?q=NY+Bae+Foundation+Concealer+Stick"
      }
    ]
  },
  {
    "name": "Lakme Eyeconic Kajal",
    "description": "India's #1 smudgeproof waterproof 24hr kajal.",
    "image": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 225,
        "originalPrice": 350,
        "discount": 36,
        "affiliateLink": "https://www.nykaa.com/lakme-eyeconic-kajal/p/13504"
      },
      {
        "name": "Lakme",
        "currentPrice": 225,
        "originalPrice": 350,
        "discount": 36,
        "affiliateLink": "https://www.lakmeindia.com"
      }
    ]
  },
  {
    "name": "Maybelline The Colossal Kajal",
    "description": "Deep black, aloe vera enriched soothing kajal.",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 199,
        "originalPrice": 350,
        "discount": 43,
        "affiliateLink": "https://www.nykaa.com/maybelline-new-york-the-colossal-kajal/p/13508"
      },
      {
        "name": "Flipkart",
        "currentPrice": 199,
        "originalPrice": 350,
        "discount": 43,
        "affiliateLink": "https://www.flipkart.com/search?q=Maybelline+Colossal+Kajal"
      }
    ]
  },
  {
    "name": "SUGAR Graphic Jam 36HR Eyeliner",
    "description": "Jet-black long-lasting felt-tip pen eyeliner.",
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 499,
        "originalPrice": 699,
        "discount": 29,
        "affiliateLink": "https://www.nykaa.com/sugar-cosmetics-graphic-jam-36hr-eyeliner/p/6427961"
      },
      {
        "name": "SUGAR",
        "currentPrice": 499,
        "originalPrice": 699,
        "discount": 29,
        "affiliateLink": "https://in.sugarcosmetics.com"
      }
    ]
  },
  {
    "name": "Lakme 9 to 5 Liquid Eyeliner",
    "description": "Classic precision brush liquid eyeliner.",
    "image": "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 299,
        "originalPrice": 450,
        "discount": 34,
        "affiliateLink": "https://www.nykaa.com/lakme-9-to-5-eyeconic-liquid-eyeliner/p/571913"
      },
      {
        "name": "Flipkart",
        "currentPrice": 299,
        "originalPrice": 450,
        "discount": 34,
        "affiliateLink": "https://www.flipkart.com/search?q=Lakme+9+to+5+Eyeconic+Liquid+Eyeliner"
      }
    ]
  },
  {
    "name": "Maybelline Sky High Mascara",
    "description": "Viral sensational lash length and volume mascara.",
    "image": "https://images.unsplash.com/photo-1631730359575-38e4755d772b?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 799,
        "originalPrice": 999,
        "discount": 20,
        "affiliateLink": "https://www.nykaa.com/maybelline-lash-sensational-sky-high-mascara/p/4979441"
      },
      {
        "name": "Tira",
        "currentPrice": 799,
        "originalPrice": 999,
        "discount": 20,
        "affiliateLink": "https://www.tirabeauty.com"
      }
    ]
  },
  {
    "name": "Maybelline Hypercurl Mascara",
    "description": "Waterproof curl lock gel formula mascara.",
    "image": "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 399,
        "originalPrice": 599,
        "discount": 33,
        "affiliateLink": "https://www.nykaa.com/maybelline-new-york-the-colossal-volume-express-mascara/p/16704"
      },
      {
        "name": "Flipkart",
        "currentPrice": 399,
        "originalPrice": 599,
        "discount": 33,
        "affiliateLink": "https://www.flipkart.com/search?q=Maybelline+Hypercurl+Mascara"
      }
    ]
  },
  {
    "name": "MARS Double Trouble Mascara",
    "description": "Double brush volume and lengthening budget mascara.",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 199,
        "originalPrice": 299,
        "discount": 33,
        "affiliateLink": "https://www.nykaa.com/mars-double-trouble-mascara/p/7617837"
      },
      {
        "name": "Purplle",
        "currentPrice": 199,
        "originalPrice": 299,
        "discount": 33,
        "affiliateLink": "https://www.purplle.com"
      }
    ]
  },
  {
    "name": "Swiss Beauty Ultimate Palette",
    "description": "Highly pigmented 9-shade eyeshadow palette.",
    "image": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 349,
        "originalPrice": 599,
        "discount": 42,
        "affiliateLink": "https://www.nykaa.com/swiss-beauty-ultimate-eyeshadow-palette/p/449265"
      },
      {
        "name": "Flipkart",
        "currentPrice": 349,
        "originalPrice": 599,
        "discount": 42,
        "affiliateLink": "https://www.flipkart.com/search?q=Swiss+Beauty+Ultimate+Eyeshadow+Palette"
      }
    ]
  },
  {
    "name": "MARS Fantasy/Northern Lights Palette",
    "description": "Vibrant travel-friendly multi-shade eyeshadow palette.",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 249,
        "originalPrice": 399,
        "discount": 38,
        "affiliateLink": "https://www.nykaa.com/mars-fantasy-15-eyeshadow-palette/p/7618251"
      },
      {
        "name": "MARS",
        "currentPrice": 249,
        "originalPrice": 399,
        "discount": 38,
        "affiliateLink": "https://marscosmetics.in"
      }
    ]
  },
  {
    "name": "Swiss Beauty Eyebrow Pencil",
    "description": "Micro precision natural-looking defined brow pencil.",
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 199,
        "originalPrice": 349,
        "discount": 43,
        "affiliateLink": "https://www.nykaa.com/swiss-beauty-micro-precision-eyebrow-pencil/p/6236581"
      },
      {
        "name": "Tira",
        "currentPrice": 199,
        "originalPrice": 349,
        "discount": 43,
        "affiliateLink": "https://www.tirabeauty.com"
      }
    ]
  },
  {
    "name": "SUGAR Arch Arrival Brow Definer",
    "description": "Double-ended spoolie and angled tip brow pencil.",
    "image": "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 499,
        "originalPrice": 699,
        "discount": 29,
        "affiliateLink": "https://www.nykaa.com/sugar-cosmetics-arch-arrival-brow-definer/p/1055673"
      },
      {
        "name": "SUGAR",
        "currentPrice": 499,
        "originalPrice": 699,
        "discount": 29,
        "affiliateLink": "https://in.sugarcosmetics.com"
      }
    ]
  },
  {
    "name": "MARS Sugar Rush Liquid Blush",
    "description": "Highly blendable dewy liquid blush.",
    "image": "https://images.unsplash.com/photo-1631730359575-38e4755d772b?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 199,
        "originalPrice": 299,
        "discount": 33,
        "affiliateLink": "https://www.nykaa.com/mars-sugar-rush-liquid-blush/p/7618223"
      },
      {
        "name": "Purplle",
        "currentPrice": 199,
        "originalPrice": 299,
        "discount": 33,
        "affiliateLink": "https://www.purplle.com"
      }
    ]
  },
  {
    "name": "FAE Beauty Lush Blush",
    "description": "Cream-to-powder buildable multi-use blush.",
    "image": "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 499,
        "originalPrice": 699,
        "discount": 29,
        "affiliateLink": "https://www.nykaa.com/fae-beauty-lush-blush/p/6895345"
      },
      {
        "name": "FAE",
        "currentPrice": 499,
        "originalPrice": 699,
        "discount": 29,
        "affiliateLink": "https://faebeauty.in"
      }
    ]
  },
  {
    "name": "Swiss Beauty Cream It Up Blusher",
    "description": "Smooth moisturizing cream blush.",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 249,
        "originalPrice": 399,
        "discount": 38,
        "affiliateLink": "https://www.nykaa.com/swiss-beauty-cream-it-up-blusher/p/7932955"
      },
      {
        "name": "Tira",
        "currentPrice": 249,
        "originalPrice": 399,
        "discount": 38,
        "affiliateLink": "https://www.tirabeauty.com"
      }
    ]
  },
  {
    "name": "Insight Cosmetics Lip & Cheek Tint",
    "description": "Super creamy natural skin finish multipurpose tint.",
    "image": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 149,
        "originalPrice": 250,
        "discount": 40,
        "affiliateLink": "https://www.nykaa.com/insight-cosmetics-lip-and-cheek-tint/p/6200917"
      },
      {
        "name": "Insight",
        "currentPrice": 149,
        "originalPrice": 250,
        "discount": 40,
        "affiliateLink": "https://insightcosmetics.in"
      }
    ]
  },
  {
    "name": "SUGAR Contour De Force Palette",
    "description": "3-in-1 contour, highlighter, and blush face palette.",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 799,
        "originalPrice": 999,
        "discount": 20,
        "affiliateLink": "https://www.nykaa.com/sugar-cosmetics-contour-de-force-face-palette/p/1055749"
      },
      {
        "name": "SUGAR",
        "currentPrice": 799,
        "originalPrice": 999,
        "discount": 20,
        "affiliateLink": "https://in.sugarcosmetics.com"
      }
    ]
  },
  {
    "name": "Faces Canada Strobe Cream",
    "description": "Lit-from-within glowing makeup base highlighter.",
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 399,
        "originalPrice": 599,
        "discount": 33,
        "affiliateLink": "https://www.nykaa.com/faces-canada-strobe-cream/p/520957"
      },
      {
        "name": "FacesCanada",
        "currentPrice": 399,
        "originalPrice": 599,
        "discount": 33,
        "affiliateLink": "https://www.facescanada.com"
      }
    ]
  },
  {
    "name": "e.l.f. Power Grip Primer",
    "description": "Viral gel-based hydrating face primer.",
    "image": "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 750,
        "originalPrice": 950,
        "discount": 21,
        "affiliateLink": "https://www.nykaa.com/e-l-f-cosmetics-power-grip-primer/p/5926293"
      }
    ]
  },
  {
    "name": "Lakme Unreal Undercover Primer",
    "description": "Gel-based pore-blurring face makeup primer.",
    "image": "https://images.unsplash.com/photo-1631730359575-38e4755d772b?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 449,
        "originalPrice": 649,
        "discount": 31,
        "affiliateLink": "https://www.nykaa.com/lakme-unreal-undercover-gel-primer/p/6762361"
      },
      {
        "name": "Lakme",
        "currentPrice": 449,
        "originalPrice": 649,
        "discount": 31,
        "affiliateLink": "https://www.lakmeindia.com"
      }
    ]
  },
  {
    "name": "Swiss Beauty Highlighting Primer",
    "description": "Highlighting makeup base with pearl particles.",
    "image": "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 249,
        "originalPrice": 399,
        "discount": 38,
        "affiliateLink": "https://www.nykaa.com/swiss-beauty-real-makeup-base-highlighting-primer/p/449249"
      },
      {
        "name": "SwissBeauty",
        "currentPrice": 249,
        "originalPrice": 399,
        "discount": 38,
        "affiliateLink": "https://www.swissbeauty.in"
      }
    ]
  },
  {
    "name": "PAC Micro Finish Fixing Spray",
    "description": "Microfine mist setting spray to lock makeup.",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 450,
        "originalPrice": 650,
        "discount": 31,
        "affiliateLink": "https://www.nykaa.com/pac-micro-finish-makeup-fixer/p/479861"
      },
      {
        "name": "PAC",
        "currentPrice": 450,
        "originalPrice": 650,
        "discount": 31,
        "affiliateLink": "https://www.paccosmetics.com"
      }
    ]
  },
  {
    "name": "Swiss Beauty Prep Set Matte Spray",
    "description": "3-in-1 prep, set, and refresh mattifying spray.",
    "image": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 249,
        "originalPrice": 399,
        "discount": 38,
        "affiliateLink": "https://www.nykaa.com/swiss-beauty-select-prep-set-matte-3-in-1-micro-finish-spray/p/8181229"
      },
      {
        "name": "SwissBeauty",
        "currentPrice": 249,
        "originalPrice": 399,
        "discount": 38,
        "affiliateLink": "https://www.swissbeauty.in"
      }
    ]
  },
  {
    "name": "Faces Canada Nail Polish Gel",
    "description": "High-shine long-lasting gel nail enamel.",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 149,
        "originalPrice": 299,
        "discount": 50,
        "affiliateLink": "https://www.nykaa.com/brands/faces-canada/nail-polish/c/8270"
      },
      {
        "name": "FacesCanada",
        "currentPrice": 149,
        "originalPrice": 299,
        "discount": 50,
        "affiliateLink": "https://www.facescanada.com"
      }
    ]
  },
  {
    "name": "Nykaa Nail Lacquer",
    "description": "Massive range of glossy, matte, and glitter nail polish.",
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 199,
        "originalPrice": 299,
        "discount": 33,
        "affiliateLink": "https://www.nykaa.com/makeup/nails/nail-polish/c/249?f=Brand_filter%3ANykaa+Cosmetics"
      }
    ]
  },
  {
    "name": "NY Bae Nail Polish",
    "description": "Ultra-affordable vibrant quick-dry nail paint.",
    "image": "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Purplle",
        "currentPrice": 99,
        "originalPrice": 199,
        "discount": 50,
        "affiliateLink": "https://www.purplle.com/brand/ny-bae"
      },
      {
        "name": "Flipkart",
        "currentPrice": 99,
        "originalPrice": 199,
        "discount": 50,
        "affiliateLink": "https://www.flipkart.com/search?q=NY+Bae+Nail+Polish"
      }
    ]
  },
  {
    "name": "Garnier Micellar Water Pink",
    "description": "Gentle makeup remover for sensitive skin.",
    "image": "https://images.unsplash.com/photo-1631730359575-38e4755d772b?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 299,
        "originalPrice": 499,
        "discount": 40,
        "affiliateLink": "https://www.nykaa.com/garnier-micellar-cleansing-water-for-sensitive-skin/p/297523"
      },
      {
        "name": "Garnier",
        "currentPrice": 299,
        "originalPrice": 499,
        "discount": 40,
        "affiliateLink": "https://www.garnier.in"
      }
    ]
  },
  {
    "name": "Revolution IRL Filter Concealer",
    "description": "16-hour wear high-coverage filter finish concealer.",
    "image": "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 550,
        "originalPrice": 750,
        "discount": 27,
        "affiliateLink": "https://www.nykaa.com/makeup-revolution-irl-filter-finish-concealer/p/7558961"
      },
      {
        "name": "Tira",
        "currentPrice": 550,
        "originalPrice": 750,
        "discount": 27,
        "affiliateLink": "https://www.tirabeauty.com"
      }
    ]
  },
  {
    "name": "Maybelline Lumi-Matte Foundation",
    "description": "Air-soft luminous matte longwear foundation.",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop",
    "category": "Makeup",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 649,
        "originalPrice": 899,
        "discount": 28,
        "affiliateLink": "https://www.nykaa.com/maybelline-super-stay-lumi-matte-foundation/p/8350197"
      },
      {
        "name": "Maybelline",
        "currentPrice": 649,
        "originalPrice": 899,
        "discount": 28,
        "affiliateLink": "https://www.maybelline.co.in"
      }
    ]
  },
  {
    "name": "Dot & Key Vitamin C+E Sunscreen",
    "description": "Broad-spectrum SPF 50 PA++++ super bright sunscreen.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "DotKey",
        "currentPrice": 350,
        "originalPrice": 500,
        "discount": 30,
        "affiliateLink": "https://www.dotandkey.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 350,
        "originalPrice": 500,
        "discount": 30,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Dot+%26+Key+Vitamin+C%2BE+Sunscreen"
      }
    ]
  },
  {
    "name": "Beauty of Joseon Relief Sun",
    "description": "Organic rice & grain fermented K-beauty sunscreen.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 1500,
        "originalPrice": 1800,
        "discount": 17,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Beauty+of+Joseon+Relief+Sun"
      },
      {
        "name": "BeautyBarn",
        "currentPrice": 1500,
        "originalPrice": 1800,
        "discount": 17,
        "affiliateLink": "https://www.beautybarn.in"
      }
    ]
  },
  {
    "name": "Aqualogica Glow+ Dewy Gel SPF 50",
    "description": "Hydrating papaya & vitamin C infused sunscreen gel.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Aqualogica",
        "currentPrice": 400,
        "originalPrice": 509,
        "discount": 21,
        "affiliateLink": "https://aqualogica.in"
      },
      {
        "name": "Nykaa",
        "currentPrice": 400,
        "originalPrice": 509,
        "discount": 21,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Aqualogica+Glow%2B+Sunscreen"
      }
    ]
  },
  {
    "name": "Re'equil Ultra Matte Sunscreen",
    "description": "Water-resistant matte finish dry touch sunscreen gel.",
    "image": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Reequil",
        "currentPrice": 580,
        "originalPrice": 645,
        "discount": 10,
        "affiliateLink": "https://reequil.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 580,
        "originalPrice": 645,
        "discount": 10,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Re%27equil+Ultra+Matte+Sunscreen"
      }
    ]
  },
  {
    "name": "Deconstruct Gel Sunscreen SPF 50",
    "description": "No white-cast lightweight chemical sunscreen gel.",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Deconstruct",
        "currentPrice": 379,
        "originalPrice": 399,
        "discount": 5,
        "affiliateLink": "https://thedeconstruct.in"
      },
      {
        "name": "Nykaa",
        "currentPrice": 379,
        "originalPrice": 399,
        "discount": 5,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Deconstruct+Gel+Sunscreen"
      }
    ]
  },
  {
    "name": "Minimalist Multi-Vitamin Sunscreen",
    "description": "SPF 50 PA++++ sunscreen loaded with vitamins A, B, C, E.",
    "image": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Minimalist",
        "currentPrice": 450,
        "originalPrice": 550,
        "discount": 18,
        "affiliateLink": "https://beminimalist.co"
      },
      {
        "name": "Nykaa",
        "currentPrice": 450,
        "originalPrice": 550,
        "discount": 18,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Minimalist+SPF+50+Sunscreen"
      }
    ]
  },
  {
    "name": "Neutrogena Ultra Sheer SPF 50+",
    "description": "Dermatologist-tested dry-touch helioplex sunscreen.",
    "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 450,
        "originalPrice": 650,
        "discount": 31,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Neutrogena+Ultra+Sheer"
      },
      {
        "name": "Amazon",
        "currentPrice": 450,
        "originalPrice": 650,
        "discount": 31,
        "affiliateLink": "https://www.amazon.in/s?k=Neutrogena+Ultra+Sheer"
      }
    ]
  },
  {
    "name": "The Derma Co Hyaluronic Sunscreen Gel",
    "description": "1% hyaluronic acid and active hydration SPF 50 sunscreen.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "DermaCo",
        "currentPrice": 400,
        "originalPrice": 600,
        "discount": 33,
        "affiliateLink": "https://thedermaco.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 400,
        "originalPrice": 600,
        "discount": 33,
        "affiliateLink": "https://www.nykaa.com/search/result?q=The+Derma+Co+Hyaluronic+Sunscreen"
      }
    ]
  },
  {
    "name": "Foxtale Glow Sunscreen SPF 50",
    "description": "Niacinamide enriched glowing makeup primer sunscreen.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Foxtale",
        "currentPrice": 319,
        "originalPrice": 436,
        "discount": 27,
        "affiliateLink": "https://foxtale.in"
      },
      {
        "name": "Nykaa",
        "currentPrice": 319,
        "originalPrice": 436,
        "discount": 27,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Foxtale+Glow+Sunscreen"
      }
    ]
  },
  {
    "name": "Dot & Key Strawberry Tinted SPF 50+",
    "description": "Tinted sun protection with strawberry dew glow.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "DotKey",
        "currentPrice": 350,
        "originalPrice": 499,
        "discount": 30,
        "affiliateLink": "https://www.dotandkey.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 350,
        "originalPrice": 499,
        "discount": 30,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Dot+%26+Key+Strawberry+Dew+Tinted+Sunscreen"
      }
    ]
  },
  {
    "name": "Minimalist 10% Niacinamide Zinc",
    "description": "India's bestselling acne marks & sebum control serum.",
    "image": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Minimalist",
        "currentPrice": 500,
        "originalPrice": 600,
        "discount": 17,
        "affiliateLink": "https://beminimalist.co"
      },
      {
        "name": "Nykaa",
        "currentPrice": 500,
        "originalPrice": 600,
        "discount": 17,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Minimalist+10%25+Niacinamide"
      }
    ]
  },
  {
    "name": "The Ordinary Niacinamide 10%",
    "description": "Global holy grail zinc PCA pore-refining serum.",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 600,
        "originalPrice": 650,
        "discount": 8,
        "affiliateLink": "https://www.nykaa.com/search/result?q=The+Ordinary+Niacinamide+10%25"
      },
      {
        "name": "Tira",
        "currentPrice": 600,
        "originalPrice": 650,
        "discount": 8,
        "affiliateLink": "https://www.tirabeauty.com"
      }
    ]
  },
  {
    "name": "Minimalist 10% Vitamin C Serum",
    "description": "Brightening serum with stable ethyl ascorbic acid.",
    "image": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Minimalist",
        "currentPrice": 550,
        "originalPrice": 650,
        "discount": 15,
        "affiliateLink": "https://beminimalist.co"
      },
      {
        "name": "Nykaa",
        "currentPrice": 550,
        "originalPrice": 650,
        "discount": 15,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Minimalist+10%25+Vitamin+C+Serum"
      }
    ]
  },
  {
    "name": "Minimalist 2% Salicylic Acid",
    "description": "Deep pore-cleansing BHA serum for blackheads and acne.",
    "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Minimalist",
        "currentPrice": 500,
        "originalPrice": 600,
        "discount": 17,
        "affiliateLink": "https://beminimalist.co"
      },
      {
        "name": "Nykaa",
        "currentPrice": 500,
        "originalPrice": 600,
        "discount": 17,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Minimalist+2%25+Salicylic+Acid+Serum"
      }
    ]
  },
  {
    "name": "The Derma Co 10% Vitamin C",
    "description": "3-O-ethyl ascorbic acid glowing and dark spot reduction serum.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "DermaCo",
        "currentPrice": 600,
        "originalPrice": 800,
        "discount": 25,
        "affiliateLink": "https://thedermaco.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 600,
        "originalPrice": 800,
        "discount": 25,
        "affiliateLink": "https://www.nykaa.com/search/result?q=The+Derma+Co+10%25+Vitamin+C"
      }
    ]
  },
  {
    "name": "Plum Mandarin 15% Vitamin C",
    "description": "High-concentration glow active booster serum.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Plum",
        "currentPrice": 550,
        "originalPrice": 700,
        "discount": 21,
        "affiliateLink": "https://plumgoodness.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 550,
        "originalPrice": 700,
        "discount": 21,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Plum+15%25+Vitamin+C+Serum"
      }
    ]
  },
  {
    "name": "Deconstruct 10% Vitamin C",
    "description": "Brightening active face serum with ferulic acid.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 639,
        "originalPrice": 799,
        "discount": 20,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Deconstruct+10%25+Vitamin+C+Serum"
      },
      {
        "name": "Tira",
        "currentPrice": 639,
        "originalPrice": 799,
        "discount": 20,
        "affiliateLink": "https://www.tirabeauty.com"
      }
    ]
  },
  {
    "name": "Foxtale Vitamin C Serum",
    "description": "L-ascorbic acid and vitamin E stable glow serum.",
    "image": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Foxtale",
        "currentPrice": 600,
        "originalPrice": 645,
        "discount": 7,
        "affiliateLink": "https://foxtale.in"
      },
      {
        "name": "Nykaa",
        "currentPrice": 600,
        "originalPrice": 645,
        "discount": 7,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Foxtale+Vitamin+C+Serum"
      }
    ]
  },
  {
    "name": "The Derma Co 2% Kojic Acid",
    "description": "Alpha arbutin skin pigmentation and melasma treatment serum.",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "DermaCo",
        "currentPrice": 400,
        "originalPrice": 550,
        "discount": 27,
        "affiliateLink": "https://thedermaco.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 400,
        "originalPrice": 550,
        "discount": 27,
        "affiliateLink": "https://www.nykaa.com/search/result?q=The+Derma+Co+2%25+Kojic+Acid+Serum"
      }
    ]
  },
  {
    "name": "Foxtale 12% Niacinamide Serum",
    "description": "Clarifying spot correction and barrier strengthening serum.",
    "image": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Foxtale",
        "currentPrice": 242,
        "originalPrice": 645,
        "discount": 62,
        "affiliateLink": "https://foxtale.in"
      },
      {
        "name": "Nykaa",
        "currentPrice": 242,
        "originalPrice": 645,
        "discount": 62,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Foxtale+12%25+Niacinamide+Serum"
      }
    ]
  },
  {
    "name": "Simple Refreshing Facial Wash",
    "description": "Soap-free daily gentle cleanser for sensitive skin.",
    "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Simple",
        "currentPrice": 250,
        "originalPrice": 380,
        "discount": 34,
        "affiliateLink": "https://simpleskincare.in"
      },
      {
        "name": "Nykaa",
        "currentPrice": 250,
        "originalPrice": 380,
        "discount": 34,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Simple+Refreshing+Facial+Wash"
      }
    ]
  },
  {
    "name": "Cetaphil Gentle Skin Cleanser",
    "description": "Dermatologist-recommended non-foaming hydrating face wash.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 300,
        "originalPrice": 550,
        "discount": 45,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Cetaphil+Gentle+Skin+Cleanser"
      },
      {
        "name": "Tira",
        "currentPrice": 300,
        "originalPrice": 550,
        "discount": 45,
        "affiliateLink": "https://www.tirabeauty.com"
      }
    ]
  },
  {
    "name": "Minimalist 2% Salicylic LHA Cleanser",
    "description": "Acne-clearing foaming face wash with BHA.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Minimalist",
        "currentPrice": 350,
        "originalPrice": 450,
        "discount": 22,
        "affiliateLink": "https://beminimalist.co"
      },
      {
        "name": "Nykaa",
        "currentPrice": 350,
        "originalPrice": 450,
        "discount": 22,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Minimalist+2%25+Salicylic+Acid+Cleanser"
      }
    ]
  },
  {
    "name": "Plum Green Tea Face Wash",
    "description": "Pore-cleansing foaming wash for oily acne-prone skin.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Plum",
        "currentPrice": 300,
        "originalPrice": 400,
        "discount": 25,
        "affiliateLink": "https://plumgoodness.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 300,
        "originalPrice": 400,
        "discount": 25,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Plum+Green+Tea+Face+Wash"
      }
    ]
  },
  {
    "name": "Mamaearth Ubtan Face Wash",
    "description": "Traditional saffron and turmeric tan-removal cleanser.",
    "image": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Mamaearth",
        "currentPrice": 250,
        "originalPrice": 350,
        "discount": 29,
        "affiliateLink": "https://mamaearth.in"
      },
      {
        "name": "Nykaa",
        "currentPrice": 250,
        "originalPrice": 350,
        "discount": 29,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Mamaearth+Ubtan+Face+Wash"
      }
    ]
  },
  {
    "name": "CeraVe Foaming Facial Cleanser",
    "description": "Ceramide & niacinamide daily cleanser for normal to oily skin.",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "CeraVe",
        "currentPrice": 450,
        "originalPrice": 700,
        "discount": 36,
        "affiliateLink": "https://ceraveindia.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 450,
        "originalPrice": 700,
        "discount": 36,
        "affiliateLink": "https://www.nykaa.com/search/result?q=CeraVe+Foaming+Cleanser"
      }
    ]
  },
  {
    "name": "The Derma Co Sali-Cinamide Wash",
    "description": "Anti-acne face wash with salicylic acid and niacinamide.",
    "image": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "DermaCo",
        "currentPrice": 350,
        "originalPrice": 450,
        "discount": 22,
        "affiliateLink": "https://thedermaco.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 350,
        "originalPrice": 450,
        "discount": 22,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Derma+Co+Sali-Cinamide+Face+Wash"
      }
    ]
  },
  {
    "name": "Simple Hydrating Light Moisturiser",
    "description": "12-hour active lock lightweight daily face lotion.",
    "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Simple",
        "currentPrice": 250,
        "originalPrice": 400,
        "discount": 38,
        "affiliateLink": "https://simpleskincare.in"
      },
      {
        "name": "Nykaa",
        "currentPrice": 250,
        "originalPrice": 400,
        "discount": 38,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Simple+Hydrating+Light+Moisturiser"
      }
    ]
  },
  {
    "name": "Dot & Key Barrier Repair Moisturizer",
    "description": "Ceramide and hyaluronic acid skin barrier booster cream.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "DotKey",
        "currentPrice": 400,
        "originalPrice": 550,
        "discount": 27,
        "affiliateLink": "https://www.dotandkey.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 400,
        "originalPrice": 550,
        "discount": 27,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Dot+%26+Key+Barrier+Repair+Moisturizer"
      }
    ]
  },
  {
    "name": "Minimalist Vitamin B5 10% Moisturizer",
    "description": "Oil-free gel moisturizer for barrier healing.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Minimalist",
        "currentPrice": 450,
        "originalPrice": 550,
        "discount": 18,
        "affiliateLink": "https://beminimalist.co"
      },
      {
        "name": "Nykaa",
        "currentPrice": 450,
        "originalPrice": 550,
        "discount": 18,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Minimalist+Vitamin+B5+Moisturizer"
      }
    ]
  },
  {
    "name": "Foxtale Ceramide Moisturizer",
    "description": "Nourishing dry skin and barrier defense cream.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Foxtale",
        "currentPrice": 245,
        "originalPrice": 275,
        "discount": 11,
        "affiliateLink": "https://foxtale.in"
      },
      {
        "name": "Nykaa",
        "currentPrice": 245,
        "originalPrice": 275,
        "discount": 11,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Foxtale+Ceramide+Moisturizer"
      }
    ]
  },
  {
    "name": "Ponds Super Light Gel",
    "description": "Hyaluronic acid & vitamin E water gel mass-market face cream.",
    "image": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 200,
        "originalPrice": 350,
        "discount": 43,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Ponds+Super+Light+Gel"
      },
      {
        "name": "Amazon",
        "currentPrice": 200,
        "originalPrice": 350,
        "discount": 43,
        "affiliateLink": "https://www.amazon.in/s?k=Ponds+Super+Light+Gel"
      }
    ]
  },
  {
    "name": "Nivea Soft Cream",
    "description": "Versatile nourishing jojoba oil moisturizing cream.",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nivea",
        "currentPrice": 200,
        "originalPrice": 600,
        "discount": 67,
        "affiliateLink": "https://www.nivea.in"
      },
      {
        "name": "Nykaa",
        "currentPrice": 200,
        "originalPrice": 600,
        "discount": 67,
        "affiliateLink": "https://www.nykaa.com/search/result?q=NIVEA+Soft+Cream"
      }
    ]
  },
  {
    "name": "Re'equil Ceramide & HA Moisturiser",
    "description": "Deep hydration ceramide complex derm-recommended cream.",
    "image": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Reequil",
        "currentPrice": 265,
        "originalPrice": 295,
        "discount": 10,
        "affiliateLink": "https://reequil.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 265,
        "originalPrice": 295,
        "discount": 10,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Re%27equil+Ceramide+Moisturiser"
      }
    ]
  },
  {
    "name": "COSRX Snail 96 Mucin Essence",
    "description": "96% snail secretion filtrate skin-repairing essence.",
    "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 1192,
        "originalPrice": 1490,
        "discount": 20,
        "affiliateLink": "https://www.nykaa.com/search/result?q=COSRX+Snail+96+Mucin+Essence"
      },
      {
        "name": "Tira",
        "currentPrice": 1192,
        "originalPrice": 1490,
        "discount": 20,
        "affiliateLink": "https://www.tirabeauty.com"
      }
    ]
  },
  {
    "name": "The Ordinary AHA BHA Peeling",
    "description": "30% AHA + 2% BHA 10-minute facial exfoliant peeling mask.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 650,
        "originalPrice": 750,
        "discount": 13,
        "affiliateLink": "https://www.nykaa.com/search/result?q=The+Ordinary+AHA+BHA+Peeling+Solution"
      },
      {
        "name": "Tira",
        "currentPrice": 650,
        "originalPrice": 750,
        "discount": 13,
        "affiliateLink": "https://www.tirabeauty.com"
      }
    ]
  },
  {
    "name": "The Ordinary Glycolic Acid 7%",
    "description": "Exfoliating toner for skin clarity and scalp health.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 600,
        "originalPrice": 750,
        "discount": 20,
        "affiliateLink": "https://www.nykaa.com/search/result?q=The+Ordinary+Glycolic+Acid+7%25"
      }
    ]
  },
  {
    "name": "Plum Green Tea Alcohol-Free Toner",
    "description": "Shrinks pores and controls oil for acne-prone skin.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Plum",
        "currentPrice": 350,
        "originalPrice": 450,
        "discount": 22,
        "affiliateLink": "https://plumgoodness.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 350,
        "originalPrice": 450,
        "discount": 22,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Plum+Green+Tea+Toner"
      }
    ]
  },
  {
    "name": "Deconstruct Hydrating Toner",
    "description": "Hyaluronic acid and amino acids moisture-locking toner.",
    "image": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Deconstruct",
        "currentPrice": 400,
        "originalPrice": 600,
        "discount": 33,
        "affiliateLink": "https://thedeconstruct.in"
      },
      {
        "name": "Nykaa",
        "currentPrice": 400,
        "originalPrice": 600,
        "discount": 33,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Deconstruct+Hydrating+Toner"
      }
    ]
  },
  {
    "name": "Deconstruct 7% Glycolic Acid Toner",
    "description": "Exfoliating skin peeling and skin brightening toner.",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Deconstruct",
        "currentPrice": 427,
        "originalPrice": 449,
        "discount": 5,
        "affiliateLink": "https://thedeconstruct.in"
      },
      {
        "name": "Nykaa",
        "currentPrice": 427,
        "originalPrice": 449,
        "discount": 5,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Deconstruct+7%25+Glycolic+Acid+Toner"
      }
    ]
  },
  {
    "name": "Dot & Key Blueberry Rice Water Toner",
    "description": "Milky barrier repairing hydrating face toner.",
    "image": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "DotKey",
        "currentPrice": 350,
        "originalPrice": 450,
        "discount": 22,
        "affiliateLink": "https://www.dotandkey.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 350,
        "originalPrice": 450,
        "discount": 22,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Dot+%26+Key+Blueberry+Toner"
      }
    ]
  },
  {
    "name": "Laneige Lip Sleeping Mask",
    "description": "Iconic K-beauty berry-mix moisturizing lip mask.",
    "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 900,
        "originalPrice": 1200,
        "discount": 25,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Laneige+Lip+Sleeping+Mask"
      },
      {
        "name": "Tira",
        "currentPrice": 900,
        "originalPrice": 1200,
        "discount": 25,
        "affiliateLink": "https://www.tirabeauty.com"
      }
    ]
  },
  {
    "name": "Dot & Key Gloss Boss Lip Balm",
    "description": "Vitamin C and hydration glossy tinted lip balm.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "DotKey",
        "currentPrice": 200,
        "originalPrice": 300,
        "discount": 33,
        "affiliateLink": "https://www.dotandkey.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 200,
        "originalPrice": 300,
        "discount": 33,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Dot+%26+Key+Gloss+Boss+Lip+Balm"
      }
    ]
  },
  {
    "name": "Deconstruct Brightening Lip Balm",
    "description": "SPF 50 daily lip defense and pigmentation repair balm.",
    "image": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Deconstruct",
        "currentPrice": 193,
        "originalPrice": 199,
        "discount": 3,
        "affiliateLink": "https://thedeconstruct.in"
      },
      {
        "name": "Nykaa",
        "currentPrice": 193,
        "originalPrice": 199,
        "discount": 3,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Deconstruct+Brightening+Lip+Balm"
      }
    ]
  },
  {
    "name": "Laneige Lip Glowy Balm",
    "description": "Lightweight pocket-friendly glossy lip hydration balm.",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 600,
        "originalPrice": 700,
        "discount": 14,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Laneige+Lip+Glowy+Balm"
      },
      {
        "name": "Tira",
        "currentPrice": 600,
        "originalPrice": 700,
        "discount": 14,
        "affiliateLink": "https://www.tirabeauty.com"
      }
    ]
  },
  {
    "name": "mCaffeine Coffee Face Scrub",
    "description": "Deep tan-removal and skin-smoothing coffee scrub.",
    "image": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "mCaffeine",
        "currentPrice": 350,
        "originalPrice": 500,
        "discount": 30,
        "affiliateLink": "https://mcaffeine.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 350,
        "originalPrice": 500,
        "discount": 30,
        "affiliateLink": "https://www.nykaa.com/search/result?q=mCaffeine+Coffee+Face+Scrub"
      }
    ]
  },
  {
    "name": "Mamaearth Ubtan Face Scrub",
    "description": "Walnut and turmeric tan-removal deep scrubbing cream.",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Mamaearth",
        "currentPrice": 300,
        "originalPrice": 400,
        "discount": 25,
        "affiliateLink": "https://mamaearth.in"
      },
      {
        "name": "Nykaa",
        "currentPrice": 300,
        "originalPrice": 400,
        "discount": 25,
        "affiliateLink": "https://www.nykaa.com/mamaearth-ubtan-scrub-for-face-with-turmeric-walnut-for-tan-removal/p/406949"
      }
    ]
  },
  {
    "name": "Dot & Key Watermelon Eye Patches",
    "description": "De-puffing hydrogel under-eye masks with vitamin C.",
    "image": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Nykaa",
        "currentPrice": 300,
        "originalPrice": 400,
        "discount": 25,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Dot+%26+Key+Watermelon+Eye+Patches"
      }
    ]
  },
  {
    "name": "mCaffeine Coffee Under Eye Cream",
    "description": "Reduces dark circles and puffiness under eyes.",
    "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "mCaffeine",
        "currentPrice": 400,
        "originalPrice": 550,
        "discount": 27,
        "affiliateLink": "https://mcaffeine.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 400,
        "originalPrice": 550,
        "discount": 27,
        "affiliateLink": "https://www.nykaa.com/search/result?q=mCaffeine+Coffee+Under+Eye+Cream"
      }
    ]
  },
  {
    "name": "Re'equil 0.1% Retinol Night Cream",
    "description": "Acne scar treatment and anti-aging beginner retinol cream.",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop",
    "category": "Skincare",
    "viralTags": [
      "Gen Z Fav",
      "Trending"
    ],
    "retailers": [
      {
        "name": "Reequil",
        "currentPrice": 355,
        "originalPrice": 499,
        "discount": 29,
        "affiliateLink": "https://reequil.com"
      },
      {
        "name": "Nykaa",
        "currentPrice": 355,
        "originalPrice": 499,
        "discount": 29,
        "affiliateLink": "https://www.nykaa.com/search/result?q=Re%27equil+0.1%25+Retinol+Night+Cream"
      }
    ]
  }
];

  for (const item of products) {
    try {
      const record = new Record(collection);
      record.set("name", item.name);
      record.set("description", item.description);
      record.set("image", item.image);
      record.set("images", JSON.stringify([item.image]));
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
