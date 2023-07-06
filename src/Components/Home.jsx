import React, { useState } from "react";
import useSWR from "swr"; // dont use useEffect use this instead.
import axios from "axios";

const fetcher = async (url) => await axios.get(url).then((res) => res.data);

export default function Home(props) {

  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher
  );

  const filterId = props.data.map(ele => ele.cartData.id);

  return (
    <>
      <div style={{display:'grid',gridTemplateColumns:'auto auto auto auto auto auto'}}>
        {!isLoading && data.map((productInfo,idx) => {
          return (
            <div style={{ border: "2px solid black", width: "300px" }} key={productInfo.id}>
              <h3>Product name: {productInfo.title}</h3>
              <h3>Price: ${productInfo.price}</h3>
              <p>Des: {productInfo.description}</p>
              <button onClick={() => props.addTocartHandler(productInfo)} disabled={filterId.includes(productInfo.id)}>
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
