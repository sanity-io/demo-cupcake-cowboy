export default {
  name: 'recipe',
  type: 'document',
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
      name: 'ingredients',
      type: 'array',
      of: [{
        name: 'ingredient',
        type: 'object',
        fields: [{
            name: 'name',
            type: 'reference',
            to: [{
              type: 'ingredient'
            }]
          }, {
            name: 'measure',
            type: 'number',
          },
          {
            name: 'unit',
            type: 'string',
            options: {
              list: [{
                  value: 'teaspoon',
                  title: 'Teaspoon'
                },
                {
                  value: 'tablespoon',
                  title: 'Tablespoon'
                },
                {
                  value: 'fluid',
                  title: 'Fluid'
                },
                {
                  value: 'gill',
                  title: 'Gill'
                },
                {
                  value: 'cup',
                  title: 'Cup'
                },
                {
                  value: 'pint',
                  title: 'Pint'
                },
                {
                  value: 'quart',
                  title: 'Quart'
                },
                {
                  value: 'gallon',
                  title: 'Gallon'
                },
              ]
            }
          }
        ],
        preview: {
          select: {
            name: 'name.name',
            measure: 'measure',
            unit: 'unit'
          },
          prepare({
            name,
            measure,
            unit = ''
          }) {
            return {
              title: `${name}: ${measure} ${unit}`
            }
          }
        }
      }]
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
