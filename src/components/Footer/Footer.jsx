import React from 'react'
import s from './Footer.module.scss'
import SectionTitle from '../SectionTitle/SectionTitle'

const Footer = () => {
  return (
    <>
    <footer className={s.footer}>
        <div className="container">
            <div className={s.wrapper}>
                <div className={s.box1}>
                <SectionTitle>MORANT</SectionTitle>
                <p>Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                <div className={s.box}>
                    <h2>About</h2>
                    <p>How it works</p>
                    <p>Featured</p>
                    <p>Partnership</p>
                    <p>Bussiness Relation</p>
                </div>
                
                <div className={s.box}>
                    <h2>Community</h2>
                    <p>Events</p>
                    <p>Blog</p>
                    <p>Podcast</p>
                    <p>Invite a friend</p>
                </div>
                
                <div className={s.box}>
                    <h2>Socials</h2>
                    <p>Discord</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                </div>
                


            </div>

            <div className={s.line}></div>

            <div className={s.wrap}>
                <div className={s.card}>
                    <b>©2022 MORENT. All rights reserved</b>
                </div>
                <div className={s.card}>
                    <b>Privacy & Policy</b>
                    <b>Terms & Condition</b>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
