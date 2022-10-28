<template>
  <div class="payments">
    <div class="title-wrapper"></div>
    <div class="payments-boxes">
      <div class="payments-box">
        <p class="payments-box__title">To‘lovlar</p>
        <img class="smart_market" :src="smart_market" alt="smart_market" />
      </div>
      <div class="balance">
        <div class="total-balance-box">
          <div class="title-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              pariatur nisi perferendis saepe rem minima at veniam. Quia,
              deserunt necessitatibus nam nostrum ipsa eius recusandae voluptate
            </p>
          </div>
        </div>
        <div class="my-cards"></div>
        <div class="central-bank-rates"></div>
      </div>
    </div>
  </div>
</template>

<script>
import smart_market from "../../../assets/images/payments/market place.png";
import balance from "../balance/balance.vue";
export default {
  components: { balance },
  data() {
    return {
      //icons
      smart_market,
    };
  },
};
</script>

<style scoped>
.payments {
  background: #f0f0f0;
}
.payments-boxes {
  display: flex;
  width: 100%;
  height: 610px;
}

.payments-box {
  flex-grow: 6;
  width: 70%;
  background: #ffffff;
  border-radius: 10px;
  margin: 24px;
}

/*BALANCE*/
.balance {
  flex-grow: 4;
  width: 30%;
  border-radius: 10px;
  margin: 24px 24px 24px 0px;
}
.payments-title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
  margin-left: 24px;
  padding-top: 18px;
}
.payments-title-grey {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #919191;
}
.payments-box__title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #021723;
  margin: 20px 0px 18px 22px;
}
.smart_market {
  margin-left: 22px;
  cursor: pointer;
}
.total-balance-box {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
}
.my-cards {
  background: #fff;
  border-radius: 10px;
  margin: 24px 0;
  padding: 20px;
}
.central-bank-rates {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
}
.payments-title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
