// lib/sanityHelpers.ts
/** Build a Sanity image URL from its `_ref` */
export function getSanityImageUrl(ref?: string): string {
  if (!ref) return ''
  const [, assetId, dims, fmt] = ref.split('-')
  return `https://cdn.sanity.io/images/onmb9fp6/production/${assetId}-${dims}.${fmt}`
}

/** Build a Sanity file/video URL from its `_ref` */
export function getSanityFileUrl(ref?: string): string {
  if (!ref) return '';
  const parts = ref.split('-');
  if (parts[0] !== 'file' || parts.length < 3) return '';
  const assetId = parts[1];
  const fmt = parts[2];
  return `https://cdn.sanity.io/files/onmb9fp6/production/${assetId}.${fmt}`;
}