<template>
  <div class="payments">
    <div class="payments-boxes">
      <!-- payments-box -->
      <div class="payments-box">
        <p class="payments-box__title">
          Asosiy<span class="payments-box__title-gray"> / To'lovlar</span>
        </p>
        <div class="payments-box-child">
          <p class="payments-box-child__title">To'lovlar</p>
          <div class="smart-market">
            <div class="smart-market-box">
              <img :src="icon_smart_market" alt="icon_smart_market" />
              <div class="smart-market-box__word-box">
                <p class="smart-market-logo-text">
                  <span class="text-smart-market-grey">smart</span>
                  <br />
                  <span class="text-smart-market-bold"
                    >market <sup>&#174;</sup><br />
                    place
                  </span>
                </p>
              </div>
            </div>
            <p class="word-smart-market">Smart Market</p>
          </div>
        </div>
      </div>
      <!-- total-balance-box -->
      <div class="total-balance-box">
        <p class="total-balance-box__title">Umumiy balans</p>
        <div class="total-balance-box-child">
          <!-- balance-box -->
          <div class="balance-box">
            <div class="balance-box__title-box">
              <div class="earnings-box">
                <img
                  class="icon_download"
                  :src="icon_download"
                  alt="icon_download"
                />
                <div class="earnings-box__word-box">
                  <p>Tushumlar</p>
                  <span>5 457 120.00 UZS</span>
                </div>
              </div>
              <div class="outputs-box">
                <img class="icon_upload" :src="icon_upload" alt="icon_upload" />
                <div class="outputs-box__word-box">
                  <p>Chiqimlar</p>
                  <span>2 254 001.00 UZS</span>
                </div>
              </div>
            </div>
            <p class="text-my-balance">2 837 643.74 SO‘M</p>
            <div class="hide-balance-box">
              <img
                class="icon_eye_empty"
                :src="icon_eye_empty"
                alt="icon_eye_empty"
              />
              <p>Balansni yashirish</p>
            </div>
          </div>
          <!-- cards-box -->
          <div class="cards-box">
            <select class="my-cards-select">
              <option value="Mening kartalarim">Mening kartalarim</option>
            </select>
            <div class="my-green-card">
              <div class="my-green-card__title-box">
                <div class="my-green-card__title-box__logo-box">
                  <img
                    class="icon_tbc_bank"
                    :src="icon_tbc_bank"
                    alt="icon_tbc_bank"
                  />
                  <span>TBC</span>
                </div>
                <img
                  class="icon_dotted_menu"
                  :src="icon_dotted_menu"
                  alt="icon_dotted_menu"
                />
              </div>
              <p class="my-card-number">8600 14** *** 8616</p>
              <div class="card-balance_logo-box">
                <p class="my-card-balance">945 881.24</p>
                <img
                  class="icon_uzcard_menu"
                  :src="icon_uzcard_menu"
                  alt="icon_uzcard_menu"
                />
              </div>
              <img
                class="icon_mountain_effect"
                :src="icon_mountain_effect"
                alt="icon_mountain_effect"
              />
            </div>
            <div class="my-pink-card">
              <div class="my-pink-card__title-box">
                <div class="my-pink-card__title-box__logo-box">
                  <img
                    class="icon_tbc_bank"
                    :src="icon_tbc_bank"
                    alt="icon_tbc_bank"
                  />
                  <span>TBC</span>
                </div>
                <img
                  class="icon_dotted_menu"
                  :src="icon_dotted_menu"
                  alt="icon_dotted_menu"
                />
              </div>
              <p class="my-card-number">8600 14** *** 8616</p>
              <div class="card-balance_logo-box">
                <p class="my-card-balance">945 881.24</p>
                <img
                  class="icon_uzcard_menu"
                  :src="icon_uzcard_menu"
                  alt="icon_uzcard_menu"
                />
              </div>
              <img
                class="icon_mountain_effect"
                :src="icon_mountain_effect"
                alt="icon_mountain_effect"
              />
            </div>
          </div>
          <!-- currency-box -->
          <div class="currency-box">
            <select>
              <option value="Markaziy bank kurslari">
                Markaziy bank kurslari
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//icons
import icon_smart_market from "../../../assets/icons/payments/smart-market-place.svg";
import icon_mountain_effect from "../../../assets/icons/payments/mountain-effect.png";
import icon_european_union from "../../../assets/icons/payments/european union.svg";
import icon_united_kingdom from "../../../assets/icons/payments/united kingdom.svg";
import icon_dotted_menu from "../../../assets/icons/payments/dotted-menu.svg";
import icon_uzcard_menu from "../../../assets/icons/payments/uzcard-menu.svg";
import icon_united_states from "../../../assets/icons/payments/united states.svg";
import icon_eye_empty from "../../../assets/icons/payments/eye-empty.svg";
import icon_to_bottom from "../../../assets/icons/payments/to-bottom.svg";
import icon_download from "../../../assets/icons/payments/download.svg";
import icon_russia_flag from "../../../assets/icons/payments/russia.svg";
import icon_upload from "../../../assets/icons/payments/upload.svg";
import icon_to_top from "../../../assets/icons/payments/to-top.svg";
import icon_tbc_bank from "../../../assets/icons/payments/tbc.svg";

