import { fetchProducts, fetchElectronics, fetchWatches } from "@/app/components/data_source"
import { AnyProduct } from "../public/types/catalog"

export async function getProductById(id: string): Promise<AnyProduct | null> {
  const [products, electronics, watches] = await Promise.all([
    fetchProducts(),
    fetchElectronics(),
    fetchWatches(),
  ])

  const p = products.find((p) => p._id === id)
  if (p) return { ...p, _type: 'product' }

  const e = electronics.find((e) => e._id === id)
  if (e) return { ...e, _type: 'electronics' }

  const w = watches.find((w) => w._id === id)
  if (w) return { ...w, _type: 'handWatch', rating: w.rating ?? 0 } // Fix for optional `rating`

  return null
}
