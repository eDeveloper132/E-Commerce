export type Product = {
  _id: string;               // Added by Sanity for all documents
  _type: 'product';          // Matches schema name
  _createdAt?: string;       // Optional, added by Sanity
  _updatedAt?: string;       // Optional, added by Sanity

  images: Array<{
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
    crop?: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
  }>;                        // Required images (at least 3 per schema)

  name: string;              // Required string (3–100 chars)
  price: number;             // Required number (≥ 0)
  stock: number;             // Required number (≥ 0)

  category?: string;         // Optional string (e.g. “Electronics”)
  tag?: string;              // Optional string (search keywords)
  rating: number;            // Required number (≥ 0)
  description?: string;      // Optional string

  video?: {
    _type: 'file';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };                         // Optional video file
};