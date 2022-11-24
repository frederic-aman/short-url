import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

const validateOriginalUrl =
  (schema: yup.AnyObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        originalUrl: req.body.originalUrl,
      });
      next();
    } catch (error: any) {
      console.error(error.message);

      return res.status(400).json({ error: error.message });
    }
  };

export { validateOriginalUrl };
