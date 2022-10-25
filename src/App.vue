<template>
  <!-- <nav></nav> -->
  <router-view />
</template>
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: sans-serif;
  text-decoration: none;
  scroll-behavior: smooth;
}

.container {
  padding: 0 12rem;
}
.sidebar-container {
  padding: 0 65px;
}
@font-face {
  font-family: "Gilroy";
  src: url("./assets/fonts/gilroy/Gilroy-Medium.woff") format("woff");
}
@font-face {
  font-family: "SF Pro Display";
  src: url("./assets/fonts/SFProDisplay/SFProDisplay-Medium.woff")
    format("woff");
}
</style>
