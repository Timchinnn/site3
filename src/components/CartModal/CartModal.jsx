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
      alert("MainButton clicked!");
    });

    return () => {
      tg.MainButton.offClick();
      tg.MainButton.hide();
    };
  }, []);

  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Корзина</h2>
        {items.length === 0 ? (
          <p>Ваша корзина пуста</p>
        ) : (
          <div>
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Цена: {item.price} ₽</p>
                  <p>Количество: {item.quantity}</p>
                </div>
              </div>
            ))}
            <h3>Итоговая цена: {totalPrice} ₽</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default TelegramWebAppComponent;
