export interface ProductResponseInterface {
  message: string;
  productData: [ProductInterface];
}
export interface ProductInterface {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  Image: string;
  qty: number;
}
