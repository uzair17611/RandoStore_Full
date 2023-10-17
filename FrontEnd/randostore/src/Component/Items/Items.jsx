import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import axiosRequest from '../../Utilis/axiosRequest'


const Items = (props) => {

    const navigate=useNavigate();

    const handleDelete = async () => {
        try {
          console.log('Deleting product:', props.id);
          // Make a DELETE request to delete the specific product
          await axiosRequest.delete(`/items/${props.id}`);
          console.log('Product deleted successfully');
          window.location.reload();
          // Call the onDelete callback to handle any additional logic in the parent component
        
        } catch (error) {
          console.error('Error:', error.message);
        }
    };
   


    console.log(props.image)

  return (
    <div className="w-[350px] hover:transform hover:scale-105 transition-transform duration-600">
    <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" onClick={() => window.scrollTo(0, 0)} className="w-[300px] h-[300px] rounded-md" />
      
    </Link>
    <div className="flex gap-10 mt-4">
        <div className="flex flex-col p-4 bg-white rounded-md shadow-md transition duration-300 transform hover:scale-105">
            <div className='flex justify-between gap-12'>
            <div className="text-[#373737] text-xl font-semibold mb-2">
                {props.name}
            </div>
            <div className="text-red-500 text-2xl font-semibold">
                $ {props.new_price}
            </div>
            </div>
            <div className='flex gap-20 justify-between mt-10'>
                
            <div>
                <button onClick={()=>navigate(`/edit/${props.id}`)} className='p-3 bg-green-500 text-white rounded'>update</button>
            </div>
            <div>
                <button onClick={handleDelete} className='p-3 bg-red-500 text-white rounded'>Delete</button>
            </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Items