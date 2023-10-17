import React, { useContext } from 'react'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';
import { ItemsContext } from '../ItemsContext/ItemsContext';
import Rando_STORE  from "../Assets/RandoStore.png"




const Navber = () => {
    const{getTotalCartItem} =useContext(ItemsContext)
  return (
    <div className='flex justify-around p-14 h-10  shadow-md bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200'>
      <div className='flex items-center gap-10'>
        <img src={Rando_STORE } alt="" className="w-[200px] h-[200px]" />
       

      </div>
      <ul className='text-lg font-medium no-underline flex items-center text-[#626262] gap-10 font-md '>
  <li className='flex items-center justify-center gap-2 cursor-pointer transition-transform transform hover:scale-105 hover:text-blue-500 hover:shadow-md'>
    <Link to="/AddnewPrduct">Add new Product</Link>
  </li>
</ul>


      <div className='flex items-center gap-10'>
<Link to="/login"><button className='px-5 py-1 outline-none border border-slate-400 bg-white rounded-md text-black font-bold hover:bg-slate-400'>Login</button></Link>
  
  <div className='relative'>
    
    <div className='absolute bottom-7 left-8 flex mt-0 text-white bg-red-600 rounded-full px-1 border border-black justify-center items-center'>{getTotalCartItem()}</div>
   <Link to="/cart"><img src={cart_icon} alt="" /> </Link> 
  </div>
</div>

    </div>
  )
}

export default Navber
