import React, { useEffect,useState } from 'react'
import axios from 'axios'

const Craving = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get('https://www.edamam.com/search?q=craving&app_id=591bd3cd&app_key=ee49bf3041e13fa627976b22e7cd9ebb')
        .then((res)=>{
            setData(res.data.hits);
            console.log(data)
        })
    },[data])
  return (
    <div>
      <div className='craving'>
        {data.map((post)=>{
         const{image,label}=post
         return(
            <div>
                <img src={image} alt="loading"/>
                <h1>{label}</h1>
            </div>
         )
         })}
      </div>
    </div>
  )
}

export default Craving
