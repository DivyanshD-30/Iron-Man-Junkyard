import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from '../src/components/Navbar';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';
import ScrapDetails from './pages/ScrapDetails';
import MyCart from './pages/MyCart';
// import AppFooter from '../src/components/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login"/>
  }

  return (
    <>
      <Navbar/>
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to = {isAuthenticated ? "/Home" : "/login"}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/scrapdetails' element={<ScrapDetails/>}></Route>
        <Route path='/mycart' element={<MyCart/>}></Route>
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      </Routes>
      {/* <AppFooter/> */}
    </>
  );
}

export default App;

