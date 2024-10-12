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
            <p className="share-header-p">Зови друзей </p>
            <div className="earn">
              <img src={arrowLong} alt="arrowLong" />
              <p className="share-header-p">и зарабатывай</p>
            </div>
            <hr className="hr1"/>
            <p className="all-p1">Получайте 10% от каждого заказа по твоей рекомендации!
            </p>
            <p className="all-p">Как это работает:</p>
            <div className="about-sales">
              <div className="about-sale">
                <p>Получайте уникальную ссылку — нажми на кнопку ниже и скопируйте свою персональную ссылку.</p>
              </div>
              <div className="about-sale">
                <p>Делитесь с друзьями — отправляйте ссылку коллегам, партнёрам и знакомым в мессенджерах или социальных сетях.</p>
              </div>
              <div className="about-sale">
                <p>Зарабатывайте вместе с нами — когда по вашей ссылке оформят заказ, вы получите 10% от первого чека.</p>
              </div>
            </div>
            <hr className="hr2"/>
            <p className="all-p">Каждый месяц самые активные участники получают ценные призы:</p>
            <div className="arrow-groups">
              <div className="arrow-group"><img src={arrowDownL} alt="arrowDownL" />
              <p>1 место: скидка 15%</p></div>
              <div className="arrow-group"><img src={arrowDownM} alt="arrowDownM" />
              <p>2 место: скидка 10%</p></div>
              <div  className="arrow-group"><img src={arrowDownS} alt="arrowDownS" />
              <p>3 место: скидка 3%</p></div>
              
            </div>
            <div className="statistic-hrad"><div className="statistic">
              <p className="all-p4">Статистика в реальном времени — отслеживайте количество переходов 
              и заработанных денег в личном кабинете.</p>
            </div></div>
            
            <p className="all-p2">Нажмите на кнопку ниже, чтобы получить свою уникальную ссылку и начать зарабатывать уже сегодня.</p>
            
            <div className="arrowxs"><img src={arrowXs} alt="arrowXs" /></div>
            <p className="all-p2"> [Получить ссылку и начать зарабатывать]</p>
            <div className="innovation-head">         <div className="invitation">
              <p className="all-p">Твоя ссылка на приглашение</p>
              <p className="all-p">https://t.me......................</p>
              <button>Скопировать ссылку</button>
              <div className="changeover">
                <p className="all-p">Переходов по ссылке</p>
                <p className="all-p">0</p>
              </div>
              <div className="changeover">
                <p className="all-p">Ваша скидка</p>
                <p className="all-p">0</p>
              </div>
              
            </div></div>
   
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteePage;
