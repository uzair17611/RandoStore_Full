import React, { useContext } from 'react'
import Items from '../Items/Items'
import { ItemsContext } from '../ItemsContext/ItemsContext'
import remove_icon from "../Assets/cart_cross_icon.png"
const Cartitem = () => {
    const {products,cartItem,addToCart ,getTotalAmountCart,removeFromCart} =useContext(ItemsContext)

  return (
    <div  className="ml-10">
     <div className='grid  grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center gap-10 p-4 text-[#454545]  font-bold'>
        <p>Product </p>
        <p>title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>total</p>
        <p>Romove</p>
     </div>
     <hr className="border-t border-gray-500 my-4" />

     <div>
  {products.map((e) => {
    if (cartItem[e.id] > 0) {
      return (
        <div key={e.id}>
          <div className='grid  grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center gap-10 p-4 text-[#454545]  font-bold'>
            <img src={e.img} alt="" className="rounded-full" />
            <p  className="text-base font-medium">{e.name}</p>
            {/* <p>{e.id}</p> */}
            <p>${e.price}</p>
            <button className="py-1 bg-red-500 text-white rounded-md w-[32px] cursor-pointer">{cartItem[e.id]}</button>
            <p>{(e.price)*cartItem[e.id]}</p>
            <img
              src={remove_icon}
              alt=""
              onClick={() => {
                removeFromCart(e.id);
              }}
            />
          </div>
          <hr />
        </div>
      );
    }

    return null;
    
  })}
  <div className='flex m-10'>
    <div className="flex flex-1 flex-col gap-10 ml-10">
        <h1>Cart Total</h1>

        <div  className="flex justify-between flex-col gap-5 p-2">
            <div className="flex justify-between">
                <p>$subTotal</p>
                <p>${getTotalAmountCart()}</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <p>shippinf fee</p>
                <p>free</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <h3 className="text-black font-bold">total</h3>
                <h3>${getTotalAmountCart()}</h3>
            </div>
        </div>
        <button className="w-[200px] py-4 bg-red-500 text-white outline-none rounded  ">Proceed To Checkout</button>
    </div>
    <div className="flex-1 font-md ml-20 ">
        <p className='text-[#555]'>if you have a promo code enter here</p>
        <div className='w-[390px]  mt-5 pl-10 bg-[#eaeaea] flex justify-between' style={{ height: '50px' }}>
    <input type="text" placeholder="enter promo code" className="border border-none outline-none bg-transparent" />
    <button className='px-3 bg-black text-white h-full'>submit</button>
</div>

    </div>
  </div>
</div>



    </div>
  )
}

export default Cartitem