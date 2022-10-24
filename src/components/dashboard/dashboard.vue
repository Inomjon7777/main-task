<template>
  <div class="dashboard">
    <sidebar />
    <div class="content"><sidebarNavigation /> <router-view /></div>
  </div>
</template>

<script>
import sidebar from "../sidebar/sidebar.vue";
import sidebarNavigation from "../sidebar/sidebar-navigation/sidebar-navigation.vue";
export default {
  name: "home",
  components: { sidebar, sidebarNavigation },
};
</script>

<style>
.dashboard {
  height: 100vh;
  display: flex;
}

.content {
  background-color: white;
  border-radius: 10px;
  margin: 6px 6px 6px 0px;
}
</style>
