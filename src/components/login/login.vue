<template>
  <div class="login">
    <div class="login-box">
      <div class="logo-box">
        <img :src="logo" alt="logo" />
        <p>Real<span>Pay</span></p>
      </div>
      <h3 class="title">Kirish yoki ro'yxatdan o'tish</h3>
      <form>
        <img :src="phone" alt="phone" />
        <input type="text" placeholder="+998 Telefon raqamingiz" />
        <router-link to="/secret-code"> <button>kirish</button> </router-link>
      </form>
      <p class="subtitle">
        Playmarket yoki AppStore orqali mobil ilovani o‘rnating
      </p>
      <div class="apps">
        <img :src="googlePlay" alt="google-play" />
        <img :src="appStore" alt="app-store" />
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
<style>
.login {
  height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(to top, #fff 60%, #0eb2b3 40%);
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
  padding: 35px 45px;
}
.logo-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
