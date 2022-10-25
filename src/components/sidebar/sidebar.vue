<template>
  <input type="checkbox" id="check" />
  <label for="check">
    <i class="fas fa-bars" id="btn"></i>
    <i class="fas fa-times" id="cancel"></i>
  </label>
  <div class="sidebar">
    <div class="logo-box">
      <img :src="iconSidebarLogo" alt="sidebar-logo" />
      <p>Real<span class="logo-text-bold">Pay</span></p>
    </div>
    <ul class="sections-box">
      <p class="sidebar-title">BOSHQARUV PANELI</p>

      <router-link to="/main-page">
        <li>
          <a href="#" class="sections-item">
            <img :src="iconHome" alt="icon-home" class="icon-home" />
            Asosiy</a
          >
        </li>
      </router-link>

      <router-link to="/transfers-page">
        <li>
          <a href="#" class="sections-item">
            <img
              :src="iconTransfers"
              alt="icon-transfers"
              class="icon-transfers"
            />
            O'tkazmalar</a
          >
        </li>
      </router-link>

      <router-link to="payments-page">
        <li>
          <a href="#" class="sections-item">
            <img :src="iconWallet" alt="icon-wallet" class="icon-wallet" />
            To'lovlar</a
          >
        </li>
      </router-link>

      <router-link to="my-cards-page">
        <li>
          <a href="#" class="sections-item">
            <img :src="iconCards" alt="icon-cards" class="icon-cards" />
            Mening kartalarim</a
          >
        </li>
      </router-link>

      <router-link to="/monitoring-page">
        <li>
          <a href="#" class="sections-item">
            <img
              :src="iconMonitoring"
              alt="icon-monitoring"
              class="icon-monitoring"
            />
            Monitoring</a
          >
        </li>
      </router-link>
    </ul>
    <div class="sidebar-footer">
      <div class="sidebar-footer-title-box">
        <span class="sidebar-footer-title">
          Sizga qandaydir <br />
          yordam kerakmi?
        </span>
        <img class="icon-wave" :src="iconWave" alt="icon-wave" />
      </div>
      <div class="sidebar-footer-connect-box">
        <img class="icon-medal" :src="iconMedal" alt="icon-medal" />
        <span>Bog‘lanish</span>
      </div>
      <img class="icon-dottes" :src="iconDottes" alt="icon-dottes" />
    </div>
  </div>
  <section></section>
</template>
<script>
//icons
import iconSidebarLogo from "../../assets/icons/sidebar/sidebar-logo.svg";
import iconHome from "../../assets/icons/sidebar/home.svg";
import iconTransfers from "../../assets/icons/sidebar/transfers.svg";
import iconWallet from "../../assets/icons/sidebar/wallet.svg";
import iconCards from "../../assets/icons/sidebar/cards.svg";
import iconMonitoring from "../../assets/icons/sidebar/monitoring.svg";
import iconWave from "../../assets/icons/sidebar-footer/wave.svg";
import iconMedal from "../../assets/icons/sidebar-footer/medal.svg";
import iconDottes from "../../assets/icons/sidebar-footer/dottes.svg";

//components
import sidebarNavigation from "./sidebar-navigation/sidebar-navigation.vue";
export default {
  components: { sidebarNavigation },
  data() {
    return {
      //icons
      iconSidebarLogo,
      iconHome,
      iconTransfers,
      iconWallet,
      iconCards,
      iconMonitoring,
      iconWave,
      iconMedal,
      iconDottes,
    };
  },
};
</script>
<style scoped>
.sidebar {
  position: fixed;
  left: -250px;
  width: 250px;
  height: 100%;
  background: #fff;
  transition: all 0.5s ease;
}

.logo-box {
  font-size: 22px;
  color: #000;
  text-align: center;
  line-height: 70px;
  background: #fff;
  user-select: none;
  display: flex;
  align-items: center;
  padding-left: 20px;
  gap: 11px;
  cursor: pointer;
}
.logo-text-bold {
  font-weight: bold;
}

li a {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 65px;
  color: #000;
  padding-left: 18px;
  box-sizing: border-box;
  transition: 0.4s;
}

.icon-home,
.icon-transfers,
.icon-wallet,
.icon-cards,
.icon-monitoring {
  filter: invert(90%) sepia(79%) saturate(2467%) hue-rotate(86deg)
    brightness(118%) contrast(5%);
}

.sidebar-title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #d1d1d1;
  margin-left: 20px;
  margin-top: 31px;
  margin-bottom: 13px;
}

.sections-item {
  display: flex;
  align-items: center;
  gap: 13px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #6a7494;
  border-radius: 10px;
  margin: 0px 20px;
  width: 208px;
  height: 56px;
}
.sections-item:focus {
  background: #000e58;
  color: #fff;
}

.sections-item:focus .icon-home,
.sections-item:focus .icon-transfers,
.sections-item:focus .icon-wallet,
.sections-item:focus .icon-cards,
.sections-item:focus .icon-monitoring {
  filter: invert(0%) sepia(0%) saturate(2476%) hue-rotate(86deg)
    brightness(118%) contrast(119%);
}

.sidebar ul a i {
  margin-right: 16px;
}
#check {
  display: none;
}
label #btn,
label #cancel {
  position: absolute;
  cursor: pointer;
  background: rgb(231, 231, 231);
  border-radius: 3px;
}
label #btn {
  left: 10px;
  top: 24px;
  font-size: 23px;
  color: #fff;
  padding: 6px 12px;
  transition: all 0.5s;
}
label #cancel {
  z-index: 1111;
  left: -195px;
  top: 17px;
  font-size: 30px;
  color: rgb(206, 206, 206);
  padding: 4px 9px;
  transition: all 0.5s ease;
}
#check:checked ~ .sidebar {
  left: 0;
}
#check:checked ~ label #btn {
  left: 250px;
  opacity: 0;
  pointer-events: none;
}
#check:checked ~ label #cancel {
  left: 195px;
}
#check:checked ~ section {
  margin-left: 250px;
}
section {
  background-color: #fafafa;
  background-position: center;
  background-size: cover;
  height: 100vh;
  transition: all 0.5s;
}
.sidebar-footer {
  background: #ffd43b;
  position: absolute;
  bottom: 0;
  width: 180px;
  margin: 20px;
  border-radius: 10px;
  padding: 15px;
}
.sidebar-footer-connect-box {
  background: #fff;
}
.sidebar-footer-title-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar-footer-title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #171b1e;
}
.sidebar-footer-connect-box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 4px;
}
.sidebar-footer-connect-box span {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
}
.sidebar-footer-connect-box span,
.sidebar-footer-connect-box img {
  cursor: pointer;
}
.icon-dottes {
  position: absolute;
  bottom: 3px;
  left: 3px;
  height: 9px;
}
</style>
