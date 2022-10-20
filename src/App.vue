<template>
  <Nav />
  <Hero />
  <Opportunities />
  <Advantages />
  <Tariffs />
  <Connection />
  <Footer />
</template>

<script>
import Nav from "./components/nav/nav.vue";
import Hero from "./components/hero/hero.vue";
import Opportunities from "./components/opportunities/opportunities.vue";
import Advantages from "./components/advantages/advantages.vue";
import Tariffs from "./components/tariffs/tariffs.vue";
import Connection from "./components/connection/connection.vue";
import Footer from "./components/footer/footer.vue";
export default {
  components: {
    Nav,
    Hero,
    Opportunities,
    Advantages,
    Tariffs,
    Connection,
    Footer,
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
