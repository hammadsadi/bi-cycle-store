// Bi Cycle Schema Model Data Type
export type TBiCycle = {
  name: string;
  brand: string;
  price: number;
  model: string;
  stock: boolean;
  image: string;
  category: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric';
  productDetails: string;
};
