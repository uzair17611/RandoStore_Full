import React ,{useEffect,useState}from 'react'
import arrow_icon from "../Assets/breadcrum_arrow.png"
import axiosRequest from '../../Utilis/axiosRequest';
const BreadCrums = ({product}) => {

    console.log(product)
    

    

    return (
        <div className="flex items-center m-auto mt-10 mb-10 justify-center gap-10">
            home <img src={arrow_icon} alt="" />  shop <img src={arrow_icon} alt="" /> Cookies<img src={arrow_icon} alt="" /> {product?.name}
        </div>
    )
}

export default BreadCrums