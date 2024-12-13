import React, { useState } from "react";
import s from './Reviews.module.scss';
import reviews from '/public/comments.json'; // Убедитесь, что путь к файлу правильный

const Reviews = () => {
  const [showAll, setShowAll] = useState(false); // Состояние для управления отображением всех отзывов

  const toggleReviews = () => {
    setShowAll(!showAll); // Переключаем состояние при клике на кнопку
  };

  return (
    <div className={s.reviewsSection}>
      <div className="container">
        <div className={s.header}>
          <h2>Reviews</h2>
          <span className={s.reviewsCount}>{reviews.length}</span> {/* Отображаем общее количество отзывов */}
        </div>
        <div className={s.reviewsList}>
          {(showAll ? reviews : reviews.slice(0, 2)).map((review) => (
            <div key={review.id} className={s.reviewCard}>
              <img
                src={review.image}
                alt={review.name}
                className={s.profileImage}
              />
              <div className={s.reviewsContent}>
                <h3 className={s.name}>{review.name}</h3>
                <p className={s.position}>{review.position}</p>
                <p className={s.feedback}>{review.feedback}</p>
                <div className={s.footer}>
                  <span className={s.date}>{review.date}</span>
                  <div className={s.rating}>
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className={s.showAll} onClick={toggleReviews}>
          {showAll ? "Show LESS" : "Show ALL"} {/* Меняем текст кнопки в зависимости от состояния */}
        </button>
      </div>
    </div>
  );
};

export default Reviews;
