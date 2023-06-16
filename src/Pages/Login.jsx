import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import styles from '../Styles/Pages/Login.module.css';


const Login = () => {
  
  let { loginUser } = useContext(AuthContext); 

  return (
    <div className="flex flex-col justify-center items-center mt-100">
      <h2>Login</h2>
      <form onSubmit={loginUser} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder='Enter Your Email'
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder='Enter Your Password'
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
