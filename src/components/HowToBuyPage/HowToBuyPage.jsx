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
        <div className="parent">
          <img
            className="arrow"
            src={arrow}
            alt="arrow"
            onClick={() => navigate(-1)}
          />

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
                Наличие такелажного оборудования и сертифицированных
                специалистов, что позволяет вести работы с любой габаритной
                техникой
              </li>
            </ul>
          </div>
          <div className="service-quality-intro-contrary">
            <p>
              Склады и производственные цеха отвечают необходимым стандартам
              хранения и эксплуатации:
            </p>
          </div>
          <div className="garant-description">
            <ul className="company-advantages-list">
              <li>
                 Наличие освещения, отопления и приточно-вытяжной вентиляции;
              </li>
              <li>Контроль температуры и влажности;</li>
              <li>
                 Комплексная система безопасности – пропускная система,
                охранно-пожарная сигнализация, камеры для фотофиксации и
                видеонаблюдения, постановка всего комплекса на вневедомственную
                охрану;
              </li>
              <li>
                 Страхование всего оборудования, размещенного на хранение;
              </li>
              <li>
                  Наличие внутренней парковочной зоны, рассчитанной на любые
                виды автотранспорта.
              </li>
            </ul>
          </div>
          <div className="quality-assurance-section">
            <img src={dimg} alt="#" />
            <p className="service-quality-intro-contrary-text">
              Все поставляемые нами устройства проходят тщательное тестирование,
              имеют гарантию, отвечают всем необходимым требованиям для
              качественного оказания услуг и могут быть оснащены дополнительными
              интеграционными решениями по желанию клиента.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuyPage;
