import React, { useState, useEffect } from "react";
import s from "./SingleCar.module.scss";
import { Link, useParams } from "react-router-dom";
import Products from "/public/products.json";
import Btn from "../btn/Btn";
import Modal from "../modal/Modal";
import Reviews from "../Reviews/Reviews";

const SingleCar = () => {
  const { id } = useParams();
  const car = Products.find((product) => product.id === parseInt(id));

  const [rating, setRating] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    const savedRating = localStorage.getItem(`car-rating-${id}`);
    if (savedRating) {
      setRating(parseInt(savedRating));
    }
  }, [id]);

  const handleRating = (newRating) => {
    setRating(newRating);
    localStorage.setItem(`car-rating-${id}`, newRating);
  };

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
  };

  if (!car) {
    return <p>Машина не найдена</p>;
  }

  return (
    <>
      {/* Модальное окно */}
      <Modal isOpen={isModalOpen} image={modalImage} onClose={closeModal} />
      <section className={s.singlecar}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.boxes}>
              {/* Левая часть - Изображения */}
              <div className={s.box}>
                <div className={s.images}>
                  <div className={s.topImage}>
                    <h3 className={s.zagalovok}>
                      Sports car with the best design and acceleration
                    </h3>
                    <p>
                      Safety and comfort while driving a futuristic and elegant
                      sports car
                    </p>
                    <img src={car.image} alt={car.name} />
                  </div>
                  <div className={s.bottomImage}>
                    {[car.image, car.images[0], car.images[1]].map(
                      (image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Car ${index + 1}`}
                          className={s.thumbnail}
                          onClick={() => openModal(image)}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Правая часть - Информация */}
              <div className={`${s.box} ${s.box_2}`}>
                <h1>{car.name}</h1>
                <div className={s.rating}>
                  <p>Rate this car:</p>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={star <= rating ? s.starSelected : s.star}
                      onClick={() => handleRating(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <div className={s.title}>
                  <p>{car.about}</p>
                  <div className={s.info}>
                    <div>
                      <b>
                        <p>Type Car</p> {car.category}
                      </b>
                      <b>
                        <p>Steering</p> {car.price}
                      </b>
                    </div>
                    <div>
                      <b>
                        <p>Capacity</p> {car.fuel}
                      </b>
                      <b>
                        <p>Gasoline</p> {car.transmission}
                      </b>
                    </div>
                  </div>
                </div>
                <Link to={'/admin'}>
                  <Btn>Rent now</Btn>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews/>
    </>
  );
};

export default SingleCar;
