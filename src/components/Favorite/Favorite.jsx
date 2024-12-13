import React, { useEffect, useState } from "react";
import s from './Favorite.module.scss';
import { Link } from "react-router-dom";
import Btn from "../btn/Btn"; // Ваши компоненты кнопок и другие элементы

const Favorite = () => {
  const [favoriteCars, setFavoriteCars] = useState([]);

  // Загружаем избранные автомобили из localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteCars")) || [];
    setFavoriteCars(storedFavorites);
  }, []);

  return (
    <section className={s.favorite}>
      <div className="container">
        <h2>Your Favorite Cars</h2>
        {favoriteCars.length === 0 ? (
          <p>No favorite cars yet</p>
        ) : (
          <div className={s.favorite_list}>
            {favoriteCars.map((car) => (
              <div key={car.id} className={s.favorite_car}>
               <div className={s.main_info}>
                 <img src={car.image} alt={car.name} className={s.car_image} />
                <h3 className={s.car_name}>{car.name}</h3>
               </div>
               <div className={s.line}></div>
                <div className={s.add_info}>
               
                <div className={s.prices}>
                          <p className={s.price}>{car.price}</p>{" "}
                        </div>
                <Link to={`/carPage/${car.id}`}>
                  <Btn>Rent now</Btn>
                </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Favorite;
