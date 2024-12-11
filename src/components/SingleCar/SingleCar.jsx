import React from "react";
import s from "./SingleCar.module.scss";
import { useParams } from "react-router-dom";
import Products from "/public/products.json";
import Btn from "../btn/Btn";

const SingleCar = () => {
  const { id } = useParams();
  const car = Products.find((product) => product.id === parseInt(id));

  if (!car) {
    return <p>Машина не найдена</p>;
  }
  
  return (
    <>
      <section className={s.singlecar}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.boxes}>
            <div className={s.box}>
              <div className={s.images}>
                <div className={s.topImage}>
                  <img src={car.image} alt={car.name} />
                </div>
                <div className={s.bottomImage}>
                  <img src={car.image} alt="" />
                  <img src={car.images[0]} alt="" />
                  <img src={car.images[1]} alt="" />
                </div>
              </div>
            </div>

            <div className={`${s.box} ${s.box_2}`}>
            <h1>{car.name}</h1>
              <b>Category: {car.category}</b>
              <b>Seats: {car.seats}</b>
              <b>Price: {car.price}</b>
              <b>Fuel: {car.fuel}</b>
              <b>Transmission: {car.transmission}</b>
              
              {/* Добавляем раздел about */}
              <p>Info. {car.about}</p>
              <Btn>Rent now</Btn>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleCar;