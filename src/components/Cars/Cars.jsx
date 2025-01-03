import React, { useState } from "react";
import s from "./Cars.module.scss";
import Products from "/public/products.json";
import CarCard from "../Car/Car";
import { Link } from "react-router-dom";

const CarList = () => {
  const [count, setCount] = useState(12) 
  const toggleCount = () => {
    setCount(count + 4)
  }
  return (
    <section className={s.cars}>
      <div className="container">
      <div className={s.top}>
      <p className={s.cars_p} >Popular Car</p>
      <Link to={"/filter"} >
      <a href="">View all</a>
      </Link>
      </div>
        <div className={s.car_list}>
          {Products.slice(0, count).map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <button className={s.moreBtn} onClick={toggleCount}>more</button>
      </div>
    </section>
  );
};

export default CarList;
