import { generateShortUrl } from '../../utils';
import { Url } from './models';

const SHORT_URL_SIZE = 6;

export async function createOrReadShortUrlFromOriginalUrl(originalUrl: string | undefined) {
  const [row, created] = await Url.findOrCreate({
    where: { originalUrl },
    defaults: { originalUrl, shortUrl: generateShortUrl(SHORT_URL_SIZE), nbClicks: 0 },
  });

  if (row == null) {
    throw new Error('Cannot get or create short URL from given original URL');
  }
  console.log(
    created ? 'New short URL created' : 'Existing short URL',
    `"${row.shortUrl}" for original URL "${originalUrl}"`,
  );

  return row.shortUrl;
}

export async function readOriginalUrlFromShortUrl(shortUrl: string | undefined): Promise<string> {
  const row = await Url.increment('nbClicks', { by: 1, where: { shortUrl } });

  if (row[0][0][0] == null) {
    throw new Error('Cannot get original URL from given short URL');
  }

  const originalUrl = row[0][0][0].originalUrl;
  const nbClicks = row[0][0][0].nbClicks;

  console.log(`Short URL "${shortUrl}" of original URL "${originalUrl}" was clicked ${nbClicks} times`);

  return originalUrl;
}

export async function readAllUrlsWithNbClicks() {
  const row = await Url.findAll();

  if (row == null) {
    throw new Error('Cannot get all urls');
  }

  const allUrls = row
    .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
    .map(item => ({
      originalUrl: item.originalUrl,
      shortUrl: item.shortUrl,
      nbClicks: item.nbClicks,
    }));

  return allUrls;
}
