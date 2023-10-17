import React, { useEffect, useState } from 'react';
import start_icon from '../Assets/star_icon.png';
import start_dull_icon from '../Assets/star_dull_icon.png';
import axiosRequest from '../../Utilis/axiosRequest';
import { useParams } from 'react-router-dom';
import { backEndbaseURL } from '../../Utilis/baseUrl';
import {useContext} from "react"
import { ItemsContext } from '../ItemsContext/ItemsContext'



const ProductDisplay = () => {
  const { productId } = useParams();
  const [newProduct, setNewProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const {products,cartItem,addToCart ,getTotalAmountCart,removeFromCART} =useContext(ItemsContext)


  
  const handleAddToCart = () => {
    // Assuming newProduct.id is the unique identifier for the product
    addToCart(newProduct.id);
    console.log('Add to cart clicked for product:', newProduct.id);
  };

useEffect(() => {
    const fetchProduct = async () => {
      try {
      // Add this line
        const response = await axiosRequest.get(`/items/${productId}`);
        console.log('response of display page', response);
        setNewProduct(response.data ?? {});
      } catch (error) {
        console.error('Error fetching product:', error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [productId]);
  



  return (
    <div className="mt-10 mr-170 flex ml-10 mb-10">
      <div className="flex gap-10 rounded-md">
        <div className="flex gap-10">
          <div className="flex flex-col gap-5">
            <img src={backEndbaseURL + '/' + (newProduct?.img || '')} alt="" className="h-28" />
            <img src={backEndbaseURL + '/' + (newProduct?.img || '')} alt="" className="h-28" />
            <img src={backEndbaseURL + '/' + (newProduct?.img || '')} alt="" className="h-28" />
            <img src={backEndbaseURL + '/' + (newProduct?.img || '')} alt="" className="h-28" />
          </div>
        </div>

        <div className="">
          <img src={backEndbaseURL + '/' + (newProduct?.img || '')} alt="" className="h-full" />
        </div>
      </div>

      <div className="flex flex-col ml-10">
        <h1 className="text-3xl font-bold text-[#3a3a3a]">{newProduct?.name}</h1>

        <div className="flex items-center gap-2 mt-5">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="text-24 font-bold flex gap-10 mt-5">
          <div className="text-red-600">${newProduct.price}</div>
        </div>

        <div>
          A stylish bed that provides comfort and elegance. Perfect for a good night's sleep.
        </div>

        <div>
        <button
        className="border-none outline-none cursor-pointer mt-5  bg-red-500 text-white font-bold rounded-md p-3 flex items-center justify-center"
        onClick={handleAddToCart} // Call the function on click
      >
        Add to cart
      </button>
        </div>

        <p className="mt-10">
          <span className="font-bold">Category:</span> Furniture
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
