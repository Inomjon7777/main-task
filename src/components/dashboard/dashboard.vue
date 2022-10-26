<template>
  <div class="dashboard">
    <sidebar />
    <div class="content">
      <SidebarNavigation />
      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarNavigation from "../sidebar/sidebar-navigation/sidebar-navigation.vue";
import sidebar from "../sidebar/sidebar.vue";
export default {
  name: "home",
  components: { sidebar, SidebarNavigation },
};
</script>

<style>
.dashboard {
  height: 100vh;
  display: flex;
}

.content {
  background-color: #fff;
  border-radius: 10px;
  margin: 6px 6px 6px 0px;
  width: 100%;
}
</style>
