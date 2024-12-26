import React from 'react'
import s from './MainMenu.module.scss'

const MainMenu = () => {
  return (
    <>
    <section className={s.menu}>
        <div className={s.wrapper}>
            <h3>main menu</h3>
            <div className={s.wrap}>
                <p><img src="/home-img.svg" alt="" />Dashboard</p>
                <p><img src="/car-img.svg" alt="" />Car Rent</p>
                <p><img src="/rate-img.svg" alt="" />Insight</p>
                <p><img src="./wallet-img.svg" alt="" />Reimburse</p>
                <p><img src="./message-img.svg" alt="" />Inbox</p>
                <p><img src="./calendar-img.svg" alt="" />Calender</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default MainMenu
