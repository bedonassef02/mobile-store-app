import multer, { diskStorage, Multer, StorageEngine } from 'multer';

const storage: StorageEngine = diskStorage({
  destination: (_req: any, file: Express.Multer.File, cb): void => {
    cb(null, 'uploads/');
  },
  filename: (_req, file: Express.Multer.File, cb): void => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload: Multer = multer({ storage });
