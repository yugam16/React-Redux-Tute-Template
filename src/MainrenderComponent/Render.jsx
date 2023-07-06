import React, { useState, useMemo } from 'react';
import HomeContainer from '../containers/HomeContainer.jsx';
import CartContainer from '../containers/CartContainer.jsx';

export default function Render(props) {

  const [toggle,setToggle] = useState(true);

  useMemo(()=>setToggle(props.data),[props.data]);

  return (
    <div style={{textAlign:'center',marginTop:'20px'}}>
      <nav style={{display: 'flex'}}>
        <div style={{textAlign:'left',width:'100%',marginLeft:'20px'}}>
          <h1>Prodcuts Page</h1>
        </div>
        <div style={{textAlign:'right',width:'100%', marginRight:'30px',cursor:'pointer',userSelect:'none'}} onClick={()=>props.toggleHandler(false)}>
          <p>Cart Page</p>
        </div>
      </nav>
      {toggle ? <HomeContainer/> : <CartContainer/> }
    </div>
  )
}
