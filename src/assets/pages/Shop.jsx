import React from 'react'
import CartDesign from '../component/CartDesign'
import Container from '../component/Container'
import Flex from '../component/Flex'
import simple from '../../assets/simple.webp'
import { FiSearch } from 'react-icons/fi'
import UnoderTitle from '../component/UnoderTitle'
import { FaSearch } from 'react-icons/fa'


const Shop = () => {
  return (
    <section>
      <Container>
        <Flex>
          <div className='hidden  md:block sm:w-auto md:w-3/12'>
            <div className="max-w-xs mx-auto bg-white rounded-lg p-6">
              <h3 className="text-md font-mon font-semibold font-mon mb-4">Filter by Price</h3>
              <div className="relative mb-3 h-2">
                <input type="range" min="0" max="12650" value="0" className="absolute w-full h-2 bg-one" />
                <input type="range" min="0" max="12650" value="12650" className="absolute w-full h-2" />
              </div>
              <div className="flex justify-between text-xs text-gray-700 font-mon ">
                <span>৳ 0</span>
                <span>৳ 12650</span>
              </div>
            </div>

            <div className='px-6'>
              <h1 className=' my-5 pb-2 font-medium border-b'>Product Categories</h1>
              <div className='flex flex-col gap-y-1'>
                <Flex className='justify between gap-x-33'>
                <UnoderTitle className='font-mon font-normal text-xs text-black' text='Top Selling ⚡'/>
                <span className='font-mon bg-[#e5e7eb] hover:bg-one duration-400 text-xs  sm:py-0 md:py-[2px] px-[8px] rounded-full'>89</span>
              </Flex><Flex className='justify between gap-x-33'>
                <UnoderTitle className='font-mon font-normal text-xs text-black' text='Top Selling ⚡'/>
                <span className='font-mon bg-[#e5e7eb] hover:bg-one duration-400 text-xs  sm:py-0 md:py-[2px] px-[8px] rounded-full'>89</span>
              </Flex><Flex className='justify between gap-x-33'>
                <UnoderTitle className='font-mon font-normal text-xs text-black' text='Top Selling ⚡'/>
                <span className='font-mon bg-[#e5e7eb] hover:bg-one duration-400 text-xs  sm:py-0 md:py-[2px] px-[8px] rounded-full'>89</span>
              </Flex>
              </div>
            </div>
            <div className='px-6'>
              <h1 className=' my-5 pb-2 font-medium border-b'>Product Categories</h1>
               <div className='relative mb-3'>
                  <input type="sarch" placeholder='sarch here' className='w-full py-1 px-6 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-one text-sm text-gray-600' />      
                  <FaSearch className='absolute top-1/2 left-3 -translate-1/2 text-[#d9dade]'/>
               </div>
              <div className='flex flex-col gap-y-1'>
                <Flex className='justify between gap-x-33'>
                <UnoderTitle className='font-mon font-normal text-xs text-black' text='Top Selling ⚡'/>
                <span className='font-mon bg-[#e5e7eb] hover:bg-one duration-400 text-xs bg- py-[2px] px-[8px] rounded-full'>89</span>
              </Flex><Flex className='justify between gap-x-33'>
                <UnoderTitle className='font-mon font-normal text-xs text-black' text='Top Selling ⚡'/>
                <span className='font-mon bg-[#e5e7eb] hover:bg-one duration-400 text-xs bg- py-[2px] px-[8px] rounded-full'>89</span>
              </Flex><Flex className='justify between gap-x-33'>
                <UnoderTitle className='font-mon font-normal text-xs text-black' text='Top Selling ⚡'/>
                <span className='font-mon bg-[#e5e7eb] hover:bg-one duration-400 text-xs bg- py-[2px] px-[8px] rounded-full'>89</span>
              </Flex>
              </div>
            </div>


          </div>



          <div className='w-[395px] mx-auto mb-5 md:w-9/12 '>
            <div className='hidden sm:flex md:flex flex-row items-center justify-between gap-4 my-4'>

              <div className='relative w-full '>
                <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                  <FiSearch />
                </span>
                <input type='text' placeholder='Search here...'
                  className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-one text-sm text-gray-600' />
              </div>
              <select className='w-[180px] border border-gray-300 rounded-md px-4 py-2 text-sm text-blue-900 focus:outline-none focus:ring-1 focus:ring-one'>
                <option>Default sorting</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
            <Flex className='flex-wrap gap-x-4 gap-y-4 mx-2 md:mx-0 mt-4'>
              <CartDesign src={simple} text="21%" title='Armela Beyond The Mat Yoga Top-Whale Blue'
                price='650.00' discountPrice='200.00' />
              <CartDesign src={simple} text="21%" title='Armela Beyond The Mat Yoga Top-Whale Blue'
                price='650.00' discountPrice='200.00' />
              <CartDesign src={simple} text="21%" title='Armela Beyond The Mat Yoga Top-Whale Blue'
                price='650.00' discountPrice='200.00' />
              <CartDesign src={simple} text="21%" title='Armela Beyond The Mat Yoga Top-Whale Blue'
                price='650.00' discountPrice='200.00' />
              <CartDesign src={simple} text="21%" title='Armela Beyond The Mat Yoga Top-Whale Blue'
                price='650.00' discountPrice='200.00' />
              <CartDesign src={simple} text="21%" title='Armela Beyond The Mat Yoga Top-Whale Blue'
                price='650.00' discountPrice='200.00' />

            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Shop