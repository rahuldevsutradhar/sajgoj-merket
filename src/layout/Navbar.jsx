import React, { useState } from 'react';
import Container from '../assets/component/Container';
import Flex from '../assets/component/Flex';
import Image from '../assets/component/Image';
import logo from '../assets/logo.png';
import { FaSearch, FaShoppingBag, FaUserCircle } from "react-icons/fa";
import ButtonOne from '../assets/component/ButtonOne';
import { Link } from 'react-router-dom';
import { CgMenuLeft } from 'react-icons/cg';
import { RxCross2 } from 'react-icons/rx';
import UnoderTitle from '../assets/component/UnoderTitle';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen)


  }
  return (
    <nav className="border-b border-gray-200 py-2 ">
      <Container>
        <Flex className="flex-col relative md:flex-row gap-y-2 md:gap-y-0 px-2 md:px-0 items-center justify-between ">
          <div className="w-4/12  flex items-center gap-x-6">
            <div className="absolute px-2 left-0 md:hidden">
              <button onClick={toggleMenu}>
                {
                  isOpen ? <RxCross2 className='w-[35px] h-[28px] ' /> : <CgMenuLeft className='w-[35px] h-[28px] ' />

                }
              </button>
            </div>
            {isOpen && (
              <div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                onClick={toggleMenu}
              />
            )}

            <Link to={''}>
              <Image src={logo} className="w-[168px] h-[22px] mt-2" />
            </Link>
            <h1 className="hidden md:flex text-md font-semibold mt-2">BRANDS</h1>
          </div>

          <div className="w-full md:w-4/12 relative flex items-center ">
            <input
              type="text" placeholder="Search for Products, Brands..." className="w-full pl-9 pr-4 py-2 rounded-3xl border border-one
               text-sm placeholder:text-gray-500 focus:outline-none"
            />
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 text-sm" />
          </div>

          <div className="w-4/12 flex items-center justify-end gap-3 mt-1">
            <ButtonOne text="WISHLIST" className='hidden md:flex bg-two text-white font-semibold' />
            <Link to={'/login'}>
              <ButtonOne text="LOGIN" className='hidden md:flex bg-three text-black font-medium hover:text-one duration-500' />
            </Link>
            <div className='relative flex items-center'>
              <ButtonOne text="BAG" className='hidden md:flex px-8 bg-four text-white font-semibold flex item-center gap-1 ' />
              <FaShoppingBag className="absolute top-3 left-2 transfrom-1/2  text-sm text-white " />
              <span className="hidden md:flex absolute top-1.5 right-2 text-base  text-white  px-1.5 font-bold">1</span>

            </div>
          </div>


        </Flex>


        <div className={`md:hidden fixed top-0 left-0 h-full bg-white w-[320px] z-50 shadow-lg
           transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='my-6 shadow-lg pb-5'>
              <h1 className='font-semibold text-center text-[30px] font-mon leading-4'>Menu</h1>
            </div>

          <div className='flex items-center gap-x-3 px-2'>
            <FaUserCircle className='bg-one rounded-full text-white w-[45px] h-[45px] ' />
            <Link to={'/login'}><UnoderTitle text='Login' className='font-bold text-[20px] font-mon leading-4' /></Link>

          </div>
          <div className='px-4 flex flex-col gap-y-1 mt-5'>
            <div className='flex justify-between'>
              <UnoderTitle text='Makeup' className='fon-mon text-[16px] text-inherit' />
              <span className='fon-mon text-[16px] text-inherit'>+</span>
            </div>
            <div className='flex justify-between'>
              <UnoderTitle text='Skin' className='fon-mon text-[16px] text-inherit' />
              <span className='fon-mon text-[16px] text-inherit'>+</span>
            </div>
            <div className='flex justify-between'>
              <UnoderTitle text='Hair' className='fon-mon text-[16px] text-inherit' />
              <span className='fon-mon text-[16px] text-inherit'>+</span>
            </div>
            <div className='flex justify-between'>
              <UnoderTitle text='Personal Care' className='fon-mon text-[16px] text-inherit' />
              <span className='fon-mon text-[16px] text-inherit'>+</span>
            </div>
            <div className='flex justify-between'>
              <UnoderTitle text='Mom & Baby' className='fon-mon text-[16px] text-inherit' />
              <span className='fon-mon text-[16px] text-inherit'>+</span>
            </div>
            <div className='flex justify-between'>
              <UnoderTitle text='Fragrance' className='fon-mon text-[16px] text-inherit' />
              <span className='fon-mon text-[16px] text-inherit'>+</span>
            </div>
            <div className='flex justify-between'>
              <UnoderTitle text='UNDERGRAMENTS' className='fon-mon text-[16px] text-inherit' />
              <span className='fon-mon text-[16px] text-inherit'>+</span>
            </div>
            <div className='flex justify-between'>
              <UnoderTitle text='EID GIGA GLAM' className='fon-mon text-[16px] text-inherit' />
              <span className='fon-mon text-[16px] text-inherit'>+</span>
            </div>
            <div className='flex justify-between'>
              <UnoderTitle text='JEWELLERY' className='fon-mon text-[16px] text-inherit' />
              <span className='fon-mon text-[16px] text-inherit'>+</span>
            </div>
            <div className='flex justify-between'>
              <UnoderTitle text='CLEARANCE SALE' className='fon-mon text-[16px] text-inherit' />
              <span className='fon-mon text-[16px] text-inherit'>+</span>
            </div>
            <div className='flex justify-between'>
              <UnoderTitle text='MEN' className='fon-mon text-[16px] text-inherit' />
              <span className='fon-mon text-[16px] text-inherit'>+</span>
            </div>


          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
