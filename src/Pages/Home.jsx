import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../Styles/Pages/Home.module.css";


const Home = () => {

  const [biddingProducts, setBiddingProducts] = useState([]);

  useEffect(() => {
    fetchBiddingProducts();
  }, []);

  const fetchBiddingProducts = async (e) => {
    
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

  const navigate = useNavigate();

  const handleView = (param) => {
    navigate(`/product-details/${param}`);
  }


  return (
    <div className={styles.container}>
      <h2>HERE YOU GO</h2>
      {biddingProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className={styles.productList}>
          {biddingProducts.map((product) => (
            
            <div key={product.id} className={styles.productItem}>
              <div className={styles.basicInfo}>
                <img src={`http://127.0.0.1:8000${product.photo}`} alt={product.title} />               
                <div className={styles.productDetails}>
                  <div className={styles.title}>{product.title}</div>
                  <div className={styles.description}>{product.descriptions}</div>
                </div>

              </div>
              <div className={styles.bidInfo}>
                  <div className={styles.info}>
                    <div className={styles.highestBid}>Current Bid: ${product.highest_bid}</div>
                    <div className={styles.auctionEnd}>Ends At: {product.auction_end_date_time}</div>
                  </div>
                  <div className={styles.Button}>
                    <button className={styles.viewBtn} onClick={() => handleView(product.id)}>View</button>
                  </div>
              </div>
            </div>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
