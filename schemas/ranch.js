export default {
  name: 'ranch',
  type: 'document',
  title: 'The Ranch',
  liveEdit: true,
  fields: [{
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'open',
      type: 'boolean',
      title: 'Are we open?'
    },
    {
      name: 'location',
      type: 'geopoint'
    },
    {
      name: 'cupcake',
      type: 'reference',
      to: [{
        type: 'cupcake'
      }]
    }
  ]
}
