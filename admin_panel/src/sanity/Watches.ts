import { Rule } from '@sanity/types';

const watchSchema = {
  name: 'handWatch',
  title: 'Hand Watch',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Watch Images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: (Rule: Rule) => Rule.required().min(3).error('At least 3 images are required'),
    },
    {
      name: 'name',
      title: 'Watch Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(3).max(100),
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'model',
      title: 'Model',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price (PKR)',
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
      name: 'movementType',
      title: 'Movement Type',
      type: 'string',
      options: {
        list: [
          { title: 'Automatic', value: 'automatic' },
          { title: 'Manual', value: 'manual' },
          { title: 'Quartz', value: 'quartz' },
          { title: 'Smart', value: 'smart' },
        ],
      },
    },
    {
      name: 'strapMaterial',
      title: 'Strap Material',
      type: 'string',
      description: 'e.g. Leather, Stainless Steel, Rubber',
    },
    {
      name: 'caseMaterial',
      title: 'Case Material',
      type: 'string',
      description: 'e.g. Stainless Steel, Titanium, Ceramic',
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
      description: 'e.g. 50m, 100m, 200m',
    },
    {
      name: 'powerReserve',
      title: 'Power Reserve',
      type: 'string',
      description: 'e.g. 40 hours, 72 hours',
    },
    {
      name: 'complications',
      title: 'Complications',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. Chronograph, Moonphase, GMT',
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
        list: [
          { title: 'New', value: 'new' },
          { title: 'Certified Pre-Owned', value: 'cpo' },
          { title: 'Used', value: 'used' },
        ],
      },
    },
    {
      name: 'rating',
      title: 'Customer Rating',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(0).max(5),
      description: '0–5 stars',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Detailed description of the watch',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords for filtering/search',
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      description: 'e.g. 42mm case, 10mm thickness',
    },
    {
      name: 'weight',
      title: 'Weight',
      type: 'string',
      description: 'e.g. 150g',
    },
    {
      name: 'warranty',
      title: 'Warranty',
      type: 'string',
      description: 'e.g. 2 years international',
    },
    {
      name: 'video',
      title: 'Watch Video',
      type: 'file',
      options: { accept: 'video/*' },
    },
  ],
};

export default watchSchema;
