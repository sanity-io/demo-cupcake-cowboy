export default {
  name: 'cupcake',
  type: 'document',
  title: 'Cupcake',
  fields: [{
    name: 'name',
    type: 'string',
  }, {
    name: 'figure',
    type: 'image',
    options: {
      hotspot: true
    }
  }]
}
