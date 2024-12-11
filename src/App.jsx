import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CarPage from './pages/CarPage'
import Filter from './pages/Filter'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
  return (
    <>
    <ScrollToTop/>
    <Header/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/carPage/:id" element={<CarPage />} />
    <Route path='/filter' element={<Filter/>} />
  </Routes>
    <Footer/>
    </>
  )
}

export default App