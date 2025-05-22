import { Rule } from '@sanity/types';

const productSchema = {
  name: 'product',
  title: 'Universal Product',
  type: 'document',
  fields: [
    // 🔹 Core Fields (required as before)
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
      description: 'Product category (e.g., Electronics, Clothing, Watch)',
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

    // 🔹 Optional fields added (all optional)
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
    },
    {
      name: 'model',
      title: 'Model',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      description: 'Example: "42mm x 10mm", "30x20x10 cm"',
    },
    {
      name: 'weight',
      title: 'Weight',
      type: 'string',
      description: 'Example: "150g", "1.2kg"',
    },
    {
      name: 'warranty',
      title: 'Warranty',
      type: 'string',
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
    },
    {
      name: 'condition',
      title: 'Condition',
      type: 'string',
      options: {
        list: ['new', 'refurbished', 'used', 'cpo'],
      },
    },
    {
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'specName', type: 'string', title: 'Specification Name' },
            { name: 'specValue', type: 'string', title: 'Specification Value' },
          ],
        },
      ],
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'movementType',
      title: 'Movement Type',
      type: 'string',
      options: {
        list: ['automatic', 'manual', 'quartz', 'smart'],
      },
    },
    {
      name: 'strapMaterial',
      title: 'Strap Material',
      type: 'string',
    },
    {
      name: 'caseMaterial',
      title: 'Case Material',
      type: 'string',
    },
    {
      name: 'dialColor',
      title: 'Dial Color',
      type: 'string',
    },
    {
      name: 'waterResistance',
      title: 'Water Resistance',
      type: 'string',
    },
    {
      name: 'powerReserve',
      title: 'Power Reserve',
      type: 'string',
    },
    {
      name: 'complications',
      title: 'Complications',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'material',
      title: 'Material',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Example: S, M, L, XL',
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: ['unisex', 'men', 'women', 'kids'],
      },
    },
    {
      name: 'assemblyRequired',
      title: 'Assembly Required',
      type: 'boolean',
    },
    {
      name: 'roomType',
      title: 'Room Type',
      type: 'string',
      description: 'e.g., Living Room, Bedroom, Office',
    },
  ],
};

export default productSchema;
