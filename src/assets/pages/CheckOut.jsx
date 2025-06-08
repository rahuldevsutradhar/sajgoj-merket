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
        <div className='bg-[#d9edf7] py-2 px-5 ml-2 md:ml-0 mr-2 md:mr-0  w-auto md:w-full mb-5'>
          <h1 className='text-md font-mon text-black'>
            Returning Customer?
            <Link to={'/login'}>
              <span className='text-xs font-mon text-one'>Click here to login</span>
            </Link>
          </h1>
        </div>

        <div>
          <h1 className='text-md font-mon text-black mx-2 md:mx-0'>BILLING & SHIPPING</h1>
        </div>

        <Flex className='flex-col md:flex-row mt-5 items-start mx-2 md:mx-0'>
          <div className="w-full md:w-1/2 flex flex-wrap gap-4">
            <input type="text" placeholder="Name"
              className="w-full md:w-[48%] py-2 px-4 border border-five rounded-2xl" />
            <input type="text" placeholder="Phone"
              className="w-full md:w-[48%] py-2 px-4 border border-five rounded-2xl"
            />

            <select className="w-full md:w-[48%] py-2 px-4 border border-five rounded-2xl">
              <option value="">Select city</option>
              <option value="">Dhaka</option>
              <option value="">Bogura</option>
              <option value="">Rajshahi</option>
              <option value="">Rangpur</option>
              <option value="">Khulna</option>
            </select>

            <select className="w-full md:w-[48%] py-2 px-4 border border-five rounded-2xl">
              <option value="">Select Area</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>

            <input type="text" placeholder="Address"
              className="w-full md:w-[48%] py-2 px-4 border border-five rounded-2xl" />
            <input type="email" placeholder="Email (Optional)"
              className="w-full md:w-[48%] py-2 px-4 border border-five rounded-2xl" />
            <input type="text" placeholder="Order Note (Optional)"
              className="w-full  py-4 px-4 mr-0 md:mr-2 border border-five rounded-2xl" />
          </div>


          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
            <div className="w-full flex pl-2 md:pl-[55px] mb-4">
              <ButtonOne onClick={handleToggleCoupon}
                className="text-one text-sm font-mon"
                text="Have Coupon / Voucher?"/>
            </div>

            {isVisible && (
              <Flex className="gap-x-4 items-center">
                <input type="text" placeholder="Coupon code"
                  className="px-4 py-2 w-full font-mon text-gray-600 border rounded-lg" />

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
