/** Shared fields between all product kinds */
export interface BaseProduct {
  _id: string
  _type: string
  _createdAt?: string
  _updatedAt?: string

  images: Array<{
    _type: 'image'
    asset: { _ref: string; _type: 'reference' }
    hotspot?: { x: number; y: number; height: number; width: number }
    crop?: { top: number; bottom: number; left: number; right: number }
  }>
  name: string
  price: number
  stock: number
  rating: number
  description?: string
  video?: {
    _type: 'file'
    asset: { _ref: string; _type: 'reference' }
  } | null
}

/** Standard “product” document in Sanity */
export interface Product extends BaseProduct {
  _type: 'product'
  category?: string
  tag?: string

  // Added optional fields to support any product type
  brand?: string
  model?: string
  tags?: string[]          // plural tags for uniformity
  specifications?: { specName: string; specValue: string }[]
  warranty?: string
  releaseDate?: string
  color?: string
  dimensions?: string
  weight?: string
  condition?: 'new' | 'refurbished' | 'used' | 'cpo'
  features?: string[]

  // Watch-specific optional fields
  movementType?: 'automatic' | 'manual' | 'quartz' | 'smart'
  strapMaterial?: string
  caseMaterial?: string
  dialColor?: string
  waterResistance?: string
  powerReserve?: string
  complications?: string[]

  // Clothing-specific optional fields
  material?: string
  size?: string[]
  gender?: string

  // Furniture-specific optional fields
  assemblyRequired?: boolean
  roomType?: string
}

/** Electronics-specific extensions */
export interface ElectronicsProduct extends BaseProduct {
  _type: 'electronics'
  category: string
  tags: string[]
  brand: string
  model: string
  specifications: { specName: string; specValue: string }[]
  warranty: string
  releaseDate: string
  color: string
  dimensions: string
  weight: string
  condition: 'new' | 'refurbished' | 'used'
  features: string[]
}

/** Hand watch-specific product */
export interface WatchProduct extends BaseProduct {
  _type: 'handWatch'
  brand: string
  model?: string
  movementType?: 'automatic' | 'manual' | 'quartz' | 'smart'
  strapMaterial?: string
  caseMaterial?: string
  dialColor?: string
  waterResistance?: string
  powerReserve?: string
  complications?: string[]
  releaseDate?: string
  condition?: 'new' | 'cpo' | 'used'
  tags?: string[]
  dimensions?: string
  weight?: string
  warranty?: string
}

/** Union for all product types */
export type AnyProduct = Product | ElectronicsProduct | WatchProduct

/** Type-guard for electronics */
export function isElectronics(p: AnyProduct): p is ElectronicsProduct {
  return p._type === 'electronics'
}

/** Type-guard for watches */
export function isWatch(p: AnyProduct): p is WatchProduct {
  return p._type === 'handWatch'
}
