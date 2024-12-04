import React, { useState } from 'react'
import s from './Header.module.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Link } from 'react-router-dom'

const Header = () => {
  
  return (
    <>
    <header className={s.header}>
    <div className="container">
      <div className={s.wrapper}>
      <div className={s.box}>
        <Link className={s.logo} to={'/'} >
        <SectionTitle>MORANT</SectionTitle>
        </Link>
        <input placeholder='Search something here' className={s.search} type="text" />
        <button><img src="/filter-img.svg" alt=""/></button>
      </div>
      <div className={`${s.menu}`}>
        <img src="/Like-img.svg" alt="" />
        <img src="/Notification-img.svg" alt="" />
        <img src="/Settings-img.svg" alt="" />
        <img src="/Profile-img.svg" alt="" />
      </div>
      </div>
    </div>
    </header>
    </>
  )
}

export default Header