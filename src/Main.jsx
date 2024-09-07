import React, { useState } from "react";
import App from "./App";

function Main() {
  const [showApp, setShowApp] = useState(false);

  const handleButtonClick = () => {
    setShowApp(true);
  };

  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#3d6659",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {showApp ? (
        <App />
      ) : (
        <div className="container">
          <div className="header">
            <button
              className="link"
              onClick={() => alert("Вход")}
              style={{
                background: "none",
                border: "none",
                color: "#e1b95b",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              ВХОД
            </button>
            <button
              className="link"
              onClick={() => alert("Регистрация")}
              style={{
                background: "none",
                border: "none",
                color: "#e1b95b",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              РЕГИСТРАЦИЯ
            </button>
          </div>
          <div className="content">
            <h1 className="title">BANSYS</h1>
            <p className="subtitle">Bansys - Банкоматы - Терминалы</p>
          </div>
          <div className="footer">
            <button className="shop-button" onClick={handleButtonClick}>
              ЗА ПОКУПКАМИ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
