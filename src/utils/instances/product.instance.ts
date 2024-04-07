export type ProductInstance = {
  id: number;
  name: string;
  description: string;
  coverImage: string;
  price: number;
  categoryId: number;
  images?: string[];
};
