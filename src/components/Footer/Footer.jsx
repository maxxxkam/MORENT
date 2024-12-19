import React from 'react'
import s from './Footer.module.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Link } from 'react-router-dom'

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
                    <Link to={"/howpage"}>
                   How it works
                    </Link>
                    <a>Featured</a>
                    <a>Partnership</a>
                    <a>Bussiness Relation</a>
                </div>
                
                <div className={s.box}>
                    <h2>Community</h2>
                    <a>Events</a>
                    <a target='blanck' href='https://www.youtube.com/@Ja_Morant/videos' >Blog</a>
                    <a target='blanck' href='https://www.youtube.com/watch?v=SMi5p7W-BNo' >Podcast</a>
                    <a>Invite a friend</a>
                </div>
                
                <div className={s.box}>
                    <h2>Socials</h2>
                    <a target='blanck' href='https://discord.com/'>Discord</a>
                    <a target='blanck' href='https://www.instagram.com/itacademy_uz/?hl=en' >Instagram</a>
                    <a target='blanck' href='https://x.com/?lang=en' >Twitter</a>
                    <a target='blanck' href='https://www.facebook.com/itacademyuz/' >Facebook</a>
                    
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
