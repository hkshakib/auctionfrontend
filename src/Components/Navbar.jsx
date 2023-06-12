import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Styles/Navbar.module.css';
import AuthContext from '../Context/AuthContext';

const Navbar = () => {

  const { user, logoutUser } = useContext(AuthContext);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li>
          <NavLink to="/" className={styles.navbarLink}>Home</NavLink>
        </li>
        {user && <NavLink to="/add-item" className={styles.navbarLink}>Add Item</NavLink>}
        {!user && <li> <NavLink to="/login" className={styles.navbarLink}>login</NavLink></li>}
        {!user && <li> <NavLink to="/signup" className={styles.navbarLink}>Signup</NavLink></li>}
        {user && <li onClick={logoutUser} className={styles.navbarLink}>Logout</li>}
      </ul>
    </nav>
  );
};

export default Navbar;
