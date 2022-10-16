import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/login/logo.jpg";
import iconFacebook from "../../../assets/icons/login/facebook.svg";
import iconApple from "../../../assets/icons/login/apple.svg";
import iconGoogle from "../../../assets/icons/login/google.svg";

import "./confirmationCode.scss";
import { getPadTime } from "./../../../helpers/getPadTime";

const ConfirmationCode = () => {
  const [timeLeft, setTimeLeft] = useState(1 * 60);

  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
  }, []);

  return (
    <div className="confirmation-code-page">
      <div className="confirmation-code-box">
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
          <div className="confirmationCodeBox">
            <p>Tasdiqlash kodi</p>
            <div className="confirmationCodeBoxMain">
              <input type="text" placeholder="1 2 3 4 5 6" />
              <span> kod kelmadi</span>
            </div>
          </div>
        </form>
        <div className="nextButtonBox">
          <p>
            {minutes}:{seconds}
          </p>
          <Link to={"/congratulation"}>
            <button className="nextBtn">Keyingi</button>
          </Link>
        </div>
      </div>
      <p>Copyright © 2022. REALSOFT. Barcha huquqlar himoyalangan</p>
    </div>
  );
};

export default ConfirmationCode;
