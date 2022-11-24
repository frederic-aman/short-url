import { object, string, TypeOf } from 'yup';

export const shortUrlSchema = object().shape({
  shortUrl: string().matches(/^[a-zA-Z0-9]+$/, 'invalid short URL'),
});

export type ShortUrlInput = TypeOf<typeof shortUrlSchema>;
