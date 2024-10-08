import React from "react";

import "./WhyBansysPage.css";
import bigB from "./bigb.png";
import bigBContray from "./bigbContrary.png";
import arrow from "./arrow.png";
import { useNavigate } from "react-router-dom";

const WhyBansysPage = ({ onClose }) => {
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
          <div className="window-reg">
            <p>
              Компания работает с оборудованием таких брендов как Hyosung, GRG,
              NCR, Diebold Nixdorf и OKI и специализируется на продаже и аренде
              банковских устройств самообслуживания, осуществляет
              многопрофильные сервисные работы, выкуп и рефабришмент,
              брендирование и реставрацию банковского и терминального
              оборудования, оказываются услуги по доставке и такелажу
              поставляемой продукции.
            </p>
            <br />
            <p>
              Одним из новых и активно развивающихся направлений бизнеса
              компании стала поставка и продержка уникального программного
              продукта MobilPay, который представляет собой набор программных
              компонент на банкоматах и платёжных терминалах, на серверах и
              рабочих станциях операторов, позволяющих решить проблемы связанные
              с ограничениями при применении устаревшей «стейтной»
              процессинговой технологии. Данное Программное обеспечение обрадует
              такими явными преимуществами как: настоящая мультивендорность,
              работа на XFS уровне, широкие возможности мониторинга и управления
              устройством в режиме on-line, полный объём услуг ДБО и его
              самостоятельное развитие.  Параллельно компания развивает
              направление утилизации, а именно сбора и сортировки всех видов
              электронных устройств, от мелкой бытовой и оргтехники до
              разнообразных устройств самообслуживания и крупных
              производственных машин.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBansysPage;
