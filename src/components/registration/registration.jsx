import React from "react";

import logo from "../../assets/images/login/logo.jpg";

import iconFacebook from "../../assets/icons/login/facebook.svg";
import iconApple from "../../assets/icons/login/apple.svg";
import iconGoogle from "../../assets/icons/login/google.svg";

import "./registration.scss";
import { Link } from "react-router-dom";

const Registration = () => {
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
          <span></span>
          <span></span>
          <span></span>
        </div>
        <form>
          <div className="phoneNumberBox">
            <p>Jarayonlardan to‘g‘ri o‘ting</p>
            <div className="phoneNumberBoxMain">
              <select>
                <option value="UZB">+998</option>
                <option value="BRA">+55</option>
                <option value="CAN">+1</option>
                <option value="CHN">+86</option>
                <option value="IND">+91</option>
              </select>
              <input type="text" placeholder="99 123 45 67" />
            </div>
          </div>
        </form>
        <Link to="/login">
          <button className="nextBtn">Keyingi</button>
        </Link>
      </div>
      <p>Copyright © 2022. REALSOFT. Barcha huquqlar himoyalangan</p>
    </div>
  );
};

export default Registration;
