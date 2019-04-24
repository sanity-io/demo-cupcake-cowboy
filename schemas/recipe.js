export default {
  name: 'recipe',
  type: 'document',
  title: 'Recipe',
  preview: {
    select: {
      name: 'name',
      availability: 'availability',
      ingredients: 'ingredients'
    },
    prepare: ({
      name,
      availability,
      ingredients
    }) => ({
      title: name,
      subtitle: `${availability.from} - ${availability.to}`
    })
  },
  fields: [{
      name: 'name',
      type: 'string'
    },
    {
      name: 'availability',
      type: 'object',
      fields: [{
          name: 'from',
          type: 'date'
        },
        {
          name: 'to',
          type: 'date'
        }
      ]
    }, {
      name: 'procedure',
      type: 'array',
      of: [
        {
          type: 'block',
          of: [
            { type: 'measurement'},
          ]
        }
      ]
    },{
      name: 'ingredients',
      type: 'array',
      of: [{ type: 'measurement'},],
    },
    {
      name: 'figure',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'figure'
    }
  }
}
