// src/app/components/data_source.ts

import { getSanityImageUrl } from "../../../lib/sanityHelpers";
import { ElectronicsProduct } from "../../../public/types/electronics";
import { Product } from "../../../public/types/product";
import { ImageGallery } from "../../../public/types/slider";
import { WatchProduct } from "../../../public/types/watches";
import { IndividualProductModel } from "../../../schema/schemas";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchProducts(): Promise<Product[]> {
  if (!API_BASE_URL) {
    console.error("API base URL is not defined.");
    return [];
  }

  try {
    const res = await fetch(`${API_BASE_URL}/api/products`, {
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    return (await res.json()) as Product[];
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
}

export async function fetchElectronics(): Promise<ElectronicsProduct[]> {
  if (!API_BASE_URL) {
    console.error("API base URL is not defined.");
    return [];
  }

  try {
    const res = await fetch(`${API_BASE_URL}/api/electronics`, {
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    return (await res.json()) as ElectronicsProduct[];
  } catch (err) {
    console.error("Error fetching electronics:", err);
    return [];
  }
}

export async function fetchWatches(): Promise<WatchProduct[]> {
  if (!API_BASE_URL) {
    console.error("API base URL is not defined.");
    return [];
  }

  try {
    const res = await fetch(`${API_BASE_URL}/api/watches`, {
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    return (await res.json()) as WatchProduct[];
  } catch (err) {
    console.error("Error fetching watches:", err);
    return [];
  }
}

export async function fetchSlider(): Promise<ImageGallery[]> {
  if (!API_BASE_URL) {
    console.error("API base URL is not defined.");
    return [];
  }

  try {
    const res = await fetch(`${API_BASE_URL}/api/slider`, {
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    return (await res.json()) as ImageGallery[];
  } catch (err) {
    console.error("Error fetching slider:", err);
    return [];
  }
}

export async function syncProducts(): Promise<void> {
  try {
    // Fetch products from all endpoints concurrently
    const [generalProducts, electronics, watches] = await Promise.all([
      fetchProducts(),
      fetchElectronics(),
      fetchWatches(),
    ]);

    // Combine products with their respective types
    const allProducts = [
      ...generalProducts.map((p) => ({ ...p, type: "general" })),
      ...electronics.map((p) => ({ ...p, type: "electronics" })),
      ...watches.map((p) => ({ ...p, type: "watch" })),
    ];

    // Process each product
    for (const product of allProducts) {
      const { _id, name, price, images, type } = product;

      // Map fields to IndividualProductModel schema
      const product_id = _id;
      const product_name = name;
      const product_price = price;
      const imageUrls = images.map((img) =>
        getSanityImageUrl(img.asset._ref)
      ) ?? [];
      const mainImage = imageUrls.at(-1) ?? '';
      // Check if the product already exists in the database
      const existingProduct = await IndividualProductModel.findOne({ product_id });

      if (!existingProduct) {
        // If the product doesn't exist, create a new document
        await IndividualProductModel.create({
          product_id,
          product_name,
          product_price,
          product_image: mainImage,
          type,
        });
        console.log(`Added new product: ${product_name} (${product_id})`);
      }
    }
    console.log("Product synchronization completed.");
  } catch (error) {
    console.error("Error during product synchronization:", error);
  }
}

// export async function syncProducts(): Promise<void> {
//   try {
//     // Fetch products from all endpoints concurrently
//     const [generalProducts, electronics, watches] = await Promise.all([
//       fetchProducts(),
//       fetchElectronics(),
//       fetchWatches(),
//     ]);

//     // Combine products with their respective types
//     const allProducts = [
//       ...generalProducts.map((p) => ({ ...p, type: "general" })),
//       ...electronics.map((p) => ({ ...p, type: "electronics" })),
//       ...watches.map((p) => ({ ...p, type: "watch" })),
//     ];

//     // Collect all fetched product_ids
//     const fetchedProductIds = allProducts.map(p => p._id);

//     // Process each product
//     for (const product of allProducts) {
//       const { _id, name, price, images, type } = product;

//       // Map fields to IndividualProductModel schema
//       const product_id = _id;
//       const product_name = name;
//       const product_price = price;
//       const imageUrls = images.map((img) =>
//         getSanityImageUrl(img.asset._ref)
//       ) ?? [];
//       const mainImage = imageUrls.at(-1) ?? '';

//       // Check if the product already exists in the database
//       const existingProduct = await IndividualProductModel.findOne({ product_id });

//       if (!existingProduct) {
//         // If the product doesn't exist, create a new document
//         await IndividualProductModel.create({
//           product_id,
//           product_name,
//           product_price,
//           product_image: mainImage,
//           type,
//         });
//         console.log(`Added new product: ${product_name} (${product_id})`);
//       }
//     }

//     // Delete products that are in the database but not in the fetched list
//     const deleteResult = await IndividualProductModel.deleteMany({ product_id: { $nin: fetchedProductIds } });
//     console.log(`Deleted ${deleteResult.deletedCount} products that are no longer present.`);

//     console.log("Product synchronization completed.");
//   } catch (error) {
//     console.error("Error during product synchronization:", error);
//   }
// }