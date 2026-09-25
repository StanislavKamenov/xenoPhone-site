import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import AppsList from './components/AppsList'
import Accessories from './components/Accessories'
import TechSpecs from './components/TechSpecs'
import Compatibility from './components/Compatibility'
import Trailer from './components/Trailer'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <AppsList />
      <Accessories />
      <TechSpecs />
      <Compatibility />
      <Trailer />
      <Pricing />
      <Footer />
    </>
  )
}

export default App
