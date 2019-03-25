export default {
  name: 'wagon',
  type: 'document',
  title: 'The Wagon',
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
      type: 'cupcake'
    }
  ]
}
