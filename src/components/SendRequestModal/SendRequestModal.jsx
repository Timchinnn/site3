import React from "react";
import "./SendRequestModal.css"; // Добавьте стили, если необходимо
import bigB from './bigb.png'
import bigBContray from './bigbContrary.png'

const SendRequestModal = ({ onClose }) => {
  return (
    <div className="modal-overlay1">
      <div className="images-container">
        <img src={bigB} alt="bigB" className="top-left" />
        <img src={bigBContray} alt="bigBContray" className="bottom-right" />
      </div>
      
    </div>
  );
};

export default SendRequestModal;
