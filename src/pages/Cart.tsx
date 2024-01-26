import React from 'react'
import HomeHeader from '../components/HomeHeader'

export default function Cart () {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 25 },
    { id: 3, name: 'Product 3', price: 30 }
  ]
  return (
    <div>
      <div className='container mx-auto my-8'>
        <h1 className='text-3xl font-semibold mb-[50px]'>NFT Cart</h1>

        {false ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <div className='grid grid-flow-col grid-cols-3 list-none mb-[30px] font-bold text-[20px] text-center'>
              <li>Product</li>
              <li>Price</li>
              <li>Action</li>
            </div>
            <div className='border-y-[1px]'>
              {' '}
              {cartItems.map(item => {
                return (
                  <div className='grid grid-flow-col grid-cols-3 list-none  py-[10px] border-b-[1px] '>
                    <li className=' items-center flex justify-center'>
                      {' '}
                      <img src='logo512.png' alt='' className='w-[60px]' />
                      <p>{item.name}</p>
                    </li>
                    <li className='flex items-center justify-center'>
                      {item.price}
                    </li>
                    <li className='flex items-center justify-center'>
                      {' '}
                      <div className='flex items-center w-[120px] h-[30px] bg-[#ff0000b5] justify-center '>
                        Remove
                      </div>
                    </li>
                  </div>
                )
              })}
            </div>
            <div className='mt-4'>
              <p className='text-xl font-semibold flex flex-row-reverse w-[90%] mt-[30px]'>
                Total: $17281
              </p>
            </div>

            <div className='mt-4'>
              {/* <Link to='/' className='bg-blue-500 text-white px-4 py-2 rounded'>
                Continue Shopping
              </Link> */}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
