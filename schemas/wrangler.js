export default {
  name: 'wrangler',
  type: 'document',
  title: 'Wrangler',
  fields: [{
      name: 'name',
      type: 'string',
    },
    {
      name: 'figure',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'presentation',
      type: 'text'
    },
    {
      name: 'designs',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{
          type: 'cupcake'
        }]
      }]
    }
  ]
}
