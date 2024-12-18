import React, { useState } from "react";
import s from "./PickUp.module.scss";

const PickUp = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedValues, setSelectedValues] = useState({
    "pickup-locations": "",
    "pickup-date": "",
    "pickup-time": "",
    "dropoff-locations": "",
    "dropoff-date": "",
    "dropoff-time": ""
  });

  const toggleSection = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  const handleSelect = (section, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [section]: value
    }));
    setExpandedSection(null); // Закрываем выпадающий список после выбора
  };

  // Функция отправки данных формы в Telegram бот
  const handleSubmit = async () => {
    const botToken = "7629587294:AAFjAEmnzYc06BtG9OoUQYSctKxCSiFjTb4"; // Замените на ваш токен бота
    const chatId = "-4799118768"; // Замените на ID чата или группы

    // Форматируем сообщение с выбранными значениями
    const message = `
      *Детали Pick-Up:*
      - Локация: ${selectedValues["pickup-locations"] || "Не выбрана"}
      - Дата: ${selectedValues["pickup-date"] || "Не выбрана"}
      - Время: ${selectedValues["pickup-time"] || "Не выбрано"}

      *Детали Drop-Off:*
      - Локация: ${selectedValues["dropoff-locations"] || "Не выбрана"}
      - Дата: ${selectedValues["dropoff-date"] || "Не выбрана"}
      - Время: ${selectedValues["dropoff-time"] || "Не выбрано"}
    `;

    // Отправляем сообщение в Telegram бот
    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown"
        })
      });

      const result = await response.json();
      if (result.ok) {
        alert("Данные успешно отправлены!");
      } else {
        alert("Не удалось отправить данные. Попробуйте снова.");
      }
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
      alert("Ошибка при отправке данных. Попробуйте снова.");
    }
  };

  return (
    <section className={s.PickUp}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.cards}>
            <div className={s.card}>
              <p>
                <img src="/PickUp-img1.svg" alt="" /> Pick - Up
              </p>
              <div className={s.info}>
                {/* Локации */}
                <div>
                  <b>Локации</b>
                  <p onClick={() => toggleSection("pickup-locations")}>
                    {selectedValues["pickup-locations"] || "Выберите ваш город"}{" "}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={expandedSection === "pickup-locations" ? s.expanded : ""}
                    />
                  </p>
                  {expandedSection === "pickup-locations" && (
                    <div className={s.dropdown}>
                      <p onClick={() => handleSelect("pickup-locations", "Ташкент")}>Ташкент</p>
                      <p onClick={() => handleSelect("pickup-locations", "Бухара")}>Бухара</p>
                      <p onClick={() => handleSelect("pickup-locations", "Самарканд")}>Самарканд</p>
                    </div>
                  )}
                </div>
                <div className={s.line}></div>

                {/* Дата */}
                <div>
                  <b>Дата</b>
                  <p onClick={() => toggleSection("pickup-date")}>
                    {selectedValues["pickup-date"] || "Выберите дату"}{" "}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={expandedSection === "pickup-date" ? s.expanded : ""}
                    />
                  </p>
                  {expandedSection === "pickup-date" && (
                    <div className={s.dropdown}>
                      <p onClick={() => handleSelect("pickup-date", "12/18/2024")}>12/18/2024</p>
                      <p onClick={() => handleSelect("pickup-date", "12/19/2024")}>12/19/2024</p>
                      <p onClick={() => handleSelect("pickup-date", "12/20/2024")}>12/20/2024</p>
                    </div>
                  )}
                </div>
                <div className={s.line}></div>

                {/* Время */}
                <div>
                  <b>Время</b>
                  <p onClick={() => toggleSection("pickup-time")}>
                    {selectedValues["pickup-time"] || "Выберите время"}{" "}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={expandedSection === "pickup-time" ? s.expanded : ""}
                    />
                  </p>
                  {expandedSection === "pickup-time" && (
                    <div className={s.dropdown}>
                      <p onClick={() => handleSelect("pickup-time", "10:00 AM")}>10:00 AM</p>
                      <p onClick={() => handleSelect("pickup-time", "2:00 PM")}>2:00 PM</p>
                      <p onClick={() => handleSelect("pickup-time", "6:00 PM")}>6:00 PM</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <button className={s.btn} onClick={handleSubmit}>
              <img src="/arrows-img.svg" alt="" />
            </button>
            {/* Drop-Off Section */}
            <div className={s.card}>
              <p>
                <img src="/PickUp-img1.svg" alt="" /> Drop - Off
              </p>
              <div className={s.info}>
                {/* Локации */}
                <div>
                  <b>Локации</b>
                  <p onClick={() => toggleSection("dropoff-locations")}>
                    {selectedValues["dropoff-locations"] || "Выберите ваш город"}{" "}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={expandedSection === "dropoff-locations" ? s.expanded : ""}
                    />
                  </p>
                  {expandedSection === "dropoff-locations" && (
                    <div className={s.dropdown}>
                      <p onClick={() => handleSelect("dropoff-locations", "Ташкент")}>Ташкент</p>
                      <p onClick={() => handleSelect("dropoff-locations", "Бухара")}>Бухара</p>
                      <p onClick={() => handleSelect("dropoff-locations", "Самарканд")}>Самарканд</p>
                    </div>
                  )}
                </div>
                <div className={s.line}></div>

                {/* Дата */}
                <div>
                  <b>Дата</b>
                  <p onClick={() => toggleSection("dropoff-date")}>
                    {selectedValues["dropoff-date"] || "Выберите дату"}{" "}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={expandedSection === "dropoff-date" ? s.expanded : ""}
                    />
                  </p>
                  {expandedSection === "dropoff-date" && (
                    <div className={s.dropdown}>
                      <p onClick={() => handleSelect("dropoff-date", "12/21/2024")}>12/21/2024</p>
                      <p onClick={() => handleSelect("dropoff-date", "12/22/2024")}>12/22/2024</p>
                      <p onClick={() => handleSelect("dropoff-date", "12/23/2024")}>12/23/2024</p>
                    </div>
                  )}
                </div>
                <div className={s.line}></div>

                {/* Время */}
                <div>
                  <b>Время</b>
                  <p onClick={() => toggleSection("dropoff-time")}>
                    {selectedValues["dropoff-time"] || "Выберите время"}{" "}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={expandedSection === "dropoff-time" ? s.expanded : ""}
                    />
                  </p>
                  {expandedSection === "dropoff-time" && (
                    <div className={s.dropdown}>
                      <p onClick={() => handleSelect("dropoff-time", "8:00 AM")}>8:00 AM</p>
                      <p onClick={() => handleSelect("dropoff-time", "12:00 PM")}>12:00 PM</p>
                      <p onClick={() => handleSelect("dropoff-time", "4:00 PM")}>4:00 PM</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickUp;
