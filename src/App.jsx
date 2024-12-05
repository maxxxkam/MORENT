import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import PickUp from './components/PickUp/PickUp'
import CarList from './components/Cars/Cars'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <PickUp/>
    <CarList/>
    <Footer/>
    </>
  )
}

export default App