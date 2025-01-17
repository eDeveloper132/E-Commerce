// schemas/order.ts
import { Rule } from '@sanity/types';

const orderSchema = {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'customer',
      title: 'Customer',
      type: 'reference',
      to: [{ type: 'customer' }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: ['pending', 'shipped', 'delivered', 'cancelled'],
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};

export default orderSchema;
