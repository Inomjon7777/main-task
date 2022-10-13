import React from "react";

import iconCall from "../../assets/icons/connections/call.svg";
import iconEnvelope from "../../assets/icons/connections/envelope.svg";
import iconMarker from "../../assets/icons/connections/marker.svg";

import "./connection.scss";

const Connection = () => {
  return (
    <div className="connection">
      <div className="container">
        <div className="title">
          <h1>
            Biz <span>bilan</span> bog‘lanish
          </h1>
          <p>
            Har bir mijozimiz uchun doimiy texnik ko‘mak berish tashkil etilgan
          </p>
        </div>
        <div className="connection-boxes">
          <div className="location-box">
            <img src={iconEnvelope} alt="Icon not found" />
            <h3>Manzil</h3>
            <p>
              Toshkent sh., Yunusobod t., Amir <br /> Temur shox ko’chasi, 107 B
              uy
            </p>
          </div>
          <div className="message-box">
            <img src={iconMarker} alt="Icon not found" />
            <h3>Elektron pochta</h3>
            <p>
              info@realsoft.uz <br /> realsoft@exat.uz
            </p>
          </div>
          <div className="phone-box">
            <img src={iconCall} alt="Icon not found" />
            <h3>Telefonlar</h3>
            <p>
              +998 71 205-84-84 <br /> +998 99 150-84-84
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connection;
