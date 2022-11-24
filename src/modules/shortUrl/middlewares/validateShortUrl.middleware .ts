import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

const validateShortUrl = (schema: yup.AnyObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validate({
      shortUrl: req.params.shortUrl,
    });
    next();
  } catch (error: any) {
    console.error(error.message);

    return res.status(400).json({ error: error.message });
  }
};

export { validateShortUrl };
