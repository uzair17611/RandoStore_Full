import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';
import axiosRequest from '../../Utilis/axiosRequest';
import { backEndbaseURL } from '../../Utilis/baseUrl';
import { Link, useParams } from 'react-router-dom'


const NewCollection = () => {
  const [product, setProduct] = useState([]);
  const {productId} = useParams();

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
    <div className="flex flex-col flex-wrap items-center h-auto   mb-20 bg-gradient-to-r from-white via-pink-100 to-teal-100 ">
  <h1 className="text-3xl font-bold mb-4 mt-5">New Collection</h1>
  <hr className="w-1/4 mb-4" />
  <div className="grid grid-cols-4 gap-4 ">
    {product?.map((Singleproduct, i) => (
        <Items
          key={Singleproduct.id}
          name={Singleproduct?.name}
          id={Singleproduct?.id}
          image={backEndbaseURL + '/' + (Singleproduct?.img || '')}
          new_price={Singleproduct?.price}
        />
    
    ))}
  </div>
</div>

  );
};

export default NewCollection;
