// schemas/customer.ts
import { Rule } from '@sanity/types';

const customerSchema = {
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    {
      name: 'customerId',
      title: 'Customer ID',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
          validation: (Rule: Rule) => Rule.required().email(),
        },
      ],
    },
    {
      name: 'address',
      title: 'Shipping Address',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'orderHistory',
      title: 'Order History',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'order' }] }],
    },
  ],
};

export default customerSchema;
