<template>
  <footer class="footer">
    <!-- footer-suptitle-box -->
    <div class="container">
      <div class="footer-suptitle-box">
        <div class="logo-box">
          <img class="logo" :src="logo" alt="logo" />
          <p class="website-name">
            Real<span class="website-name-bold">Pay</span>
          </p>
        </div>
        <div class="address">
          <p class="home-address">
            Yunusobod tumani, Amir Temur ko‘chasi 107-B
          </p>
          <p class="phone-number">+998 71 205 84 84</p>
        </div>
      </div>
    </div>

    <!-- footer-title-box -->
    <div class="container">
      <div class="footer-title-box">
        <ul class="footer-bar">
          <li>Maxfiylik siyosati</li>
          <li>Ommaviy oferta</li>
          <li>To’lov tashkiloti litsenziyasi</li>
          <li>Ekologik siyosat</li>
        </ul>
        <div class="social-networks">
          <a href="https://desktop.telegram.org/" target="blank">
            <img class="telegram" :src="telegram" alt="telegram" />
          </a>
          <a href="https://www.facebook.com/" target="blank">
            <img class="facebook" :src="facebook" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/" target="blank">
            <img class="instagram" :src="instagram" alt="instagram" />
          </a>
        </div>
      </div>
    </div>

    <!-- footer-subtitle-box -->
    <div class="container">
      <div class="footer-subtitle-box">
        <p class="footer-developer-text">
          @ RealSoft 2022. Barcha huquqlar himoyalangan
        </p>
        <p class="website-creator">
          Sayt yaratuvchisi:
          <span class="realsoft">
            <a class="realsoft-link" href="https://realsoft.uz/" target="blank"
              >REALSOFT</a
            >
          </span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
//images
import logo from "../../assets/icons/footer/logo.svg";
import telegram from "../../assets/icons/footer/telegram.svg";
import facebook from "../../assets/icons/footer/facebook.svg";
import instagram from "../../assets/icons/footer/instagram.svg";

export default {
  data() {
    return {
      //images
      logo,
      telegram,
      facebook,
      instagram,
    };
  },
};
</script>

<style scoped>
.footer {
  background: #001f31;
  color: #fff;
}
.logo-box {
  display: flex;
  align-items: center;
  gap: 7px;
}
.footer-suptitle-box,
.footer-title-box,
.footer-subtitle-box,
.footer-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
}
.footer-bar {
  gap: 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #6b7d87;
  cursor: pointer;
}
.container {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.website-name {
  font-size: 1.5rem;
  font-style: normal;
}
.website-name-bold {
  font-weight: bold;
}
.address {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  gap: 10px;
}
.home-address {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #6b7d87;
}
.phone-number {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
}
.social-networks {
  display: flex;
  gap: 32px;
}
.telegram,
.facebook,
.instagram {
  cursor: pointer;
}
.footer-developer-text {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #6b7d87;
}
.website-creator {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #6b7d87;
}
.realsoft-link {
  color: #2979ff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
.logo-box {
  cursor: pointer;
}
</style>
