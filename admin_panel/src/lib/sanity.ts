import { client } from "@/sanity/lib/client";
import { Product } from "@/types/product";
import { groq } from "next-sanity";


export async function getProducts(): Promise<Product[]> {
  return client.fetch(
    groq`*[_type == "product"] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      image,
      name,
      price,
      stock,
      category,
      tag,
      rating,
      description
    }`
  );
}