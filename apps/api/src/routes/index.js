import { Router } from 'express';
import healthCheck from './health-check.js';
import sitemapRouter from './sitemap.js';
import trackingRouter from './tracking.js';

const router = Router();

export default () => {
    router.get('/health', healthCheck);
    router.use('/', sitemapRouter);
    router.use('/', trackingRouter);

    return router;
};
