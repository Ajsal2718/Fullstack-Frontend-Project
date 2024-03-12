export interface MacProductResponseInterface {
  message: string;
  productData: [MacProductInterface];
}
export interface MacProductInterface {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  Image: string;
  qty: number;
}
