import { NextFunction, Request, Response } from 'express';
import { upload } from '../../config/multer.config';

export const updateImageMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.file) {
    req.body.image = req.file.filename;
  }
  next();
};

export const uploadImagesMiddleware = upload.fields([
  { name: 'coverImage', maxCount: 1 },
  { name: 'images', maxCount: 10 },
]);
