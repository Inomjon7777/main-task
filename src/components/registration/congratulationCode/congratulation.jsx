import React from "react";

import { Link } from "react-router-dom";
import cubik from "../../../assets/images/congrutulation/cubik.jpg";

import "./congratulationCode.scss";

const Congratulation = () => {
  return (
    <div className="congratulation-page">
      <div className="congratulation-box">
        <img src={cubik} alt="Image not found" />
        <h3>Tabriklaymiz</h3>
        <p>Siz muvaffaqiyatli ro’yxatdan o’tdingiz</p>
        <Link to={"/"}>
          <button>Yopish</button>
        </Link>
      </div>
      <p>Copyright © 2022. REALSOFT. Barcha huquqlar himoyalangan</p>
    </div>
  );
};

export default Congratulation;
