import React from 'react'
import s from './PickUp.module.scss'

const PickUp = () => {
  return (
    <>
    <scetion className={s.PickUp}>
      <div className="container">
        <div className={s.wrapper}>
       <div className={s.cards}>
       <div className={s.card}>
          <p><img src="/PickUp-img1.svg" alt="" /> Pick - Up</p>
          <div className={s.info}>
            <div>
              <b>Locations</b>
              <p>Select your city <img src="/arrow-down.svg" alt="" /></p>
            </div>
            <div className={s.line}></div>
            <div>
              <b>Date</b>
              <p>Select your date <img src="/arrow-down.svg" alt="" /></p>
            </div>
            <div className={s.line}></div>
            <div>
              <b>Time</b>
              <p>Select your time <img src="/arrow-down.svg" alt="" /></p>
            </div>
          </div>

        </div>
       <button className={s.btn}><img src="/arrows-img.svg" alt="" /></button>
        <div className={s.card}>
          <p><img src="/PickUp-img1.svg" alt="" /> Drop - Off</p>
          <div className={s.info}>
            <div>
              <b>Locations</b>
              <p>Select your city <img src="/arrow-down.svg" alt="" /></p>
            </div>
            <div className={s.line}></div>
            <div>
              <b>Date</b>
              <p>Select your date <img src="/arrow-down.svg" alt="" /></p>
            </div>
            <div className={s.line}></div>
            <div>
              <b>Time</b>
              <p>Select your time <img src="/arrow-down.svg" alt="" /></p>
            </div>
          </div>

        </div>
       </div>
       
        </div>
      </div>
    </scetion>
    </>
  )
}

export default PickUp