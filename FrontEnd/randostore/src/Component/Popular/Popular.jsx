import React from 'react'
import data_product from "../Assets/data"
import Items from '../Items/Items'
import axiosRequest from '../../Utilis/axiosRequest'
import { useState,useEffect } from 'react'
import { backEndbaseURL } from '../../Utilis/baseUrl'
import {useParams} from "react-router-dom"

const Popular = () => {
    const [product ,setProduct] =useState([])

    const {productId} =useParams()
    useEffect(() => {
        
    const fetchProduct =async()=>{

        try {
            const  response = await axiosRequest.get("/items");
            console.log(response);
            setProduct(response.data ?? [] )
             

        } catch (error) {
            console.log(error)
        }

    }

    fetchProduct()
        
        
      }, []);


    console.log("dataproduct" ,data_product)
  return (
    <div className="flex items-center gap-10 flex-col h-auto  bg-gradient-to-r from-white via-pink-100 to-teal-100 ">
    <h1 className="text-50 font-semibold text-black text-3xl mt-4">Popular Now</h1>
    <hr className="w-[200px] h-[6px] rounded bg-green-950" />
<div className='grid grid-cols-4 gap-4 '>
    {product.map((item ,i)=>{
        return(
       <Items key={i} 
       id={item.id}
       name={item.name}  
       image={backEndbaseURL + "/" + (item?.img || '')} 
        new_price={item.price}
       />
        )
    })}
</div>

    </div>
  )
}

export default Popular