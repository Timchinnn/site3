import React from "react";
import "./SendRequestModal.css"; // Добавьте стили, если необходимо

const SendRequestModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Отправить запрос</h2>
        <p>Здесь вы можете отправить свой запрос.</p>
        {/* Добавьте форму или другую необходимую информацию */}
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default SendRequestModal;
