import React from "react";

import VideoRecordIcon from "../../assets/icons/hero/VideoRecordIcon.svg";
import ToTopIcon from "../../assets/icons/hero/ToTopIcon.svg";

import imagePersonBack from "../../assets/images/hero/person-back.jpg";
import imagePersonSide from "../../assets/images/hero/person-side.jpg";
import imagePersonFront from "../../assets/images/hero/person-front.jpg";
import imagePersonLaptop from "../../assets/images/hero/person-from-laptop.jpg";
import connectWithPhone from "../../assets/icons/hero/Frame(1).svg";
import recordVideoIcon from "../../assets/icons/hero/Frame(2).svg";
import recordVoiceIcon from "../../assets/icons/hero/Frame(3).svg";

import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="title-box">
        <p className="suptitle">Video konferensiya</p>
        <h1 className="title">
          <span>iMeetings</span> bilan barchasi oson!
        </h1>
        <p className="subtitle">
          <span>iMeetings</span> - bu kompaniyangiz uchrashuvlarini
          boshqarishning sodda, ishonchli va qulay usuli!
        </p>
        <div className="hero-btn-group">
          <button>
            <img src={VideoRecordIcon} alt="Icon not found" />
            Uchrashuv yaratish
          </button>
          <button>
            <p>Qo‘llanmani ko‘rish</p>
            <img src={ToTopIcon} alt="Img not found" />
          </button>
        </div>
      </div>
      <div className="banner-box">
        <img
          className="imagePersonBack"
          src={imagePersonBack}
          alt="Image not found"
        />
        <img
          className="imagePersonSide"
          src={imagePersonSide}
          alt="Image not found"
        />
        <img
          className="imagePersonFront"
          src={imagePersonFront}
          alt="Image not found"
        />
        <img
          className="imagePersonLaptop"
          src={imagePersonLaptop}
          alt="Image not found"
        />
        <div className="toConnect">
          <img
            className="recordVoiceIcon"
            src={recordVoiceIcon}
            alt="Icon not found"
          />
          <img
            className="connectWithPhone"
            src={connectWithPhone}
            alt="Icon not found"
          />
          <img
            className="recordVideoIcon"
            src={recordVideoIcon}
            alt="Icon not found"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
