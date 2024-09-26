import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import App from "./App";
import "./Main.css";
import bansys from "./bansys.png";
import toBuy from "./tobuy.png";
// import ProductDetailPage from "./components/ProductModal/ProductModal";
import SendRequestPage from "./components/SendRequestModal/SendRequestModal";
import ProfilePage from "./components/ProfileModal/ProfileModal";
function Main() {
  const navigate = useNavigate(); // Используем хук для навигации
  const handleLoginClick = () => {
    console.log("Вход");
  };

  const handleRegistrationClick = () => {
    console.log("Регистрация");
  };

  const handleShopButtonClick = () => {
    navigate("/app"); // Переход на новую страницу
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="menu-container">
            <div className="header">
              <button className="link" onClick={handleLoginClick}>
                ВХОД
              </button>
              <button className="link" onClick={handleRegistrationClick}>
                РЕГИСТРАЦИЯ
              </button>
            </div>
            <div>
              <div className="content">
                <img src={bansys} alt="bans"></img>
                <p className="subtitle">Bansys - Банкоматы - Терминалы</p>
              </div>
            </div>
            <div className="footer">
              <img
                src={toBuy}
                alt="toBuy"
                className="shop-button"
                onClick={handleShopButtonClick}
              ></img>
            </div>
          </div>
        }
      />
      <Route path="/app" element={<App />} />
      <Route path="/profile" element={<ProfilePage />} />{" "}
      {/* Новый маршрут для профиля */}
      <Route path="/send-request" element={<SendRequestPage />} />{" "}
      {/* Новый маршрут для отправки запроса */}
    </Routes>
  );
}

export default Main;
