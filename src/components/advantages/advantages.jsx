import React from "react";

import "./advantages.scss";

import persons from "../../assets/images/advantages/persons.jpg";

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="container">
        <div className="advantages-boxes">
          <div className="banner">
            <img src={persons} alt="Img not found" />
          </div>
          <div className="information">
            <div className="advantagesTitleBox">
              <h2>
                <span>Afzalliklar</span>
                <span> bilan tanishing</span>
              </h2>
              <p>
                Nima uchun iMeetings da uchrashuv tashkil etish shunchalik
                samarali?
              </p>
            </div>
            <div className="adaptabilityTitleBox">
              <h3>Adaptivlik</h3>
              <p>
                Qayerdaligingizdan qat'iy nazar, har qanday qurilmada uchrashuv
                tashkil qilish yoki unda qatnashish mumkin.
              </p>
            </div>
            <div className="opportunitiesTitleBox">
              <h3>Eng qulay imkoniyatlar</h3>
              <p>
                Mobil qurilma har doim qo'lda, foydalanuvchilar xabarlarni
                o'qiydilar. Mijozlar yaratilgan qulaylik evaziga reklama
                xabarlarini ko’rishga qarshi emas.
              </p>
            </div>
            <div className="viewMessageTitleBox">
              <h3>Xabarlarni tezkor ko‘rish</h3>
              <p>
                Xabarlarni o'rtacha o’qilishi statistikaga ko'ra, elektron
                pochtadan 2 baravar ko'p.
              </p>
            </div>
            <div className="selectTitleBox">
              <h3>iMeetings ni tanlaganda nimaga erishasiz?</h3>
              <p>
                Xavfsiz ma'lumotlar markazidagi ishonchli serverlar, DoS va DDoS
                hujumlaridan himoyalanish, shaxsiy va guruh uchrashuvlari -
                bularning barchasi yuqori darajadagi ishonchni ta'minlaydi va
                har oy o’nlab uchrashuvlarni o'tkazish imkonini beradi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
