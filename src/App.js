import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './Layout/PrivateRoute';
import AddItem from './Pages/AddItem';
import MyProduct from './Pages/MyProduct';
import ProductDetails from './Pages/ProductDetails';
import Profile from './Pages/Profile';

const App = () => {

  return (
    
    <Router>
      <AuthProvider>

        <div className="flex flex-col bg-slate-200">
          <Navbar />
          <div className='flex-grow z-5'>
            <div className='overflow-y-auto overflow-x-auto h-screen'>
              <Routes>
                <Route element={<PrivateRoute/>}>
                  <Route path='/' element={<Home/>} />
                  <Route path='/add-item' element={<AddItem/>} />
                  <Route path='/my-product' element={<MyProduct/>} />
                  <Route path='/my-profile' element={<Profile/>} />
                  <Route path="/product-details/:pk" element={<ProductDetails/>} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </div>
        </div>

      </AuthProvider>
    </Router>
    
  );
}

export default App;
