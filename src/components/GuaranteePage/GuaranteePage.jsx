import React from "react";

import "./GuaranteePage.css";
import bigB from "./bigb.png";
import bigBContray from "./bigbContrary.png";
import arrow from "./arrow.png";
import { useNavigate } from "react-router-dom";
import arrowLong from './arrow-long.png'
import arrowDownL from './arrowDownLong.png'
import arrowDownM from './arrowDownM.png'
import arrowDownS from './arrowDownS.png'
import arrowXs from './arrows.png'

const GuaranteePage = ({ onClose }) => {
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
          {/* <div className="window-block-about"></div> */}
          <div className="share">
            <p>Зови друзей </p>
            <div>
              <img src={arrowLong} alt="arrowLong" />
              <p>и зарабатывай</p>
            </div>
            <hr />
            <p>Получайте 10% от каждого заказа по твоей рекомендации!
            </p>
            <p>Как это работает:</p>
            <div className="about-sale">
              <div>
                <p>Получайте уникальную ссылку — нажми на кнопку ниже и скопируйте свою персональную ссылку.</p>
              </div>
              <div>
                <p>Делитесь с друзьями — отправляйте ссылку коллегам, партнёрам и знакомым в мессенджерах или социальных сетях.</p>
              </div>
              <div>
                <p>Зарабатывайте вместе с нами — когда по вашей ссылке оформят заказ, вы получите 10% от первого чека.</p>
              </div>
            </div>
            <hr />
            <p>Каждый месяц самые активные участники получают ценные призы:</p>
            <div className="arrow-groups">
              <div className="arrow-group"><img src={arrowDownL} alt="arrowDownL" />
              <p>1 место: скидка 15%</p></div>
              <div className="arrow-group"><img src={arrowDownM} alt="arrowDownM" />
              <p>2 место: скидка 10%</p></div>
              <div  className="arrow-group"><img src={arrowDownS} alt="arrowDownS" />
              <p>3 место: скидка 3%</p></div>
              
            </div>
            <div>
              <p>Статистика в реальном времени — отслеживайте количество переходов 
              и заработанных денег в личном кабинете.</p>
            </div>
            <p>Нажмите на кнопку ниже, чтобы получить свою уникальную ссылку и начать зарабатывать уже сегодня.</p>
            <img src={arrowXs} alt="arrowXs" />
            <p> [Получить ссылку и начать зарабатывать]</p>
            <div>
              <p>Твоя ссылка на приглашение</p>
              <p>https://t.me......................</p>
              <button>Скопировать ссылку</button>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteePage;
