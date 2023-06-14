import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import AuthContext from '../Context/AuthContext';

import { FcHome } from 'react-icons/fc';
import { IoAddCircleOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { RiLogoutCircleRLine, RiLoginCircleLine } from 'react-icons/ri';
import { VscSignIn } from 'react-icons/vsc';



const Navbar = () => {

  const { user, logoutUser, email } = useContext(AuthContext);

  return (
    <nav className="flex basis-1/10 bg-gray-400 p-4 uppercase text-sm font-normal sticky top-0">

        <li className="flex basis-3/5 justify-start items-center cursor-pointer">
          <FcHome className="text-2xl"/>
          <NavLink to="/" className="Navlinks text-white text-lg font-serif"> BID BUDDY </NavLink>
        </li>

        {user && <div className="flex basis-2/5 justify-end items-center ml-2.5">
                      <NavLink to="/add-item"  className="NavLinks ListClassOne mr-10"> <IoAddCircleOutline className="Icons"/> Add Item</NavLink>
                      <NavLink to="/my-product" className="NavLinks ListClassOne"><CgProfile className="Icons"/>My Product</NavLink>

                      <NavLink onClick={logoutUser} className="flex 
                      h-10 w-40 text-nav justify-center items-center no-underline
                      text-white font-normal cursor-pointer ml-20 mr-4 border border-white rounded-lg hover:bg-gray-700 hover:border-0"> 
                    <RiLogoutCircleRLine className="Icons"/> Logout</NavLink>
                    <NavLink className="ProfileLinks">{email}</NavLink>
                  </div> 
        }

       {!user &&<div className="flex basis-2/5 justify-end items-center ml-4">
                        <NavLink to="/login" className="ProfileLinks ListClassOne"><RiLoginCircleLine className="Icons"/>login</NavLink>
                        <NavLink to="/signup" className="ProfileLinks ListClassOne ml-4"><VscSignIn className="Icons"/>Signup</NavLink>

         
                </div>
        }
    </nav>
  );
};

export default Navbar;
