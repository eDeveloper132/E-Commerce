import { Rule } from '@sanity/types';

const electronicsSchema = {
  name: 'electronics',
  title: 'Electronics',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: (Rule: Rule) => Rule.required().min(3),
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
      description: 'Product category (e.g., Laptops, Smartphones, Cameras)',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
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
      description: 'Product description',
    },
    {
      name: 'video',
      title: 'Product Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
      description: 'Brand of the electronics',
    },
    {
      name: 'model',
      title: 'Model',
      type: 'string',
      description: 'Model number or name',
    },
    {
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'specName',
              title: 'Specification Name',
              type: 'string',
            },
            {
              name: 'specValue',
              title: 'Specification Value',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'warranty',
      title: 'Warranty',
      type: 'string',
      description: 'Warranty information (e.g., 1 year)',
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      description: 'Release date of the product',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Color of the product',
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      description: 'Physical dimensions (e.g., 15 x 10 x 1 cm)',
    },
    {
      name: 'weight',
      title: 'Weight',
      type: 'string',
      description: 'Weight of the product (e.g., 1.5 kg)',
    },
    {
      name: 'condition',
      title: 'Condition',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Refurbished', value: 'refurbished' },
          { title: 'Used', value: 'used' },
        ],
      },
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key features of the product',
    },
  ],
};

export default electronicsSchema;