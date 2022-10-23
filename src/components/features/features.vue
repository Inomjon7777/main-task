<template>
  <div class="features">
    <div class="container">
      <div class="features-box">
        <div class="monitoring-of-payments">
          <img :src="clock" alt="clock" />
          <div>
            <p class="suptitle">To’lovlar monitoringi</p>
            <p class="subtitle">Ixtiyoriy muddat uchun to‘lov monitoringi</p>
          </div>
        </div>
        <div class="add-cards">
          <img :src="card" alt="card" />
          <div>
            <p class="suptitle">Kartalarni qo’shish</p>
            <p class="subtitle">Siz istagancha karta qo‘shishingiz mumkin</p>
          </div>
        </div>
        <div class="save-payment">
          <img :src="cloud" alt="cloud" />
          <div>
            <p class="suptitle">To’lovni saqlash</p>
            <p class="subtitle">
              To’lovni saqlab qo’ying va keyingi safar uni osongina takrorlang
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//assets/icons
import clock from "../../assets/icons/features/clock.svg";
import card from "../../assets/icons/features/card.svg";
import cloud from "../../assets/icons/features/cloud.svg";
export default {
  data() {
    return {
      clock,
      card,
      cloud,
    };
  },
};
</script>

<style scoped>
.features {
  background: #fff;
  padding: 45px 0;
}
.features-box {
  gap: 80px;
}
.features-box,
.monitoring-of-payments,
.add-cards,
.save-payment {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.monitoring-of-payments,
.add-cards,
.save-payment {
  gap: 20px;
}
.suptitle {
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  margin: 0;
}
.subtitle {
  font-weight: 400;
  font-size: 13px;
  color: #000000;
  margin-top: 10px;
}
</style>
