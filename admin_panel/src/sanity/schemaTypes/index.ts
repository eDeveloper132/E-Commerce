import { type SchemaTypeDefinition } from 'sanity'
import productSchema from '../products'
import electronicsSchema from '../Electronics'
import watchSchema from '../Watches'
import sliderSchema from '../Slider'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, electronicsSchema, watchSchema, sliderSchema],
}
