import React from 'react'
import s from './Setings.module.scss'
import MainMenu from '../MainMenu/MainMenu'

const Setings = () => {
  return (
    <>
   <section className="setings">
   <div className="container">
    <div className={s.wrapper}>
    <MainMenu/>
    </div>
    </div>
   </section>
    </>
  )
}

export default Setings
