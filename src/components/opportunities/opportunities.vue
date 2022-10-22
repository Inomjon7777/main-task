<template>
  <div class="opportunities" id="opportunities">
    <div class="container">
      <div class="title-box">
        <div class="title">
          <span>Bizning</span>
          <br />
          <span> imkoniyatlar</span>
        </div>
        <div class="description">
          <p>
            Uchrashuvlarni tez va oson yarating, taklifnoma yuboring, yangi
            <br />
            mijozlarni jalb qiling, iMeetings bilan anjumanlarni samarali
            <br />
            boshqaring!
          </p>
        </div>
      </div>

      <div class="opportunity-boxes">
        <div class="checkBox">
          <img
            class="iconVideoCall"
            :src="iconVideoCall"
            alt="Icon not found"
          />
          <h3>Uchrashuvni oson va tez belgilash</h3>
          <p>
            Bir necha soniyada istalgan turdagi <br />
            uchrashuv yarating
          </p>
        </div>

        <div class="customerSupportBox">
          <img class="iconCheck" :src="iconCheck" alt="Icon not found" />
          <h3>Qatnashishni tasdiqlash</h3>
          <p>
            QR-Havola (URL), Telegram-bot, SMS-kod <br />
            orqali tasdiqlang
          </p>
        </div>

        <div class="linkBox">
          <img
            class="iconOnlineMeeting"
            :src="iconOnlineMeeting"
            alt="Icon not found"
          />
          <h3>Videokonferensiya xizmati</h3>
          <p>
            Uchrashuvlarda masofadan onlayn <br />
            qatnashing
          </p>
        </div>

        <div class="onlineMeetingBox">
          <img class="iconRecord" :src="iconRecord" alt="Icon not found" />
          <h3>Yozuvlarni saqlash</h3>
          <p>
            Istalgan payt, joy va uskunadan kiring va <br />
            fayllarni yuklab oling
          </p>
        </div>

        <div class="peopleBox">
          <img class="iconPieChart" :src="iconPieChart" alt="Icon not found" />
          <h3>Batafsil hisobotlar</h3>
          <p>
            Uchrashuvlarning holati va statistikasi va <br />
            boshqa ma’lumotlar
          </p>
        </div>

        <div class="pieChartBox">
          <img class="iconSecurity" :src="iconSecurity" alt="Icon not found" />
          <h3>100% xavfsizlik</h3>
          <p>
            Biz mijozlar ma'lumotlarining xavfsizligini <br />
            kafolatlaymiz
          </p>
        </div>

        <div class="recordBox">
          <img class="iconPeople" :src="iconPeople" alt="Icon not found" />
          <h3>Aloqa guruhlari</h3>
          <p>
            Ma'lumotlar bazasini istalgan parametrlar <br />
            bo'yicha segmentlarga ajrating
          </p>
        </div>

        <div class="securityBox">
          <img class="iconLink" :src="iconLink" alt="Icon not found" />
          <h3>Uchrashuv havolasi tahlili</h3>
          <p>
            Havolalaringizga kim kirish uchun ruxsat <br />
            so‘raganini bilib oling
          </p>
        </div>

        <div class="videoCallBox">
          <img
            class="iconCustomerSupport"
            :src="iconCustomerSupport"
            alt="Icon not found"
          />
          <h3>24/7 qo'llab-quvvatlash</h3>
          <p>
            Istalgan vaqtda barcha savollaringizga javob <br />
            beramiz
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//images
import iconCheck from "../../assets/icons/opportunites/check.svg";
import iconCustomerSupport from "../../assets/icons/opportunites/customer-support.svg";
import iconLink from "../../assets/icons/opportunites/link.svg";
import iconOnlineMeeting from "../../assets/icons/opportunites/online-meeting.svg";
import iconPeople from "../../assets/icons/opportunites/people.svg";
import iconPieChart from "../../assets/icons/opportunites/pie-chart.svg";
import iconRecord from "../../assets/icons/opportunites/record.svg";
import iconSecurity from "../../assets/icons/opportunites/security.svg";
import iconVideoCall from "../../assets/icons/opportunites/videocall.svg";
export default {
  data() {
    return {
      //images
      iconCheck,
      iconCustomerSupport,
      iconLink,
      iconOnlineMeeting,
      iconPeople,
      iconPieChart,
      iconRecord,
      iconSecurity,
      iconVideoCall,
    };
  },
};
</script>

