import React, { useMemo, useState } from "react";

export default function Cart(props) {

    const data = props.data;

    const finalPrice = data.map(el=> el.cartData.price);

    const total = finalPrice.reduce((total,num)=>{
      return total + Math.round(num);
    },0);

  return (
    <>
      <ul>
        {data.map((el, idx) => {
          return <li key={el?.cartData?.id}>S.No.{idx + 1} product: {el?.cartData?.title} price: ${el?.cartData?.price} des: {el?.cartData?.des} <button onClick={()=>props.removefromcartHandler(el?.cartData?.id)}>Remove</button></li>;
        })}
      </ul>
      <h3>Total: ${total}</h3>
    </>
  );
}
