import React from "react";

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
          {/* <div className="window-block-about">
            <p>Все поставляемые нами устройства проходят тщательное тестирование, имеют гарантию, отвечают всем необходимым требованиям для качественного оказания услуг и могут быть оснащены дополнительными интеграционными решениями по желанию клиента.</p>
          </div> */}
          <div className="garant-description">
            <p className="storage-facilities-description">
              Складские и производственные помещения компании соответствуют всем
              техническим требованиям и необходимым условиям для хранения и
              подготовки банковского оборудования.
            </p>
          </div>
          <div className="service-quality-intro">
            <p>
              Для оказания качественных услуг компания имеет в своем
              распоряжении:
            </p>
          </div>
          <div className="garant-description">
            <ul className="company-advantages-list">
              <li>
                Сервисных инженеров высокой квалификации по всем необходимым
                направлениям обслуживания различного банковского оборудования,
                имеющих
              </li>
              <li>
                 Многолетний опыт ремонтных работ, предпродажной подготовки и
                восстановительных работ.
              </li>
              <li>
                Наличие такелажного оборудования и сертифицированных
                специалистов, что позволяет вести работы с любой габаритной
                техникой
              </li>
            </ul>
          </div>
          <div className="service-quality-intro">
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
            <div className="quality-assurance-section">
              <img src={dimg} alt="#" />
              <p>
                Все поставляемые нами устройства проходят тщательное
                тестирование, имеют гарантию, отвечают всем необходимым
                требованиям для качественного оказания услуг и могут быть
                оснащены дополнительными интеграционными решениями по желанию
                клиента.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuyPage;
