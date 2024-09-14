import React from "react";
import "./ProfileModal.css";

const ProfileModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Личный кабинет</h2>
        <p>Здесь вы можете управлять своим профилем.</p>
        {/* Добавьте здесь дополнительные элементы, такие как форма или информация о пользователе */}
        <button onClick={onClose}>Закрыть</button>{" "}
        {/* Кнопка для закрытия модального окна */}
      </div>
    </div>
  );
};

export default ProfileModal;
