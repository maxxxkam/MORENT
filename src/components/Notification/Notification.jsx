import React from 'react'
import s from './Notification.module.scss'

const Notification = () => {
  return (
    <>
    <div className={s.wrapper} >
  <h1>No Notifications</h1>
  <p>It looks like you are all caught up! Here are some tips for today:</p>
  <ul>
    <li>Check out our latest blog posts.</li>
    <li>Keep your profile updated.</li>
    <li>Explore new features in the settings.</li>
  </ul>
</div>

    </>
  )
}

export default Notification