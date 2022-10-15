import React from "react";

import logo from "../../../assets/images/login/logo.jpg";

import iconFacebook from "../../../assets/icons/login/facebook.svg";
import iconApple from "../../../assets/icons/login/apple.svg";
import iconGoogle from "../../../assets/icons/login/google.svg";

import { Link } from "react-router-dom";
import cubik from "../../../assets/images/congrutulation/cubik.jpg";

import "./congratulationCode.scss";

const Congratulation = () => {
  return (
    <div className="registration-page">
      <div className="registration-box">
        <img src={cubik} alt="Image not found" />
        <h3>Tabriklaymiz</h3>
        <p>Siz muvaffaqiyatli ro’yxatdan o’tdingiz</p>
        <Link to={'/'}>        <button>Yopish</button>
</Link>
      </div>
      <p>Copyright © 2022. REALSOFT. Barcha huquqlar himoyalangan</p>
    </div>
  );
};

export default Congratulation;
