<template>
  <div class="payments">
    <p class="payments-title">
      Asosiy<span class="payments-title-grey"> / To'lovlar</span>
    </p>
    <div class="payments-boxes">
      <div class="payments-box">lorem</div>
      <div class="balance">
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
.payments-boxes {
  border: 1px solid #c3c3c3;
  display: flex;
  width: 100%;
  height: 600px;
}

.payments-box {
  flex-grow: 6;
  background-color: coral;
  width: 70%;
}
.balance {
  flex-grow: 4;
  background-color: lightblue;
  width: 30%;
}
.payments-title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
}
.payments-title-grey {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #919191;
}
</style>
