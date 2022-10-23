<template>
  <div class="verification">
    <div class="verification-box">
      <div class="logo-box">
        <img :src="logo" alt="logo" />
        <p class="website-name">
          Real<span class="website-name-bold">Pay</span>
        </p>
      </div>
      <p class="title">
        Avtorizatsiya kodi ushbu (+99891 791 11 22) raqamiga SMS
        <br />ko‘rinishida yuborildi.
      </p>
      <p class="text-warning">
        Akkountingiz xavfsizligi uchun ushbu kodni hech kimga bermang!
      </p>
      <input
        class="secret-code"
        type="text"
        placeholder="Maxfiy kodni kiriting"
      />
      <p class="timer">00:47</p>
      <div class="refresh-box">
        <img class="refresh" :src="refresh" alt="refresh" />
        <span class="text-send-code-repeat">Kodni qayta jo'natish</span>
      </div>
      <div class="device-reliable">
        <input class="checkbox" type="checkbox" />
        <span>Qurilma ishonchlimi ?</span>
      </div>
      <p class="subtitle">
        Ushbu uskunaga ishonch bildirib, barcha keyingi kirishlardan
        SMS-tasdiqlovsiz PIN-kod orqali foydalanish imkoni paydo bo‘ladi
      </p>
      <div class="buttons-box">
        <router-link to="/login">
          <button class="back-button">Orqaga</button>
        </router-link>
        <router-link to="/main">
          <button class="access-button">Tasdiqlash</button>
        </router-link>
      </div>
    </div>
    <technicalService />
  </div>
</template>
<script>
//images
import logo from "../../assets/icons/verification/logo.svg";
import refresh from "../../assets/icons/verification/refresh.svg";
// components
import technicalService from "../technical-service/technical-service.vue";
export default {
  components: { technicalService },
  data() {
    return { logo, refresh };
  },
};
</script>

<style scoped>
.verification {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("../../assets/images/verification/bg-dotted-effect.png"),
    linear-gradient(to top, #fff 60%, #0eb2b3 40%);
  height: 100vh;
}
.verification-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 32px 35px;
  margin-top: 50px;
  margin-bottom: 40px;
  width: 389px;
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
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #000000;
  margin-top: 28px;
}

.access-button,
.back-button {
  border-radius: 5px;
  padding: 14px 60px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.5s ease;
  margin-top: 15px;
}

.access-button {
  background: #0eb2b3;
  color: #ffffff;
  border: 1px solid #0eb2b3;
}

.access-button:hover {
  background: #ffffff;
  color: #0eb2b3;
}
.back-button {
  background: #001f31;
  color: #ffffff;
  border: 1px solid #001f31;
}

.back-button:hover {
  background: #ffffff;
  color: #001f31;
}

.text-warning {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #000000;
  margin-top: 3px;
}
.secret-code {
  width: 100%;
  text-align: center;
  padding: 14px 0;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #9597a8;
  border: 1px solid #d5e3ed;
  border-radius: 5px;
  margin-top: 20px;
}
.timer {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: #000000;
  margin-top: 20px;
}
.refresh-box {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}
.device-reliable {
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
}
.checkbox {
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
}
.subtitle {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #000000;
  margin-top: 18px;
}
.buttons-box {
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 20px;
}
</style>
