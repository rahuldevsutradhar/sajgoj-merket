import React from 'react'
import Container from '../component/Container'
import Image from '../component/Image'
import login from '../login.webp'
import Flex from '../component/Flex'
import ButtonOne from '../component/ButtonOne'

const Login = () => {
  return (
    <section className='pb-[30px] pt-[20px]'>
      <Container>
        <Flex className='border  md:p-6 w-[337px] sm:w-[608px] md:w-[900px] h-[253px] sm:h-[300px] md:h-[450px] mx-auto   md:items-center '>
          <Image src={login} className='hidden md:inline md:w-[450px] md:h-[445px]'/>
          <div className='mx-7 md:mx-0 my-auto md:my-0'>
            <p className='font-mon font-semibold text-center  text-base md:text-md'>Login</p>
            <input type="text" placeholder='Phone Number'
            className='py-2 px-2 md:px-4 w-[300px] sm:w-[530px]  md:w-[412px] border rounded-lg mb-1 mt-5  '/>
            <input type="password" placeholder='Password'
            className='py-2 px-2 md:px-4 w-[300px] sm:w-[530px]  md:w-[412px] border rounded-lg mb-5 mt-1  '/>
            <ButtonOne text='Login' className='bg-black text-white py-2 text-center'/>
          </div>
        </Flex>

      </Container>
    </section>
  )
}

export default Login