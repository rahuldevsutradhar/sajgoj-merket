import React, { useState } from 'react';
import Container from '../component/Container';
import Flex from '../component/Flex';
import ButtonOne from '../component/ButtonOne';
import { FaCheckCircle, FaHeadphones, FaHeart, FaLock } from 'react-icons/fa';

const Details = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <section className='my-[70px]'>
      <Container>
        <Flex>
          <div className='w-7/12'>hihei</div>

          <div className='w-5/12'>
            <h1 className='font-mon text-lg font-normal leading-[20px]'>
              Himalaya Brightening Vitamin C Orange Face Wash-100ml
            </h1>


            <Flex className='gap-x-3 items-center'>
              <h1 className='text-sm text-gray-500 mt-2'>Size: 100ml</h1>
              <div className='flex mt-2 items-center bg-green-600 text-white gap-1 px-2 py-[2px] rounded-full text-sm font-medium'>
                <p>4.3★ | 3 Reviews</p>
              </div>

            </Flex>

            <div className='flex items-center gap-4 flex-wrap mt-2'>
              <span className='font-mon text-one font-bold'>৳119.00</span>
              <span className='font-mon text-[#d9dade]'><del>৳200.00</del></span>
              <span className='font-mon text-[#d9dade]'> | </span>
              <span className='font-mon text-green-600'>Save ৳81.00</span>
              <span className='bg-blue-500 text-white px-3 py-1 rounded-tr-2xl rounded-bl-2xl text-xs'>41% OFF</span>
            </div>

            <div className="px-3 mt-2 mb-2 w-fit rounded-xl border shadow-md max-w-md">
              <div className="mb-4 flex gap-2 flex-wrap items-center text-sm">
                <span className="text-gray-600">📥 Download App for</span>
                <a href="https://apps.apple.com/us/app/shajgoj/id1473427629" className="text-purple-700 underline">iOS</a>
                <span>or</span>
                <a href="https://play.google.com/store/apps/details?id=com.shajgoj.shop" className="text-purple-700 underline">Android</a>
              </div>
            </div>

            <div className="mb-4 flex gap-2 items-center">
              <span className="bg-black text-white text-xs px-2 py-1 rounded-full">No #1 Best Seller</span>
              <span className="text-sm">in <a href="#" className="text-purple-700 underline">Parachute Advansed</a></span>
            </div>




            <div className='flex items-center gap-x-4 mb-4'>
              <FaHeart className='text-white bg-black py-2 px-2 w-[30px] h-[30px] rounded-lg' />
              <div className='border rounded-lg flex'>
                <ButtonOne onClick={increment} text='-' className='px-3 py-2 text-lg font-bold' />
                <span className="px-4 py-2">{quantity}</span>
                <ButtonOne onClick={decrement} text='+' className='px-3 py-2 text-lg font-bold' />
              </div>
              <ButtonOne text='ADD TO CART' className='bg-one text-white px-6 py-2 rounded-lg' />
            </div>
            <p className='text-sm font-mon mb-6'>Only <span className='text-one'>1</span> item left in stock</p>

            <div className='flex gap-x-6 text-mon items-top text-five'>
              <h2 className="text-lg text-md mb-2">Brief Description</h2>
              <div className='mb-6'>
                <ul className="list-disc list-inside text-xs gap-y-2 flex flex-col">
                  <li>Increase hair growth.</li>
                  <li>Provide essential Vitamin E to the hair.</li>
                  <li>Comes with nice fragrance.</li>
                </ul>
                <p className="mt-2 text-sm">
                  Parachute Advansed Onion Enriched Hair Growth Oil<br />
                  <span className="text-one cursor-pointer">Read More...</span>
                </p>
              </div>
            </div>
            <div className='flex gap-x-30 text-mon items-top text-five'>
              <h2 className="text-lg text-md mb-2">SKU</h2>
              <div className='mb-6'>
                <p className="mt-2 text-sm">
                  23714
                </p>
              </div>
            </div>
            <div className='flex gap-x-17 text-mon text-five'>
              <h2 className="text-lg text-md mb-2">Categories</h2>
              <div className='mb-6'>
                <p className="mt-2 text-sm">
                  Hair, Natural, Hair Care, Hair Oil, SHOP BY CONCERN, Hairfall & Thinning, Hair Oil, Dry & Frizzy Hair, Top Selling, Marico Pink Beauty Deals
                </p>
              </div>
            </div>
            <div className='flex gap-x-30 text-mon text-five'>
              <h2 className="text-lg text-md mb-2">Tags</h2>
              <div className='mb-6'>
                <p className="mt-2 text-sm"> FMCG, marico-bangladesh, Pink Beauty Sale, pink beauty sale 5.0                </p>
              </div>
            </div>
            <div className='flex gap-x-25 text-mon text-five'>
              <h2 className="text-lg text-md mb-2">Brands</h2>
              <div className='mb-6'>
                <p className="mt-2 text-sm"> Parachute Advansed </p>
              </div>
            </div>

            <div className="flex justify-between pt-6 border-t text-five">
              <div className="text-center">
                <FaCheckCircle className="mx-auto text-2xl text-black" />
                <p className="mt-2 text-xs">100% Genuine Products</p>
              </div>
              <div className="text-center">
                <FaLock className="mx-auto text-2xl text-black" />
                <p className="mt-2 text-xs">100% Secure Payments</p>
              </div>
              <div className="text-center">
                <FaHeadphones className="mx-auto text-2xl text-black" />
                <p className="mt-2 text-xs">Help Center (+8809666737475)</p>
              </div>
            </div>




          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Details;
