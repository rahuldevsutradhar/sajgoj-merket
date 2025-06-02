import React from 'react'
import Image from '../component/Image'
import UnoderTitle from '../component/UnoderTitle'
import ButtonOne from '../component/ButtonOne'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CartDesign = ({text,src,title,price,discountPrice,quantity}) => {
  return (
    <div className='w-[278px] h-auto border border-[#e5e7eb]'>
      <p className='inline-block bg-one text-white py-1 px-1 rounded-full
       font-mon font-normal text-xs
      top-29 left-0'>{text}OFF</p>
      <Link to={'/details'}><Image src={src} className='w-full relative h-[306px] pb-4'/></Link>
      
      <UnoderTitle text={title}
      className='w-[178px] h-[33px] text-center mx-auto '/>
      <div className='text-center py-2'>
        <ButtonOne text='Sale' className='bg-one text-white inline-block text-center'/>
      </div>
      <div className='flex justify-center items-center gap-2 text-sm'>
          <span className='line-through text-gray-400'>৳{price}</span>
          <span className='text-pink-600 font-bold'>৳ {discountPrice}</span>
        </div>
      <div className='flex justify-center gap-1 py-2 text-yellow-500'>
          <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
        </div>
        <div className='font-bold text-[15px] text-gray-800 text-center'>{quantity}</div>
      <button className='w-full bg-purple-800 text-white py-3 text-sm font-bold rounded-b-md hover:bg-purple-700 transition'>
        ADD TO CART
      </button>



    </div>
  )
}

export default CartDesign