import React, { useState } from "react";
import App from "./App";
import "./index.css"; // Убедитесь, что стили подключены

function Main() {
  const [showApp, setShowApp] = useState(false);

  const handleShopButtonClick = () => {
    setShowApp(true);
  };

  return (
    <div className="container">
      {showApp ? (
        <App />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default Main;
