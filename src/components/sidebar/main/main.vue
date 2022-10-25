<template>
  <div class="main">
    <div class="sidebar-container">
      <div class="wrapper">
        <div class="main-box">
          <h1 class="title-black">
            Asosiy<span class="title-grey"> / Asosiy</span>
          </h1>

          <!-- sidebar-background-boxes -->
          <div class="sidebar-background-boxes">
            <div class="sidebar-background-box">
              <img
                class="backgroundOne"
                :src="backgroundOne"
                alt="backgroundOne"
              />
              <p class="suptitle">News</p>
              <p class="title">News title</p>
              <p class="description">This is description</p>
            </div>
            <div class="sidebar-background-box">
              <img
                class="backgroundTwo"
                :src="backgroundTwo"
                alt="backgroundTwo"
              />
              <p class="suptitle">News</p>
              <p class="title">News title</p>
              <p class="description">This is description</p>
            </div>
            <div class="sidebar-background-box">
              <img
                class="backgroundThree"
                :src="backgroundThree"
                alt="backgroundThree"
              />
              <p class="suptitle">News</p>
              <p class="title">News title</p>
              <p class="description">This is description</p>
            </div>
            <div class="sidebar-background-box">
              <img
                class="backgroundFour"
                :src="backgroundFour"
                alt="backgroundFour"
              />
              <p class="suptitle">News</p>
              <p class="title">News title</p>
              <p class="description">This is description</p>
            </div>
            <div class="sidebar-background-box">
              <img
                class="backgroundFive"
                :src="backgroundFive"
                alt="backgroundFive"
              />
              <p class="suptitle">News</p>
              <p class="title">News title</p>
              <p class="description">This is description</p>
            </div>
          </div>

          <!-- payment for products -->
          <div class="payment-for-products">
            <div class="payment-for-products-title">
              Mahsulotlar uchun to’lov
            </div>
            <div class="payment-for-products-subtitle">
              Xizmat faqat SmartMarket.uz onlayn do‘konlari uchun
            </div>
          </div>
        </div>

        <div class="total-balance-box">
          <p>Umuiy balans</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//components
import sidebarNavigation from "../sidebar-navigation/sidebar-navigation.vue";
//images
import backgroundOne from "../../../assets/images/main/background-1.png";
import backgroundTwo from "../../../assets/images/main/background-2.png";
import backgroundThree from "../../../assets/images/main/background-3.png";
import backgroundFour from "../../../assets/images/main/background-4.png";
import backgroundFive from "../../../assets/images/main/background-5.png";
export default {
  data() {
    return {
      //images
      backgroundOne,
      backgroundTwo,
      backgroundThree,
      backgroundFour,
      backgroundFive,
    };
  },
  components: {
    sidebarNavigation,
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
}
.main {
  background: #fafafa;
  height: 89vh;
}
.title-black {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
  padding-top: 18px;
}
.title-grey {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #919191;
}
.sidebar-background-boxes {
  display: flex;
  gap: 23px;
}
.sidebar-background-box {
  margin-top: 14px;
  position: relative;
  cursor: pointer;
}
.suptitle,
.title,
.description {
  position: absolute;
}
.suptitle {
  top: 75px;
  left: 10px;
  padding: 6px 12px;
  background: #137cdd;
  border-radius: 60px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #ffffff;
}
.title {
  left: 10px;
  top: 105px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
}
.description {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #ffffff;
  top: 135px;
  left: 10px;
}

.backgroundOne,
.backgroundTwo,
.backgroundThree,
.backgroundFour,
.backgroundFive {
  width: 211px;
  height: 163px;
}
</style>
