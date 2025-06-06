import React, { useState } from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import ButtonOne from '../component/ButtonOne'
import { Link } from 'react-router-dom'

const CheckOut = () => {
  const [isVisible, setVisible] = useState(false);

  const handleToggleCoupon = () => {
    setVisible(!isVisible);
  };

  

  return (
    <section className='my-[50px]'>
      <Container>
        <div className='bg-[#d9edf7] py-2 px-5 w-full mb-5'>
          <h1 className='text-md font-mon text-black'>
            Returning Customer?
            <Link to={'/login'}>
              <span className='text-xs font-mon text-one'>Click here to login</span>
            </Link>
          </h1>
        </div>

        <div>
          <h1 className='text-md font-mon text-black'>BILLING & SHIPPING</h1>
        </div>

        <Flex className='mt-5 items-start'>
          <div className='w-1/2 flex flex-wrap gap-x-3 gap-y-3'>
            <input type="text" placeholder='Name' className='py-0 px-6 border border-five rounded-2xl' />
            <input type="text" placeholder='Phone' className='py-0 px-6 border border-five rounded-2xl' />
            <select className='py-2 px-6 border border-five rounded-2xl w-[231px]'>
              <option value="">Select city</option>
              <option value="">Dhaka</option>
              <option value="">Bogura</option>
              <option value="">Rajshahi</option>
              <option value="">Rangpur</option>
              <option value="">Khulna</option>
            </select>
            <select className='py-2 px-6 border border-five rounded-2xl w-[231px]'>
              <option value="">Select Area</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
            <input type="text" placeholder='Address' className='py-2 px-6 border border-five rounded-2xl' />
            <input type="email" placeholder='Email (Optional)' className='py-2 px-6 border border-five rounded-2xl' />
            <input type="text" placeholder='Order Note (optional)' className='py-2 px-6 border border-five rounded-2xl pb-5 w-[473px]' />
          </div>

          <div className='w-1/2 pl-3 border-l'>
            <ButtonOne
              onClick={handleToggleCoupon}
              className="text-one text-lg font-mon"
              text="Have Coupon / Voucher?"
            />
            {isVisible && (
              <Flex className="gap-x-4 items-center">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="px-4 py-2 w-full font-mon text-gray-600 border rounded-lg"
                />
                <ButtonOne text="Apply" className="bg-one text-white px-4 py-2 rounded" />
              </Flex>
            )}


            <div className="max-w-md mx-auto  p-6 rounded-lg shadow-md font-mon">
              <h2 className="text-lg font-semibold mb-2">Choose Shipping Method</h2>
              <div className="space-y-2 mb-4">
                <label className="flex items-center justify-between">
                  <div>
                    <input type="radio" name="shipping" value="99" className="mr-2 accent-pink-500" />
                    Delivery Outside Dhaka
                  </div>
                  <span>৳ 99.00</span>
                </label>
                <label className="flex items-center justify-between">
                  <div>
                    <input type="radio" name="shipping" value="66" className="mr-2 accent-pink-500" />
                    Delivery Inside Dhaka
                  </div>
                  <span>৳ 66.00</span>
                </label>
              </div>

              <div className="border-t pt-3">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Total MRP</span>
                  <span>৳ 0.00</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-one text-lg mt-2">
                  <span>Total Amount</span>
                  <span>৳ 0.00</span>
                </div>
              </div>


              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2">Choose Payment Method</h2>
                <div className="space-y-2">
                  {
                    ['Cash on delivery', 'Bkash', 'Pathao Pay',
                      'Pay with Card/Mobile Wallet'].map(method => (
                        <label className="block">
                          <input type="radio" name="payment" className="mr-2 accent-one" />
                          {method}
                        </label>
                      ))}
                </div>
              </div>

              <button className="mt-6 w-full bg-pink-500 text-white py-3 rounded-lg text-center font-semibold hover:bg-pink-600 transition">
                PLACE ORDER
              </button>
            </div>




          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default CheckOut
