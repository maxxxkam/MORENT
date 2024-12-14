import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CarPage from './pages/CarPage'
import Filter from './pages/Filter'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Admin from './components/Admin/Admin'
import Favorite from './components/Favorite/Favorite'
import Notification from './components/Notification/Notification'

const App = () => {
  return (
    <>
    <ScrollToTop/>
    <Header/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/carPage/:id" element={<CarPage />} />
    <Route path='/filter' element={<Filter/>} />
    <Route path='/admin' element={<Admin/>} />
    <Route path='/favorite' element={<Favorite/>} />
    <Route path='/notification' element={<Notification/>}/>

  </Routes>
    <Footer/>
    </>
  )
}

export default App