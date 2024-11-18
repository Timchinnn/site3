import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import "./GuaranteePage.css";
import bigB from "./bigb.png";
import bigBContray from "./bigbContrary.png";
import arrow from "./arrow.png";
import { useNavigate } from "react-router-dom";
import arrowLong from "./arrow-long.png";
// import arrowDownL from "./arrowDownLong.png";
// import arrowDownM from "./arrowDownM.png";
// import arrowDownS from "./arrowDownS.png";
import arrowXs from "./arrows.png";
import { t } from "i18next";
import { useRef } from "react";
const GuaranteePage = ({ onClose }) => {
  const navigate = useNavigate();
  const [userRef, setUserRef] = useState(null);
  const tgUserId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id;
  const getRefByUserId = useCallback(
    (targetUserId) => {
      return userRef
        ? userRef.find((user) => user.user_id === targetUserId)?.ref
        : null;
    },
    [userRef]
  );
  const getRefCountByUserId = useCallback(
    (targetUserId) => {
      return userRef
        ? userRef.find((user) => user.user_id === targetUserId)?.ref_count
        : null;
    },
    [userRef]
  );
  const linkRef = useRef(null);

  const copyLink = () => {
    if (linkRef.current) {
      navigator.clipboard
        .writeText(linkRef.current.textContent)
        .then(() => {
          // Опционально: показать уведомление об успешном копировании
          // alert("Ссылка скопирована!");
        })
        .catch((err) => {
          console.error("Ошибка при копировании: ", err);
        });
    }
  };
  useEffect(() => {
    Promise.all([axios.get("/api/ref")])
      .then(([userRef]) => {
        setUserRef(userRef.data);
        // console.log(userRef.data);

        // const ref = getRefByUserId(tgUserId);
      })
      .catch((error) => console.error("Ошибка при получении данных:", error));
  }, [tgUserId]);
  // console.log(userRef);

  // };

  // Пример использования
  const ref = getRefByUserId(tgUserId);
  const ref_cout = getRefCountByUserId(tgUserId);
  return (
    <div className="modal-overlay1">
      <div className="images-container3">
        <img src={bigB} alt="bigB" className="top-left" />
        <img src={bigBContray} alt="bigBContray" className="bottom-right" />

        <div className="group-arrwo-post">
          <img
            className="arrow1"
            src={arrow}
            alt="arrow"
            onClick={() => navigate(-1)}
          />{" "}
          <div className="parent1">
            {/* <p>cd{ref}</p> */}
            {/* <div className="window-block-about"></div> */}
            <div className="share">
              <p className="share-header-p">
                <span className="highlight-text">{t("Summoning friends")}</span>
              </p>
              <div className="earn">
                <img src={arrowLong} alt="arrowLong" />
                <p className="share-header-p">
                  <span className="highlight-text">{t("make money")}</span>
                </p>
              </div>
              <hr className="hr1" />
              <p className="all-p1">{t("Call your friend and get a gift!")}</p>
              <p className="all-p">{t("How it works:")}</p>
              <div className="about-sales">
                <div className="about-sale">
                  <p>
                    <span className="highlight-text">
                      {t("Get a unique link")}
                    </span>
                    {t(
                      " - click the button below and copy your personal link."
                    )}
                  </p>
                </div>
                <div className="about-sale">
                  <p>
                    <span className="highlight-text">
                      {t("Share with friends")}
                    </span>
                    {t(
                      " - send links to colleagues, partners, and acquaintances on Messenger or social media."
                    )}
                  </p>
                </div>
                <div className="about-sale">
                  <p>
                    <span className="highlight-text">
                      {t("Earn money with us")}
                    </span>
                    {t(
                      " - When you place an order through your link, you will receive 3% of the first check."
                    )}
                  </p>
                </div>
              </div>
              <hr className="hr2" />
              <p className="all-p">
                {t(
                  "When your link is accessed by 5 people, please contact our manager and choose one of the three keyboards for free."
                )}
              </p>
              {/* <div className="arrow-groups">
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
              </div> */}
              <div className="statistic-hrad">
                <div className="statistic">
                  <p className="all-p4">
                    {t(
                      "Real time statistics- Track the number of transitions."
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
                  <p className="all-p">{t("Your invitation link")}</p>
                  <p className="all-p" ref={linkRef}>
                    {ref}
                  </p>
                  {/* <p className="all-p">https://t.me......................</p> */}
                  <button onClick={copyLink}>{t("Copy link")}</button>
                  <div className="changeover">
                    <p className="all-p">{t("Click on the link")}</p>
                    <p className="all-p">{ref_cout}</p>
                  </div>
                  {/* <div className="changeover">
                    <p className="all-p">{t("Earned money")}</p>
                    <p className="all-p">0</p>
                  </div> */}
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
