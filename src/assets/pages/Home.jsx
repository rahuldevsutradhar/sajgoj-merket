import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import Image from '../component/Image'
import add from '../../assets/add.webp'
import product1 from '../../assets/product1.webp'
import product2 from '../../assets/product2.webp'
import product3 from '../../assets/product3.webp'
import product4 from '../../assets/product4.gif'
import product5 from '../../assets/product5.webp'
import product6 from '../../assets/product6.webp'
import product7 from '../../assets/product7.webp'
import product8 from '../../assets/product8.webp'
import product9 from '../../assets/product9.webp'
import product10 from '../../assets/product10.gif'
import product11 from '../../assets/product11.webp'
import product12 from '../../assets/product12.webp'
import product13 from '../../assets/product13.webp'
import product14 from '../../assets/product14.webp'
import product15 from '../../assets/product15.webp'
import product16 from '../../assets/product16.webp'
import product17 from '../../assets/product17.webp'
import product18 from '../../assets/product18.webp'
import product19 from '../../assets/product19.webp'
import product20 from '../../assets/product20.webp'
import product21 from '../../assets/product21.webp'
import product22 from '../../assets/product22.webp'
import product23 from '../../assets/product23.webp'
import product24 from '../../assets/product24.webp'
import product25 from '../../assets/product25.webp'
import product26 from '../../assets/product26.webp'
import product27 from '../../assets/product27.webp'
import product28 from '../../assets/product28.webp'
import product29 from '../../assets/product29.webp'
import product30 from '../../assets/product30.webp'
import product31 from '../../assets/product31.webp'
import product32 from '../../assets/product32.webp'
import offer from '../../assets/offer.webp'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import BannerSlider from '../component/BannerSlider';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section>
      <BannerSlider/>
      <Container>
         <Link to={'/shop'}> <Image src={add} className='my-[30px]'/></Link>
        <p className='font-mon font-bold text-bold text-xs text-center'>DEALS YOU CANNOT MISS</p>
        <Flex className='mt-2 mb-6 justify-between'>
          <Link to={'/shop'}><Image src={product1} className='w-[283px] h-[283px]'/></Link>
          <Link to={'/shop'}><Image src={product2} className='w-[283px] h-[283px]'/></Link>
          <Link to={'/shop'}><Image src={product3} className='w-[283px] h-[283px]'/></Link>
          <Link to={'/shop'}><Image src={product4} className='w-[283px] h-[283px]'/></Link>         
        </Flex>

        <p className='font-mon font-bold text-bold text-xs text-center'>TOP BRANDS & OFFERS</p>
        <Flex className='mt-2 mb-6 justify-between flex-wrap gap-y-4'>
          <Link to={'/shop'}><Image src={product5} className='w-[381px] h-[167px]'/></Link>
          <Link to={'/shop'}><Image src={product6} className='w-[381px] h-[167px]'/></Link>
          <Link to={'/shop'}><Image src={product7} className='w-[381px] h-[167px]'/></Link>
          <Link to={'/shop'}><Image src={product8} className='w-[381px] h-[167px]'/></Link>         
          <Link to={'/shop'}><Image src={product9} className='w-[381px] h-[167px]'/></Link>         
          <Link to={'/shop'}><Image src={product10} className='w-[381px] h-[167px]'/></Link>         
        </Flex>

        <p className='font-mon font-bold text-bold text-xs text-center'>LIMITED TIME OFFERS</p>
        <Flex className='mt-2 mb-6 justify-between'>
          <Link to={'/shop'}><Image src={product11} className='w-[283px] h-[283px]'/></Link>
          <Link to={'/shop'}><Image src={product12} className='w-[283px] h-[283px]'/></Link>
          <Link to={'/shop'}><Image src={product13} className='w-[283px] h-[283px]'/></Link>
          <Link to={'/shop'}><Image src={product14} className='w-[283px] h-[283px]'/></Link>         
        </Flex>

        <p className='font-mon font-bold text-bold text-xs text-center'>SHOP BEAUTY PRODUCTS BY CATEGORY</p>
        <Flex className='mt-2 mb-6 justify-between flex-wrap gap-y-4'>
          <Link to={'/shop'}><Image src={product15} className='w-[283px] h-[283px]'/></Link>
          <Link to={'/shop'}><Image src={product16} className='w-[283px] h-[283px]'/></Link>
          <Link to={'/shop'}><Image src={product17} className='w-[283px] h-[283px]'/></Link>
          <Link to={'/shop'}><Image src={product18} className='w-[283px] h-[283px]'/></Link>         
          <Link to={'/shop'}><Image src={product19} className='w-[283px] h-[283px]'/></Link>         
          <Link to={'/shop'}><Image src={product20} className='w-[283px] h-[283px]'/></Link>         
          <Link to={'/shop'}><Image src={product21} className='w-[283px] h-[283px]'/></Link>         
          <Link to={'/shop'}><Image src={product22} className='w-[283px] h-[283px]'/></Link>         
        </Flex>

        <p className='font-mon font-bold text-bold text-xs text-center'>SHOP BY CONCERN</p>
        <Flex className='mt-2 mb-6 justify-between flex-wrap gap-y-4'>
          <Link to={'/shop'}><Image src={product23} className='w-[224px] h-[224px]'/></Link>
          <Link to={'/shop'}><Image src={product24} className='w-[224px] h-[224px]'/></Link>
          <Link to={'/shop'}><Image src={product25} className='w-[224px] h-[224px]'/></Link>
          <Link to={'/shop'}><Image src={product26} className='w-[224px] h-[224px]'/></Link>
          <Link to={'/shop'}><Image src={product27} className='w-[224px] h-[224px]'/></Link>
          <Link to={'/shop'}><Image src={product28} className='w-[224px] h-[224px]'/></Link>
          <Link to={'/shop'}><Image src={product29} className='w-[224px] h-[224px]'/></Link>
          <Link to={'/shop'}><Image src={product30} className='w-[224px] h-[224px]'/></Link>
          <Link to={'/shop'}><Image src={product31} className='w-[224px] h-[224px]'/></Link>
          <Link to={'/shop'}><Image src={product32} className='w-[224px] h-[224px]'/></Link>
        </Flex>
      </Container>
      <Image src={offer} className='bg-[#6B21A8]'/>

    </section>
  )
}

export default Home