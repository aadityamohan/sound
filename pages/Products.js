import React from 'react'
import { client } from '../lib/client';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Product, FooterBanner, HeroBanner, Trending } from '../components';
import Link from 'next/link';

const Products = ({ products, bannerData, trending }) => {
   
  return(
     <div>
  
 
     <div className="products-heading">
       <h2>Choose from our wide range of Products</h2>
       <h3>Affordable and Best for Music and Gaming</h3>
     </div>
     
     <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

 
     </div>
  )
  };

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const trendingQuery = '*[_type == "trending"]';
  const trending = await client.fetch(trendingQuery);


  return {
    props: { products, bannerData, trending }
  }
}

export default Products