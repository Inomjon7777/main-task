<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-boxes">
        <!-- Logo -->
        <div class="logo">
          <img class="logo" :src="logo" alt="logo" />
          <div class="website-name">
            <span class="website-name-normal">Real</span>
            <span class="website-name-bold">Pay</span>
          </div>
        </div>

        <!-- Navbar -->
        <div class="navbar">
          <p class="payments">
            <img class="wallet" :src="wallet" alt="wallet" />
            To’lovlar
          </p>

          <p class="dispatcher-assistance">
            <img class="headset" :src="headset" alt="headset" />
            24/7 yordam
          </p>

          <div class="languages">
            <img class="uzbek-language-icon" :src="uzbFlag" alt="uzbLang" />
            <select>
              <option class="uzbek-language" value="uzbek">O'zbek tili</option>
            </select>
          </div>

          <button class="account">
            <img class="log-out" :src="logOut" alt="log-out" />
            Akkountga kirish
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
//assets/icons
import logo from "../../assets/icons/navbar/logo.svg";
import wallet from "../../assets/icons/navbar/wallet.svg";
import headset from "../../assets/icons/navbar/headset.svg";
import uzbFlag from "../../assets/icons/navbar/uzbekistan-flag.svg";
import logOut from "../../assets/icons/navbar/log-out.svg";

export default {
  data() {
    return {
      //assets/icons
      logo,
      wallet,
      headset,
      uzbFlag,
      logOut,
    };
  },
};
</script>

<style scoped>
.nav {
  padding: 14px 0;
  background: rgba(255, 255, 255, 0.85);
  border-width: 1px 0px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.13);
  backdrop-filter: blur(25px);
  position: -webkit-sticky;
  position: fixed;
  top: 0;
  z-index: 200;
  width: 100%;
}
.nav-boxes,
.logo,
.navbar,
.payments,
.dispatcher-assistance,
.languages,
.account {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo,
.payments,
.dispatcher-assistance,
.languages,
.account {
  cursor: pointer;
}
.languages,
.payments,
.dispatcher-assistance,
.languages,
.account {
  gap: 10px;
}
.navbar {
  gap: 30px;
}
.logo {
  gap: 6px;
}
.website-name {
  font-size: 1.5rem;
}
.website-name-bold {
  font-weight: bold;
}
select {
  border: none;
  outline: none;
  background: transparent;
}
.account {
  padding: 17px 20px;
  background: #0eb2b3;
  border: 1px solid #0eb2b3;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
}
.account:active {
  transform: scale(0.97);
}
</style>
