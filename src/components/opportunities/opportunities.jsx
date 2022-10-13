import React from "react";

import iconCheck from "../../assets/icons/opportunites/check.svg";
import iconCustomerSupport from "../../assets/icons/opportunites/customer-support.svg";
import iconLink from "../../assets/icons/opportunites/link.svg";
import iconOnlineMeeting from "../../assets/icons/opportunites/online-meeting.svg";
import iconPeople from "../../assets/icons/opportunites/people.svg";
import iconPieChart from "../../assets/icons/opportunites/pie-chart.svg";
import iconRecord from "../../assets/icons/opportunites/record.svg";
import iconSecurity from "../../assets/icons/opportunites/security.svg";
import iconVideoCall from "../../assets/icons/opportunites/videocall.svg";

import "./opportunities.scss";

const Opportunities = () => {
  return (
    <div className="opportunities">
      <div className="container">
        <div className="title-box">
          <div className="title">
            <span>Bizning</span>
            <br />
            <span> imkoniyatlar</span>
          </div>
          <div className="description">
            <p>
              Uchrashuvlarni tez va oson yarating, taklifnoma yuboring, yangi
              <br />
              mijozlarni jalb qiling, iMeetings bilan anjumanlarni samarali
              <br />
              boshqaring!
            </p>
          </div>
        </div>

        {/* 1 */}
        <div className="opportunity-boxes">
          <div className="checkBox">
            <img
              className="iconVideoCall"
              src={iconVideoCall}
              alt="Icon not found"
            />
            <h3>Uchrashuvni oson va tez belgilash</h3>
            <p>
              Bir necha soniyada istalgan turdagi <br /> uchrashuv yarating
            </p>
          </div>

          {/* 2 */}
          <div className="customerSupportBox">
            <img className="iconCheck" src={iconCheck} alt="Icon not found" />
            <h3>Qatnashishni tasdiqlash</h3>
            <p>
              QR-Havola (URL), Telegram-bot, SMS-kod <br /> orqali tasdiqlang
            </p>
          </div>

          {/* 3 */}
          <div className="linkBox">
            <img
              className="iconOnlineMeeting"
              src={iconOnlineMeeting}
              alt="Icon not found"
            />
            <h3>Videokonferensiya xizmati</h3>
            <p>
              Uchrashuvlarda masofadan onlayn <br /> qatnashing
            </p>
          </div>

          {/* 4 */}
          <div className="onlineMeetingBox">
            <img className="iconRecord" src={iconRecord} alt="Icon not found" />
            <h3>Yozuvlarni saqlash</h3>
            <p>
              Istalgan payt, joy va uskunadan kiring va <br /> fayllarni yuklab
              oling
            </p>
          </div>

          {/* 5 */}
          <div className="peopleBox">
            <img
              className="iconPieChart"
              src={iconPieChart}
              alt="Icon not found"
            />
            <h3>Batafsil hisobotlar</h3>
            <p>
              Uchrashuvlarning holati va statistikasi va <br /> boshqa
              ma’lumotlar
            </p>
          </div>

          {/* 6 */}
          <div className="pieChartBox">
            <img
              className="iconSecurity"
              src={iconSecurity}
              alt="Icon not found"
            />
            <h3>100% xavfsizlik</h3>
            <p>
              Biz mijozlar ma'lumotlarining xavfsizligini <br /> kafolatlaymiz
            </p>
          </div>

          {/* 7 */}
          <div className="recordBox">
            <img className="iconPeople" src={iconPeople} alt="Icon not found" />
            <h3>Aloqa guruhlari</h3>
            <p>
              Ma'lumotlar bazasini istalgan parametrlar <br /> bo'yicha
              segmentlarga ajrating
            </p>
          </div>

          {/* 8 */}
          <div className="securityBox">
            <img className="iconLink" src={iconLink} alt="Icon not found" />
            <h3>Uchrashuv havolasi tahlili</h3>
            <p>
              Havolalaringizga kim kirish uchun ruxsat <br /> so‘raganini bilib
              oling
            </p>
          </div>

          {/* 9 */}
          <div className="videoCallBox">
            <img
              className="iconCustomerSupport"
              src={iconCustomerSupport}
              alt="Icon not found"
            />
            <h3>24/7 qo'llab-quvvatlash</h3>
            <p>
              Istalgan vaqtda barcha savollaringizga javob <br /> beramiz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
