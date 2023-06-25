import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import {BiShow, BiHide} from 'react-icons/bi';
import Photo from '../Media/SignUp.jpg';


const Signup = () => {
  
  let { SignupUser } = useContext(AuthContext); 

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='flex justify-center items-center bg-white'>
      <div className='flex-[50%]'>
        <img src={Photo} alt="" className="object-cover h-[100vh]" />
      </div>
      
      <div className="flex flex-col flex-[50%] justify-center items-center mr-0">
      
        <div className='flex flex-col justify-center items-center shadow-lg mr-0 h-[600px] w-[600px] bg-blue-200 rounded-lg'>
        <h2 className='uppercase font-semibold font-serif mb-1'>Sign Up</h2>
          <form onSubmit={SignupUser} className="flex flex-col justify-center">
          <label htmlFor="name" className='text-[13px] font-normal uppercase'>First Name</label>
            <div className="mb-[30px]">
              <input
                type="first_name"
                name="first_name"
                placeholder='Enter Your First Name'
                className="p-[10px] rounded-lg w-400"
              />
            </div>
            <label htmlFor="name" className='text-[13px] font-normal uppercase'>Last Name</label>
            <div className="mb-[30px]">
              <input
                type="last_name"
                name="last_name"
                placeholder='Enter Your Last Name'
                className="p-[10px] rounded-lg w-400"
              />
            </div>
            <label htmlFor="email" className='text-[13px] font-normal uppercase'>Email</label>
            <div className="mb-[30px]">
              <input
                type="email"
                name="email"
                placeholder='Enter Your Email'
                className="p-[10px] rounded-lg w-400"
              />
            </div>
            <label htmlFor="password" className='text-[13px] font-normal uppercase'>Password</label>
            <div className="mb-[50px] relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder='Enter Your Password'
                className="p-[10px] rounded-lg w-400"
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                type='button'
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <BiHide/> : <BiShow/>}
              </button>
            </div>
            <button type="submit" className="p-[10px] bg-slate-900 text-white rounded-lg
                                            cursor-pointer hover:bg-white hover:text-slate-900">
              Sign Up
            </button>
          </form>
          <div>
            <span className='text-[13px] mr-2'>Already Have Account? </span>
            <NavLink to="/login" className='text-[13px] text-blue-700'>Login</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
