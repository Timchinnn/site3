import React, { useState } from "react";
import "./ProfileModal.css";
// import buy from "./buy.png";
// import cartButton from "./cartButton.png";
import arrow from "./arrow.png";
import b from "./B.png";
import car from "./car.png";
import book from "./book.png";
import { useNavigate } from "react-router-dom";
const ProfileModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img
          className="arrow"
          src={arrow}
          alt="arrow"
          onClick={() => navigate(-1)}
        ></img>

        <div className="buttonsMainProfile">
          <button onClick={handleButtonClick}>
            <div className="buy-about">
              <img src={book} alt="book" />
              <div className="buy-and-more">
                <p>Покупки</p>
                <p>Подробнее</p>
              </div>
            </div>
            <img src={b} alt="b" className="b"></img>
          </button>
          <button>
            <div className="buy-about">
              <p>3%</p>
              <div className="buy-and-more">
                <p>Скидка</p>
                <p>Сумма выкупа</p>
                <p>Подробнее</p>
              </div>
            </div>
            <img src={b} alt="b" className="b"></img>
          </button>
          <button>
            <img alt="user-photo" />
            <div>
              <p>Иван Владимирович </p>
              <div>
                <p>Телефон</p>
                <p></p>
              </div>
              <div>
                <p>Email</p>
                <p></p>
              </div>
            </div>
            <p>Посмотреть все данные</p>
          </button>
        </div>
        <button className="delivery">
          <p>Доставка</p>
          <p>Ближайшая: не ожидается</p>
          <div>
            <button>Подробнее</button>
            <button>Пожаловаться на доставку</button>
          </div>
          <img src={car} alt="car" className="car"></img>
        </button>
        {isModalOpen && (
          <div className="new-modal">
            <p>Новое модальное окно</p>
            <button onClick={() => setIsModalOpen(false)}>Закрыть</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileModal;
