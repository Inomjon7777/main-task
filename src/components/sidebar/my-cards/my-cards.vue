<template>
  <div class="my-cards">
    <p class="my-cards-title">
      Asosiy <span class="my-cards-title-grey"> / Mening kartalarim</span>
    </p>
    <div id="main">
      <div class="my-card-box">
        <div class="myCards-vs-cardAdd-box">
          <div class="myCardsBox">
            <p class="text-my-cards">Mening kartalarim</p>
            <p class="text-security">Xavfsizlik kafolatlari ta’minlangan 👌</p>
          </div>
          <button class="cardAddBox">
            <span>+</span>
            <span>Karta qo'shish</span>
          </button>
        </div>
        <div class="cards-box">
          <div class="card-box card-box-green">
            <div class="card-box__title-box">
              <div class="logo-box">
                <img class="iconTbc" :src="iconTbc" alt="iconTbc" />
                <p>TBC</p>
              </div>
              <div class="dot-menu">
                <img class="iconDotMenu" :src="iconDotMenu" alt="iconDotMenu" />
              </div>
            </div>
            <p class="balance">945 881.24</p>
            <div class="cardNumber-vs-validityPeriod">
              <p class="card-number">8600 14** *** 8616</p>
              <p class="validity-period">10/23</p>
            </div>
            <div class="cardholder-vs-uzcardLogoBox">
              <p class="text-cardholder">ISTAMOV KHURSHID</p>
              <img :src="iconUzcard" alt="iconUzcard" />
            </div>
            <img
              class="iconMountainEffect"
              :src="iconMountainEffect"
              alt="iconMountainEffect"
            />
          </div>
          <div class="card-box card-box-red">
            <div class="card-box__title-box">
              <div class="logo-box">
                <img class="iconTbc" :src="iconTbc" alt="iconTbc" />
                <p>TBC</p>
              </div>
              <div class="dot-menu">
                <img class="iconDotMenu" :src="iconDotMenu" alt="iconDotMenu" />
              </div>
            </div>
            <p class="balance">945 881.24</p>
            <div class="cardNumber-vs-validityPeriod">
              <p class="card-number">8600 14** *** 8616</p>
              <p class="validity-period">10/23</p>
            </div>
            <div class="cardholder-vs-uzcardLogoBox">
              <p class="text-cardholder">ISTAMOV KHURSHID</p>
              <img :src="iconUzcard" alt="iconUzcard" />
            </div>
            <img
              class="iconMountainEffect"
              :src="iconMountainEffect"
              alt="iconMountainEffect"
            />
          </div>
          <div class="card-box card-box-blue">
            <div class="card-box__title-box">
              <div class="logo-box">
                <img class="iconTbc" :src="iconTbc" alt="iconTbc" />
                <p>TBC</p>
              </div>
              <div class="dot-menu">
                <img class="iconDotMenu" :src="iconDotMenu" alt="iconDotMenu" />
              </div>
            </div>
            <p class="balance">945 881.24</p>
            <div class="cardNumber-vs-validityPeriod">
              <p class="card-number">8600 14** *** 8616</p>
              <p class="validity-period">10/23</p>
            </div>
            <div class="cardholder-vs-uzcardLogoBox">
              <p class="text-cardholder">ISTAMOV KHURSHID</p>
              <img :src="iconUzcard" alt="iconUzcard" />
            </div>
            <img
              class="iconMountainEffect"
              :src="iconMountainEffect"
              alt="iconMountainEffect"
            />
          </div>
          <div class="card-box card-box-yellow">
            <div class="card-box__title-box">
              <div class="logo-box">
                <img class="iconTbc" :src="iconTbc" alt="iconTbc" />
                <p>TBC</p>
              </div>
              <div class="dot-menu">
                <img class="iconDotMenu" :src="iconDotMenu" alt="iconDotMenu" />
              </div>
            </div>
            <p class="balance">945 881.24</p>
            <div class="cardNumber-vs-validityPeriod">
              <p class="card-number">8600 14** *** 8616</p>
              <p class="validity-period">10/23</p>
            </div>
            <div class="cardholder-vs-uzcardLogoBox">
              <p class="text-cardholder">ISTAMOV KHURSHID</p>
              <img :src="iconUzcard" alt="iconUzcard" />
            </div>
            <img
              class="iconMountainEffect"
              :src="iconMountainEffect"
              alt="iconMountainEffect"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//icons
import iconTbc from "../../../assets/icons/my-cards/icon-tbc.svg";
import iconDotMenu from "../../../assets/icons/my-cards/icon-dot-menu.svg";
import iconUzcard from "../../../assets/icons/my-cards/icon-uzcard.svg";
import iconMountainEffect from "../../../assets/icons/my-cards/icon-mountain-effect.png";
export default {
  data() {
    return {
      //icons
      iconTbc,
      iconDotMenu,
      iconUzcard,
      iconMountainEffect,
    };
  },
};
</script>

<style scoped>
.my-cards {
  background: #f0f0f0;
}
#main {
  width: 97%;
  height: 597px;
  display: flex;
  margin: 0px 24px 24px 24px;
}

.my-card-box {
  flex-grow: 10;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 24px;
}

.text-my-cards {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #021723;
  margin: 20px 0px 4px 24px;
}
.text-security {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  color: #919191;
  margin-left: 24px;
  margin-bottom: 21px;
}
.my-cards-title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
  padding: 18px 0px 14px 24px;
}
.my-cards-title-grey {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #919191;
}
.card-box {
  border-radius: 10px;
  position: relative;
  padding: 13px 14px;
  width: 100%;
  height: 180px;
  margin-left: 22px;
}
.card-box-green {
  background: linear-gradient(108.7deg, #14b598 -5.17%, #146ec0 158.98%);
}
.card-box-red {
  background: linear-gradient(108.7deg, #b51414 -5.17%, #9d46f4 158.98%);
  border-radius: 10px;
}
.card-box-blue {
  background: linear-gradient(108.7deg, #3562ff -5.17%, #3400ca 158.98%);
  border-radius: 10px;
}
.card-box-yellow {
  background: linear-gradient(108.7deg, #f2a040 -5.17%, #4bc014 158.98%);
  border-radius: 10px;
  margin-right: 22px;
}

.iconMountainEffect {
  position: absolute;
  bottom: 0;
}
.card-box__title-box {
  display: flex;
  justify-content: space-between;
}
.logo-box {
  display: flex;
  align-items: center;
}
.logo-box p {
  color: #fff;
  font-weight: bold;
}
.iconDotMenu {
  padding: 6px 5px;
  background: rgba(255, 255, 255, 0.22);
  border-radius: 7px;
}
.balance {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #ffffff;
  margin-top: 24px;
}
.cardNumber-vs-validityPeriod {
  display: flex;
  gap: 24px;
  margin-top: 7px;
}
.cardNumber-vs-validityPeriod p {
  color: #fff;
}
.cardholder-vs-uzcardLogoBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
}

.cardholder-vs-uzcardLogoBox p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #ffffff;
}
.cards-box {
  display: flex;
}
.myCards-vs-cardAdd-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cardAddBox {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  background: #fbab07;
  border-radius: 10px;
  border: 1px solid #fbab07;
  padding: 16px;
  margin-right: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: 0.3s;
}

.cardAddBox span:first-child {
  border: 1px solid #fff;
  border-radius: 50%;
  font-size: 20px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cardAddBox:active {
  transform: scale(0.9);
}
</style>
