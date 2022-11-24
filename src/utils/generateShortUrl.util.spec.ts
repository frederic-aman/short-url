import { generateShortUrl } from './generateShortUrl.util';

describe('Generate a short URL', () => {
  test('Should short URL be short', () => {
    const urlLength = 5;
    const shortUrl = generateShortUrl(urlLength);
    expect(shortUrl.length).toBe(5);
  });
  test('Should 100 short URLs have specific characters', () => {
    const urlRegEx = /^[a-zA-Z0-9]+$/;
    for (let i = 0; i < 100; i++) {
      const lengthMin = 3;
      const lengthMax = 10;
      const urlLength = Math.floor(Math.random() * (lengthMax - lengthMin) + lengthMin);
      const shortUrl = generateShortUrl(urlLength);
      expect(shortUrl).toMatch(urlRegEx);
    }
  });
});
