// schemas/deliveryZone.ts
import { Rule } from '@sanity/types';

const deliveryZoneSchema = {
  name: 'deliveryZone',
  title: 'Delivery Zone',
  type: 'document',
  fields: [
    {
      name: 'zoneName',
      title: 'Zone Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'coverageArea',
      title: 'Coverage Area',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of postal codes or cities served',
    },
    {
      name: 'assignedDrivers',
      title: 'Assigned Drivers',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Names or IDs of assigned drivers or couriers',
    },
  ],
};

export default deliveryZoneSchema;
