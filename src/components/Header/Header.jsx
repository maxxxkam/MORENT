import React, { useState } from 'react';
import s from './Header.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import carData from '/public/products.json'



const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState(carData);
  const [showResults, setShowResults] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  const handleSearch = (event) => {
    const query = event.target.value.trim().toLowerCase(); // убираем лишние пробелы и делаем все строчными
    setSearchQuery(query);

    if (query) {
      const filtered = carData.filter(car =>
        Object.values(car).some(value =>
          String(value).toLowerCase().includes(query) // Ищем по всем значениям объектов, включая числа, массивы и т.д.
        )
      );
      setFilteredCars(filtered);
    } else {
      setFilteredCars(carData); // если строка поиска пуста, показываем все элементы
    }
  };

  const handleInputClick = () => {
    setShowResults(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowResults(false), 100);
  };

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.box}>
            <Link className={s.logo} to={'/'}>
              <SectionTitle>MORANT</SectionTitle>
            </Link>
            <input
              placeholder="Поиск чего-то здесь"
              className={s.search}
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              onClick={handleInputClick}
              onBlur={handleBlur}
            />
            <button>
              <img src="/filter-img.svg" alt="" />
            </button>
          </div>
          <div className={s.menu}>
            <Link to={'/favorite'}>
              <img src="/Like-img.svg" alt="" />
            </Link>
            <div className={s.notification}>
              <img
                src="/Notification-img.svg"
                alt=""
                onClick={toggleDropdown}
                className={s.notificationIcon}
              />
              {showDropdown && (
                <div className={s.dropdown}>
                  <p>У вас новое сообщение</p>
                  <p>Ваша бронь подтверждена</p>
                  <p>Запланировано техническое обслуживание</p>
                  <Link to={'/notification'}>Посмотреть все уведомления</Link>
                </div>
              )}
            </div>
            <img src="/Settings-img.svg" alt="" />
            <img src="/Profile-img.svg" alt="" />
          </div>
          {showResults && (
        <div className={s.searchResults}>
          {filteredCars.length > 0 ? (
            filteredCars.map(car => (
              <div key={car.id} className={s.carCard}>
                <Link to={`/carPage/${car.id}`} >
                <img src={car.image} alt={car.name} />
                </Link>
                <h3>{car.name}</h3>
                <p>{car.price}</p>
              </div>
            ))
          ) : (
            <p>По вашему запросу ничего не найдено</p>
          )}
        </div>
      )}
        </div>
      </div>
      
    </header>
  );
};

export default Header;
