<template>
  <div class="main">
    <div class="sidebar-container">
      <h1 class="title-black">Asosiy<span class="title-grey">/Asosiy</span></h1>
    </div>
  </div>
</template>
<script>
import sidebarNavigation from "../sidebar-navigation/sidebar-navigation.vue";
export default {
  components: { sidebarNavigation },
};
</script>
<style scoped>
.title-black {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
}
.title-grey {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #919191;
}
</style>
