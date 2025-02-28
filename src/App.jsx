import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoTicker from './components/LogoTicker'
import Popular from './components/Popular'
import NewsLetter from './components/NewsLetter'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Popular />
      <NewsLetter />
    </div>
  )
}

export default App