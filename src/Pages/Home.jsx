// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeCard from "../Components/HomeCard";
import useFetch from "../customHooks/useFetch";

const Home = () => {

  const {data:biddingProducts}= useFetch("http://127.0.0.1:8000/auction/api/products/");
  
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
        <div className="flex mt-20 justify-center items-center">
          <div className="relative flex items-center justify-center w-full">
            <input
              type="text"
              placeholder="Search BidBay..."
              className="w-1/2 px-6 py-2 text-gray-700 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-300"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-full hover:bg-blue-600">
              Search
            </button>
          </div>
            
        </div>

        <div className="flex flex-wrap gap-10 justify-center items-center p-10 ">
          {biddingProducts.map((product) => (
            <HomeCard key={product.id} product={product} handleView={handleView} Name={"BID"}/>
          ))}
        </div>
          
      </div>
    );
  };
}
  

export default Home;
