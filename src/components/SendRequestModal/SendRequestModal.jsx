import React from "react";
import "./SendRequestModal.css"; // Добавьте стили, если необходимо
import bigB from './bigb.png'
import bigBContray from './bigbContrary.png'

const SendRequestModal = ({ onClose }) => {
  return (
    <div className="modal-overlay1">
      {/* <img src={background} alt="background"></img> */}
      <div>
        <img src={bigB} alt="bigB"></img> 
        <img src={bigBContray} alt="bigBContray"></img>

      </div>
      
    </div>
  );
};

export default SendRequestModal;
