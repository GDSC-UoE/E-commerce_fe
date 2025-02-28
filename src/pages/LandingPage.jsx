import React from 'react'
import Hero from '../components/Hero'
import LogoTicker from '../components/LogoTicker'
import Popular from '../components/Popular'
import NewsLetter from '../components/NewsLetter'

function LandingPage() {
    return (
        <div>
            <Hero />
            <LogoTicker />
            <Popular />
            <NewsLetter />
        </div>
    )
}

export default LandingPage