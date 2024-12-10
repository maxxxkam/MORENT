import React from "react";
import s from "./Car.module.scss";
import Btn from "../btn/Btn";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className={s.car_card}>
      <h3 className={s.car_name}>{car.name}</h3>
      <p className={s.car_category}>{car.category}</p>
      <img src={car.image} alt={car.name} className={s.car_image} />
      <p className={s.car_details}>
        <img src="/gas-station.svg" alt="" />
        {car.fuel} <img src="/Car (2).svg" alt="" />
        {car.transmission} <img src="/peoples1.svg" alt="" />
        {car.seats}
      </p>
      <div className={s.rent}>
        <div className={s.prices}>
          <p className={s.price}>{car.price}</p>{" "}
          {car.oldPrice && <s className={s.old_price}>{car.oldPrice}</s>}
        </div>
        <Link to={"/carPage"}>
          <Btn>Rent now</Btn>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
