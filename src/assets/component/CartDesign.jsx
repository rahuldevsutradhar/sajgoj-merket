import React from 'react'
import Image from '../component/Image'
import UnoderTitle from '../component/UnoderTitle'
import ButtonOne from '../component/ButtonOne'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const CartDesign = ({ text, src, title, price, discountPrice, quantity }) => {
  return (
    <div className='w-full sm:w-[278px] flex flex-row sm:flex-col border border-[#e5e7eb] rounded-md overflow-hidden'>      <div className='absolute bg-one text-white text-xs font-mon py-1 px-2 rounded-tr-lg z-10'>
      {text} OFF
    </div>

      <div className="w-[110px] sm:w-full sm:h-[300px] overflow-hidden flex-shrink-0">
        <Link to="/details">
          <Image
            src={src}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-125"
          />
        </Link>
      </div>

      <div className='flex flex-col justify-center p-3 sm:p-4 flex-grow'>
        <UnoderTitle text={title} className='text-left sm:text-center md:text-center mx-auto text-sm sm:text-base font-medium sm:w-[178px] sm:h-[33px]' />

        {/* <div className='mt-2 sm:mt-4 sm:text-center'>
          <ButtonOne text='sale' className='bg-one text-white text-xs sm:text-sm px-2 py-1 rounded' />
        </div> */}

        
        <div className='flex items-center gap-2 mt-2 sm:justify-center text-sm'>
          <span className='line-through text-gray-400'>৳{price}</span>
          <span className='text-pink-600 font-bold'>৳ {discountPrice}</span>
        </div>

        <div className='flex gap-1 text-yellow-500 mt-2 sm:justify-center text-xs sm:text-base'>
          <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
        </div>

        <div className='font-bold text-sm sm:text-[15px] text-gray-800 mt-2 sm:text-center'>
          {quantity}
        </div>

        <button className='w-full bg-purple-800 text-white py-2 sm:py-3 mt-3 text-xs sm:text-sm font-bold hover:bg-purple-700 transition rounded-md'>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default CartDesign