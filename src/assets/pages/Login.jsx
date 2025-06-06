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
        <Flex className='border p-6 w-[900px] h-[450px] mx-auto items-center'>
          <Image src={login} className='w-[450px] h-[445px]'/>
          <div>
            <p className='font-mon font-semibold text-center text-md'>Login</p>
            <input type="text" placeholder='Phone Number'
            className='py-2 px-4 w-[412px] border rounded-lg mb-5 mt-5'/>
            <ButtonOne text='Login with OTP' className='bg-black text-white text-center'/>
          </div>
        </Flex>

      </Container>
    </section>
  )
}

export default Login