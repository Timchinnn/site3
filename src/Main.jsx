import React, { useState } from "react";
import App from "./App";
import "./Main.css"; // Убедитесь, что стили подключены
import bansys from "./bansys.png";

function Main() {
  const [showApp, setShowApp] = useState(false);

  const handleShopButtonClick = () => {
    setShowApp(true);
  };

  const handleLoginClick = () => {
    // Логика для обработки входа
    console.log("Вход");
  };

  const handleRegistrationClick = () => {
    // Логика для обработки регистрации
    console.log("Регистрация");
  };

  return (
    <div className="menu-container">
      {showApp ? (
        <App />
      ) : (
        <>
          <div className="header">
            <button className="link" onClick={handleLoginClick}>
              ВХОД
            </button>
            <button className="link" onClick={handleRegistrationClick}>
              РЕГИСТРАЦИЯ
            </button>
          </div>
          <div className="content">
            {/* <h1 className="title">BANSYS</h1> */}
            <img src={bansys}></img>
            <p className="subtitle">Bansys - Банкоматы - Терминалы</p>
          </div>
          <div className="footer">
            <button className="shop-button" onClick={handleShopButtonClick}>
              ЗА ПОКУПКАМИ
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Main;
