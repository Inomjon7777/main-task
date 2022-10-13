import React from "react";

import logo from "../../assets/images/nav/logo.jpg";
import iconInstagram from "../../assets/icons/footer/2561453_instagram_icon 1.svg";
import iconTwitter from "../../assets/icons/footer/Vector(1).svg";
import iconFacebook from "../../assets/icons/footer/Vector.svg";
import iconTiktok from "../../assets/icons/footer/path5550.svg";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="title">
          <img src={logo} alt="Icon not found" />
          <span>iMeetings</span>
        </div>
        <div className="description">
          iMeetings – bu xodimlar va mijozlar bilan ishonchli aloqa kanali va
          minimal xarajatlar bilan samarali uchrashuv tashkil etish <br />{" "}
          platformasi. iMeetings dan foydalangan holda uchrashuvlarni yangi
          darajaga olib chiqing, jamoa samaradorligini oshiring, <br />
          iste'molchilarning biznesingizga sodiqligini oshiring!
        </div>
        <div className="socialNetworks">
          <img src={iconFacebook} alt="Icon not found" />
          <img src={iconTwitter} alt="Icon not found" />
          <img src={iconInstagram} alt="Icon not found" />
          <img src={iconTiktok} alt="Icon not found" />
        </div>
        <div className="subtitle">Copyright © 2022</div>
      </div>
    </div>
  );
};

export default Footer;
