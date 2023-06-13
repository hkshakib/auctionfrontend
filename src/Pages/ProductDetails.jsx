import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from '../Context/AuthContext';
import styles from "../Styles/ProductDetails.module.css";


const ProductDetails = () => {

  const { email, user } = useContext(AuthContext);
  const { pk } = useParams();

  const [product, setProduct] = useState(null);
  const [bidPrice, setBidPrice] = useState(0);
  const [bids, setBids] = useState([]);


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    return date.toLocaleTimeString(undefined, options);
  };


  useEffect(() => {
    fetchProductDetails();
    fetchBids();
  }, []);

  const fetchProductDetails = async (e) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/auction/api/products/${pk}/`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      } else {
        console.log("Error fetching product details");
      }
    } catch (error) {
      console.log("Error fetching product details:", error);
    }
  };

  const fetchBids = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/auction/api/bid/${pk}`);
      if (response.ok) {
        const data = await response.json();
        setBids(data);
      } else {
        console.log("Error fetching bids");
      }
    } catch (error) {
      console.log("Error fetching bids:", error);
    }
  };


  const handleBid = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:8000/auction/api/bid/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: bidPrice,
          product: pk,
          bidder: user.user_id,
          email: email,
        }),
      });

      if (response.ok) {
        window.location.reload();
      } else {
        console.log('Error submitting bid');
      }
    } catch (error) {
      console.log('Error submitting bid:', error);
    }
  };

  const handleBidPriceChange = (event) => {
    setBidPrice(parseInt(event.target.value));
  };


  return (
    <div className={styles.wrapper}>
      
      {product ? (
          <div className={styles.container}>

            <div className={styles.productInformations}>
                
                <div className={styles.basicInfo}>
                    <img src={`http://127.0.0.1:8000${product.photo}`} alt={product.title} className={styles.productImage} />
                    <div className={styles.shortInfo}>
                      <div className={styles.productTitle}>{product.title}</div>
                      <div className={styles.productDescription}>{product.description}</div>
                    </div>
                </div>
                <div className={styles.bidInfo}>
                    
                    <div className={styles.info}>
                      <div className={styles.productPrice}>Highest Bid: ${product.highest_bid}</div>
                      <div className={styles.productEndsAt}>Bid Ends At: {product.auction_end_date_time}</div>
                      <div className={styles.productBidder}>Highest Bidder: {product.email}</div>
                    </div>

                    <div className={styles.bidSection}>
                      <input
                        type="number"
                        value={bidPrice}
                        onChange={handleBidPriceChange}
                        className={styles.bidInput}
                      />
                      <button className={styles.bidBtn} onClick={handleBid}>BID</button>
                    </div>

                </div>

            </div> 

            {bids.length > 0 && (

            <div className={styles.bidsTable}>
                <div className={styles.tableTitle}>BID INFORMATIONS</div>
                <table>
                  <thead>
                    <tr>
                      <th>Bidder</th>
                      <th>Bidding Amount</th>
                      <th>Bid created Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bids?.map((bid) => (
                      <tr key={bid.id}>
                        <td>{bid.email}</td>
                        <td>{bid.amount}</td>
                        <td>{formatDate(bid.created_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>

            )}
          </div>
      ) : (<p>Loading...</p> )}

    </div>
  );
};

export default ProductDetails;
