import React from 'react';
import Container from '../assets/component/Container';
import Flex from '../assets/component/Flex';
import Image from '../assets/component/Image';
import logo from '../assets/logo.png';
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import ButtonOne from '../assets/component/ButtonOne';


const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 py-2">
      <Container>
        <Flex className="items-center justify-between">
          <div className="w-4/12 flex items-center gap-x-6">
            <Image src={logo} className="w-[168px] h-[22px] mt-2" />
            <h1 className="text-md font-semibold mt-2">BRANDS</h1>
          </div>

          <div className="w-4/12 relative">
            <input
              type="text" placeholder="Search for Products, Brands..." className="w-full pl-9 pr-4 py-2 rounded-3xl border border-one
               text-sm placeholder:text-gray-500 focus:outline-none"
            />
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 text-sm" />
          </div>

         
          <div className="w-4/12 flex items-center justify-end gap-3 mt-1">
            <ButtonOne text="WISHLIST" className='bg-two text-white font-semibold'/>
            <ButtonOne text="LOGIN" className='bg-three text-black font-medium hover:text-one duration-500'/>
            <div className='relative'>
              <ButtonOne text="BAG" className='px-8 bg-four text-white font-semibold flex item-center gap-1 '
            /><FaShoppingBag className="absolute top-3 left-2 transfrom-1/2  text-sm text-white " />
            <span className="absolute top-2 right-1 text-md bg-white text-[#FF3D71] rounded-full px-1.5 font-bold">1</span>

            </div>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