<style lang="scss">
.opportunities {
  .title-box {
    display: flex;
    justify-content: space-between;
    .title {
      span {
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 59px;
        &:first-child {
          background: linear-gradient(90deg, #3434ff -1.02%, #f42d2d 50%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        &:nth-child(2) {
          color: #000;
        }
      }
    }
  }
  .opportunity-boxes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 22px;
    margin-top: 50px;
    .checkBox,
    .customerSupportBox,
    .linkBox,
    .onlineMeetingBox,
    .peopleBox,
    .pieChartBox,
    .recordBox,
    .securityBox,
    .videoCallBox {
      background: #fff;
      border-radius: 10px;
      padding: 45px 26px;
      border: 1px solid #eef1f4;
      cursor: pointer;
      transition: all 0.3s ease;
      fill: blue;
      &:hover {
        box-shadow: 0px 0px 60px rgba(50, 83, 198, 0.15);
        transform: scale(1.05);
        .iconVideoCall,
        .iconCheck,
        .iconOnlineMeeting,
        .iconRecord,
        .iconPieChart,
        .iconSecurity,
        .iconPeople,
        .iconLink,
        .iconCustomerSupport {
          filter: invert(46%) sepia(100%) saturate(2476%) hue-rotate(86deg)
            brightness(118%) contrast(150%);
        }
      }
    }

    .iconCheck {
      filter: invert(150%) sepia(150%) saturate(150%) hue-rotate(150deg)
        brightness(10%) contrast(150%);
    }
  }
}

@media (max-width: 1400px) {
  .container {
    padding: 0rem 4rem;
  }
}
@media (max-width: 1200px) {
  .opportunities {
    .container {
      padding: 0rem 5rem;
    }
    .title-box {
      .title {
        br {
          display: none;
        }
        span {
          font-size: 40px;
        }
      }
      .description {
        font-size: 14px;
      }
    }
    .opportunity-boxes {
      margin-top: 45px;
      .checkBox,
      .customerSupportBox,
      .linkBox,
      .onlineMeetingBox,
      .peopleBox,
      .pieChartBox,
      .recordBox,
      .securityBox,
      .videoCallBox {
        br {
          display: none;
        }
        padding: 20px 20px;
      }
      p {
        margin: 0;
      }
    }
  }
}
@media (max-width: 1100px) {
  .opportunities {
    .container {
      padding: 0 3rem;
    }
  }
}
@media (max-width: 992px) {
  .opportunities {
    .container {
      padding: 0 3rem;
    }
    .title-box {
      margin-top: 5rem;
      .title {
        span {
          font-size: 40px;
        }
      }
    }
    .opportunity-boxes {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 1fr);
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
      }
    }
  }
}
@media (max-width: 800px) {
  .opportunities {
    .title-box {
      display: flex;
      flex-direction: column;
      text-align: center;
      .title {
        span {
          font-size: 45px; //
        }
      }
      .description {
        font-size: 20px; //
        padding-top: 30px; //
      }
    }
    .opportunity-boxes {
      & > div {
        h3 {
          font-size: 1.1rem; //
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .opportunities {
    .title-box {
      .title {
        span {
          font-size: 40px; //
        }
      }
      .description {
        font-size: 18px; //
        padding-top: 20px; //
        br {
          display: none; //
        }
      }
    }
    .opportunity-boxes {
      & > div {
        img {
          width: 40px; //
          height: 40px; //
        }
        h3 {
          font-size: 1rem; //
        }
        p {
          font-size: 14px; //
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .opportunities {
    .container {
      padding: 0.5rem 2.5rem; //
    }
    .title-box {
      .title {
        span {
          font-size: 2.5rem; //
        }
      }
      .description {
        font-size: 16px; //
      }
    }
    .opportunity-boxes {
      display: grid; //
      grid-template-columns: 1fr; //
      & > div {
        img {
          width: 60px; //
          height: 60px; //
        }
        h3 {
          font-size: 1.5rem; //
        }
        p {
          font-size: 1rem; //
        }
      }
    }
  }
}
@media (max-width: 412px) {
  .opportunities {
    .container {
      padding: 0.5rem 2.5rem; //
    }
    .title-box {
      .title {
        span {
          font-size: 2rem; //
        }
      }
      .description {
        font-size: 16px; //
      }
    }
    .opportunity-boxes {
      display: grid; //
      grid-template-columns: 1fr; //
      & > div {
        img {
          width: 60px; //
          height: 60px; //
        }
        h3 {
          font-size: 1.5rem; //
        }
        p {
          font-size: 1rem; //
        }
      }
    }
  }
}
</style>
