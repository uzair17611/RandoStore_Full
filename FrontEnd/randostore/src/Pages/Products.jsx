import React, { useContext } from 'react'

import { useParams } from 'react-router-dom'
import BreadCrums from '../Component/BreadCrums/BreadCrums'
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox'
import RelatedProduct from '../Component/RelatedProduct/RelatedProduct'
import {useState,useEffect} from "react"
import axiosRequest from '../Utilis/axiosRequest';

const Products = () => {
    const [Newproduct, setNewProduct] = useState([]);
    const { productId } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await axiosRequest.get(`/items/${productId}`);
            console.log(response);
        
            setNewProduct(response.data ?? []);
          
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchProduct();
      }, []);

   
    

    console.log("productId" ,productId)
   
  

    return (
        <div>
            <BreadCrums product={Newproduct}  />
            <ProductDisplay />
            <DescriptionBox/>
            <RelatedProduct/>
        </div>
    )
}

export default Products
