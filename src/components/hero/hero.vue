<template>
  <Nav />
  <div class="hero" id="hero">
    <div class="title-box">
      <p class="suptitle">Video konferensiya</p>
      <h1 class="title"><span>iMeetings</span> bilan barchasi oson!</h1>
      <p class="subtitle">
        <span>iMeetings</span> - bu kompaniyangiz uchrashuvlarini boshqarishning
        sodda, ishonchli va qulay usuli!
      </p>
      <div class="hero-btn-group">
        <button>
          <img :src="VideoRecordIcon" alt="Icon not found" />
          Uchrashuv yaratish
        </button>
        <button>
          <p>Qo‘llanmani ko‘rish</p>
          <img :src="ToTopIcon" alt="Icon not found" />
        </button>
      </div>
    </div>
    <div class="banner-box">
      <img
        class="imagePersonBack"
        :src="imagePersonBack"
        alt="Icon not found"
      />
      <img
        class="imagePersonSide"
        :src="imagePersonSide"
        alt="Icon not found"
      />
      <img
        class="imagePersonFront"
        :src="imagePersonFront"
        alt="Icon not found"
      />
      <img
        class="imagePersonLaptop"
        :src="imagePersonLaptop"
        alt="Icon not found"
      />
      <div class="toConnect">
        <img
          class="recordVoiceIcon"
          :src="recordVoiceIcon"
          alt="Icon not found"
        />
        <img
          class="connectWithPhone"
          :src="connectWithPhone"
          alt="Icon not found"
        />
        <img
          class="recordVideoIcon"
          :src="recordVideoIcon"
          alt="Icon not found"
        />
      </div>
    </div>
  </div>
  <opportunities />
  <advantages />
  <tariffs />
  <connection />
  <Footer />
</template>

<script>
// images
import VideoRecordIcon from "../../assets/icons/hero/VideoRecordIcon.svg";
import ToTopIcon from "../../assets/icons/hero/ToTopIcon.svg";
import imagePersonBack from "../../assets/images/hero/person-back.jpg";
import imagePersonSide from "../../assets/images/hero/person-side.jpg";
import imagePersonFront from "../../assets/images/hero/person-front.jpg";
import imagePersonLaptop from "../../assets/images/hero/person-from-laptop.jpg";
import connectWithPhone from "../../assets/icons/hero/Frame(1).svg";
import recordVideoIcon from "../../assets/icons/hero/Frame(2).svg";
import recordVoiceIcon from "../../assets/icons/hero/Frame(3).svg";
import opportunities from "../opportunities/opportunities.vue";
import Advantages from "../advantages/advantages.vue";
import Tariffs from "../tariffs/tariffs.vue";
import Connection from "../connection/connection.vue";
import Footer from "../footer/footer.vue";
import Nav from "../nav/nav.vue";

export default {
  components: { opportunities, Advantages, Tariffs, Connection, Footer, Nav },
  data() {
    return {
      // images
      VideoRecordIcon,
      ToTopIcon,
      imagePersonBack,
      imagePersonSide,
      imagePersonFront,
      imagePersonLaptop,
      connectWithPhone,
      recordVideoIcon,
      recordVoiceIcon,
    };
  },
};
</script>

