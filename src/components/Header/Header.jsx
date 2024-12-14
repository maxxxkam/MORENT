import React, { useState } from 'react';
import s from './Header.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <>
      <header className={s.header}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.box}>
              <Link className={s.logo} to={'/'}>
                <SectionTitle>MORANT</SectionTitle>
              </Link>
              <input
                placeholder="Search something here"
                className={s.search}
                type="text"
              />
              <button>
                <img src="/filter-img.svg" alt="" />
              </button>
            </div>
            <div className={s.menu}>
              <Link to={'/favorite'}>
                <img src="/Like-img.svg" alt="" />
              </Link>
              <div className={s.notification}>
                <img
                  src="/Notification-img.svg"
                  alt=""
                  onClick={toggleDropdown}
                  className={s.notificationIcon}
                />
                {showDropdown && (
                  <div className={s.dropdown}>
                    <p>You have a new message</p>
                    <p>Your booking is confirmed</p>
                    <p>System maintenance scheduled</p>
                    <Link to={'/notification'}>View all notifications</Link>
                  </div>
                )}
              </div>
              <img src="/Settings-img.svg" alt="" />
              <img src="/Profile-img.svg" alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
