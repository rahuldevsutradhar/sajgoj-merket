import React from 'react'
import Image from '../component/Image'
import UnoderTitle from '../component/UnoderTitle'
import ButtonOne from '../component/ButtonOne'
import simple from '../../assets/simple.webp'
import { FaRegStar, FaStar } from 'react-icons/fa'

const CartDesign = () => {
  return (
    <div className='w-[278px] h-auto border border-[#e5e7eb]'>
      <Image src={simple} className='w-full relative h-[306px] pb-4'/>
      <p className='absolute bg-one text-white py-1 px-1 rounded-full font-mon font-normal text-xs
      top-29 left-0'>21% OFF</p>
      <UnoderTitle text='Simple Kind to Skin Replenishing Rich Moisturizer'
      className='w-[178px] h-[33px] text-center mx-auto '/>
      <div className='text-center py-2'>
        <ButtonOne text='Skin' className='bg-one text-white inline-block text-center'/>
      </div>
      <div className='flex justify-center items-center gap-2 text-sm'>
          <span className='line-through text-gray-400'>৳ 950.00</span>
          <span className='text-pink-600 font-bold'>৳ 749.00</span>
        </div>
      <div className='flex justify-center gap-1 py-2 text-yellow-500'>
          <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
        </div>
        <div className='font-bold text-[15px] text-gray-800 text-center'>125ml</div>
      <button className='w-full bg-purple-800 text-white py-3 text-sm font-bold rounded-b-md hover:bg-purple-700 transition'>
        ADD TO CART
      </button>



    </div>
  )
}

export default CartDesign