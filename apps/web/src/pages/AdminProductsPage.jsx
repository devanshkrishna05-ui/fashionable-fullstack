import React, { useMemo, useState, useEffect } from 'react';
import {
  fetchProductsFromPocketBase,
  createProductInPocketBase,
  updateProductInPocketBase,
  deleteProductFromPocketBase,
} from "@/lib/productApi";

const emptyRetailer = {
  name: '',
  currentPrice: '',
  originalPrice: '',
  discount: '',
  affiliateLink: '',
  outOfStock: false,
};

const emptyForm = {
  id: '',
  name: '',
  description: '',
  image: '',
  category: 'Fashion',
  viralTags: '',
  retailers: [{ ...emptyRetailer }],
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
const [isLoadingProducts, setIsLoadingProducts] = useState(true);
const [isSaving, setIsSaving] = useState(false);
const [deletingId, setDeletingId] = useState(null);

useEffect(() => {
  const loadProducts = async () => {
    try {
      setIsLoadingProducts(true);
      const records = await fetchProductsFromPocketBase();
      setProducts(records);
    } catch (error) {
      console.error("Failed to load products from PocketBase:", error);
      showMessage("PocketBase se products load nahi ho paaye.");
    } finally {
      setIsLoadingProducts(false);
    }
  };

  loadProducts();
}, []);
    

  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');

  const FALLBACK_IMAGE = '/images/product-fallback.webp';

const isSafeHttpUrl = (value) => {
  if (typeof value !== 'string' || !value.trim()) return false;
  try {
    const parsed = new URL(value.trim());
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
};

const parseImageUrls = (value) => {
  if (typeof value !== 'string') return [];
  return value
    .split(',')
    .map((url) => url.trim())
    .filter(Boolean);
};

  const totalRetailers = useMemo(() => {
    return products.reduce((sum, product) => sum + (product.retailers?.length || 0), 0);
  }, [products]);

  
  const showMessage = (text) => {
    setMessage(text);
    window.setTimeout(() => setMessage(''), 2500);
  };

  const handleBasicChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRetailerChange = (index, field, value) => {
    setForm((prev) => {
      const nextRetailers = [...prev.retailers];
      nextRetailers[index] = {
        ...nextRetailers[index],
        [field]: value,
      };

      if (field === 'currentPrice' || field === 'originalPrice') {
        const current = Number(
          field === 'currentPrice' ? value : nextRetailers[index].currentPrice
        );
        const original = Number(
          field === 'originalPrice' ? value : nextRetailers[index].originalPrice
        );

        if (original > 0 && current >= 0 && current <= original) {
          nextRetailers[index].discount = Math.round(((original - current) / original) * 100);
        } else {
          nextRetailers[index].discount = '';
        }
      }

      return {
        ...prev,
        retailers: nextRetailers,
      };
    });
  };

  const addRetailerRow = () => {
    setForm((prev) => ({
      ...prev,
      retailers: [...prev.retailers, { ...emptyRetailer }],
    }));
  };

  const removeRetailerRow = (index) => {
    setForm((prev) => {
      if (prev.retailers.length === 1) {
        return prev;
      }

      const nextRetailers = prev.retailers.filter((_, i) => i !== index);
      return {
        ...prev,
        retailers: nextRetailers,
      };
    });
  };

  const resetForm = () => {
    setForm({
      ...emptyForm,
      id: '',
      retailers: [{ ...emptyRetailer }],
    });
    setEditingId(null);
  };

  const validateForm = () => {
    if (!form.name.trim()) return 'Product name required hai.';
    if (!form.description.trim()) return 'Description required hai.';
    const imageUrls = parseImageUrls(form.image);

if (imageUrls.length === 0) {
  return 'Kam se kam 1 image URL required hai.';

}

const invalidImageUrl = imageUrls.find((url) => !isSafeHttpUrl(url));
if (invalidImageUrl) {
  return `Invalid image URL: ${invalidImageUrl}`;
}
    if (!form.category.trim()) return 'Category required hai.';

    const validRetailers = form.retailers.filter(
      (r) =>
        r.name.trim() &&
        String(r.currentPrice).trim() &&
        String(r.originalPrice).trim() &&
        r.affiliateLink.trim()
    );

    if (validRetailers.length === 0) {
      return 'Kam se kam 1 complete retailer add karo.';
    }

    for (const retailer of validRetailers) {
      const current = Number(retailer.currentPrice);
      const original = Number(retailer.originalPrice);

        if (!isSafeHttpUrl(retailer.affiliateLink)) {
  return `Retailer "${retailer.name}" ka affiliate link invalid hai.`;
}

      if (Number.isNaN(current) || current < 0) {
        return `Retailer "${retailer.name}" ka current price invalid hai.`;
      }

      if (Number.isNaN(original) || original <= 0) {
        return `Retailer "${retailer.name}" ka original price invalid hai.`;
      }

      if (current > original) {
        return `Retailer "${retailer.name}" me current price original se zyada nahi ho sakta.`;
      }
    }

    return null;
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const validationError = validateForm();
  if (validationError) {
    showMessage(validationError);
    return;
  }
  if (isSaving) return;
setIsSaving(true);

  const cleanedRetailers = form.retailers
    .filter(
      (r) =>
        r.name.trim() &&
        String(r.currentPrice).trim() &&
        String(r.originalPrice).trim() &&
        r.affiliateLink.trim()
    )
    .map((r) => ({
      name: r.name.trim(),
      currentPrice: Number(r.currentPrice),
      originalPrice: Number(r.originalPrice),
     discount:
  r.discount !== "" && !isNaN(r.discount)
    ? Number(r.discount)
          : Math.round(
              ((Number(r.originalPrice) - Number(r.currentPrice)) /
                Number(r.originalPrice)) *
                100
            ),
      affiliateLink: r.affiliateLink.trim(),
      outOfStock: Boolean(r.outOfStock),
    }));

  if (cleanedRetailers.length === 0) {
    showMessage("Kam se kam ek valid retailer row bharni hogi.");
    return;
  }
const imageUrls = parseImageUrls(form.image);

  const productData = {
    id: editingId || '',
    name: form.name.trim(),
    description: form.description.trim(),
   image: imageUrls[0],
images: imageUrls,
    category: form.category,
    viralTags: form.viralTags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    retailers: cleanedRetailers,
  };

try {
  let savedProduct;

  if (editingId) {
    savedProduct = await updateProductInPocketBase(editingId, productData);
    setProducts((prev) =>
      prev.map((product) => (product.id === editingId ? savedProduct : product))
    );
    showMessage("Product update ho gaya.");
  } else {
    savedProduct = await createProductInPocketBase(productData);
    setProducts((prev) => [savedProduct, ...prev]);
    showMessage("Product add ho gaya.");
  }

  resetForm();
} catch (error) {
  console.error("Failed to save product:", error);
  showMessage("Product save nahi ho paaya.");
} finally {
  setIsSaving(false);
}
};

  const handleEdit = (product) => {
    setEditingId(product.id);
    setForm({
      id: product.id,
      name: product.name || '',
      description: product.description || '',
      image: Array.isArray(product.images) && product.images.length > 0
      ? product.images.join(', ')
      : (product.image || ''),
      category: product.category || 'Fashion',
      viralTags: Array.isArray(product.viralTags) ? product.viralTags.join(', ') : '',
      retailers:
        product.retailers?.length > 0
          ? product.retailers.map((r) => ({
              name: r.name || '',
              currentPrice: r.currentPrice ?? '',
              originalPrice: r.originalPrice ?? '',
              discount: r.discount ?? '',
              affiliateLink: r.affiliateLink || '',
              outOfStock: Boolean(r.outOfStock),
            }))
          : [{ ...emptyRetailer }],
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

 const handleDelete = async (id) => {
  const confirmed = window.confirm("Kya tum sure ho is product ko delete karna hai?");
  if (!confirmed) return;
  if (deletingId) return;
setDeletingId(id);

  try {
    await deleteProductFromPocketBase(id);
    setProducts((prev) => prev.filter((product) => product.id !== id));

    if (editingId === id) {
      resetForm();
    }

    showMessage("Product delete ho gaya.");
  } catch (error) {
  console.error("Failed to delete product:", error);
  showMessage("Product delete nahi ho paaya.");
} finally {
  setDeletingId(null);
}
 };

if (isLoadingProducts) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-10">
      Loading admin products...
    </div>
  );
}

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Panel - Products</h1>
          <p className="text-gray-400">
            Yahan se tum products add, edit, delete aur retailer affiliate links manage karoge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
            <p className="text-sm text-gray-400 mb-1">Total Products</p>
            <p className="text-3xl font-bold text-[#00D9FF]">{products.length}</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
            <p className="text-sm text-gray-400 mb-1">Total Retailer Rows</p>
            <p className="text-3xl font-bold text-[#FF006E]">{totalRetailers}</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
            <p className="text-sm text-gray-400 mb-1">Storage Mode</p>
            <p className="text-lg font-semibold text-white">PocketBase (Live DB)</p>
          </div>
        </div>

        {message && (
          <div className="mb-6 rounded-xl border border-[#00D9FF] bg-[#00D9FF]/10 px-4 py-3 text-[#00D9FF] font-medium">
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold">
                {editingId ? 'Edit Product' : 'Add New Product'}
              </h2>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 rounded-lg bg-[#2a2a2a] hover:bg-[#3a3a3a] transition"
                >
                  Cancel Edit
                </button>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2">Product Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleBasicChange('name', e.target.value)}
                  placeholder="Example: Oversized Denim Jacket"
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D9FF]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Description</label>
                <textarea
                  rows="4"
                  value={form.description}
                  onChange={(e) => handleBasicChange('description', e.target.value)}
                  placeholder="Short product description"
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D9FF] resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                 Image URL(s) - comma se separate karo
                </label> 
                <input
                  type="text"
                  value={form.image}
                  onChange={(e) => handleBasicChange('image', e.target.value)}
                  placeholder="https://img1.jpg, https://img2.jpg, https://img3.jpg, https://img4.jpg, https://img5.jpg, https://img6.jpg, https://img7.jpg"
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D9FF]"
                />
              </div>

              {form.image && (
                <div className="border border-[#2a2a2a] rounded-xl p-3 bg-[#0a0a0a]">
                  <p className="text-sm text-gray-400 mb-3">Image Preview</p>
                {parseImageUrls(form.image).filter(isSafeHttpUrl).map((img, idx) => (
  <img
    key={idx}
    src={img.trim()}
    alt="Preview"
    className="w-full max-h-40 object-cover rounded-lg mb-2"
    loading="lazy"
    decoding="async"
  />
))}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => handleBasicChange('category', e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D9FF]"
                  >
                    <option value="Fashion">Fashion</option>
                    <option value="Makeup">Makeup</option>
                    <option value="Skincare">Skincare</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Viral Tags</label>
                  <input
                    type="text"
                    value={form.viralTags}
                    onChange={(e) => handleBasicChange('viralTags', e.target.value)}
                    placeholder="Best Seller, Viral Reel, New Drop"
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D9FF]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h3 className="text-xl font-bold">Retailers</h3>
                  <button
                    type="button"
                    onClick={addRetailerRow}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#FF006E] text-white font-semibold"
                  >
                    + Add Retailer
                  </button>
                </div>

                <div className="space-y-4">
                  {form.retailers.map((retailer, index) => (
                    <div
                      key={index}
                      className="border border-[#2a2a2a] rounded-xl p-4 bg-[#0a0a0a]"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <p className="font-semibold text-white">Retailer #{index + 1}</p>
                        {form.retailers.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeRetailerRow(index)}
                            className="text-sm px-3 py-1 rounded-lg bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20"
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          value={retailer.name}
                          onChange={(e) =>
                            handleRetailerChange(index, 'name', e.target.value)
                          }
                          placeholder="Retailer name"
                          className="w-full bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D9FF]"
                        />

                        <input
                          type="text"
                          value={retailer.affiliateLink}
                          onChange={(e) =>
                            handleRetailerChange(index, 'affiliateLink', e.target.value)
                          }
                          placeholder="Affiliate link"
                          className="w-full bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D9FF]"
                        />

                        <input
                          type="number"
                          value={retailer.currentPrice}
                          onChange={(e) =>
                            handleRetailerChange(index, 'currentPrice', e.target.value)
                          }
                          placeholder="Current price"
                          className="w-full bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D9FF]"
                        />

                        <input
                          type="number"
                          value={retailer.originalPrice}
                          onChange={(e) =>
                            handleRetailerChange(index, 'originalPrice', e.target.value)
                          }
                          placeholder="Original price"
                          className="w-full bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D9FF]"
                        />

                        <input
                          type="number"
                          value={retailer.discount}
                          onChange={(e) =>
                            handleRetailerChange(index, 'discount', e.target.value)
                          }
                          placeholder="Discount %"
                          className="w-full bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D9FF]"
                        />

                        <label className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[#2a2a2a] bg-[#111]">
                          <input
                            type="checkbox"
                            checked={retailer.outOfStock}
                            onChange={(e) =>
                              handleRetailerChange(index, 'outOfStock', e.target.checked)
                            }
                          />
                          <span className="text-sm text-gray-300">Out of stock</span>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
  type="submit"
  disabled={isSaving ? 'Saving...' : editingId ? 'Update Product' : 'Save Product'}
  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#FF006E] text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed"
>
                  {editingId ? 'Update Product' : 'Save Product'}
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 rounded-xl bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white font-semibold"
                >
                  Reset Form
                </button>
              </div>
            </form>
          </div>

          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">Saved Products</h2>

            {products.length === 0 ? (
              <div className="border border-dashed border-[#2a2a2a] rounded-xl p-8 text-center text-gray-400">
                Abhi koi product saved nahi hai.
              </div>
            ) : (
              <div className="space-y-5 max-h-[900px] overflow-y-auto pr-2">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="border border-[#2a2a2a] rounded-xl overflow-hidden bg-[#0a0a0a]"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-0">
                      <div className="bg-[#111]">
                
<img
  src={
    Array.isArray(product.images) && product.images.length > 0
      ? product.images[0]
      : product.image || FALLBACK_IMAGE
  }
  alt={`${product.name || 'Product'} image`}
  onError={(e) => {
    e.currentTarget.src = FALLBACK_IMAGE;
  }}
  className="w-full h-full object-cover"
/>
                      </div>

                      <div className="p-4">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div>
                            <p className="text-xs uppercase tracking-wide text-[#00D9FF] mb-1">
                              {product.category}
                            </p>
                            <h3 className="text-xl font-bold text-white mb-2">
                              {product.name}
                            </h3>
                            <p className="text-gray-400 text-sm mb-3">
                              {product.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-3">
                              {(product.viralTags || []).map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs px-2 py-1 rounded-full bg-[#FF006E]/15 text-[#FF006E] border border-[#FF006E]/30"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => handleEdit(product)}
                              className="px-4 py-2 rounded-lg bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30 hover:bg-[#00D9FF]/20"
                            >
                              Edit
                            </button>
                            <button
  type="button"
  disabled={deletingId === product.id}
  onClick={() => handleDelete(product.id)}
  className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
>
  {deletingId === product.id ? 'Deleting...' : 'Delete'}
</button>
                          </div>
                        </div>

                        <div className="mt-4 space-y-3">
                          <p className="text-sm font-semibold text-gray-300">
                            Retailers ({product.retailers?.length || 0})
                          </p>

                          {(product.retailers || []).map((retailer, idx) => (
                            <div
                              key={idx}
                              className="rounded-lg border border-[#2a2a2a] bg-[#111] p-3"
                            >
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                <div>
                                  <p className="font-semibold text-white">{retailer.name}</p>
                                  <p className="text-sm text-gray-400">
                                    ₹{retailer.currentPrice} /{' '}
                                    <span className="line-through">₹{retailer.originalPrice}</span>{' '}
                                    / {retailer.discount}% off
                                  </p>
                                </div>

                                <div className="flex items-center gap-2 flex-wrap">
                                  {retailer.outOfStock && (
  <span className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/30">
    Out of Stock
                                    </span>
                                  )}
                                  <a
                                    href={retailer.affiliateLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm px-3 py-1 rounded-lg bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30 hover:bg-[#00D9FF]/20"
                                  >
                                    Open Link
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 border border-[#2a2a2a] bg-[#1a1a1a] rounded-2xl p-5">
          <h3 className="text-lg font-bold mb-2">Important Note</h3>
         <p className="text-lg font-semibold text-white">PocketBase (Live DB)</p>
        </div>
      </div>
    </div>
  );
}
