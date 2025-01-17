import { type SchemaTypeDefinition } from 'sanity'
import productSchema from '../products'
import customerSchema from '../customer'
import orderSchema from '../order'
import paymentSchema from '../payment'
import shipmentSchema from '../shipment'
import deliveryZoneSchema from '../deliveryzome'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema , customerSchema, orderSchema, paymentSchema, shipmentSchema, deliveryZoneSchema],
}
