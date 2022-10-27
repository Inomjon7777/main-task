<template>
  <div>
    <!-- balance-section -->
    <div class="balance-section">
      <p class="balance-section-title">Umumiy balans</p>
      <!-- balance-section-balance-box -->
      <div class="balance-section-balance-box">
        <div class="receipts-expenses-box">
          <div class="receipts-box">
            <img :src="iconDownload" alt="download-icon" />
            <div class="receipts-box-word-box">
              <p>Tushumlar</p>
              <p>5 457 120.00 UZS</p>
            </div>
          </div>
          <div class="expenses-box">
            <img :src="iconUpload" alt="upload-icon" />
            <div class="expenses-box-word-box">
              <p>Chiqimlar</p>
              <p>2 254 001.00 UZS</p>
            </div>
          </div>
        </div>
        <p class="my-balance">2 837 643.74 SO‘M</p>
        <div class="hide-balance-box">
          <img :src="iconEyeEmpty" alt="icon-eye-empty" />
          <span>Balansni yashirish</span>
        </div>
      </div>
      <!-- cards box -->
      <div class="myCards">
        <select class="myCards-title">
          <option value="myCards">Mening kartalarim</option>
        </select>
        <div class="myGreenCard">
          <div class="myGreenCard-titleBox">
            <div class="myGreenCard-titleBox-logoBox">
              <img :src="iconTbcLogo" alt="iconTbcLogo" />
              <p class="myGreenCard-titleBox-logoBox-logoWord">TBC</p>
            </div>
            <div class="myGreenCard-titleBox-dotMenuBox">
              <img :src="iconDotMenu" alt="iconDotMenu" />
            </div>
          </div>
          <p class="myCardNumer">8600 14** *** 8616</p>
          <div class="balanceVsUzcardBox">
            <p>945 881.24</p>
            <img :src="iconUzcard" alt="iconUzcard" />
          </div>
          <img
            class="iconMountainEffect"
            :src="iconMountainEffect"
            alt="iconMountainEffect"
          />
        </div>
        <div class="myPinkCard">
          <div class="myPinkCard-titleBox">
            <div class="myPinkCard-titleBox-logoBox">
              <img :src="iconTbcLogo" alt="iconTbcLogo" />
              <p class="myPinkCard-titleBox-logoBox-logoWord">TBC</p>
            </div>
            <div class="myPinkCard-titleBox-dotMenuBox">
              <img :src="iconDotMenu" alt="iconDotMenu" />
            </div>
          </div>
          <p class="myCardNumer">8600 14** *** 8616</p>
          <div class="balanceVsUzcardBox">
            <p>945 881.24</p>
            <img :src="iconUzcard" alt="iconUzcard" />
          </div>
          <img
            class="iconMountainEffect"
            :src="iconMountainEffect"
            alt="iconMountainEffect"
          />
        </div>
      </div>
      <!-- Central bank rates -->
      <div class="central-bank-rates">
        <select>
          <option value="central-bank-rates">Markaziy bank kurslari</option>
        </select>
        <div class="usd-box">
          <div class="flag-box">
            <img :src="iconUnitedStates" alt="" />
            <span>1 USD</span>
          </div>
          <div class="buy-box">
            <p>Sotish olish</p>
            <p>
              11 055.00
              <img :src="iconPolygonBottom" alt="iconPolygonBottom" />
            </p>
          </div>
          <div class="sell-box">
            <p>Sotish</p>
            <p>
              11 085.00
              <img :src="iconPolygonTop" alt="iconPolygonTop" />
            </p>
          </div>
        </div>
        <div class="eur-box">
          <div class="flag-box">
            <img :src="iconEuropeanUnion" alt="" />
            <span>1 EUR</span>
          </div>
          <div class="buy-box">
            <p>Sotish olish</p>
            <p>
              11 055.00
              <img :src="iconPolygonTop" alt="iconPolygonTop" />
            </p>
          </div>
          <div class="sell-box">
            <p>Sotish</p>
            <p>
              11 085.00
              <img :src="iconPolygonBottom" alt="iconPolygonBottom" />
            </p>
          </div>
        </div>
        <div class="gbp-box">
          <div class="flag-box">
            <img :src="iconUnitedKingdom" alt="" />
            <span>1 GBP</span>
          </div>
          <div class="buy-box">
            <p>Sotish olish</p>
            <p>11 055.00 <img :src="iconPolygonTop" alt="iconPolygonTop" /></p>
          </div>
          <div class="sell-box">
            <p>Sotish</p>
            <p>
              11 085.00
              <img :src="iconPolygonBottom" alt="iconPolygonBottom" />
            </p>
          </div>
        </div>
        <div class="rub-box">
          <div class="flag-box">
            <img :src="iconRussia" alt="" />
            <span>1 RUB</span>
          </div>
          <div class="buy-box">
            <p>Sotish olish</p>
            <p>
              11 055.00
              <img :src="iconPolygonTop" alt="iconPolygonTop" />
            </p>
          </div>
          <div class="sell-box">
            <p>Sotish</p>
            <p>
              11 085.00
              <img :src="iconPolygonBottom" alt="iconPolygonBottom" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {

    };
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
}
.main {
  background: #fafafa;
}
.title-black {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
  padding-top: 10px;
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
  z-index: 1;
}
.suptitle,
.title,
.description {
  position: absolute;
}
.suptitle {
  top: 40px;
  left: 10px;
  padding: 4px 8px;
  background: #137cdd;
  border-radius: 60px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: #ffffff;
}
.title {
  left: 10px;
  top: 62px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
}
.description {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: -0.02em;
  color: #ffffff;
  top: 82px;
  left: 10px;
}

