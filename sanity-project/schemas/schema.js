
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

{/*npx @sanity/cli start*/}

import product from './product';
import banner from './banner';
import trending from './trending';



export default createSchema({
  
  name: 'default',
  types: schemaTypes.concat([ product, banner, trending ]),
})
