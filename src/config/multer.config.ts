import multer, { diskStorage, Multer, StorageEngine } from 'multer';
import slugify from 'slugify';

const storage: StorageEngine = diskStorage({
  destination: (_req: any, _file: Express.Multer.File, cb): void => {
    cb(null, 'public/images/');
  },
  filename: (_req, file: Express.Multer.File, cb): void => {
    cb(null, `${Date.now()}-${slugify(file.originalname)}`);
  },
});

export const upload: Multer = multer({ storage });
