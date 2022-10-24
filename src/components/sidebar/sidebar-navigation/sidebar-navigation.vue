<template>
  <div class="sidebar-navigation" id="sidebar-navigation">
    <div class="sidebar-navigation-box">
      <div class="sidebar-navigation-title">
        <h3>Salom, Xurshid 👋</h3>
        <p>Xaridlaringiz muvaffaqiyatli bo‘lsin.</p>
      </div>
      <div class="sidebar-navigation-navbar">
        <div class="input-box">
          <input type="text" />
          <img :src="iconSearch" alt="search-icon" />
        </div>
        <div class="sidebar-navigation-language-box">
          <img :src="iconUzbFlag" alt="uzbekistan-flag" />
          <select>
            <option value="uzb">O'zbek</option>
          </select>
        </div>
        <div class="sidebar-navigation-icons-box">
          <img class="icon-moon" :src="iconMoon" alt="moon" />
          <img class="icon-bell" :src="iconBell" alt="bell" />
          <img class="icon-user" :src="iconUser" alt="user" />
          <img class="icon-strelka" :src="iconStrelka" alt="strelka" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//icons
import iconSearch from "../../../assets/icons/sidebar-navigation/search.svg";
import iconUzbFlag from "../../../assets/icons/sidebar-navigation/uzb-flag.svg";
import iconMoon from "../../../assets/icons/sidebar-navigation/moon.svg";
import iconBell from "../../../assets/icons/sidebar-navigation/bell.svg";
import iconUser from "../../../assets/icons/sidebar-navigation/user.svg";
import iconStrelka from "../../../assets/icons/sidebar-navigation/strelka.svg";
export default {
  data() {
    return {
      //icons
      iconSearch,
      iconUzbFlag,
      iconMoon,
      iconBell,
      iconUser,
      iconStrelka,
    };
  },
};
</script>
<style scoped>
.sidebar-navigation-box,
.sidebar-navigation-navbar,
.input-box,
.sidebar-navigation-language-box,
.sidebar-navigation-icons-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
