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
              <img :src="iconWarning" alt="icon-warning" />
              <span>Xizmat faqat SmartMarket.uz onlayn do‘konlari uchun</span>
            </div>
            <!-- payment types -->
            <div class="payment-types">
              <input
                class="inputId"
                type="text"
                placeholder="Mahsulot ID ni kiriting"
              />
              <input
                class="inputSumma"
                type="text"
                placeholder="To‘lov summasi"
              />
              <div>
                <select class="selectPaymentType">
                  <option value="To‘lov-turi">To‘lov turi</option>
                  <option value="To‘lov-turi">Naqd pul</option>
                  <option value="To‘lov-turi">Plastik</option>
                </select>
              </div>
              <button>Tasdiqlash</button>
            </div>
          </div>
          <!-- Monitoring of payments -->
          <div class="monitoring-of-payments">
            <!-- monitoring-of-payments-title-box -->
            <div class="monitoring-of-payments-title-box">
              <!-- monitoring-of-payments-title -->
              <div class="monitoring-of-payments-title">
                <p>To’lovlar monitoringi</p>
                <span>01 Sentabr, 2022 - 30 Sentabr, 2022</span>
              </div>
              <!-- receipts -->
              <div class="receipts">
                <img :src="iconDownload" alt="iconDownload" />
                <div class="receipts-word-box">
                  <p>Tushumlar</p>
                  <span>5 457 120.00 UZS</span>
                </div>
              </div>
              <!-- expenses -->
              <div class="expenses">
                <img :src="iconUpload" alt="iconUpload" />
                <div class="expenses-word-box">
                  <p>Chiqimlar</p>
                  <span>2 254 001.00 UZS</span>
                </div>
              </div>
              <!-- buttons-box -->
              <div class="buttons-box">
                <button class="filter-button">
                  <img :src="iconFiltr" alt="icon-filtr" />
                  Filtr
                </button>
                <button class="diagramma-button">
                  <img :src="iconDiagramma" alt="icon-diagramma" />
                  Diagramma
                </button>
              </div>
            </div>

            <!-- monitoring-of-payments-line-box -->
            <div class="monitoring-of-payments-line-box">
              <!-- 14M -->
              <div class="line-box">
                <p>14M</p>
                <div class="line line-14"></div>
              </div>
              <!-- 12M -->
              <div class="line-box">
                <p>12M</p>
                <div class="line line-12"></div>
              </div>
              <!-- 10M -->
              <div class="line-box">
                <p>10M</p>
                <div class="line line-10"></div>
              </div>
              <!-- 8M -->
              <div class="line-box">
                <p>8M</p>
                <div class="line line-8"></div>
              </div>
              <!-- 6M -->
              <div class="line-box">
                <p>6M</p>
                <div class="line line-6"></div>
              </div>
              <!-- 4M -->
              <div class="line-box">
                <p>4M</p>
                <div class="line line-4"></div>
              </div>
              <!-- 2M -->
              <div class="line-box">
                <p>2M</p>
                <div class="line line-2"></div>
              </div>
              <!-- 0M -->
              <div class="line-box">
                <p>0M</p>
                <div class="line line-0"></div>
              </div>
            </div>
            <div>12345678910111213141516171819202122232425262728292021222324252627282930</div>
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
//icons
import iconWarning from "../../../assets/icons/main/warning.svg";
import iconDownload from "../../../assets/icons/main/download.svg";
import iconUpload from "../../../assets/icons/main/upload.svg";
import iconDiagramma from "../../../assets/icons/main/diagramma.svg";
import iconFiltr from "../../../assets/icons/main/filtr.svg";
export default {
  data() {
    return {
      //images
      backgroundOne,
      backgroundTwo,
      backgroundThree,
      backgroundFour,
      backgroundFive,
      //icons
      iconWarning,
      iconDownload,
      iconUpload,
      iconDiagramma,
      iconFiltr,
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
  height: 90vh;
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
  padding: 15px;
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
</style>
