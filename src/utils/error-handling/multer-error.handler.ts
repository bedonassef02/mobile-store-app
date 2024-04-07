import { NextFunction, Response } from 'express';

export function multerErrorHandler(
  req: any,
  res: Response,
  next: NextFunction,
): void {
  if (!req.files['coverImage']) {
    res.status(400).json({ message: 'Cover Image is required' });
  }

  req.body.coverImage = req.files['coverImage'][0].filename;

  if (req.files['images']) {
    req.body.images = req.files['images'].map((image: Express.Multer.File) => {
      return image.filename;
    });
  }

  next();
}
