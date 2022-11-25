import { Express } from 'express';
import {
  createOrReadShortUrlFromOriginalUrlHandler,
  readAndRedirectToOriginalUrlFromShortUrlHandler,
  readAllUrlsWithNbClicksHandler,
  rootHandler,
} from './modules/shortUrl/shortUrl.controller';
import { originalUrlSchema, shortUrlSchema } from './modules/shortUrl/schemas';
import { validateOriginalUrl, validateShortUrl } from './modules/shortUrl/middlewares';

function routes(app: Express) {
  app.get('/', rootHandler);

  app.post('/api/shorturl', validateOriginalUrl(originalUrlSchema), createOrReadShortUrlFromOriginalUrlHandler);

  app.get('/api/shorturl/analytics', readAllUrlsWithNbClicksHandler);

  app.get('/api/shorturl/:shortUrl', validateShortUrl(shortUrlSchema), readAndRedirectToOriginalUrlFromShortUrlHandler);
}

export default routes;
