import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './Layout/PrivateRoute';
import AddItem from './Pages/AddItem';
import MyProduct from './Pages/MyProduct';
import ProductDetails from './Pages/ProductDetails';

const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route element={<PrivateRoute/>}>
              <Route path='/' element={<Home/>} />
              <Route path='/add-Item' element={<AddItem/>} />
              <Route path='/my-product' element={<MyProduct/>} />
              <Route path="/product-details/:pk" element={<ProductDetails/>} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
