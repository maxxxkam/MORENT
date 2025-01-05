import React from "react";
import s from "./CarList.module.scss"; 
import CarCard from "../Car/Car";

const CarList = ({ filteredProducts }) => {
  return (
    <div className={s.list}>
      {filteredProducts.map((product) => (
        <CarCard key={product.id} car={product} />
      ))}
      {filteredProducts.length === 0 && <p>Машины, соответствующие вашим фильтрам, не найдены.</p>}
    </div>
  );
};

export default CarList;