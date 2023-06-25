import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";


const AuthContext = createContext();
export default AuthContext;


export const AuthProvider =({ children })=>{

    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
    let [loading, setLoading] = useState(true);
    let [email, setEmail] = useState(
        () => localStorage.getItem("email") || ""
      );

    const naviagte = useNavigate();

    let loginUser = async (e )=> {
        e.preventDefault();
        let payload = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        let response = await fetch(`http://127.0.0.1:8000/auth/api/token/`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payload)
        })

        let data = await response.json();
        console.log("Response:", data.email);
        if(response.status === 200){
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            localStorage.clear();
            localStorage.setItem('authTokens', JSON.stringify(data));
            setEmail(e.target.email.value);
            localStorage.setItem("email", e.target.email.value);
            naviagte('/');
        }else{
            alert('Something went wrong!')
        }
    }


    let SignupUser = async (e )=> {
        e.preventDefault();
        let payload = {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            email: e.target.email.value,
            password: e.target.password.value
        };

        let response = await fetch(`http://127.0.0.1:8000/auth/api/register/`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payload)
        })

        let data = await response.json();
        console.log(response.status);
        if(response.status === 201){
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            localStorage.clear();
            setEmail(e.target.email.value);
            localStorage.setItem("email", e.target.email.value);
            localStorage.setItem('authTokens', JSON.stringify(data));
            naviagte('/');
        }else{
            console.log('Something went wrong!')
        }
    }


    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        naviagte('/login')
    }


    let updateToken = async ()=> {

        let response = await fetch(`http://127.0.0.1:8000/auth/api/token/refresh/`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens?.refresh})
        })

        let data = await response.json()
        
        if (response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }

    const addItem = async (newItem) => {
        console.log("NewItem :",newItem);
        try {
          const formData = new FormData();
          formData.append('title', newItem.title);
          formData.append('description', newItem.description);
          formData.append('photo', newItem.photo);
          formData.append('min_bid_price', newItem.min_bid_price);
          formData.append('auction_end_date_time', newItem.auction_end_date_time);
          formData.append('bidder', newItem.bidder);
      
          const response = await fetch("http://127.0.0.1:8000/auction/api/products/", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${authTokens?.access}`
            },
            body: formData
          });
          console.log(formData.bidder);
      
          if (response.status === 201) {
            console.log("Item added successfully");
            naviagte('/my-product')
          } else {
            console.log("Error occurred while adding item");
          }
        } catch (error) {
          console.log("Error occurred while adding item:", error);
        }
    };


    let contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
        SignupUser: SignupUser,
        addItem: addItem,
        email: email,
    }

    useEffect(()=> {

        if(loading){
            updateToken();
        }

        let Minutes = 1000 * 60 * 4;

        let interval =  setInterval(()=> {
            if(authTokens){
                updateToken();
            }
        }, Minutes)
        return ()=> clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )

}