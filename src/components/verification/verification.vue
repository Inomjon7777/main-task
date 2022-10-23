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
      <form>
        <div class="phone-box">
          <input
            class="phoneInput"
            type="text"
            placeholder="Maxfiy kodni kiriting"
          />
        </div>
        <p class="timer">00:47</p>
        <router-link to="/main">
          <button class="access-button">Tasdiqlash</button>
        </router-link>
      </form>
      <p class="subtitle">
        Playmarket yoki AppStore orqali mobil <br />ilovani o‘rnating
      </p>
    </div>
    <technicalService />
  </div>
</template>
<script>
import logo from "../../assets/icons/verification/logo.svg";
import technicalService from "../technical-service/technical-service.vue";
export default {
  components: { technicalService },
  data() {
    return { logo };
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
  padding: 35px;
  margin-top: 50px;
  margin-bottom: 40px;
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
  gap: 14px;
}
.text-warning {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #000000;
}
</style>
