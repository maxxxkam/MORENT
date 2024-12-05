import React from "react";
import s from "./Cars.module.scss";
import Products from "/public/products.json";
import CarCard from "../Car/Car";


const CarList = () => {
  return (
    <div className="container">

      <div className={s.car_list}>
        {Products.slice(0, 12).map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>

  );
};

export default CarList;
