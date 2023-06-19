import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';


import {BiShow, BiHide} from 'react-icons/bi';

const Login = () => {
  let { loginUser } = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='flex flex-col justify-center items-center mt-32'>
      <div className="flex flex-col justify-center items-center h-[600px] shadow-xl w-[500px] mr-0">
        <h2 className='uppercase font-bold mb-10'>Login</h2>
        <form onSubmit={loginUser} className="flex flex-col justify-center">
          <label htmlFor="email" className='text-[13px] font-normal uppercase'>Email</label>
          <div className="mb-[30px]">
            <input
              type="email"
              name="email"
              placeholder='Enter Your Email'
              className="p-[10px] border-2xl w-400"
            />
          </div>
          <label htmlFor="password" className='text-[13px] font-normal uppercase'>Password</label>
          <div className="mb-[50px] relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              placeholder='Enter Your Password'
              className="p-[10px] border-2xl w-400"
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
            Login
          </button>
        </form>
        <div>
          <span className='text-[13px] mr-2'>don't have an account? </span>
          <NavLink to="/signup" className='text-[13px] text-blue-700'>Signup</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
