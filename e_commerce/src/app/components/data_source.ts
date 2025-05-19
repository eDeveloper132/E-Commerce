// src/app/components/data_source.ts

import { Product } from "../../../public/types/product";

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
