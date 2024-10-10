import React from "react";

import "./HowToBuyPage.css";
import bigB from "./bigb.png";
import bigBContray from "./bigbContrary.png";
import arrow from "./arrow.png";
import { useNavigate } from "react-router-dom";

const HowToBuyPage = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="modal-overlay1">
      <div className="images-container">
        <img src={bigB} alt="bigB" className="top-left" />
        <img src={bigBContray} alt="bigBContray" className="bottom-right" />
        <div className="parent">
          <img
            className="arrow"
            src={arrow}
            alt="arrow"
            onClick={() => navigate(-1)}
          />
          <div className="window-block-about">
            <p>Все поставляемые нами устройства проходят тщательное тестирование, имеют гарантию, отвечают всем необходимым требованиям для качественного оказания услуг и могут быть оснащены дополнительными интеграционными решениями по желанию клиента.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuyPage;
