import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import PickUp from './components/PickUp/PickUp'
import CarList from './components/Cars/Cars'

const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <PickUp/>
    <CarList/>
    </>
  )
}

export default App