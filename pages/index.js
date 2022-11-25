import React from 'react'
import { client } from '../lib/client';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Product, FooterBanner, HeroBanner, Trending } from '../components';
import Link from 'next/link';


const Home = ({ products, bannerData, trending }) => {
   
 return(
    <div>
  
    <HeroBanner heroBanner={bannerData[1]} />

    <div className="products-heading">
      <h2>Trending Products</h2>
      <h3>Best in the Market</h3>
    </div>
    
    <div className="products-container">
      {trending?.map((trending) => <Trending trending={trending} />)}
    </div>

   
    <Link href="/Products">
    <button  className='allbutton' type='button' > View all Products </button>
    </Link>
   
    <FooterBanner footerBanner={bannerData[0]} />

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



export default Home;