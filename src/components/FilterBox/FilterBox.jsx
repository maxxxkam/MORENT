import React from "react";
import s from "./FilterBox.module.scss";

const FilterBox = ({
  categories,
  selectedCategories,
  toggleCategory,
  seatOptions,
  selectedSeats,
  toggleSeats,
  maxPrice,
  setMaxPrice,
}) => {
  // Проверка, что данные правильно передаются в компонент
  console.log("Filter data:", categories, selectedCategories, seatOptions, selectedSeats, maxPrice);

  // Функция для изменения категории
  const handleCategoryChange = (category) => {
    toggleCategory(category);
  };

  // Функция для изменения вместимости
  const handleSeatChange = (seat) => {
    toggleSeats(seat);
  };

  // Функция для изменения максимальной цены
  const handlePriceChange = (e) => {
    setMaxPrice(Number(e.target.value));
  };

  return (
    <section className={s.filterSection}>
      <div className="container">
        <div className={s.filter}>
          {/* Фильтр по категориям */}
          <div className={s.filterWrap}>
            <div className={s.filterGroup}>
              <h4>Type</h4>
              {categories && categories.length > 0 ? (
                categories.map((category) => (
                  <label key={category}>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    <p>{category}</p>
                  </label>
                ))
              ) : (
                <p>No categories available</p>
              )}
            </div>
          </div>

          {/* Фильтр по вместимости */}
          <div className={s.filterGroup}>
            <h4>Capacity</h4>
            <div className={s.filterWrap2}>
              {seatOptions && seatOptions.length > 0 ? (
                seatOptions.map((seat) => (
                  <label className={s.fill} key={seat}>
                    <input
                      type="checkbox"
                      checked={selectedSeats.includes(seat)}
                      onChange={() => handleSeatChange(seat)}
                    />
                    <p>{seat}</p>
                  </label>
                ))
              ) : (
                <p>No seat options available</p>
              )}
            </div>
          </div>

          {/* Фильтр по цене */}
          <div className={s.filterGroup}>
            <h4>Price</h4>
            <input
              type="range"
              min="0"
              max="350"
              value={maxPrice}
              onChange={handlePriceChange}
            />
            <p>Max: ${maxPrice}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBox;