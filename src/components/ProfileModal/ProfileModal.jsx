import React from "react";
import "./ProfileModal.css";
// import buy from "./buy.png";
// import cartButton from "./cartButton.png";
import arrow from "./arrow.png";
import b from './B.png'

const ProfileModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img className="arrow" src={arrow} alt="arrow"></img>
        
        
        <div className="buttonsMainProfile">
          {/* <img src={buy} alt="buy"></img>
          <img src={cartButton} alt="cartButton"></img> */}
          <button><img src={b} alt='b'></img></button>
          <button>t</button>
          <button>t</button>
          <button>t</button>
        </div>
        <button className="delivery">t</button>
      </div>
    </div>
  );
};

export default ProfileModal;
