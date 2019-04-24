import { ranch } from '../icons'

export default {
  name: 'ranch',
  type: 'document',
  title: 'The Ranch',
  icon: ranch,
  liveEdit: true,
  fields: [{
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'open',
      type: 'array',
      title: 'Are we open?',
      of: [{
        type: 'object',
        preview: {
          select: {
            weekday: 'weekday',
            from: 'from',
            to: 'to'
          },
          prepare: ({
            weekday,
            from = '',
            to = ''
          }) => ({
            title: weekday + `: ${from}${from !== '' ? ` - ${to}` : 'Closed'}`
          })
        },
        fields: [{
            name: 'weekday',
            type: 'string',
            options: {
              list: [{
                  value: 'Monday',
                  title: 'Monday'
                },
                {
                  value: 'Tuesday',
                  title: 'Tuesday'
                },
                {
                  value: 'Wednesday',
                  title: 'Wednesday'
                },
                {
                  value: 'Thursday',
                  title: 'Thursday'
                },
                {
                  value: 'Friday',
                  title: 'Friday'
                },
                {
                  value: 'Saturday',
                  title: 'Saturday'
                },
                {
                  value: 'Sunday',
                  title: 'Sunday'
                },
              ]
            }
          },
          {
            name: 'from',
            type: 'string',
          },
          {
            name: 'to',
            type: 'string',
          }
        ]
      }]
    },
    {
      name: 'location',
      type: 'geopoint'
    },
    {
      name: 'cupcake',
      title: 'Cupcake of the day',
      type: 'reference',
      to: [{
        type: 'cupcake'
      }]
    }
  ]
}