export default {
  data() {
    return {
      //icons
      icon_smart_market,
      icon_mountain_effect,
      icon_european_union,
      icon_united_kingdom,
      icon_dotted_menu,
      icon_uzcard_menu,
      icon_united_states,
      icon_eye_empty,
      icon_to_bottom,
      icon_download,
      icon_russia_flag,
      icon_upload,
      icon_to_top,
      icon_tbc_bank,
    };
  },
};
</script>

<style scoped>
.payments {
  width: 100%;
  height: 655px;
  background: #f0f0f0;
}
.payments-boxes {
  width: 97%;
  height: 585px;
  margin: 0px 24px;
  display: flex;
  gap: 15px;
}

.payments-boxes .payments-box {
  border-radius: 10px;
  flex-grow: 7;
  width: 100%;
}
.payments-boxes .total-balance-box {
  border-radius: 10px;
  flex-grow: 3;
  width: 470px;
}
.payments-box-child {
  background: #fff;
  border-radius: 10px;
  height: 585px;
  width: 100%;
}
.total-balance-box-child {
  border-radius: 10px;
  height: 585px;
}
.payments__total-balance-title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  padding: 10px 0px 0px 24px;
  color: #021723;
}
.payments-title-box__title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
  padding: 10px 0px 0px 24px;
}
.payments-box__title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
  padding: 10px 0px 14px 0px;
}
.payments-box__title-gray {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #919191;
}
.total-balance-box__title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
  padding: 10px 0px 14px 0px;
}
.balance-box {
  height: 17%;
  background: #fff;
  border-radius: 10px;
  padding: 15px;
}
.cards-box {
  height: 44.6%;
  background: #fff;
  margin: 15px 0;
  border-radius: 10px;
}
.currency-box {
  height: 28%;
  background: #fff;
  border-radius: 10px;
}
.smart-market-box {
  display: flex;
  width: max-content;
  background: #ffffff;
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
}
.smart-market {
  width: max-content;
  background: #ffffff;
  border: 1px solid #e2e7ee;
  border-radius: 10px;
  margin: 18px 0px 0px 24px;
}
.word-smart-market {
  background: #e55151;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  padding: 7px 18px;
  border-radius: 0px 0px 9px 9px;
}
.text-smart-market-grey {
  color: #7b7d81;
}
.text-smart-market-bold {
  color: #010101;
  font-weight: bold;
}
.payments-box-child__title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #021723;
  padding: 20px 0px 4px 24px;
}
.balance-box__title-box,
.earnings-box,
.outputs-box,
.my-green-card__title-box,
.my-pink-card__title-box,
.card-balance_logo-box,
.my-green-card__title-box__logo-box,
.my-pink-card__title-box__logo-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.my-green-card {
  background: linear-gradient(108.7deg, #14b598 -5.17%, #146ec0 158.98%);
  border-radius: 10px;
  padding: 10px;
  position: relative;
  height: 78px;
  margin: 0 15px;
  margin-bottom: 10px;
}
.my-pink-card {
  background: linear-gradient(108.7deg, #8114b5 -5.17%, #146ec0 158.98%);
  border-radius: 10px;
  padding: 10px;
  position: relative;
  height: 78px;
  margin: 0 15px;
  margin-bottom: 10px;
}
.earnings-box,
.outputs-box {
  gap: 10px;
}
.hide-balance-box {
  display: flex;
  align-items: center;
}
.icon_download,
.icon_upload {
  padding: 7px;
  border: 1px solid #f4f4f4;
  filter: drop-shadow(0px 0px 20px rgba(0, 4, 106, 0.05));
  border-radius: 10px;
}
.earnings-box__word-box p,
.outputs-box__word-box p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #4a5568;
}
.earnings-box__word-box span,
.outputs-box__word-box span {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: -0.02em;
}
.earnings-box__word-box span {
  color: #137cdd;
}
.outputs-box__word-box span {
  color: #dc3027;
}
.text-my-balance {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #021723;
  margin-top: 10px;
}
.hide-balance-box {
  gap: 5px;
  margin-top: 10px;
}
.hide-balance-box p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #000000;
}
.icon_mountain_effect {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
}
.my-pink-card__title-box__logo-box span,
.my-green-card__title-box__logo-box span {
  color: #fff;
  font-weight: bold;
  font-size: 0.8rem;
}
.icon_dotted_menu {
  padding: 6px;
  background: rgba(255, 255, 255, 0.22);
  border-radius: 7px;
  height: 7px;
}
.my-card-number {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #ffffff;
  margin-top: 20px;
}
.my-card-balance {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #ffffff;
}
.my-cards-select {
  width: 95%;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #021723;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 10px;
}
.icon_tbc_bank {
  width: 20px;
  height: 20px;
}
</style>
