<template>
  <navigation>
    <hero />
  </navigation>
  <router-view />
</template>

<script>
import hero from "./components/hero/hero.vue";
import navigation from "./components/nav/nav.vue";
export default {
  components: {
    navigation,
    hero,
  },
};
</script>

<style lang="scss">
* {
  scroll-behavior: smooth;
  text-decoration: none;
}
body {
  margin: 0;
  font-family: gilroy;
}
@font-face {
  font-family: gilroy;
  src: url("./assets/font/gilroy/Gilroy-Regular.ttf");
}
a {
  color: #333;
}
.container {
  padding: 5px 11rem;
}
</style>
