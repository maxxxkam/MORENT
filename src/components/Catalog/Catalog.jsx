import React, { useState } from "react";
import Products from "/public/products.json";
import s from "./Catalog.module.scss";
import CarList from "../CarList/CarList"; // Импортируйте новый компонент
import FilterBox from "../FilterBox/FilterBox";

const Catalog = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100);

  const categories = ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"];
  const seatOptions = ["2 Person", "4 Person", "6 Person", "8 Person"];

  const filteredProducts = Products.filter((product) => {
    const productPrice = parseFloat(product.price.replace("$", ""));
    const productCategory = product.category.trim();
    const productSeats = product.seats.trim();

    return (
      (selectedCategories.length === 0 || selectedCategories.includes(productCategory)) &&
      (selectedSeats.length === 0 || selectedSeats.includes(productSeats)) &&
      productPrice <= maxPrice
    );
  });

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
          <FilterBox
            categories={categories}
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
            seatOptions={seatOptions}
            selectedSeats={selectedSeats}
            toggleSeats={toggleSeats}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />

          {/* Используем новый компонент CarList для отображения отфильтрованных машин */}
          <CarList filteredProducts={filteredProducts} />
        </div>
      </div>
    </section>
  );
};

export default Catalog;