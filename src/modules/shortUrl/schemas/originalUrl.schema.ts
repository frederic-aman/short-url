import { object, string, TypeOf } from 'yup';

/*
 * Yup schema to validate that the URL is valid
 */
export const originalUrlSchema = object().shape({
  originalUrl: string().matches(
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
    'invalid URL',
  ),
});

export type OriginalUrlInput = TypeOf<typeof originalUrlSchema>;
