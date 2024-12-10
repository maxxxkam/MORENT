import React, { useState } from "react";
import Products from "/public/products.json";
import s from "./Catalog.module.scss";
import CarCard from "../Car/Car";

const Catalog = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100);

  // Список категорий и мест для фильтров
  const categories = ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"];
  const seatOptions = ["2 Person", "4 Person", "6 Person", "8 Person"];

  // Функция фильтрации
  const filteredProducts = Products.filter((product) => {
    const productPrice = parseFloat(product.price.replace("$", ""));
    const productCategory = product.category.trim(); // Убираем лишние пробелы
    const productSeats = product.seats.trim(); // Убираем лишние пробелы

    return (
      (selectedCategories.length === 0 || selectedCategories.includes(productCategory)) &&
      (selectedSeats.length === 0 || selectedSeats.includes(productSeats)) &&
      productPrice <= maxPrice
    );
  });

  // Обработчики для фильтров
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const toggleSeats = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <section>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.filter}>
            {/* Фильтр по категориям */}
            <div className={s.filterWrap}>
              <div className={s.filterGroup}>
                <h4>Type</h4>
                {categories.map((category) => (
                  <label key={category}>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    <p>{category}</p>
                  </label>
                ))}
              </div>
            </div>

            {/* Фильтр по вместимости */}
            <div className={s.filterGroup}>
              <h4>Capacity</h4>
              <div className={s.filterWrap2}>
                {seatOptions.map((seat) => (
                  <label className={s.fill} key={seat}>
                    <input
                      type="checkbox"
                      checked={selectedSeats.includes(seat)}
                      onChange={() => toggleSeats(seat)}
                    />
                    <p>{seat}</p>
                  </label>
                ))}
              </div>
            </div>

            {/* Фильтр по цене */}
            <div className={s.filterGroup}>
              <h4>Price</h4>
              <input
                type="range"
                min="0"
                max="300"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <p>Max: ${maxPrice}</p>
            </div>
          </div>

          {/* Список отфильтрованных товаров */}
          <div className={s.list}>
            {filteredProducts.map((product) => (
              <CarCard key={product.id} car={product} />
            ))}
            {filteredProducts.length === 0 && <p>No cars found matching your filters.</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
