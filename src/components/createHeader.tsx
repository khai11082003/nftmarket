import React from 'react'
import { Link } from 'react-router-dom'
export const style = {
  li: 'hover:text-[#D01498] cursor-pointer'
}
export default function CreateHeader () {
  return (
    <div className='flex bg-[#000] text-white flex-row-reverse items-center py-[15px]'>
      <ul className='flex justify-between w-3/4 items-center mr-[40px]'>
        <Link to='/'>
          {' '}
          <li className={style.li}>Home</li>
        </Link>
        <li className={style.li}>Sellers</li>
        <li className={style.li}>Collectibles</li>
        <li className={style.li}>Owner</li>
        <li className={style.li}>About</li>
        <li className={style.li}>List to Market</li>
        <div className='flex'>
          <li>
            <button>
              {' '}
              Create NFT <br /> & 1155
            </button>
          </li>
          <li>
            <button>Connect Wallet</button>
          </li>
        </div>
      </ul>
    </div>
  )
}
