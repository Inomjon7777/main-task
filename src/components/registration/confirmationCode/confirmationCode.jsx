import React, { useState } from "react";

import logo from "../../../assets/images/login/logo.jpg";

import iconFacebook from "../../../assets/icons/login/facebook.svg";
import iconApple from "../../../assets/icons/login/apple.svg";
import iconGoogle from "../../../assets/icons/login/google.svg";

import { Link } from "react-router-dom";
import PasswordSection from "./confirmationCode";

import "./confirmationCode.scss";

const ConfirmationCode = () => {
  return (
    <div className="registration-page">
      <div className="registration-box">
        <div className="title-box">
          <img src={logo} alt="Image not found" />
          <span>iMeetings</span>
        </div>
        <div className="social-networks-box">
          <img src={iconFacebook} alt="Icon not found" />
          <img src={iconApple} alt="Icon not found" />
          <img src={iconGoogle} alt="Icon not found" />
        </div>
        <p>yoki</p>
        <h3>Ro‘yxatdan o‘tish</h3>
        <p className="processes">Jarayonlardan to‘g‘ri o‘ting</p>
        <div className="lines">
          <div className="phoneNumberSection"></div>

          <Link to={"/confirmationCode"}>
            <div className="confirmationCode"></div>
          </Link>

          <Link to={"/congratulation"}>
            <div className="congratulation"></div>
          </Link>
        </div>
        <form>
          <div className="phoneNumberBox">
            <p>Tasdiqlash kodi</p>
            <div className="phoneNumberBoxMain">
              <input type="text" placeholder="1 2 3 4 5 6" />
              kod kelmadi
            </div>
            <p>00:55</p>
          </div>
        </form>
        <Link to={"/congratulation"}>
          <button className="nextBtn">Keyingi</button>
        </Link>
      </div>
      <p>Copyright © 2022. REALSOFT. Barcha huquqlar himoyalangan</p>
    </div>
  );
};

export default ConfirmationCode;
