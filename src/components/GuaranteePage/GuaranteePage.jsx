import React from "react";

import "./GuaranteePage.css";
import bigB from "./bigb.png";
import bigBContray from "./bigbContrary.png";
import arrow from "./arrow.png";
import { useNavigate } from "react-router-dom";
import arrowLong from "./arrow-long.png";
import arrowDownL from "./arrowDownLong.png";
import arrowDownM from "./arrowDownM.png";
import arrowDownS from "./arrowDownS.png";
import arrowXs from "./arrows.png";
import { t } from "i18next";

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
            <p className="share-header-p">{t("Summoning friend")} </p>
            <div className="earn">
              <img src={arrowLong} alt="arrowLong" />
              <p className="share-header-p">{t("make money")}</p>
            </div>
            <hr className="hr1" />
            <p className="all-p1">
              {t(
                "According to your suggestion, each order can enjoy a 3% discount!"
              )}
            </p>
            <p className="all-p">{t("How it works:")}</p>
            <div className="about-sales">
              <div className="about-sale">
                <p>
                  {t(
                    "Get a unique link - click the button below and copy your personal link."
                  )}
                </p>
              </div>
              <div className="about-sale">
                <p>
                  {t(
                    "Share with friends - send links to colleagues, partners, and acquaintances on Messenger or social media."
                  )}
                </p>
              </div>
              <div className="about-sale">
                <p>
                  {t(
                    "Earn money with us - When you place an order through your link, you will receive 3% of the first check."
                  )}
                  чека.
                </p>
              </div>
            </div>
            <hr className="hr2" />
            <p className="all-p">
              {t(
                "Every month, the most active participants will receive valuable prizes:"
              )}
            </p>
            <div className="arrow-groups">
              <div className="arrow-group">
                <img src={arrowDownL} alt="arrowDownL" />
                <p>{t("First place: 7% discount")}</p>
              </div>
              <div className="arrow-group">
                <img src={arrowDownM} alt="arrowDownM" />
                <p>{t("Second place: 5% discount")}</p>
              </div>
              <div className="arrow-group">
                <img src={arrowDownS} alt="arrowDownS" />
                <p>{t("Third place: 3% discount")}</p>
              </div>
            </div>
            <div className="statistic-hrad">
              <div className="statistic">
                <p className="all-p4">
                  {t(
                    "Real time statistics - tracking traffic and deposit the earned money into a personal office."
                  )}
                </p>
              </div>
            </div>

            <p className="all-p2">
              {t(
                "Click the button below to get your unique link and start earning from today."
              )}
            </p>

            <div className="arrowxs">
              <img src={arrowXs} alt="arrowXs" />
            </div>
            <p className="all-p2">
               {t("[Get the link and start earning money]")}
            </p>
            <div className="innovation-head">
              {" "}
              <div className="invitation">
                <p className="all-p">{t("invitation")}</p>
                <p className="all-p">https://t.me......................</p>
                <button>{t("Your invitation link")}</button>
                <div className="changeover">
                  <p className="all-p">{t("Click on the link")}</p>
                  <p className="all-p">0</p>
                </div>
                <div className="changeover">
                  <p className="all-p">{t("Earned money")}</p>
                  <p className="all-p">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteePage;
