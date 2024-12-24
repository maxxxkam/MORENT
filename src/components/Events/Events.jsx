import React, { useEffect } from "react";
import s from "./Events.module.scss";
import eventsData from "/public/events.json";

import AOS from "aos";
import "aos/dist/aos.css"; 

const Events = () => {
  
  useEffect(() => {
      AOS.init({ duration: 1000 }); 
  }, []);
  
  return (
    <section className={s.events}>
      <div className="container">
        <h1>Our Events</h1>
        <p>Feel the spirit of adventure and unforgettable moments. Our events are a chance to rediscover the joy of exploration and the inspiration of every new journey.</p>
        <div className={s.wrapper}>
          {eventsData.map((event, index) => (
            <div
              key={event.id}
              className={s.eventCard}
              data-aos="fade-up" // Устанавливаем анимацию
              data-aos-delay={index * 100} // Задержка для каждого элемента, чтобы анимация начиналась через 100 мс
            >
              <h2 className={s.eventTitle}>{event.title}</h2>
              {/* <img
                src={event.image}
                alt={event.title}
                className={s.eventImage}
              /> */}
              <p className={s.eventDescription}>{event.description}</p>
              <p className={s.eventLocation}>{event.location}</p>
              <p className={s.eventDate}>{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
