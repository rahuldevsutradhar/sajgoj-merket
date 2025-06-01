import React from 'react'
import Container from '.././assets/component/Container'
import Flex from '.././assets/component/Flex'
import UnoderTitle from '../assets/component/UnoderTitle'
import ButtonOne from '../assets/component/ButtonOne'

const Menubar = () => {
  return (
     <section className='my-3'>
        <Container>
            <Flex className='gap-x-4 items-center'>
                <div className='w-5/12 flex justify-between'>
                <UnoderTitle text='Makeup'/>
                <UnoderTitle text='Skin'/>
                <UnoderTitle text='Hair'/>
                <UnoderTitle text='Personal Care'/>
                <UnoderTitle text='Mom & Baby'/>
                <UnoderTitle text='Fragrance'/>
                </div>
                <div className='w-7/12 flex justify-between'>
                <ButtonOne text='UNDERGRAMENTS' className='bg-[#225ce4] text-white'/>
                <ButtonOne text='EID GIGA GLAM' className='bg-[#8dd51b] text-white'/>
                <ButtonOne text='JEWELLERY' className='bg-[#b047c9] text-white'/>
                <ButtonOne text='CLEARANCE SALE' className='bg-[#09b5b5] text-white'/>
                <ButtonOne text='MEN' className='bg-[#09b566] text-white'/>
                </div>

            </Flex>
        </Container>
     </section>
  )
}

export default Menubar