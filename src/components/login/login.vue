<template>
  <router-view></router-view>
  <div class="login">
    <div class="login-box">
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
      <h3>Kirish</h3>
      <form>
        <div class="phoneNumberBox">
          <p>Telefon raqamini kiriting</p>
          <div class="phoneNumberBoxMain">
            <select>
              <option value="UZB">+998</option>
              <option value="BRA">+55</option>
              <option value="CAN">+1</option>
              <option value="CHN">+86</option>
              <option value="IND">+91</option>
            </select>
            <input type="text" placeholder="99 123 45 67" />
          </div>
        </div>
        <div class="codeBox">
          <p>Tasdiqlash kodi</p>
          <input type="text" placeholder="1 2 3 4 5 6" />
        </div>
      </form>
      <button class="nextBtn">Keyingi</button>
    </div>
    <p>Copyright © 2022. REALSOFT. Barcha huquqlar himoyalangan</p>
  </div>
</template>

<script>
//images
import logo from "../../assets/images/login/logo.jpg";
import iconFacebook from "../../assets/icons/login/facebook.svg";
import iconApple from "../../assets/icons/login/apple.svg";
import iconGoogle from "../../assets/icons/login/google.svg";
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
.login {
  background: url("../../assets/images/login/mountain.jpg");
  background-repeat: no-repeat;
  height: 45vh;
  display: grid;
  place-items: center;
  .login-box {
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
    form {
      .phoneNumberBox {
        p {
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          color: #1e1e1e;
          margin-top: 9px;
          margin-bottom: 5px;
        }
        .phoneNumberBoxMain {
          border: 1px solid #eef1f4;
          border-radius: 5px;
          display: flex;
          align-items: center;
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
      .codeBox {
        width: 100%;
        p {
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          color: #1e1e1e;
          margin-bottom: 5px;
          margin-top: 10px;
        }
        input {
          padding: 19px 11px;
          color: #c5c5c5;
          border: 1px solid #eef1f4;
          border-radius: 5px;
          width: 328px;
          outline: none;
        }
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
  .login {
    .login-box {
      width: 300px; //
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

      .nextBtn {
        font-size: 12px; //
        color: #ffffff;
      }
      form {
        .codeBox {
          input {
            width: 275px;
          }
        }
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
  .login {
    .login-box {
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
        gap: 10px; //
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
