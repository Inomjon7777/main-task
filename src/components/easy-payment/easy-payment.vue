<template>
  <div class="easy-payment">
    <div class="container">
      <div class="easy-payment-boxes">
        <div class="word">
          <h2 class="suptitle">
            SmartMarket uchun to‘lov qilish <br />yanada osonlashdi!
          </h2>
          <p class="subtitle">
            Shaxsiy kabinet orqali SmartMarket mahsulotlariga <br />
            to‘lovni amalga oshiring. Kartadan-kartaga <br />
            o‘tkazmalar ham mavjud 😊
          </p>
        </div>
        <div class="banner">
          <img class="greenBanner" :src="greenBanner" alt="green-banner" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import greenBanner from "../../assets/images/easy-payment/green-banner.png";
export default {
  data() {
    return {
      //images
      greenBanner,
    };
  },
};
</script>

<style scoped>
.easy-payment {
  background: #f7f8fa;
}
.easy-payment-boxes {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
}
.suptitle {
  margin-top: 100px;
  margin-bottom: 30px;
}
.subtitle {
  margin-bottom: 96px;
}
.greenBanner {
  width: 100%;
}
</style>
