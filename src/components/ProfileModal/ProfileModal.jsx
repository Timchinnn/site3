import React from "react";
import "./ProfileModal.css";
// import buy from "./buy.png";
// import cartButton from "./cartButton.png";
import arrow from "./arrow.png";
import b from "./B.png";
import car from "./car.png";
import { useNavigate } from "react-router-dom"
const ProfileModal = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img className="arrow" src={arrow} alt="arrow" onClick={() => navigate(-1)}></img>

        <div className="buttonsMainProfile">
          {/* <img src={buy} alt="buy"></img>
          <img src={cartButton} alt="cartButton"></img> */}
          <button>
            <img src={b} alt="b" className="b"></img>
          </button>
          <button>
            <img src={b} alt="b" className="b"></img>
          </button>
          <button>
            <img src={b} alt="b" className="b"></img>
          </button>
          {/* <button><img src={b} alt='b' className="b"></img></button> */}
        </div>
        <button className="delivery">
          <img src={car} alt="car" className="car"></img>
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
