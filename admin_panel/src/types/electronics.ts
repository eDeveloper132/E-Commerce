export interface ElectronicsProduct {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  images: { _type: 'image'; asset: { _ref: string; _type: 'reference' } }[];
  name: string;
  price: number;
  stock: number;
  category: string;
  tags: string[];
  rating: number;
  description: string;
  video: { _type: 'file'; asset: { _ref: string; _type: 'reference' } } | null;
  brand: string;
  model: string;
  specifications: { specName: string; specValue: string }[];
  warranty: string;
  releaseDate: string;
  color: string;
  dimensions: string;
  weight: string;
  condition: 'new' | 'refurbished' | 'used';
  features: string[];
}