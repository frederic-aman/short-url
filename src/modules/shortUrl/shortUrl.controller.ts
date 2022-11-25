import { Request, Response } from 'express';
import { OriginalUrlInput, ShortUrlInput } from './schemas';
import {
  createOrReadShortUrlFromOriginalUrl,
  readOriginalUrlFromShortUrl,
  readAllUrlsWithNbClicks,
} from './shortUrl.service';

export async function rootHandler(req: Request, res: Response) {
  res.send('Lunii study case: URL shortener service');
}

export async function createOrReadShortUrlFromOriginalUrlHandler(
  req: Request<{}, {}, OriginalUrlInput>,
  res: Response,
) {
  try {
    const originalUrl = req.body.originalUrl;
    const shortUrl = await createOrReadShortUrlFromOriginalUrl(originalUrl);

    return res.send({ originalUrl, shortUrl });
  } catch (error: any) {
    console.error(error);

    return res.status(409).send(error.message);
  }
}

export async function readAndRedirectToOriginalUrlFromShortUrlHandler(
  req: Request<ShortUrlInput, {}, {}>,
  res: Response,
) {
  try {
    const shortUrl = req.params.shortUrl;
    const originalUrl = await readOriginalUrlFromShortUrl(shortUrl);

    return res.redirect(originalUrl);
  } catch (error: any) {
    console.error(error);

    return res.status(409).send(error.message);
  }
}

export async function readAllUrlsWithNbClicksHandler(req: Request, res: Response) {
  try {
    const allUrls = await readAllUrlsWithNbClicks();

    return res.send(allUrls);
  } catch (error: any) {
    console.error(error);

    return res.status(409).send(error.message);
  }
}
