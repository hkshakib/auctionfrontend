import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import HomeCard from "../Components/HomeCard";


const MyProducts = () => {

  const { user, authTokens } = useContext(AuthContext);
  const [userProducts, setUserProducts] = useState([]);
  const navigate = useNavigate();

  const handleView = (param) => {
      console.log("clicked!!");
      navigate(`/product-details/${param}`);
  }

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

  if(userProducts.length === 0){
    return (
      <p>No products available.</p>
    )
  }

  else{
    return (
      <div className="flex flex-col justify-center items-center mt-32">

        <h2 className="">You Have Remaining { userProducts.length } Products </h2>
        <div className="flex flex-wrap gap-10 mt-1 justify-center items-center gap-x-10 gap-y-10 p-10">
            {userProducts.map((product) => (
              <HomeCard product={product} handleView={handleView} Name={"VIEW"}/>
            ))}
        </div>

      </div>
    );
  };
  }
  

export default MyProducts;
