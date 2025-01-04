import React, { useEffect, useState } from "react";
import s from './Favorite.module.scss';
import { Link } from "react-router-dom";
import Btn from "../btn/Btn"; // Ваши компоненты кнопок и другие элементы

import AOS from "aos";
import "aos/dist/aos.css"; 

const Favorite = () => {
  const [favoriteCars, setFavoriteCars] = useState([]);

  // Загружаем избранные автомобили из localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteCars")) || [];
    setFavoriteCars(storedFavorites);
  }, []);

  // Функция для добавления/удаления автомобиля из избранного
  const handleFavoriteClick = (car) => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteCars")) || [];
    let updatedFavorites;

    if (storedFavorites.some((favCar) => favCar.id === car.id)) {
      // Убираем машину из избранного
      updatedFavorites = storedFavorites.filter((favCar) => favCar.id !== car.id);
    } else {
      // Добавляем машину в избранное
      updatedFavorites = [...storedFavorites, car];
    }

    localStorage.setItem("favoriteCars", JSON.stringify(updatedFavorites));
    setFavoriteCars(updatedFavorites);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <section className={s.favorite}>
      <div className="container">
        <h2>Your Favorite Cars</h2>
        {favoriteCars.length === 0 ? (
          <p>No favorite cars yet</p>
        ) : (
          <div className={s.favorite_list}>
            {favoriteCars.map((car, index) => (
              <div 
                key={car.id}
                className={s.favorite_car}
                data-aos="flip-right"  
                data-aos-delay={index * 200} 
              >
                <div className={s.main_info}>
                  <div className={s.name_a_img}>
                    <img src={car.image} alt={car.name} className={s.car_image} />
                    <h3 className={s.car_name}>{car.name}</h3>
                  </div>
                  <p>{car.about}</p>
                  <button
                    className={s.like_button}
                    onClick={() => handleFavoriteClick(car)}
                  >
                    <img
                      src={
                        favoriteCars.some((favCar) => favCar.id === car.id)
                          ? "/like-2.svg"
                          : "/like-1.svg"
                      }
                      alt={
                        favoriteCars.some((favCar) => favCar.id === car.id)
                          ? "Liked"
                          : "Like"
                      }
                    />
                  </button>
                </div>
                <div className={s.line}></div>
                <div className={s.add_info}>
                  <div className={s.prices}>
                    <p className={s.price}>{car.price}</p>{" "}
                    {car.oldPrice && <s className={s.oldPrice}>{car.oldPrice}</s>}
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
