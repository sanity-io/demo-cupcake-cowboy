// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import wagon from './wagon'
import cupcake from './cupcake'
import wrangler from './wrangler'
import recipe from './recipe'
import ingredient from './ingredient'
import ranch from './ranch'
import article from './article'
import allergen from './allergen'
import measurement from './measurement'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    wagon,
    cupcake,
    wrangler,
    recipe,
    ingredient,
    ranch,
    article,
    allergen,
    measurement
  ])
})
