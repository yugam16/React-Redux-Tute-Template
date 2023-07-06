import React, { useState } from 'react';
import Cart from './Cart';
import Home from './Home';

export default function Route() {
    const [isActive,setisActive] = useState({cart: false,home: true});
  return (
    <>
        {!isActive.cart && isActive.home ? <Home isActive = {isActive}/> : <Cart isActive={isActive}/>}
    </>
  )
}
