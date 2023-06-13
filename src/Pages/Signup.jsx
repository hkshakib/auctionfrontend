import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import styles from '../Styles/Login.module.css';


const Signup = () => {
  
  let { SignupUser } = useContext(AuthContext); 

  return (
    <div className={styles.container}>
      <h2>SignUp</h2>
      <form onSubmit={SignupUser} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder='Enter a Email'
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder='Enter Password'
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Signup;