<style lang="scss">
.hero {
  margin: 6rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 11rem;
  .suptitle {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #686d74;
  }
  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 89px;
    margin: 0 0 25px 0;
    span {
      background: linear-gradient(90deg, #0066ff 0%, #ff0000 91.85%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  .subtitle {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #686d74;
    span {
      font-weight: bold;
    }
  }
  .hero-btn-group {
    display: flex;
    gap: 30px;
    margin-top: 35px;

    button {
      &:first-child {
        display: flex;
        align-items: center;
        background: #0066ff;
        color: #fff;
        border: 1px solid #0066ff;
        padding: 15px 26px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.9s linear;
        &:active {
          transform: scale(0.9);
        }
      }
      &:last-child {
        color: #0066ff;
        display: flex;
        align-items: center;
        border: none;
        background: transparent;
        cursor: pointer;
        gap: 7px;
        p {
          border-bottom: 1px solid #0066ff;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
        }
      }
    }
  }
  .imagePersonBack {
    grid-area: myArea1;
    width: 292px;
    height: 427px;
  }

  .imagePersonSide {
    grid-area: myArea2;
  }

  .imagePersonFront {
    grid-area: myArea3;
  }

  .imagePersonLaptop {
    grid-area: myArea4;
  }
  .banner-box {
    position: relative;
    display: grid;
    grid-template-areas: "myArea1 myArea2 myArea2" "myArea1 myArea3 myArea4";
    grid-gap: 10px;
    padding: 10px;
  }
  .toConnect {
    position: absolute;
    bottom: 30px;
    right: 210px;
    display: flex;
    padding: 7px 25px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(2px);
    border-radius: 10px;
    .recordVoiceIcon {
      cursor: pointer;
      &:active {
        transform: scale(0.9);
      }
    }
    .connectWithPhone {
      background: #0066ff;
      padding: 10px;
      border-radius: 50%;
      margin: 0 23px;
      cursor: pointer;
      &:active {
        transform: scale(0.9);
      }
    }
    .recordVideoIcon {
      cursor: pointer;
      &:active {
        transform: scale(0.9);
      }
    }
  }
}

.imagePersonBack {
  animation-name: personBackAnimation;
  animation-timing-function: 0.5s;
  animation-delay: inherit;
  animation-iteration-count: infinite;
  animation-duration: 4s;
  animation-direction: alternate;
}
@keyframes personBackAnimation {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
}

.imagePersonFront {
  animation-name: personFrontAnimation;
  animation-timing-function: 0.5s;
  animation-delay: inherit;
  animation-iteration-count: infinite;
  animation-duration: 4s;
  animation-direction: alternate;
}
@keyframes personFrontAnimation {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
}

.imagePersonLaptop {
  animation-name: personBackAnimation;
  animation-timing-function: 0.5s;
  animation-delay: inherit;
  animation-iteration-count: infinite;
  animation-duration: 4s;
  animation-direction: alternate;
}
@keyframes imagePersonLaptop {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
}

.imagePersonSide {
  animation-name: personSideAnimation;
  animation-timing-function: 0.5s;
  animation-delay: inherit;
  animation-iteration-count: infinite;
  animation-duration: 4s;
  animation-direction: alternate;
}
@keyframes personSideAnimation {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
}

@media (max-width: 1400px) {
  .hero {
    padding: 0rem 4rem;
  }
}

@media (max-width: 1200px) {
  .hero {
    padding: 0rem 5rem;
    .suptitle {
      font-size: 15px;
    }
    .title {
      font-size: 45px;
      line-height: 65px;
    }
    .subtitle {
      font-size: 15.5px;
      line-height: 24px;
    }

    .hero-btn-group {
      gap: 15px;
      button {
        &:first-child {
          padding: 11px 15px;
        }
      }
    }
  }
}

@media (max-width: 1100px) {
  .hero {
    padding: 0 3rem;
  }
}

@media (max-width: 992px) {
  .hero {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px 3rem;
    margin: 2rem 0rem;
    .suptitle {
      font-size: 35px;
      margin-top: 0rem;
    }
    .title {
      font-size: 40px;
      line-height: 0px;
      margin-top: 0.5rem;
    }
    .subtitle {
      font-size: 16px;
      line-height: 0px;
      margin-top: 3.5rem;
    }
    .hero-btn-group {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      button {
        &:first-child {
          padding: 5px 15px;
        }
      }
    }
    .imagePersonBack {
      grid-area: myArea1;
      width: 335px;
      height: 320px;
      object-fit: cover;
      border-radius: 10px;
      object-position: 0px 40%;
    }

    .imagePersonSide {
      grid-area: myArea2;
      width: 530px;
      height: 150px;
      object-fit: cover;
      border-radius: 10px;
      object-position: center;
      object-position: 0px 30%;
    }

    .imagePersonFront {
      grid-area: myArea3;
      width: 250px;
      height: 160px;
      object-fit: cover;
      border-radius: 10px;
      object-position: center;
      object-position: 0px 40%;
    }

    .imagePersonLaptop {
      grid-area: myArea4;
      width: 270px;
      height: 160px;
      object-fit: cover;
      border-radius: 10px;
      object-position: center;
      object-position: 0px 30%;
    }
    .banner-box {
      margin-top: 1rem;
    }
  }
}

// RESPONSE 800PX
@media (max-width: 800px) {
  .banner-box {
    .imagePersonBack {
      width: 270px; //
    }

    .imagePersonSide {
      width: 400px; //
    }

    .imagePersonFront {
      width: 195px; //
    }

    .imagePersonLaptop {
      width: 195px; //
    }
    .toConnect {
      position: absolute; //
      right: 120px; //
    }
  }
}

@media (max-width: 788px) {
  .hero {
    .subtitle {
      line-height: 20px; //
    }
  }
}

// RESPONSE 700PX
@media (max-width: 700px) {
  .hero {
    .subtitle {
      line-height: 20px; //
    }
    .banner-box {
      .imagePersonBack {
        width: 195px; //
        height: 280px; //
      }

      .imagePersonSide {
        width: 380px; //
        height: 140px; //
      }

      .imagePersonFront {
        width: 185px; //
        height: 127px; //
      }

      .imagePersonLaptop {
        width: 185px; //
        height: 127px; //
      }
      .toConnect {
        position: absolute; //
        right: 120px; //
        img {
          width: 12px; //
        }
      }
    }
  }
}

@media (max-width: 665px) {
  .hero {
    .title {
      line-height: 40px;
    }
  }
}

// RESPONSE 600PX
@media (max-width: 600px) {
  .hero {
    .suptitle {
      font-size: 25px; //
    }
    .title {
      line-height: 35px; //
    }
    .subtitle {
      line-height: 20px; //
    }
    .banner-box {
      .imagePersonBack {
        width: 180px; //
        height: 280px; //
      }

      .imagePersonSide {
        width: 290px; //
        height: 140px; //
      }

      .imagePersonFront {
        width: 140px; //
        height: 127px; //
      }

      .imagePersonLaptop {
        width: 140px; //
        height: 127px; //
      }
      .toConnect {
        position: absolute; //
        right: 90px; //
        bottom: 30px; //
        padding: 5px 10px; //
      }
    }
  }
  .banner-box {
    position: relative;
    display: grid;
    grid-template-areas: "myArea1 myArea1 myArea1" "myArea1 myArea3 myArea4";
    grid-gap: 10px;
    padding: 10px;
  }
}

// RESPONSE 500PX
@media (max-width: 500px) {
  .hero {
    padding: 0.5rem 2.5rem; //
    .suptitle {
      font-size: 22px; //
    }
    .title {
      line-height: 50px; //
      font-size: 2.5rem; //
    }
    .subtitle {
      line-height: 20px; //
    }
    .banner-box {
      .imagePersonBack {
        width: 400px; //
        height: 280px; //
        object-position: 0px 55%; //
      }

      .imagePersonSide {
        width: 400px; //
        height: 280px; //
        object-position: 0px 10%; //
      }

      .imagePersonFront {
        width: 400px; //
        height: 280px; //
        object-position: 0px 20%; //
      }

      .imagePersonLaptop {
        width: 400px; //
        height: 280px; //
        object-position: 0px 30%; //
      }
      .toConnect {
        position: absolute; //
        right: 120px; //
        bottom: 30px; //
        padding: 5px 50px; //
        border: 1px solid #888;
      }
    }
    .banner-box {
      position: relative; //
      display: grid; //
      grid-template-areas:
        "myArea1"
        "myArea2"
        "myArea3"
        "myArea4";
    }
  }
}

// RESPONSE 412PX
@media (max-width: 412px) {
  .hero {
    .suptitle {
      margin-top: 2rem; //
    }
    padding: 0.5rem 2.5rem; //

    .banner-box {
      .imagePersonBack,
      .imagePersonFront,
      .imagePersonLaptop {
        display: none;
      }

      .imagePersonSide {
        width: 350px; //
      }

      .toConnect {
        right: 80px; //
        bottom: 50px; //
      }
    }
  }
}
</style>
