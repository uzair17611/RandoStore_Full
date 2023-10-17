import React from 'react'

const NewsLetter = () => {
  return (
    <div className="w-65 flex flex-col mt-20 gap-10 m-auto justify-center items-center bg-gradient-to-r from-[#fde1ff] via-[#e1ffea22] to-transparent">
     <div className="flex flex-col items-center justify-center gap-10">
     <h1 className="text-[#454545]  text-50 font-semibold text-3xl mt-2">get excluxive offer on your email</h1>
     <p className="text-[#454545]  text-20 text-xl">subcribed to our newletter and stay tuned</p>
     </div>
     <div className='flex flex-col  items-center justify-center gap-5 bg-white w-[730px] h-[70px] rounded border  py-20 ml-80'>
        <input type="emai"  placeholder="ozairkhanan@gmail.com" className="px-4 py-1 outline-none font-poppin text-[#646464] ml-5 border border-slate-500 rounded-md"/>
        <button className='py-5 p-2 bg-black text-white  cursor-pointer rounded-md'>Subscribe</button>
     </div>


    </div>
  )
}

export default NewsLetter