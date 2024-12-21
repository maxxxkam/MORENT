import React from 'react'
import s from './Setings.module.scss'
import NavBar from '../NavBar/NavBar'
import Dashboard from '../Dashboard/Dashboard'
import CarRental from '../CarRental/CarRental'

const Setings = () => {
  return (
  <>
  <section className={s.setings}>
  <div className="container">
    <div className={s.wrapper}>
    <NavBar/>
    <Dashboard/>
    <CarRental/>
    </div>
  </div>
  </section>
  </>
  )
}

export default Setings