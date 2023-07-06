import React from 'react';
import useSWR from 'swr'; // dont use useEffect use this instead.
import axios from 'axios';

const fetcher =  async url => await axios.get(url).then(res => res.data);

export default function FetchData() {
    const {data,error,isLoading} = useSWR('add your url here', fetcher);
  return (
   <>
        {isLoading ? <div>data is being loaded...</div> : 
        <>
            {data.map((el,idx)=>{
                return <h1 key={el.id}>{el.id}. {el.name}</h1>
            })}
        </>}
   </>
  )
}
