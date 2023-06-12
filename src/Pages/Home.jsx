import React, { useEffect, useState } from "react";
import styles from "../Styles/Home.module.css";

const Home = () => {
  const [biddingProducts, setBiddingProducts] = useState([]);

  useEffect(() => {
    fetchBiddingProducts();
  }, []);

  const fetchBiddingProducts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/auction/api/products/");
      if (response.ok) {
        const data = await response.json();
        setBiddingProducts(data);
      } else {
        console.log("Error fetching bidding products");
      }
    } catch (error) {
      console.log("Error fetching bidding products:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Bidding Products</h2>
      {biddingProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className={styles.productList}>
          {biddingProducts.map((product) => (
            <div key={product.id} className={styles.productItem}>
              
              <img src={`http://127.0.0.1:8000${product.photo}`} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className={styles.bidInfo}>
                <p>Current Bid: ${product.highest_bid}</p>
                <p>Ends At: {product.auction_end_date_time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
