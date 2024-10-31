import React from "react";
import { t } from "i18next";
import "./HowToBuyPage.css";
// import bigB from "./bigb.png";
// import bigBContray from "./bigbContrary.png";
import arrow from "./arrow.png";
import { useNavigate } from "react-router-dom";
import dimg from "./diimg.png";
const HowToBuyPage = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="modal-overlay1">
      <div className="images-container">
        {/* <img src={bigB} alt="bigB" className="top-left" />
        <img src={bigBContray} alt="bigBContray" className="bottom-right" /> */}
        <img
          className="arrow1"
          src={arrow}
          alt="arrow"
          onClick={() => navigate(-1)}
        />
        <div className="parent">
          <div className="garant-description">
            <p className="storage-facilities-description">
              {t(
                "The company's warehouse and production facilities meet all technical requirements the necessary conditions for storing and preparing bank equipment."
              )}
            </p>
          </div>
          <div className="service-quality-intro">
            <p>
              {t(
                "In order to provide high-quality services, the company has there are:"
              )}
            </p>
          </div>
          <div className="garant-description">
            <ul className="company-advantages-list">
              <li>
                {t(
                  "Highly qualified service engineers in various banking equipment service areas, with"
                )}
              </li>
              <li>
                 
                {t(
                  "Years of experience in maintenance, pre-sales preparation, and repair."
                )}
              </li>
              <li>
                {t(
                  "With rigging equipment and certified experts, it can handle any large equipment."
                )}
              </li>
            </ul>
          </div>
          <div className="service-quality-intro-contrary">
            <p>
              {t(
                "The warehouse and production workshop meet the necessary storage and operational standards:"
              )}
            </p>
          </div>
          <div className="garant-description">
            <ul className="company-advantages-list">
              <li>
                 
                {t("Equipped with lighting, heating, and exhaust ventilation;")}
              </li>
              <li>{t("Temperature and humidity control;")}</li>
              <li>
                 
                {t(
                  " Comprehensive security system - pass system, fire alarm system, cameras, and video surveillance cameras, placing the entire complex under external security protection"
                )}
              </li>
              <li> {t("Insurance for all storage devices;")}</li>
              <li>
                  
                {t(
                  "The internal parking lot can be used by any type of vehicle."
                )}
              </li>
            </ul>
          </div>
          <div className="quality-assurance-section">
            <img src={dimg} alt="#" />
            <p className="service-quality-intro-contrary-text">
              {t(
                "All the devices we provide have undergone rigorous testing and warranty, meeting all necessary requirements for providing high-quality service, and can be equipped with additional integrated solutions according to customer requirements."
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuyPage;
