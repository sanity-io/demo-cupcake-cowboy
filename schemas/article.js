export default {
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [{
      name: 'title',
      type: 'string'
    },
    {
      name: 'publishedAt',
      type: 'datetime'
    },
    {
      name: 'body',
      type: 'array',
      of: [{
          type: 'block',
          of: [{
              name: 'recipe',
              type: 'reference',
              to: [{
                type: 'recipe'
              }]
            },
            {
              name: 'wrangler',
              type: 'reference',
              to: [{
                type: 'wrangler'
              }]
            },
          ]
        },
        {
          name: 'recipe',
          type: 'reference',
          to: [{
            type: 'recipe'
          }]
        },
        {
          name: 'wrangler',
          type: 'reference',
          to: [{
            type: 'wrangler'
          }]
        },
      ]
    },
    {
      name: 'seo',
      type: 'object',
      title: 'Search Engine Optimization',
      description: 'Override fields for sharing on Facebook, Twitter, Pinterest etc.',
      fields: [{
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'ogTitle',
          title: 'Open Graph title',
          type: 'string'
        },
        {
          name: 'ogDescription',
          title: 'Open Graph description',
          type: 'text'
        }
      ]
    }
  ]
}
