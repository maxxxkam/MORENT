import React from "react";
import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <>
      <section className={s.hero}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.card}>
              <div>
                <h2>The Best Platform for Car Rental</h2>
                <p>
                  Ease of doing a car rental safely and reliably. Of course at a
                  low price.
                </p>
                <button className={s.btn}>Rental Car</button>
              </div>
            </div>
            <div className={s.card}>
              <div>
                <h2>Easy way to rent a car at a low price </h2>
                <p>
                  Providing cheap car rental services and safe and comfortable
                  facilities.
                </p>
                <button className={s.btn2}>Rental Car </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
