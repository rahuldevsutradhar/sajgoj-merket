import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import Image from '../component/Image'
import ButtonOne from '../component/ButtonOne'
import error from '../404.webp'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section>
      <Container>
        <Flex className='items-center '>
          <Image src={error} className='hidden md:inline'/>
          <div>
            <h1 className='font-bold font-mon text-[20px] text-center md:text-left md:text-[32px]'>UH OH! You are lost.</h1>
            <p className='font-mon md:mb-3 mb-4 mt-4 md:mt-0 px-4 text-[#b0b2b3]'>The page you are looking for does not exist. Click the button below to go back to the homepage.</p>
            <Flex className='gap-x-4 pl-22 md:pl-0 mb-4 md:mb-0'>
              <Link to={'/'}><ButtonOne text='Home'
              className='border-4 border-one  text-black hover:bg-one hover:text-white duration-500'/></Link>
              <Link to={'/shop'}><ButtonOne text='Shop'
              className='border-4 border-black  text-black hover:bg-black hover:text-white duration-500'/></Link>
            </Flex>
          </div>

        </Flex>
      </Container>
    </section>
  )
}

export default Error