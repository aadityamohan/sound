import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Canceled = () => {
     const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    
  }, []);
  return (
   <>
    <Link href="/">
        <h2 className='title'>SOUND STORE</h2>
    </Link>

    <div  className="success-wrapper">
         <div className="success">
        
          <h2>Your payment resquest has been Cancelled.</h2>
          
          <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:Sound_Store@gmail.com">
            help@soundstore.com
          </a>
        </p>
         <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping!
          </button>
        </Link>
          </div>
    </div>

    </>

  )
}

export default Canceled