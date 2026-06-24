
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import sitemapRouter from './routes/sitemap.js';
import routes from './routes/index.js';
import errorHandler from './middleware/error.js';

const app = express();

// Configure CORS with allowed origin
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());

// Mount sitemap router at the root level so it's accessible at /sitemap.xml
app.use('/sitemap.xml', sitemapRouter);

// Mount other API routes (call the exported function once to get a Router)
const apiRoutes = routes();
app.use('/api', apiRoutes);
app.use('/', apiRoutes);

// Register global error handler (must come after all routes)
app.use(errorHandler);

const port = process.env.PORT || 3001;

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
  console.log(`CORS enabled for: ${corsOptions.origin}`);
});
server.on('error', console.error);

export default app;
