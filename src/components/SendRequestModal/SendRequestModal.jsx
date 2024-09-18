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
            <h1>ЗАЯВКА</h1>
            <div>
              <p>Имя</p>
              <input></input>
            </div>
            <div>
              <p>Телефон</p>
              <input></input>
            </div>
            <div>
              <p>Страна</p>
              <input></input>
            </div>
            <div>
              <p>Город</p>
              <input></input>
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
