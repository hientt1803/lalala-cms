import { CollectionConfig } from 'payload'

export const Hotels: CollectionConfig = {
  slug: 'hotels',
  // auth: true,
  fields: [
    {
      name: 'id',
      type: 'text',
      label: 'Hotel ID',
      index: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'name',
      type: 'text',
      label: 'Hotel Name',
      required: true,
      index: true,
      defaultValue: 'Please provide name',
    },
    {
      name: 'desc',
      type: 'richText',
      label: 'Hotel Description',
      defaultValue: 'Please provide description',
      required: true,
    },
    {
      name: 'taxes',
      type: 'checkbox',
      required: true,
      label: 'Does includes taxes and charges',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'latitude',
          type: 'point',
          required: true,
          label: 'Location latitude',
        },
        {
          name: 'longtitude',
          type: 'point',
          required: true,
          label: 'Location Longtitude',
        },
      ],
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    // {
    //   name: 'modalImages',
    //   type: 'ui', 
    //   admin: {
    //     components: {
    //       Field: MyCustomUIField,
    //       Cell: MyCustomUICell,
    //     },
    //   },
    // },
  ],
}
