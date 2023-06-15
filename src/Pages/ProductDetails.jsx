import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from '../Context/AuthContext';
import DetailsCard from "../Components/DetailsCard";
import BidCard from "../Components/BidCard";


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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  

  if(product === null ) {
    return(
      <p>Loading...</p>
    )
  }
  else{
    return (
      <div className="flex flex-col h-[92vh] p-8">
        

            <div className="flex basis-4/5">

              <DetailsCard product={product}  
                handleBidPriceChange={handleBidPriceChange} 
                handleBid={handleBid} 
                bidPrice={bidPrice}
                formatDate={formatDate}
                email={email}
                user={user}
              /> 
  
              {bids.length > 0 && (
  
                <BidCard bids = {bids} formatDate={formatDate} email={email}/>
  
              )}
            </div>

            <div className="flex flex-col basis-[10%] border m-2 justify-center items-center">
              <span > WINNER WILL BE ANNOUNCED SOON </span>
            </div>
  
      </div>
    );
  };  
}


  
export default ProductDetails;
