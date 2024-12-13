import React, { useState, useEffect } from "react";
import s from "./Car.module.scss";
import Btn from "../btn/Btn";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  const [isFavorite, setIsFavorite] = useState(false); // Состояние лайка

  // Проверяем, есть ли машина в избранных при загрузке компонента
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteCars")) || [];
    setIsFavorite(storedFavorites.some((favCar) => favCar.id === car.id));
  }, [car.id]);

  // Функция для добавления/удаления машины из избранного
  const handleFavoriteClick = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteCars")) || [];

    let updatedFavorites;
    if (isFavorite) {
      // Убираем машину из избранного
      updatedFavorites = storedFavorites.filter((favCar) => favCar.id !== car.id);
    } else {
      // Добавляем машину в избранное
      updatedFavorites = [...storedFavorites, car];
    }

    // Сохраняем в localStorage и обновляем состояние
    localStorage.setItem("favoriteCars", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={s.car_card}>
      <h3 className={s.car_name}>{car.name}</h3>
      <p className={s.car_category}>{car.category}</p>
      <img src={car.image} alt={car.name} className={s.car_image} />
      
      <p className={s.car_details}>
        <img src="/gas-station.svg" alt="Fuel" />
        {car.fuel} <img src="/Car (2).svg" alt="Transmission" />
        {car.transmission} <img src="/peoples1.svg" alt="Seats" />
        {car.seats}
      </p>
      
      {/* Кнопка лайка в правом верхнем углу */}
      <button
        className={s.like_button}
        onClick={handleFavoriteClick}
      >
        <img
          src={isFavorite ? "/like-2.svg" : "/like-1.svg"}
          alt={isFavorite ? "Liked" : "Like"}
        />
      </button>

      <div className={s.rent}>
        <div className={s.prices}>
          <p className={s.price}>{car.price}</p>{" "}
          {car.oldPrice && <s className={s.old_price}>{car.oldPrice}</s>}
        </div>
        <Link to={`/carPage/${car.id}`}>
          <Btn>Rent now</Btn>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
