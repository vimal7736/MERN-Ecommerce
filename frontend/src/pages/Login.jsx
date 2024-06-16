import React, { useState } from 'react'
import logo from "../assest/logo.png"
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Login = () => {

  const [showPassword, setShowPassword] = useState(0)
  const [data, setData] = useState({
    email:"",
    password:""
  })

  const handleOnChange = (e)=>{
    // const { name, value } = e.target; extracts the name and value properties from the event target (e.target)
    const {name , value} = e.target
    setData((prev) =>{
      return{
        ...prev,
        [name]: value
      }
    } )
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
  }
  

  return (
    <section  id='login' className='mx-auto container p-9' >
      <div className="bg-black p-4 w-full max-w-md mx-auto rounded-lg">
        <div className="w-14 h-14 mx-auto flex items-center gap-16">

          {/* <img className='rounded-full' src={logo} alt="Login icon for Aishus Cart" /> */}
          <div className='text-yellow-600' style={{ fontFamily: 'fantasy', fontSize: '25px' }}>
            Login
          </div>
        </div>
        <form className='' onSubmit={handleSubmit} action="">
          <div className='grid text-yellow-600'>
            <label htmlFor="">Email:</label>
            <div className='bg-black p-2'>
              <input 
              className='w-full h-full outline-none bg-transparent' 
              type="email" 
              name='email'
              value={data.email}
              onChange={handleOnChange}
              placeholder='enter email' />
            </div>
          </div>
          <div className='grid text-yellow-600 mt-4'>
            <label htmlFor="">Password</label>
            <div className='bg-black text-yellow-600 p-2 flex'>
              <input 
              type={showPassword ? "text" : "password"} 
              className='border-yello w-full h-full outline-none bg-transparent ' 
              placeholder='enter password'
              onChange={handleOnChange}
              name='password'
              value={data.password}
              />
              
              <div>
                <span onClick={() => (setShowPassword(!showPassword))} className=' cursor-pointer hover:text-slate-400' >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>

              </div>
            </div>
            <span className='ml-auto hover:text-white' >
              <Link to={"/forgot-password"}>Forgot Password ?</Link>
            </span>
          </div>
          <div className='p-4  flex'>
            <button className='text-black w-full max-w-[150px] translate-all p-2 bg-yellow-600 rounded-xl  hover:text-white hover:scale-110  text-md'>Login</button>
          </div>
          <div className='p-4  flex text-yellow-600'>
            <p>Dont have account ? <Link className='hover:text-slate-400' to="/register" >Register</Link> </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
