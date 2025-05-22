// src/app/components/data_source.ts

import { ElectronicsProduct } from "../../../public/types/electronics";
import { Product } from "../../../public/types/product";
import { ImageGallery } from "../../../public/types/slider";
import { WatchProduct } from "../../../public/types/watches";

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