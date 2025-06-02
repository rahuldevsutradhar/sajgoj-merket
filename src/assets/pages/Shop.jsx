import React from 'react'
import CartDesign from '../component/CartDesign'
import Container from '../component/Container'
import Flex from '../component/Flex'
import simple from '../../assets/simple.webp'
import { FiSearch } from 'react-icons/fi'


const Shop = () => {
  return (
    <section>
      <Container>
        <Flex>
          <div className='w-3/12'>
    <div className="max-w-xs mx-auto bg-white rounded-lg p-6">
        <h3 className="text-md font-mon font-semibold font-mon mb-4">Filter by Price</h3>
        <div className="relative mb-3 h-2">          
            <input type="range" min="0" max="12650" value="0" className="absolute w-full h-2 bg-one"/>
            <input type="range" min="0" max="12650" value="12650" className="absolute w-full h-2"/>        
        </div>
        <div className="flex justify-between text-xs text-gray-700 font-mon ">
            <span>৳ 0</span>
            <span>৳ 12650</span>
        </div>
    </div>
</div>



          <div className='w-9/12'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4 my-4'>

      <div className='relative w-full '>
        <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
          <FiSearch />
        </span>
        <input type='text' placeholder='Search here...'
          className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-one text-sm text-gray-600'/>
      </div>
      <select className='w-[180px] border border-gray-300 rounded-md px-4 py-2 text-sm text-blue-900 focus:outline-none focus:ring-1 focus:ring-one'>
        <option>Default sorting</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Newest</option>
      </select>
    </div>
          <Flex className='flex-wrap justify-between gap-y-4 mt-4'>
            <CartDesign src={simple} text="21%" title='Armela Beyond The Mat Yoga Top-Whale Blue'
            price='650.00' discountPrice='200.00'/>
            <CartDesign src={simple} text="21%" title='Armela Beyond The Mat Yoga Top-Whale Blue'
            price='650.00' discountPrice='200.00'/>
            <CartDesign src={simple} text="21%" title='Armela Beyond The Mat Yoga Top-Whale Blue'
            price='650.00' discountPrice='200.00'/>
            <CartDesign src={simple} text="21%" title='Armela Beyond The Mat Yoga Top-Whale Blue'
            price='650.00' discountPrice='200.00'/>
            
          </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Shop