.backgroundOne,
.backgroundTwo,
.backgroundThree,
.backgroundFour,
.backgroundFive {
  width: 160px;
  height: 100px;
}

.payment-for-products {
  background: #fff;
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px;
}

.payment-types {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
}

.payment-types button {
  padding: 10px 50px;
  background: #0046f9;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #0046f9;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
  transition: all 0.4s ease;
}

.payment-types button:hover {
  background-color: #fff;
  color: #0046f9;
}
.inputId {
  padding: 10px 100px 10px 15px;
  border: 1px solid #ededed;
  border-radius: 10px;
  outline: none;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #4a5568;
}
.inputSumma {
  padding: 10px 80px 10px 15px;
  border: 1px solid #ededed;
  border-radius: 10px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #4a5568;
  outline: none;
}

.selectPaymentType {
  padding: 10px 70px 10px 15px;
  border: 1px solid #ededed;
  border-radius: 10px;
  outline: none;
}
.payment-for-products-title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #021723;
  margin-bottom: 7px;
}
.payment-for-products-subtitle {
  display: flex;
  align-items: start;
  gap: 3px;
}
.payment-for-products-subtitle span {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #4a5568;
}
.monitoring-of-payments-title-box,
.receipts,
.expenses,
.buttons-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buttons-box {
  gap: 10px;
}
.filter-button,
.diagramma-button {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  color: #000;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  background: #eff1f4;
  border-radius: 10px;
  border: 1px solid #eff1f4;
  cursor: pointer;
  gap: 5px;
}
.monitoring-of-payments {
  background: #fff;
  margin-top: 10px;
  padding: 15px;
  border-radius: 10px;
  position: relative;
}
.monitoring-of-payments-title p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #021723;
  margin-bottom: 5px;
}
.monitoring-of-payments-title span {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #4a5568;
}
.receipts-word-box p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #4a5568;
}

