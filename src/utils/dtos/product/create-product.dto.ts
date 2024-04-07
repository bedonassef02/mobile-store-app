export type CreateProductDto = {
  name: string;
  description: string;
  coverImage: string;
  price: number;
  categoryId: number;
  images?: string[];
};
