<template>
  <div class="sidebar-navigation" id="sidebar-navigation">
    <div class="sidebar-navigation-box">
      <div class="sidebar-navigation-title">
        <h3 class="suptitle">Salom, Xurshid 👋</h3>
        <p class="subtitle">Xaridlaringiz muvaffaqiyatli bo‘lsin.</p>
      </div>
      <div class="sidebar-navigation-navbar">
        <div class="input-box">
          <input class="searchInput" type="text" placeholder="Izlash..." />
          <img :src="iconSearch" alt="search-icon" />
        </div>
        <div class="sidebar-navigation-language-box">
          <img class="uzb-flag" :src="iconUzbFlag" alt="uzbekistan-flag" />
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
.sidebar-navigation {
  background: #ffffff;
  border-bottom: 1px solid #f4f4f4;
}
.suptitle {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000;
}
.subtitle {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #919191;
}
.input-box {
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #f4f4f4;
  border-radius: 10px;
  padding: 8px 10px;
}
.searchInput {
  border: none;
  outline: none;
  padding-left: 14px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #818dae;
}
.sidebar-navigation-language-box {
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #f4f4f4;
  border-radius: 10px;
  padding: 8px 10px;
}
.uzb-flag {
  width: 24px;
  height: 24px;
}
select {
  border: none;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #4a5568;
}
.sidebar-navigation-navbar,
.sidebar-navigation-icons-box {
  display: flex;
  gap: 12px;
}
.sidebar-navigation-icons-box .icon-moon,
.sidebar-navigation-icons-box .icon-bell,
.sidebar-navigation-icons-box .icon-user {
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #f4f4f4;
  border-radius: 10px;
  padding: 10px 12px;
}
.sidebar-navigation {
  padding: 12px 65px;
}
</style>
