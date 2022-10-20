<template>
  <div class="footer">
    <div class="container">
      <div class="title">
        <img :src="logoOrg" alt="Icon not found" />
        <span>iMeetings</span>
      </div>
      <div class="description">
        iMeetings – bu xodimlar va mijozlar bilan ishonchli aloqa kanali va
        minimal xarajatlar bilan samarali uchrashuv tashkil etish <br />{" "}
        platformasi. iMeetings dan foydalangan holda uchrashuvlarni yangi
        darajaga olib chiqing, jamoa samaradorligini oshiring, <br />
        iste'molchilarning biznesingizga sodiqligini oshiring!
      </div>
      <div class="socialNetworks">
        <img :src="iconFacebook" alt="Icon not found" />
        <img :src="iconTwitter" alt="Icon not found" />
        <img :src="iconInstagram" alt="Icon not found" />
        <img :src="iconTiktok" alt="Icon not found" />
      </div>
      <div class="subtitle">Copyright © 2022</div>
    </div>
  </div>
</template>

<script>
// images
import logoOrg from "../../assets/icons/footer/logo.svg";
import iconInstagram from "../../assets/icons/footer/2561453_instagram_icon 1.svg";
import iconTwitter from "../../assets/icons/footer/Vector(1).svg";
import iconFacebook from "../../assets/icons/footer/Vector.svg";
import iconTiktok from "../../assets/icons/footer/path5550.svg";
export default {
  data() {
    return {
      //images
      logoOrg,
      iconInstagram,
      iconTwitter,
      iconFacebook,
      iconTiktok,
    };
  },
};
</script>

<style lang="scss">
.footer {
  background: #181e37;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  .title {
    margin-top: 62px;
  }

  .description {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: rgba(255, 255, 255, 0.72);
    margin-top: 34px;
  }

  .socialNetworks {
    margin-top: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    img {
      width: 20px;
      height: 20px;
      padding: 12px;
      background: #fff;
      border-radius: 7px;
      cursor: pointer;
      animation-name: socialAnimation;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-duration: 5s;

      @keyframes socialAnimation {
        0% {
          transform: scale(0.9);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(0.9);
        }
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }
  .subtitle {
    margin-top: 50px;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.48);
  }
}

@media (max-width: 1200px) {
  .footer {
    .container {
      padding: 1rem 5rem;
    }
    .description {
      br {
        display: none;
      }
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      color: rgba(255, 255, 255, 0.72);
      margin-top: 34px;
    }

    .socialNetworks {
      margin-top: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      img {
        width: 20px;
        height: 20px;
        padding: 12px;
        background: #fff;
        border-radius: 7px;
        cursor: pointer;
        &:active {
          transform: scale(0.95);
        }
      }
    }

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      color: #fff;
      font-size: 20px;
      font-weight: 700;
    }
    .subtitle {
      margin-top: 50px;
      margin-bottom: 20px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      color: rgba(255, 255, 255, 0.48);
    }
  }
}

@media (max-width: 1100px) {
  .footer {
    .container {
      padding: 0 3rem;
    }
  }
}
@media (max-width: 992px) {
  .container {
    padding: 0 3rem;
  }
}
@media (max-width: 700px) {
  .footer {
    padding-top: 2rem;
    .title {
      margin: 1.7rem; //
    }
    .description {
      font-size: 14px; //
    }
    .socialNetworks {
      img {
        padding: 5px; //
      }
    }
  }
}
@media (max-width: 500px) {
  .footer {
    .container {
      padding: 0.5rem 2.5rem;
    }
    .description {
      font-size: 14px; //
    }
    .socialNetworks {
      img {
        padding: 5px; //
      }
    }
  }
}
</style>
