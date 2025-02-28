import React from 'react'
import Navbar from './components/Navbar'

import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App