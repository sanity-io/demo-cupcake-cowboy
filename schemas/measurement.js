export default {
    name: 'measurement',
    title: 'Measurement',
    type: 'object',
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
          title: `${measure} ${unit} ${name}`
        }
      }
    },
    fields: [
      {
        name: 'name',
        type: 'reference',
        to: [{
          type: 'ingredient'
        }]
      },

      {
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
      }]}