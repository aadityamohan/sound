export default {
    name: 'trending',
    title: 'Trending',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'product',
        title: 'Product',
        type: 'string',
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
    ]
  }