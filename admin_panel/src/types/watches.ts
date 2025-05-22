// types/watch.ts
/** A “handWatch” document in Sanity */
export interface WatchProduct {
  _id: string;                // Sanity document ID
  _type: "handWatch";         // Discriminant
  _createdAt?: string;
  _updatedAt?: string;

  images: Array<{
    _type: "image";
    asset: { _ref: string; _type: "reference" };
  }>;

  name: string;
  brand: string;
  model?: string;

  price: number;
  stock: number;

  movementType?: "automatic" | "manual" | "quartz" | "smart";
  strapMaterial?: string;     // e.g. Leather, Steel, Rubber
  caseMaterial?: string;      // e.g. Stainless Steel, Titanium
  dialColor?: string;
  waterResistance?: string;   // e.g. "50m", "100m"
  powerReserve?: string;      // e.g. "40 hours"
  complications?: string[];   // e.g. ["Chronograph", "GMT"]

  releaseDate?: string;       // ISO date string
  condition?: "new" | "cpo" | "used";

  rating?: number;            // 0–5
  description?: string;
  tags?: string[];

  dimensions?: string;        // e.g. "42mm x 10mm"
  weight?: string;            // e.g. "150g"
  warranty?: string;          // e.g. "2 years"

  video?: {
    _type: "file";
    asset: { _ref: string; _type: "reference" };
  } | null;
}
