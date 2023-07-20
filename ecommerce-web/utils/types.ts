export type Product = {
  id: string | number;
  _id?: string | number;
  supplierId?: string | number; // supplier id
  name: string;
  description: string;
  category?: string;
  price?: number;
};
