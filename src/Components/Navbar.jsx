import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Styles/Navbar.module.css';
import AuthContext from '../Context/AuthContext';
import { FcHome } from 'react-icons/fc';
import { IoAddCircleOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { RiLogoutCircleRLine, RiLoginCircleLine } from 'react-icons/ri';
import { VscSignIn } from 'react-icons/vsc';


const Navbar = () => {
  const { user, logoutUser, email } = useContext(AuthContext);
  return (
    <nav className={styles.navbar}>
      
        <li className={styles.Home}>
          <FcHome className={styles.Icons}/>
          <NavLink to="/" className={styles.homeLink}> BID BUDDY </NavLink>
        </li>

        <div className={styles.navbarItems}>
          {user && <li id={styles.liOne}>
                     <NavLink to="/add-item" className={styles.navbarLink}> <IoAddCircleOutline className={styles.Icons}/> Add Item</NavLink>
                   </li>
          }
          {!user && <li id={styles.liTwo}> 
                      <NavLink to="/login" className={styles.navbarLink1}><RiLoginCircleLine className={styles.Icons}/>login</NavLink>
                    </li>
          }
          {!user && <li id={styles.litwo}> 
                      <NavLink to="/signup" className={styles.navbarLink2}><VscSignIn className={styles.Icons}/>Signup</NavLink>
                    </li>
          }
          {user &&  <li id={styles.liThree}> 
                       <NavLink to="/my-product" className={styles.navbarLink}><CgProfile className={styles.Icons}/>My Product</NavLink>
                    </li>
          }
          {user && <li onClick={logoutUser} className={styles.logoutButton}> 
                      <RiLogoutCircleRLine className={styles.Icons}/> Logout</li>
          }
          {user && <li className={styles.navbarLink} id={styles.li}>{email}</li>}
        </div>

    </nav>
  );
};

export default Navbar;
