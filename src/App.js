import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './Layout/PrivateRoute';

const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route element={<PrivateRoute/>}>
              <Route path='/' element={<Home/>} />
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
