import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import styles from "../Styles/Pages/MyProducts.module.css";


const MyProducts = () => {

  const { user, authTokens } = useContext(AuthContext);
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    fetchUserProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUserProducts = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/auth/api/product/${user.user_id}`,
        {
          headers: {
            Authorization: `Bearer ${authTokens?.access}`,
          },
        }
      );
      
      if (response.ok) {
        const data = await response.json();
        console.log("API response:", data); 
        if (Array.isArray(data.products)) {
          setUserProducts(data.products);
        } else {
          console.log("Error: User products data is not an array");
        }
      } else {
        console.log("Error fetching user products");
      }
    } catch (error) {
      console.log("Error fetching user products:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>My Products</h2>
      {userProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className={styles.productList}>
          {userProducts.map((product) => (
            <div key={product.id} className={styles.productItem}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProducts;
