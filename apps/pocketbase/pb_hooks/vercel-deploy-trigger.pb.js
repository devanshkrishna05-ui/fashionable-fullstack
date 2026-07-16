// Trigger Vercel Deploy Hook whenever products are added, updated, or deleted
// This updates the dynamic sitemap.xml and pings IndexNow/GEO search engines automatically.

// 1. Hook for product creation
onRecordAfterCreateSuccess((e) => {
  const vercelHookUrl = $os.getenv("VERCEL_DEPLOY_HOOK_URL");
  if (!vercelHookUrl) {
    console.warn("⚠️ Vercel Deploy Hook Warning: VERCEL_DEPLOY_HOOK_URL environment variable is not set. Skipping build trigger.");
    return;
  }
  try {
    const res = $http.send({
      url: vercelHookUrl,
      method: "POST",
      headers: { "content-type": "application/json" },
      timeout: 30
    });
    console.log("🚀 Vercel build trigger sent. Response Status:", res.statusCode);
  } catch (err) {
    console.error("❌ Failed to send trigger to Vercel Deploy Hook:", err);
  }
}, "products");

// 2. Hook for product updates
onRecordAfterUpdateSuccess((e) => {
  const vercelHookUrl = $os.getenv("VERCEL_DEPLOY_HOOK_URL");
  if (!vercelHookUrl) return;
  try {
    const res = $http.send({
      url: vercelHookUrl,
      method: "POST",
      headers: { "content-type": "application/json" },
      timeout: 30
    });
    console.log("🚀 Vercel build trigger sent (update). Response Status:", res.statusCode);
  } catch (err) {
    console.error("❌ Failed to send trigger to Vercel Deploy Hook:", err);
  }
}, "products");

// 3. Hook for product deletion
onRecordAfterDeleteSuccess((e) => {
  const vercelHookUrl = $os.getenv("VERCEL_DEPLOY_HOOK_URL");
  if (!vercelHookUrl) return;
  try {
    const res = $http.send({
      url: vercelHookUrl,
      method: "POST",
      headers: { "content-type": "application/json" },
      timeout: 30
    });
    console.log("🚀 Vercel build trigger sent (delete). Response Status:", res.statusCode);
  } catch (err) {
    console.error("❌ Failed to send trigger to Vercel Deploy Hook:", err);
  }
}, "products");
