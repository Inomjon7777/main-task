<template>
  <div class="login">
    <div class="login-box">
      <div class="logo-box">
        <img :src="logo" alt="logo" />
        <p class="website-name">
          Real<span class="website-name-bold">Pay</span>
        </p>
      </div>
      <h3 class="title">Kirish yoki ro'yxatdan<br />o'tish</h3>
      <form>
        <div class="phone-box">
          <img :src="phone" alt="phone" />
          <input
            class="phoneInput"
            type="text"
            placeholder="+998  Telefon raqamingiz"
          />
        </div>
        <router-link to="/verification">
          <button class="access-button">KIRISH</button>
        </router-link>
      </form>
      <p class="subtitle">
        Playmarket yoki AppStore orqali mobil <br />ilovani o‘rnating
      </p>
      <div class="apps">
        <a href="https://play.google.com/store/games?hl=ru&gl=US">
          <img class="google-play" :src="googlePlay" alt="google-play" />
        </a>
        <a href="https://www.apple.com/ru/app-store/">
          <img class="app-store" :src="appStore" alt="app-store" />
        </a>
      </div>
    </div>
    <technicalService />
  </div>
</template>
<script>
import logo from "../../assets/icons/login/logo.svg";
import phone from "../../assets/icons/login/phone.svg";
import googlePlay from "../../assets/images/login/google-play.png";
import appStore from "../../assets/images/login/app-store.png";
import technicalService from "../technical-service/technical-service.vue";
export default {
  components: { technicalService },
  data() {
    return { logo, phone, googlePlay, appStore };
  },
};
</script>
<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to top, #fff 60%, #0eb2b3 40%);
  height: 100vh;
}
.login-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 30px;
  margin-top: 50px;
  margin-bottom: 20px;
}
.logo-box {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
}
.website-name {
  font-size: 1.5rem;
}
.website-name-bold {
  font-weight: bold;
}
.title {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  color: #000000;
  margin-top: 28px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
.access-button {
  background: #0eb2b3;
  color: #fff;
  border-radius: 5px;
  padding: 14px 167px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  border: 1px solid #0eb2b3;
  cursor: pointer;
  transition: all 0.5s ease;
  margin-top: 15px;
}
.access-button:hover {
  background: #fff;
  color: #0eb2b3;
}
.phone-box {
  display: flex;
  align-items: center;
  justify-self: start;
  width: 92%;
  border: 1px solid #d5e3ed;
  border-radius: 5px;
  padding: 14px;
  margin-top: 28px;
}
.phoneInput {
  border: none;
  outline: none;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #9597a8;
  padding: 0 20px;
}
.subtitle {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}
.apps {
  margin-top: 16px;
  display: flex;
  gap: 15px;
}
.google-play,
.app-store {
  width: 185px;
}
</style>
