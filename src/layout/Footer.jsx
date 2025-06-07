import React from 'react'
import Container from '.././assets/component/Container'
import Flex from '.././assets/component/Flex'
import Image from '../assets/component/Image'
import logo2 from '../assets/shajgoj-footer-logo.webp'
import payment from '../assets/payment.png'
import List from '../assets/component/List'
import Subtitle from '../assets/component/Subtitle'
import { SiFacebook } from 'react-icons/si'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { FaInstagramSquare, FaPinterest, FaTwitter } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <section className=' bg-[#192038]  py-10'> 
      <Container>
        <Flex className='md:flex-row flex-col  '>
          <div className='w-auto md:w-2/12 md:my-3 my-0  pl-4 md:pl-0 '>
          <Image src={logo2} className=' w-[190px] md:w-[180px] h-[25px] mb-5 '/>
          <ul className='flex flex-col gap-y-1 md:gap-y-2'>
            <li><List text='Our story'/></li>
            <li><List text='Shajgoj-magazine'/></li>
            <li><List text='Shajgoj-outlet'/></li>
            <li><List text='Join-our-team'/></li>
            <li><List text='Authenticity' className=' border-b border-white pb-2 pr-auto md:pr-0'/></li>
            <p className='font-mon font-normal text-sm text-white pb-2'>SHARE YOUR LOVE</p>
          </ul>
          <Flex className='gap-x-2 text-white '>
            <SiFacebook className='w-[28px] h-[28px]'/>
            <FaXTwitter className='w-[28px] h-[28px]'/>
            <TiSocialYoutubeCircular className='w-[28px] h-[28px]'/>
            <FaInstagramSquare className='w-[28px] h-[28px]'/>
            <FaPinterest className='w-[28px] h-[28px]'/>
          </Flex>
          </div>
          <div className='w-auto md:w-3/12 my-1 md:my-3 pt-6 md:pt-0 pl-4 md:pl-15'>
          <Subtitle title='TOP CATEGORIES' className='mb-2 md:mb-4'/>
          <ul className='flex flex-col gap-y-1 md:gap-y-2'>
            <li><List text='MAKEUP'/></li>
            <li><List text='SKIN'/></li>
            <li><List text='EYE CARE'/></li>
            <li><List text='HAIR'/></li>
            <li><List text='PERSONAL CARE'/></li>
            <li><List text='NATURAL'/></li>
            <li><List text='MOM & BABY'/></li>
          </ul>
          </div>

        <div className='w-auto md:w-2/12 my-1 md:my-3 pl-4 md:pl-0 pt-6 md:pt-0'>
          <Subtitle title='QUICK LINKS' className='mb-2 md:mb-4'/>
          <ul className='flex flex-col gap-y-1 md:gap-y-2'>
            <li><List text='OFFERS'/></li>
            <li><List text='MENS PRODUCTS'/></li>
            <li><List text='SKIN CONCERNS'/></li>
            <li><List text='NEW ARRIVAL'/></li>
            <li><List text='MAKEUP'/></li>
          </ul>
          </div>

        <div className='w-auto md:w-2/12 my-1 md:my-3 pl-4 md:pl-0 pt-6 md:pt-0'>
          <Subtitle title='ALL ABOUT BEAUTY' className='mb-2 md:mb-4'/>
          <ul className='flex flex-col gap-y-1 md:gap-y-2'>
            <li><List text='KNOW YOUR ROUTINE'/></li>
            <li><List text='HAIR CARE 101'/></li>
            <li><List text='SKIN CARE 101'/></li>
            <li><List text='MAKEUP 101'/></li>           
          </ul>
          </div>

        <div className='w-auto md:w-3/12 my-1 md:my-3 pl-4 md:pl-0 pt-6 md:pt-0'>
          <Subtitle title='HELP' className='mb-2 md:mb-4'/>
          <ul className='flex flex-col gap-y-1 md:gap-y-2'>
            <li><List text='CONTACT US'/></li>
            <li><List text='POINTS'/></li>
            <li><List text='FAQS'/></li>
            <li><List text='SHIPPING & DELIVERY'/></li>           
            <li><List text='TERMS & CONDITIONS'/></li>           
            <li><List text='REFUND & RETURN POLICY'/></li>           
            <li><List text='TRADE LICENSE'/></li>           
            <li><List text='PRIVACY POLICY' className=' border-b border-white pb-2'/></li> 
            <li><List text='PAYMENT AKCEPTED'/></li> 
            <Image src={payment} className='w-[160px] h-[30px] '/>           
          </ul>
          </div>

        </Flex>

         <div className='border-t border-white my-5'>
            <Flex className='pt-5 justify-center md:gap-x-6 gap-x-5 gap-y-2 md:gap-y-2 px-2 md:px-0 flex-wrap'>
              <List text='  AUTHENTICITY'/>
              <List text='  TERMS & CONDITIONS'/>
              <List text='  PRIVACY POLICY'/>
              <List text=' FAQS'/>
            </Flex>
            <p className='font-mon font-normal text-sm text-white pt-2 text-center'>Copyright © 2025 Shajgoj Limited. All Right Reserved</p>

          </div>
      </Container>
    </section>
  )
}

export default Footer