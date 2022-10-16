import React from "react";

import startImage from "../../assets/images/tariffs/start.jpg";
import standartImage from "../../assets/images/tariffs/standart.jpg";
import premiumImage from "../../assets/images/tariffs/premium.jpg";

import iconCheck from "../../assets/icons/tariffs/check.svg";

import "./tariffs.scss";

const Tariffs = () => {
  return (
    <div className="tariffs" id="tariffs">
      <div className="container">
        <div className="title-box">
          <h1>
            Uchrashuvlarni <span>tashkil</span> etish tariflari
          </h1>
          <p>Narxlar tarif rejasiga bog'liq</p>
        </div>
        <div className="tariffs-boxes">
          {/* 1 */}
          <div className="start-box">
            <div className="title-box">
              <div>
                <img src={startImage} alt="Image not found" />
              </div>
              <div>
                <p>Start</p>
                <p>
                  <span>100 000</span>
                  <span> (10) uchrashuv</span>
                </p>
              </div>
            </div>
            <p>
              <img src={iconCheck} alt="Icon not found" />
              <span> 1 ta uchrashuv </span>
              <span className="price"> 10 000 </span>
              <span>UZS</span>
            </p>
            <p>
              <img src={iconCheck} alt="Icon not found" />
              <span className=""> 10 ta uchrashuv </span>
              <span className="price"> 100 000 </span>
              <span>UZS</span>
            </p>
            <p>
              <img src={iconCheck} alt="Icon not found" />
              <span> Narxlar tizim tomonidan belgilangan</span>
            </p>
            <button>Tarifni sotib olish</button>
          </div>

          {/* 2 */}
          <div className="standart-box">
            <div className="title-box">
              <div>
                <img src={standartImage} alt="Image not found" />
              </div>
              <div className="standart-box-title">
                <p className="text-popular">Ommabop</p>
                <p className="tariff-name">Standart</p>
                <p>
                  <span className="standart-box-big-price ">135 000</span>
                  <span className="allCountMeeting"> (15) uchrashuv</span>
                </p>
              </div>
            </div>
            <p>
              <img src={iconCheck} alt="Icon not found" />
              <span> 1 ta uchrashuv </span>
              <span className="price"> 9 000 </span>
              <span>UZS</span>
            </p>
            <p>
              <img src={iconCheck} alt="Icon not found" />
              <span> 18 ta uchrashuv </span>
              <span className="price"> 135 000 </span>
              <span>UZS</span>
            </p>
            <p>
              <img src={iconCheck} alt="Icon not found" />
              <span> Naxrlar tizim tomonidan belgilangan</span>
            </p>
            <button>Tarifni sotib olish</button>
          </div>

          {/* 3 */}
          <div className="premium-box">
            <div className="title-box">
              <div>
                <img src={premiumImage} alt="Image not found" />
              </div>
              <div>
                <p>Premium</p>
                <p>
                  <span>170 000</span>
                  <span> (20) uchrashuv</span>
                </p>
              </div>
            </div>
            <p>
              <img src={iconCheck} alt="Icon not found" />
              <span> 1 ta uchrashuv </span>
              <span className="price"> 8 500 </span>
              <span>UZS</span>
            </p>
            <p>
              <img src={iconCheck} alt="Icon not found" />
              <span> 20 ta uchrashuv </span>
              <span className="price"> 170 000 </span>
              <span>UZS</span>
            </p>
            <p>
              <img src={iconCheck} alt="Icon not found" />
              <span> Naxrlar tizim tomonidan belgilangan</span>
            </p>
            <button>Tarifni sotib olish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tariffs;
