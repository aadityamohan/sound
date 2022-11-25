import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Trending = ({trending: {product, name, price, image} }) => {
    return (
    <div>
       <Link href={`/product/${product}`}>
         <div  className="product-card">
            <img src={urlFor(image)} alt="headphones" 
            width={250}
            height={250}
            className="product-image" 
            /> 
            <p className="product-name">{name}</p>
            <p className="product-price">₹{price}</p>
        </div>
    </Link>

    </div>
    )
  }

export default Trending