.receipts-word-box span {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.02em;
  color: #13dd34;
}
.receipts,
.expenses {
  display: flex;
  gap: 8px;
}
.receipts img,
.expenses img {
  padding: 5px;
  border: 1px solid #f4f4f4;
  filter: drop-shadow(0px 0px 20px rgba(0, 4, 106, 0.05));
  border-radius: 10px;
  cursor: pointer;
}
.expenses-word-box p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #4a5568;
}
.expenses-word-box span {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.02em;
  color: #dc3027;
}
.line-box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 20px;
}
.line-box p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: #4a5568;
}
.line {
  width: 100%;
  height: 1px;
  background: #f4f4f4;
}
.line-0,
.line-2,
.line-4,
.line-6,
.line-8 {
  margin-left: 7px;
}
.numbers {
  display: flex;
  justify-content: space-between;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: #4a5568;
  padding-left: 35px;
  padding-top: 10px;
}
.equalizer {
  position: absolute;
  width: 5px;
  bottom: 42.5px;
  border-radius: 10px 10px 0px 0px;
}
.blue-equalizer {
  background: #137cdd;
}
.yellow-equalizer {
  background: #ffd43b;
}
.one .first-equalizer {
  height: 80px;
  left: 49px;
}
.one .second-equalizer {
  height: 60px;
  left: 54px;
}
.two .first-equalizer {
  height: 1.4px;
  left: 72px;
}
.two .second-equalizer {
  height: 19px;
  left: 76px;
}
.three .first-equalizer {
  height: 1.4px;
  left: 97px;
}
.three .second-equalizer {
  height: 42px;
  left: 102px;
}
.four .first-equalizer {
  height: 1.4px;
  left: 121px;
}
.four .second-equalizer {
  height: 12px;
  left: 126px;
}
.five .first-equalizer {
  height: 1.4px;
  left: 146px;
}
.five .second-equalizer {
  height: 8px;
  left: 151px;
}
.six .first-equalizer {
  height: 15px;
  left: 170px;
}
.six .second-equalizer {
  height: 5px;
  left: 175px;
}
.seven .first-equalizer {
  height: 10px;
  left: 197px;
}
.seven .second-equalizer {
  height: 5px;
  left: 202px;
}
.eight .first-equalizer {
  height: 1.4px;
  left: 220px;
}
.eight .second-equalizer {
  height: 19px;
  left: 225px;
}
.nine .first-equalizer {
  height: 1.4px;
  left: 244px;
}
.nine .second-equalizer {
  height: 19px;
  left: 249px;
}
.ten .first-equalizer {
  height: 2.5px;
  left: 271px;
}
.ten .second-equalizer {
  height: 40px;
  left: 276px;
}
.eleven .first-equalizer {
  height: 3px;
  left: 301px;
}
.eleven .second-equalizer {
  height: 72px;
  left: 306px;
}
.twelve .first-equalizer {
  height: 2.5px;
  left: 330px;
}
.twelve .second-equalizer {
  height: 52px;
  left: 335px;
}
.thirteen .first-equalizer {
  height: 1.4px;
  left: 360px;
}
.thirteen .second-equalizer {
  height: 22px;
  left: 365px;
}
.fourteen .first-equalizer {
  height: 1.4px;
  left: 390px;
}
.fourteen .second-equalizer {
  height: 45px;
  left: 395px;
}
.fiveteen .first-equalizer {
  height: 1.4px;
  left: 420px;
}
.fiveteen .second-equalizer {
  height: 17px;
  left: 425px;
}
.sixteen .first-equalizer {
  height: 3px;
  left: 450px;
}
.sixteen .second-equalizer {
  height: 72px;
  left: 455px;
}
.seventeen .first-equalizer {
  height: 117px;
  left: 480px;
}
.seventeen .second-equalizer {
  height: 90px;
  left: 485px;
}
.eightteen .first-equalizer {
  height: 72px;
  left: 510px;
}
.eightteen .second-equalizer {
  height: 52px;
  left: 515px;
}
.nineteen .first-equalizer {
  height: 30px;
  left: 540px;
}
.nineteen .second-equalizer {
  height: 23px;
  left: 545px;
}
.twenty .first-equalizer {
  height: 108px;
  left: 568px;
}
.twenty .second-equalizer {
  height: 82px;
  left: 573px;
}
.twenty-one .first-equalizer {
  height: 14px;
  left: 598px;
}
.twenty-one .second-equalizer {
  height: 9px;
  left: 603px;
}
.twenty-two .first-equalizer {
  height: 2.5px;
  left: 628px;
}
.twenty-two .second-equalizer {
  height: 9px;
  left: 633px;
}
.twenty-three .first-equalizer {
  height: 40px;
  left: 658px;
}
.twenty-three .second-equalizer {
  height: 28px;
  left: 663px;
}
.twenty-four .first-equalizer {
  height: 15px;
  left: 688px;
}
.twenty-four .second-equalizer {
  height: 10px;
  left: 693px;
}
.twenty-five .first-equalizer {
  height: 76px;
  left: 717px;
}
.twenty-five .second-equalizer {
  height: 56px;
  left: 722px;
}
.twenty-six .first-equalizer {
  height: 70px;
  left: 747px;
}
.twenty-six .second-equalizer {
  height: 50px;
  left: 752px;
}
.twenty-seven .first-equalizer {
  height: 70px;
  left: 777px;
}
.twenty-seven .second-equalizer {
  height: 50px;
  left: 782px;
}
.twenty-eight .first-equalizer {
  height: 2.5px;
  left: 806px;
}
.twenty-eight .second-equalizer {
  height: 42px;
  left: 811px;
}
.twenty-nine .first-equalizer {
  height: 2.5px;
  left: 837px;
}
.twenty-nine .second-equalizer {
  height: 42px;
  left: 842px;
}
.thirty .first-equalizer {
  height: 2.5px;
  left: 865px;
}
.thirty .second-equalizer {
  height: 2.5px;
  left: 870px;
}
/*balance-section*/
.balance-section {
  margin-left: 24px;
}
.balance-section-title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #021723;
  margin-top: 10px;
  margin-bottom: 14px;
}
.receipts-expenses-box,
.receipts-box,
.expenses-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.receipts-box,
.expenses-box {
  gap: 10px;
}
.hide-balance-box {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
}
.hide-balance-box span {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #000000;
}
.balance-section-balance-box {
  background: #ffffff;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
}
.receipts-box-word-box p:first-child,
.expenses-box-word-box p:first-child {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #4a5568;
}
.receipts-box-word-box p:last-child,
.expenses-box-word-box p:last-child {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  text-align: center;
  letter-spacing: -0.02em;
  margin-top: 5px;
}
.receipts-box-word-box p:last-child {
  color: #137cdd;
}
.expenses-box-word-box p:last-child {
  color: #dc3027;
}
.receipts-box img,
.expenses-box img {
  padding: 7px;
  border: 1px solid #f4f4f4;
  filter: drop-shadow(0px 0px 20px rgba(0, 4, 106, 0.05));
  border-radius: 10px;
  height: 15px;
}
.my-balance {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #021723;
  margin-top: 10px;
}
.myGreenCard,
.myPinkCard {
  border-radius: 10px;
  padding: 10px;
  position: relative;
  margin-top: 10px;
}
.myGreenCard {
  background: linear-gradient(108.7deg, #14b598 -5.17%, #146ec0 158.98%);
}
.myPinkCard {
  background: linear-gradient(108.7deg, #8114b5 -5.17%, #146ec0 158.98%);
  border-radius: 10px;
}

.myGreenCard-titleBox-logoBox img,
.myPinkCard-titleBox-logoBox img {
  width: 20px;
  height: 20px;
}
.myGreenCard-titleBox,
.myPinkCard-titleBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.myGreenCard-titleBox-logoBox,
.myPinkCard-titleBox-logoBox {
  display: flex;
  align-items: center;
  gap: 3px;
}
.myGreenCard-titleBox-logoBox-logoWord,
.myPinkCard-titleBox-logoBox-logoWord {
  color: #fff;
  font-weight: bold;
  font-size: 12px;
}
.myGreenCard-titleBox-dotMenuBox img,
.myPinkCard-titleBox-dotMenuBox img {
  padding: 6px;
  background: rgba(255, 255, 255, 0.22);
  border-radius: 7px;
}
.myCardNumer {
  font-family: "Gilroy";
  font-style: normal;
  font-size: 8px;
  display: flex;
  letter-spacing: 0.05em;
  color: #ffffff;
  margin-top: 20px;
}
.balanceVsUzcardBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.balanceVsUzcardBox p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  letter-spacing: 0.05em;
  color: #ffffff;
}
.iconMountainEffect {
  position: absolute;
  bottom: 0;
  left: -55px;
}

.myCards {
  width: 100%;
  background: #ffffff;
  border-radius: 10px;
  padding: 13px;
  margin: 10px 0;
}

.myCards-title {
  border: none;
  outline: none;
  width: 100%;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #021723;
}
.central-bank-rates {
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
}
.central-bank-rates select {
  border: none;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #021723;
  margin-bottom: 10px;
}
.usd-box,
.eur-box,
.gbp-box,
.rub-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.usd-box .flag-box,
.eur-box .flag-box,
.gbp-box .flag-box,
.rub-box .flag-box {
  display: flex;
  align-items: center;
}
.flag-box img {
  width: 20px;
  height: 20px;
}
.flag-box span {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #000000;
  margin-left: 11px;
}
.buy-box p:first-child,
.sell-box p:first-child {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #7b839e;
}
.buy-box p:last-child,
.sell-box p:last-child {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #000000;
  display: flex;
  align-items: center;
  margin-bottom: 1px;
}
.buy-box img,
.sell-box img {
  margin-left: 3px;
}
</style>
