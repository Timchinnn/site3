import React from "react";

import "./LoyaltyProgramPage.css";
import bigB from "./bigb.png";
import bigBContray from "./bigbContrary.png";
import arrow from "./arrow.png";
import { useNavigate } from "react-router-dom";

const LoyaltyProgramPage = ({ onClose }) => {
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
            <p>Складские и производственные помещения компании соответствуют всем техническим требованиям 
            и необходимым условиям для хранения и подготовки банковского оборудования.</p>
          </div>
          <p>Для оказания качественных услуг компания имеет 
в своем распоряжении:
 Сервисных инженеров высокой квалификации по всем необходимым направлениям обслуживания различного банковского оборудования, имеющих
 Многолетний опыт ремонтных работ, предпродажной подготовки и восстановительных работ.
 Наличие такелажного оборудования и сертифицированных специалистов, что позволяет вести работы с любой габаритной техникой.</p>
        <p>Склады и производственные цеха отвечают необходимым стандартам хранения и эксплуатации:
 Наличие освещения, отопления и приточно-вытяжной вентиляции;
 Контроль температуры и влажности;
 Комплексная система безопасности – пропускная система, охранно-пожарная сигнализация, камеры для фотофиксации и видеонаблюдения, постановка всего комплекса на вневедомственную охрану;
 Страхование всего оборудования, размещенного на хранение;
  Наличие внутренней парковочной зоны, рассчитанной на любые виды автотранспорта.</p>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgramPage;
