import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeCard from "../Components/HomeCard";
import useFetch from "../customHooks/useFetch";
import {HiOutlineChevronDown as Down, HiOutlineChevronUp as Up} from 'react-icons/hi';


const Home = () => {

  const {data:biddingProducts} = useFetch("http://127.0.0.1:8000/auction/api/products/");
  const {data:categorys} = useFetch("http://127.0.0.1:8000/auction/api/category/");

  const [toggleCategory, setToggleCategory] = useState(false);
  
  const navigate = useNavigate();

  const handleView = (param) => {
      console.log("clicked!!");
      navigate(`/product-details/${param}`);
  }

  const handleToggle = () => {
    setToggleCategory(!toggleCategory);
  }

 

  if(biddingProducts.length === 0){
    return (
      <h2 className="font-bold p-5 text-lg">NO PRODUCT FOUND</h2>
    )
  }
  else{
    return (
      <div className="flex basis-[90%] p-1">

        <div className="flex flex-col basis-[25%] h-full justify-center items-center mt-[130px] p-1 sticky top-20 ">
            <div onClick={handleToggle} className="flex justify-center bg-[#fff] items-center cursor-pointer w-[200px] h-[50px] border border-blue-500 font-mono">
              CATEGORY
             {toggleCategory ? (<Down className="ml-4"/>) : (<Up className="ml-4"/>)}
            </div>
            {
              toggleCategory &&
              <div>
                 {categorys.map((category) => (
                  <div className="flex flex-col mt-2">
                    <span className="flex justify-center items-center h-[40px] bg-[#fff] font-mono cursor-pointer rounded-lg w-[200px] uppercase text-nav hover:border-none hover:bg-[#f2f4f8] transition duration-300 ease-in-out" key={category.id}>{category.title}</span>
                  </div>
                ))}
              </div>
            }

            
        </div>

        <div className="flex flex-col mt-20">

          <div className="flex basis-[5%]">
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

          <div className="flex basis-[10%]">

            <div className="flex basis-[50%] justify-start ml-[20px]">
              <div className="flex">
                  <div className="flex basis-[50%] mt-[12px]">
                    <select
                      // value={filter1}
                      // onChange={handleFilter1Change}
                      className="flex justify-center items-center p-2 uppercase border border-gray-300 w-[300px] h-[50px] rounded-md focus:outline-none"
                    >
                      <option value="">Sort by Price</option>
                      <option value="lowhigh"> Low to High </option>
                      <option value="highlow"> High to Low </option>

                    </select>
                  </div>
              </div>
            </div>

            <div className="flex basis-[50%] justify-end mr-[20px]"> 
              <div className="flex mt-[12px]">
                    <select
                      // value={filter1}
                      // onChange={handleFilter1Change}
                      className="flex justify-center items-center p-3 uppercase border border-gray-300 w-[300px] h-[50px] rounded-md focus:outline-none"
                    >
                      <option value="">Sort by Date</option>
                      <option value="Newest"> Newest </option>
                      <option value="Oldest"> Oldest </option>

                    </select>
              </div>
            </div>

          </div>

          <div className="flex basis-[70%] flex-wrap gap-8 justify-center items-center pt-[40px]">
            {biddingProducts.map((product) => (
              <HomeCard key={product.id} product={product} handleView={handleView} Name={"BID"}/>
            ))}
          </div>

        </div>

      </div>
    );
  };
}
  

export default Home;
