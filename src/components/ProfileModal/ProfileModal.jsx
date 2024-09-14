import React from "react";
import "./ProfileModal.css";
import buy from "../buy.png";

const ProfileModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={buy} alt="buy"></img>
        <div className="buttonsMainProfile">
          <img src={buy} alt="buy"></img>
          <img src={buy} alt="buy"></img>
          <button></button>t<button></button>t
        </div>
        <button></button>
      </div>
    </div>
  );
};

export default ProfileModal;
