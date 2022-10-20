<template>
  <div>
    <div class="confirmation-code-page">
      <div class="confirmation-code-box">
        <div class="title-box">
          <img :src="logo" alt="Image not found" />
          <span>iMeetings</span>
        </div>
        <div class="social-networks-box">
          <img :src="iconFacebook" alt="Icon not found" />
          <img :src="iconApple" alt="Icon not found" />
          <img :src="iconGoogle" alt="Icon not found" />
        </div>
        <p>yoki</p>
        <h3>Ro‘yxatdan o‘tish</h3>
        <p class="processes">Jarayonlardan to‘g‘ri o‘ting</p>
        <div class="lines">
          <div class="phoneNumberSection"></div>

          <div class="confirmationCode"></div>

          <div class="congratulation"></div>
        </div>
        <form>
          <div class="confirmationCodeBox">
            <p>Tasdiqlash kodi</p>
            <div class="confirmationCodeBoxMain">
              <input type="text" placeholder="1 2 3 4 5 6" />
              <span> kod kelmadi</span>
            </div>
          </div>
        </form>
        <div class="nextButtonBox">
          <p>00:59</p>
          <router-link to="/congratulation">
            <button class="nextBtn">Keyingi</button>
          </router-link>
        </div>
      </div>
      <p>Copyright © 2022. REALSOFT. Barcha huquqlar himoyalangan</p>
    </div>
  </div>
</template>

<script>
//images
import logo from "../../../assets/images/login/logo.jpg";
import iconFacebook from "../../../assets/icons/login/facebook.svg";
import iconApple from "../../../assets/icons/login/apple.svg";
import iconGoogle from "../../../assets/icons/login/google.svg";

export default {
  data() {
    return {
      //images
      logo,
      iconFacebook,
      iconApple,
      iconGoogle,
    };
  },
};
</script>

<style lang="scss">
.confirmation-code-page {
  background: url("../../../assets/images/login/mountain.jpg");
  background-repeat: no-repeat;
  height: 45vh;
  display: grid;
  place-items: center;
  .confirmation-code-box {
    padding: 35px 40px;
    width: 350px;
    height: 420px;
    border: 1px solid;
    transform: translateY(20%);
    background: #fff;
    border: 1px solid #eef1f4;
    box-shadow: 0px 0px 60px rgba(50, 83, 198, 0.15);
    border-radius: 10px;
    .title-box {
      display: flex;
      justify-content: center;
      gap: 7px;
      span {
        color: #041429;
        font-weight: 700;
        font-size: 1.2rem;
      }
    }
    .social-networks-box {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 20px;
      img {
        width: 27px;
        height: 27px;
        border: 1px solid #e2e8f0;
        border-radius: 15px;
        padding: 18px;
        cursor: pointer;
        transition: all 0.5s ease;
        &:active {
          transform: scale(0.9);
        }
      }
      & + p {
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #4c535c;
        margin-top: 14px;
      }
    }
    h3 {
      text-align: center;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      color: #1e1e1e;
      margin: 0;
      margin-top: 9px;
      margin-bottom: 20px;
    }
    .processes {
      text-align: center;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #4c535c;
    }

    .lines {
      display: flex;
      justify-content: space-between;
      gap: 0px;
      margin-top: 38px;
      div {
        width: 105px;
        height: 10px;
        background: #edeef2;
        border-radius: 20px;
        cursor: pointer;
      }
      .phoneNumberSection,
      .confirmationCode {
        background: #0066ff;
      }
    }
    form {
      .confirmationCodeBox {
        p {
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          color: #1e1e1e;
          margin-top: 28px;
          margin-bottom: 5px;
        }
        .confirmationCodeBoxMain {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #eef1f4;
          border-radius: 5px;
          display: flex;
          align-items: center;
          padding: 1rem 1rem 1rem 0rem; //
          span {
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #0066ff;
            cursor: pointer;
          }
          select {
            border: none;
            outline: none;
            border-right: 1px solid #eef1f4;
            padding: 19px 11px;
            color: #9e9e9e;
          }
          input {
            border: none;
            outline: none;
            padding-left: 10px;
            color: #c5c5c5;
          }
        }
      }
    }
    .nextButtonBox {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #fd875d;
        margin-top: 10px;
      }
    }
    .nextBtn {
      background: #0066ff;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #ffffff;
      padding: 12px 26px;
      border: 1px solid #0066ff;
      border-radius: 5px;
      position: absolute;
      bottom: 15px;
      right: 40px;
      cursor: pointer;
      transition: all 0.3s ease;
      &:active {
        transform: scale(0.9);
      }
    }
  }
  p {
    margin: 0;
    &:last-child {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      text-align: center;
      color: rgba(0, 0, 0, 0.48);
      margin-top: 185px;
    }
  }
}

@media (max-width: 500px) {
  .confirmation-code-page {
    .confirmation-code-box {
      width: 300px; //
      .title-box {
        span {
          font-size: 1.1rem; //
        }
      }
      h3 {
        font-size: 22px; //
      }

      .lines {
        gap: 10px; //
        div {
          width: 100px;
        }
      }
      .nextBtn {
        font-size: 12px; //
        color: #ffffff;
      }
    }
    p {
      &:last-child {
        font-size: 12px; //
        margin-top: 170px; //
      }
    }
  }
}

@media (max-width: 412px) {
  .confirmation-code-page {
    .confirmation-code-box {
      padding: 30px; //
      width: 280px; //
      transform: translateY(180px);
      .title-box {
        span {
          font-size: 1.1rem; //
        }
      }
      .social-networks-box {
        gap: 15px; //
      }
      h3 {
        font-size: 22px; //
      }

      .lines {
        gap: 10px; //div{
        div {
          width: 90px;
        }
      }
      .nextBtn {
        font-size: 12px; //
        transform: translateX(10px);
      }
    }
    p {
      &:last-child {
        margin-top: 380px; //
      }
    }
  }
}
</style>
