import React from 'react';
import logo from "../assest/a.png"

const Logo = () => {
  return (
    <div>
      <div className='flex items-center gap-4' >
        <img className='rounded-b-3xl' width={50}  height={50} src={logo} alt="" />
        <div className='text-slate-100' style={{  fontFamily: 'fantasy', fontSize: '22px' }}>
           VA <span className='text-yellow-600'>  Kartz  </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
