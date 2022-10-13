import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/nav/logo.jpg";
import loginIcon from "../../assets/icons/nav/login-icon.svg";

import "./nav.scss";

const Nav = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <img src={logo} alt="Img not found" />
        <p>iMeetings</p>
      </div>
      <div className="navbar">
        <ul>
          <li>Bosh sahifa</li>
          <li>Imkoniyatlar</li>
          <li>Afzalliklar</li>
          <li>Tariflar</li>
          <li>Aloqa</li>
        </ul>
      </div>
      <div className="registration">
        <Link to="/registration">
          <button className="registrationBtn">Ro‘yxatdan o’tish</button>
        </Link>
        <Link to="/login">
          <button className="accessBtn">
            <img src={loginIcon} alt="Icon not found" />
            Kirish
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
