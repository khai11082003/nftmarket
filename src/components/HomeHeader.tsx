import React, { useState } from 'react'
import IconSvg from '../svg'
import { style } from './createHeader'
import { Link } from 'react-router-dom'
export default function HomeHeader () {
  type MyState = {
    status: boolean
  }
  const [status, setStatus] = useState<MyState>({
    status: false
  })

  const setState = ({ status }: any) => {
    setStatus({
      status: !status
    })
  }
  return (
    <div className='relative  text-white'>
      <div className='xs:block md:flex md:justify-between container mx-auto xs:items-center py-[20px]'>
        <div className='text-[18px] xs:text-center md:text-start'>
          Discover, find and sell extraordinary NFT with us.
        </div>
        <div className='xs:flex xs:justify-center md:justify-between sm:py-5 md:py-0 md:block'>
          {' '}
          <Link to='/CreateNft'>
            {' '}
            <button className='font-bold '>CREATE NFT</button>
          </Link>
        </div>
      </div>
      <div className=' border-b-[1px] border-white w-[100%] absolute sm:top-[130px] md:top-[90px]'></div>
      <div>
        <div className='container mx-auto flex justify-between  items-center'>
          <Link to='/'>
            {' '}
            <div className='cursor-pointer flex items-center w-[100px] justify-between font-bold'>
              <IconSvg name='logo' /> FIDEC
            </div>
          </Link>
          <ul className='xs:hidden md:flex py-[25px] w-2/3 justify-between cursor-pointer'>
            <Link to='/'>
              {' '}
              <li className={style.li}>Home</li>
            </Link>
            <li className={style.li}>Collectors</li>
            <li className={style.li}>NFT Marketplace</li>
            <li className={style.li}>Features</li>
            <li className={style.li}>Pages</li>
            <li className={style.li}>Help</li>
            <li className={style.li}>Purchase</li>
          </ul>
          <div>
            {' '}
            <i
              className='fa-solid fa-bars md:hidden sm:block text-[30px] relative'
              onClick={() => {
                setState(status)
              }}
            ></i>
            <ul
              className={`xs:${
                status.status ? 'block' : 'hidden'
              } md:hidden text-black sm:w-[100%] left-0 cursor-pointer absolute py-3`}
            >
              <Link to='/'>
                {' '}
                <li className='bg-[#ddd] p-3 hover:bg-slate-500'>Home</li>
              </Link>
              <li className='bg-[#ddd] p-3 hover:bg-slate-500'>Collectors</li>
              <li className='bg-[#ddd] p-3 hover:bg-slate-500'>
                NFT Marketplace
              </li>
              <li className='bg-[#ddd] p-3 hover:bg-slate-500'>Features</li>
              <li className='bg-[#ddd] p-3 hover:bg-slate-500'>Pages</li>
              <li className='bg-[#ddd] p-3 hover:bg-slate-500'>Help</li>
              <li className='bg-[#ddd] p-3 hover:bg-slate-500'>Purchase</li>
            </ul>
          </div>
          <Link to='/Cart'>
            {' '}
            <div
              className={`xs:${
                status.status ? 'block' : 'hidden'
              } md:block cursor-pointer`}
            >
              Cart
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
