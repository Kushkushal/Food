// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PalceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LopinPopup/LoginPopup';
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [closedForMaintenance, setClosedForMaintenance] = useState(true);

  useEffect(() => {
    // Set a timer for 10 seconds to remove the closure message
    const timer = setTimeout(() => {
      setClosedForMaintenance(false);
    }, 40000); // 10 seconds = 10000 milliseconds

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (closedForMaintenance) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20%' }}>
        <h1>Closed for a long time until further notice</h1>
        <p>We apologize for any inconvenience caused. Please check back later.</p>
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
