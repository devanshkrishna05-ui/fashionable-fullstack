
import express from 'express';
import cors from 'cors';
import sitemapRouter from './routes/sitemap.js';
import routes from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());

// Mount sitemap router at the root level so it's accessible at /sitemap.xml
app.use('/sitemap.xml', sitemapRouter);

// Mount other API routes
app.use('/api', routes);
app.use('/', routes);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

export default app;
