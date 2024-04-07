import { Image } from '../models/image.model';

export class ImageService {
  create(productId: number, images: string[]): Promise<any[]> {
    const imagePromises = images.map((path: string) => {
      return Image.create({ productId: productId, path });
    });

    // Use Promise.all to wait for all image creation promises to resolve
    return Promise.all(imagePromises);
  }
}
