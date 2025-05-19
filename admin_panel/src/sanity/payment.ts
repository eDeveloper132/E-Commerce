// schemas/payment.ts
import { Rule } from '@sanity/types';

const paymentSchema = {
  name: 'payment',
  title: 'Payment',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'reference',
      to: [{ type: 'order' }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'string',
      options: {
        list: ['PayPal', 'Stripe', 'Credit Card'],
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(0),
    },
    {
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: ['pending', 'completed', 'failed'],
      },
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};

export default paymentSchema;
