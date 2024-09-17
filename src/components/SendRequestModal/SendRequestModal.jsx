import React from "react";
import "./SendRequestModal.css"; // Добавьте стили, если необходимо
import bigB from './bigb.png'
import bigBContray from './bigbContrary.png'
import arrow from './arrow.png'

const SendRequestModal = ({ onClose }) => {
  return (
    <div className="modal-overlay1">
      <div className="images-container">
        <img src={bigB} alt="bigB" className="top-left" />
        <img src={bigBContray} alt="bigBContray" className="bottom-right" />
        <div className="parent">
          <img src={arrow} alt="arrow" />
          <div className="window-reg"></div>
      </div>
      </div>

      
    </div>
  );
};

export default SendRequestModal;
