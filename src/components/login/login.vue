<template>
  <div class="login">
    login page
    <div class="login-box">
      <div class="logo-box">
        <img :src="logo" alt="logo" />
        <p>Real<span>Pay</span></p>
      </div>
      <h3 class="title">Kirish yoki ro'yxatdan o'tish</h3>
    </div>

    <router-link to="/secret-code"> <button>kirish</button> </router-link>
  </div>
</template>
<script>
import logo from "../../assets/icons/login/logo.svg";
export default {
  data() {
    return { logo };
  },
};
</script>
<style></style>
