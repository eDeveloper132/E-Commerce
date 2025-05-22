import { client } from "@/sanity/lib/client";
import { ElectronicsProduct } from "@/types/electronics";
import { Product } from "@/types/product";
import { ImageGallery } from "@/types/slider";
import { WatchProduct } from "@/types/watches";
import { groq } from "next-sanity";

export async function getProducts(): Promise<Product[]> {
  return client.fetch(
    groq`*[_type == "product"] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      images,
      name,
      price,
      stock,
      category,
      tag,
      rating,
      description,
      video,

      brand,
      model,
      color,
      dimensions,
      weight,
      warranty,
      releaseDate,
      condition,

      specifications[] {
        specName,
        specValue
      },

      features[],
      
      movementType,
      strapMaterial,
      caseMaterial,
      dialColor,
      waterResistance,
      powerReserve,
      complications[],

      material,
      size[],
      gender,

      assemblyRequired,
      roomType
    }`
  );
}


export async function getElectronics(): Promise<ElectronicsProduct[]> {
  return client.fetch(
    groq`*[_type == "electronics"] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      images,
      name,
      price,
      stock,
      category,
      tags,
      rating,
      description,
      video,
      brand,
      model,
      specifications,
      warranty,
      releaseDate,
      color,
      dimensions,
      weight,
      condition,
      features
    }`
  );
}

export async function getWatches(): Promise<WatchProduct[]> {
  return client.fetch(
    groq`*[_type == "handWatch"] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      images,
      name,
      brand,
      model,
      price,
      stock,
      movementType,
      strapMaterial,
      caseMaterial,
      dialColor,
      waterResistance,
      powerReserve,
      complications,
      releaseDate,
      condition,
      rating,
      description,
      tags,
      dimensions,
      weight,
      warranty,
      video
    }`
  );
}

export async function getImageGallery(): Promise<ImageGallery[]> {
  return client.fetch(groq`*[_type == "slider"]`);
}