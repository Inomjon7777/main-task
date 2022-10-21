<template>
  <div>
    <Header />
    <Features />
    <EasyPayment />
    <Partners />
    <Footer />
  </div>
</template>

<script>
//components
import Header from "./components/header/header.vue";
import Features from "./components/features/features.vue";
import EasyPayment from "./components/easy-payment/easy-payment.vue";
import Partners from "./components/partners/partners.vue";
import Footer from "./components/footer/footer.vue";
export default {
  components: {
    //components
    Header,
    Features,
    EasyPayment,
    Partners,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

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
</style>
