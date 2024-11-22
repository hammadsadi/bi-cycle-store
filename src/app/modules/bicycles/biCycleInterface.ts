// Bi Cycle Schema Model Data Type
export type TBiCycle = {
  name: string;
  brand: string;
  price: number;
  type: "Mountain" | "Road" | "Hybrid" | "BMX" | "Electric";
  description: string;
  quantity: number;
  inStock: boolean;
};
