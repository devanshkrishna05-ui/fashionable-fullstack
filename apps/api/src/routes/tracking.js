import express from 'express';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';

const router = express.Router();

/**
 * POST /track-click - Track click events for products
 * Body: { productId, retailerId, retailerName }
 */
router.post('/track-click', async (req, res) => {
  const { productId, retailerId, retailerName } = req.body;

  // Validate required fields
  if (!productId || !retailerId || !retailerName) {
    return res.status(400).json({
      error: 'Missing required fields: productId, retailerId, retailerName',
    });
  }

  // Create click tracking record
  const userAgent = req.headers['user-agent'] || 'unknown';

  try {
    await pb.collection('clickTracking').create({
      productId,
      retailerId,
      retailerName,
      userAgent,
    });

    logger.info(`Click tracked: productId=${productId}, retailerId=${retailerId}`);
    res.json({ success: true });
  } catch (error) {
    logger.error('Failed to track click:', error.message);
    throw new Error(`Failed to track click: ${error.message}`);
  }
});

export default router;
