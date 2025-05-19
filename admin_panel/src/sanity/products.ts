import { Rule } from '@sanity/types';

const productSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(3).max(100),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(0),
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(0),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Product category (e.g., Electronics, Clothing)',
    },
    {
      name: 'tag',
      title: 'Tags',
      type: 'string',
      description: 'Keywords for search filtering',
    },
    {
      name: 'rating',
      title: 'Ratings',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(0),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Keywords for search filtering',
    },
  ],
};

export default productSchema;
