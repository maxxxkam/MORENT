import React from 'react';
import s from './Car.module.scss';

const CarCard = ({ car }) => {
  return (

      <div className={s.car_card}>
        <h3 className={s.car_name}>{car.name}</h3>
        <p className={s.car_category}>{car.category}</p>
        <img src={car.image} alt={car.name} className={s.car_image} />
        <p className={s.car_details}>
          {car.fuel} | {car.transmission} | {car.seats}
        </p>
       <div className={s.prices}>
       <p className={s.price}>{car.price}</p> {car.oldPrice && <s className={s.old_price}>{car.oldPrice}</s>}
       </div>
        <button className={s.rent_button}>Rent Now</button>
      </div>
 
  );
};

export default CarCard;
