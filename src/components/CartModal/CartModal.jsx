import React, { useEffect } from "react";

const TelegramWebAppComponent = () => {
  useEffect(() => {
    // Инициализация Telegram WebApp
    const tg = window.Telegram.WebApp;

    // Настройка mainButton
    tg.MainButton.setText("Нажми меня");
    tg.MainButton.show();

    // Обработчик нажатия на mainButton
    tg.MainButton.onClick(() => {
      return (
        <div className="cart-modal">
          <h3>hgjhjghjg</h3>
        </div>
      );
    });

    return () => {
      tg.MainButton.offClick();
      tg.MainButton.hide();
    };
  }, []);

  return (
    <div className="cart-modal">
      <h3>hgjhjghjg</h3>
    </div>
  );
};

export default TelegramWebAppComponent;
