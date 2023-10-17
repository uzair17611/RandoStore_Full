import React from 'react'
import Items from '../Items/Items'
import axiosRequest from '../../Utilis/axiosRequest';
import { backEndbaseURL } from '../../Utilis/baseUrl';

import {useState,useEffect} from "react"

const RelatedProduct = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await axiosRequest.get("/items");
            console.log(response);
        
            setProduct(response.data ?? []);
          
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchProduct();
      }, []);
  return (
    <div className="flex flex-col items-center h-auto mt-10  mb-10">

        <h1 className="text-[#1f1f1f] font-bold font-md text-3xl mb-5">Related Product</h1>
        <hr  className="border-t-2 border-gray-300 my-6 h-12 w-[50px]" />
        <div className="grid grid-cols-4 gap-2">
         {
            product.map((item, i)=>{

                return( <Items key={i} 
                    id={item?.id}  
                    name={item?.name}  
                    image={backEndbaseURL + "/" + (item?.img || '')} 
                     new_price={item?.price}
                      />)
                
                
            })
         }


        </div>
    </div>
  )
}

export default RelatedProduct