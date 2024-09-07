import React, { useState } from "react";
import App from "./App";

function Main() {
  const [showApp, setShowApp] = useState(false);

  const handleShopButtonClick = () => {
    setShowApp(true);
  };

  if (showApp) {
    return <App />; // Если флаг установлен, возвращаем компонент App
  }

  return (
    <div className="container">
      <div className="header">
        <a href="#" className="link">
          ВХОД
        </a>
        <a href="#" className="link">
          РЕГИСТРАЦИЯ
        </a>
      </div>
      <div className="content">
        <h1 className="title">BANSYS</h1>
        <p className="subtitle">Bansys - Банкоматы - Терминалы</p>
      </div>
      <div className="footer">
        <button className="shop-button" onClick={handleShopButtonClick}>
          ЗА ПОКУПКАМИ
        </button>
      </div>
    </div>
  );
}

export default Main;
