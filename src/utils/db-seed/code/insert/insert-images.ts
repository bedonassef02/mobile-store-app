import { Image } from '../../../../models/image.model';
import { readFile } from '../helper';

export const insertImages = async () => {
  try {
    const imagesEntries: any = readFile('images.json');

    for (const image of imagesEntries) {
      await Image.create({ productId: image.productId, path: image.path });
    }
    console.log('Images data inserted successfully');
  } catch (error: any) {
    console.error('Error inserting Images data:', error.message);
  }
};
