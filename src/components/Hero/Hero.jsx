import React from "react";
import s from "./Hero.module.scss";
import Btn from "../btn/Btn";
import Btn2 from "../Btn2/Btn2";

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
                <Btn>Rental  car</Btn>
              </div>
            </div>
            <div className={s.card}>
              <div>
                <h2>Easy way to rent a car at a low price </h2>
                <p>
                  Providing cheap car rental services and safe and comfortable
                  facilities.
                </p>
                
                <Btn2>Rental car</Btn2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
