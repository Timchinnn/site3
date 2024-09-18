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
          <img className="arrow" src={arrow} alt="arrow" />
          <div className="window-reg">
            <h1 className="application">ЗАЯВКА</h1>
            <div className="input-container">
              <p>Имя</p>
              <input className="input-order-profile"></input>
            </div>
            <div className="input-container">
              <p>Телефон</p>
              <input className="input-order-profile"></input>
            </div>
            <div className="input-container">
              <p>Страна</p>
              <input className="input-order-profile"></input>
            </div>
            <div className="input-container">
              <p>Город</p>
              <input className="input-order-profile"></input>
            </div>
            <input></input>
            <button>Отправить заявку</button>
          </div>
      </div>
      </div>

      
    </div>
  );
};

export default SendRequestModal;
