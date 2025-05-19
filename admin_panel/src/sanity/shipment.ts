// schemas/shipment.ts
import { Rule } from '@sanity/types';

const shipmentSchema = {
  name: 'shipment',
  title: 'Shipment',
  type: 'document',
  fields: [
    {
      name: 'shipmentId',
      title: 'Shipment ID',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'reference',
      to: [{ type: 'order' }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Shipment Status',
      type: 'string',
      options: {
        list: ['in transit', 'delivered', 'returned'],
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'deliveryDate',
      title: 'Delivery Date',
      type: 'datetime',
      description: 'Estimated or actual delivery date',
    },
  ],
};

export default shipmentSchema;
