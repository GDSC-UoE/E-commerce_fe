import React, { useState } from 'react'
import Navbar from './components/Navbar'

import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import { ShopContext } from './context/ShopContext'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import Cart from './pages/Cart'

function App() {
  // Global states
  const [cart, setCart] = useState([]);

  return (
    <ShopContext.Provider value={{ cart, setCart }}>
      <div className='container mx-auto'>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </ShopContext.Provider>
  )
}

export default App