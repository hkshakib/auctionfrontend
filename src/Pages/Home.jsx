import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeCard from "../Components/HomeCard";

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
      console.log("clicked!!");
      navigate(`/product-details/${param}`);
  }

  if(biddingProducts.length === 0){
    return (
      <h2 className="font-bold p-5 text-lg">NO PRODUCT FOUND</h2>
    )
  }
  else{
    return (
      <div className="flex basis-9/10 flex-col m-auto p-1">
        <div className="flex flex-wrap mt-20 gap-10 justify-center items-center p-10 ">
          {biddingProducts.map((product) => (
            <HomeCard key={product.id} product={product} handleView={handleView} Name={"BID"}/>
          ))}
        </div>
          
      </div>
    );
  };
}
  

export default Home;
