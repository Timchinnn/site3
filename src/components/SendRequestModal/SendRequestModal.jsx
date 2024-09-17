import React from "react";
import "./SendRequestModal.css"; // Добавьте стили, если необходимо
import background from './background.png'

const SendRequestModal = ({ onClose }) => {
  return (
    <div className="modal-overlay1">
      <img src={background} alt="background"></img>
      <div className="modal-content">
 
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SendRequestModal;
