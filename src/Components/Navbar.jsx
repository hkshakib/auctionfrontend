import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import AuthContext from '../Context/AuthContext';

import { FcHome } from 'react-icons/fc';
import { IoAddCircleOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { RiLogoutCircleRLine, RiLoginCircleLine } from 'react-icons/ri';
import { VscSignIn } from 'react-icons/vsc';

import styles from '../Styles/Components/Navbar.module.css';



const Navbar = () => {

  const { user, logoutUser, email } = useContext(AuthContext);

  return (
    <nav className={styles.navbar}>
      
        <li className={styles.Home}>
          <FcHome className={styles.Icons}/>
          <NavLink to="/" className={styles.homeLink}> BID BUDDY </NavLink>
        </li>

        {user && <div className={styles.navbarItems}>
                    <li id={styles.liOne}>
                      <NavLink to="/add-item" className={styles.navbarLink}> <IoAddCircleOutline className={styles.Icons}/> Add Item</NavLink>
                    </li> 
                    <li id={styles.liThree}> 
                      <NavLink to="/my-product" className={styles.navbarLink}><CgProfile className={styles.Icons}/>My Product</NavLink>
                      </li><li onClick={logoutUser} className={styles.logoutButton}> 
                    <RiLogoutCircleRLine className={styles.Icons}/> Logout</li>
                    <li className={styles.navbarLink} id={styles.li}>{email}</li>
                  </div> 
        }

       {!user &&<div className={styles.navbarItems}>

                      <li id={styles.liTwo}> 
                        <NavLink to="/login" className={styles.navbarLink1}><RiLoginCircleLine className={styles.Icons}/>login</NavLink>
                      </li>
         
                      <li id={styles.litwo}> 
                        <NavLink to="/signup" className={styles.navbarLink2}><VscSignIn className={styles.Icons}/>Signup</NavLink>
                      </li>
         
                </div>
        }
    </nav>
  );
};

export default Navbar;
