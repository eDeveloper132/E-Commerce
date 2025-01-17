// sanityClient.ts
import { createClient } from '@sanity/client';
import "dotenv/config";

export const client = createClient({
  projectId: `${process.env.projectId}`, // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2025-01-17',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token: `${process.env.sanityToken}`,
});