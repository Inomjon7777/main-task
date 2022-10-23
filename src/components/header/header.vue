<template>
  <header class="header">
    <div class="container">
      <div class="header-boxes">
        <!-- words -->
        <div class="words">
          <p class="suptitle">
            To‘lovlarni amalga oshiring va keshbekka ega bo‘ling!
          </p>
          <p class="title">
            To'lovlarni mobil ilovada yoki web-sahifada qiyinchiliklarsiz amalga
            oshiring 🤑
          </p>
          <p class="subtitle">Bizning ilovani ko’chirib oling 👇</p>
          <div class="apps">
            <img class="playStore" :src="PlayStore" alt="PlayStore" />
            <img class="appStore" :src="AppStore" alt="AppStore" />
          </div>
          <img class="shape" :src="Shape" alt="sun-background" />
        </div>

        <!-- banner -->
        <div class="banner">
          <img class="banner-image" :src="man" alt="man" />
        </div>
      </div>
    </div>
  </header>
  <Features />
  <EasyPayment />
  <Partners />
  <Foot />
</template>

<script>
// images
import man from "../../assets/images/hero/man.png";
import PlayStore from "../../assets/images/hero/PlayStore.png";
import AppStore from "../../assets/images/hero/AppStore.png";
import Shape from "../../assets/images/hero/Shape 1.png";
// component
import Navbar from "../navbar/navbar.vue";
import Features from "../features/features.vue";
import EasyPayment from "../easy-payment/easy-payment.vue";
import Partners from "../partners/partners.vue";
import Foot from "../footer/footer.vue";
export default {
  components: { Navbar, Features, EasyPayment, Partners, Foot },
  data() {
    return {
      //images
      man,
      PlayStore,
      AppStore,
      Shape,
    };
  },
};
</script>

<style scoped>
.header {
  background-image: url("../../assets/images/hero/bg-effect.png"),
    linear-gradient(to right, #fff 66%, #0eb2b3 34%);
  background-size: 100%;
  padding-top: 87px;
}
.header-boxes {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.suptitle {
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  color: #001f31;
}
.title {
  margin-bottom: 69px;
  font-size: 24px;
  color: #000000;
}
.subtitle {
  margin-bottom: 21px;
  font-size: 20px;
  color: #000000;
}
.apps {
  display: flex;
  gap: 14px;
}
.banner-image {
  width: 520px;
  height: 590px;
  padding-top: 40px;
  transform: translateY(4px);
  object-fit: contain;
}
.word {
  position: relative;
}
.shape {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 400px;
  width: 400px;
}
.playStore,
.appStore {
  z-index: 100;
  cursor: pointer;
}
.playStore:active,
.appStore:active {
  transform: scale(0.97);
}
</style>
