import React from 'react'
import Logo from './Logo';
import { FaSearchengin } from "react-icons/fa6";
import { FaUserAstronaut } from "react-icons/fa6";
import { FaOpencart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-16 shadow-md bg-black'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between '>
        <div className='' >
          <Link to={"/"} >

            <Logo w={90} h={50} />
          </Link>
        </div>
        <div className=' hidden lg:flex items-center w-full justify-between max-w-sm border border-yellow-600 rounded-r-full focus-within:shadow-lg pl-2'>
          <input className='w-full outline-none bg-black' type="text" placeholder='search products here...' />
          <div className='text-lg min-w-[50px] h-8 bg-yellow-600 flex items-center justify-center rounded-r-full text-white'>
            <FaSearchengin />
          </div>
        </div>

        <div className='flex items-center gap-7'>

          <div className='text-3xl text-yellow-600 cursor-pointer'>
            <FaUserAstronaut />
          </div>

          <div className='text-2xl cursor-pointer relative'>
            <span className='text-yellow-600'>
              <FaOpencart />
            </span>
            <div className='bg-yellotext-yellow-600 text-white w-4 h-4 flex items-center justify-center p-1 absolute -top-2 -right-4 rounded-md'>
              <p className='text-[11px]'>0</p>
            </div>
          </div>

          <div>
            <Link to={"/login"} >
              <button className='px-2 bg-yellow-600 rounded- text-white h-9 rounded-lg hover:bg-yellow-300 hover:text-black flex items-center justify-center text-md ' >Login</button>
            </Link>
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header;