import { object, string, TypeOf } from 'yup';

/*
 * Yup schema to validate that the short URL is valid
 */
export const shortUrlSchema = object().shape({
  shortUrl: string().matches(/^[a-zA-Z0-9]+$/, 'invalid short URL'),
});

export type ShortUrlInput = TypeOf<typeof shortUrlSchema>;
