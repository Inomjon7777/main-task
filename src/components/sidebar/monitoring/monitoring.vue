<template>
  <div class="monitoring">
    <p class="monitoring__title">
      Asosiy<span class="monitoring__title-gray"> / Monitoring</span>
    </p>
    <div class="monitoring-box">
      <div class="monitoring-box__title-box">
        <!-- monitoring-of-payments -->
        <div class="monitoring-of-payments">
          <p>To’lovlar monitoringi</p>
          <span>01 Sentabr, 2022 - 30 Sentabr, 2022</span>
        </div>

        <!-- receipts -->
        <div class="receipts">
          <img class="icon_receipts" :src="icon_receipts" alt="icon_receipts" />
          <div class="receipts__word-box">
            <p>Tushumlar</p>
            <span>5 457 120.00 UZS</span>
          </div>
        </div>

        <!-- expenses -->
        <div class="expenses">
          <img class="icon_expenses" :src="icon_expenses" alt="icon_expenses" />
          <div class="expenses__word-box">
            <p>Chiqimlar</p>
            <span>2 254 001.00 UZS</span>
          </div>
        </div>

        <!-- buttons-box -->
        <div class="buttons-box">
          <div class="filtr-box">
            <img class="icon_filtr" :src="icon_filtr" alt="icon_filtr" />
            <span>Filtr</span>
          </div>
          <div class="diagramma-box">
            <img
              class="icon_diagramma"
              :src="icon_diagramma"
              alt="icon_diagramma"
            />
            <span>Diagramma</span>
          </div>
        </div>
      </div>

      <!-- equalizer -->
      <div class="equalizer-section">
        <!-- equalizer-line-box -->
        <div class="equalizer-line-box">
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
          <!-- NOL M -->
          <div class="line-box">
            <p>0</p>
            <div class="line line-0"></div>
          </div>
        </div>
      </div>

      <!-- numbers -->
      <div class="numbers">
        <!-- 1 -->
        <div class="one">
          <p class="equalizer-number">1</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 2 -->
        <div class="two">
          <p class="equalizer-number">2</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 3 -->
        <div class="three">
          <p class="equalizer-number">3</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 4 -->
        <div class="four">
          <p class="equalizer-number">4</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 5 -->
        <div class="five">
          <p class="equalizer-number">5</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 6 -->
        <div class="six">
          <p class="equalizer-number">6</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 7 -->
        <div class="seven">
          <p class="equalizer-number">7</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 8 -->
        <div class="eight">
          <p class="equalizer-number">8</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 9 -->
        <div class="nine">
          <p class="equalizer-number">9</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 10 -->
        <div class="ten">
          <p class="equalizer-number">10</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 11 -->
        <div class="eleven">
          <p class="equalizer-number">11</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 12 -->
        <div class="twelve">
          <p class="equalizer-number">12</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 13 -->
        <div class="thirteen">
          <p class="equalizer-number">13</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 14 -->
        <div class="fourteen">
          <p class="equalizer-number">14</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 15 -->
        <div class="fiveteen">
          <p class="equalizer-number">15</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 16 -->
        <div class="sixteen">
          <p class="equalizer-number">16</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 17 -->
        <div class="seventeen">
          <p class="equalizer-number">17</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 18 -->
        <div class="eighteen">
          <p class="equalizer-number">18</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 19 -->
        <div class="nineteen">
          <p class="equalizer-number">19</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 20 -->
        <div class="twenty">
          <p class="equalizer-number">20</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 21 -->
        <div class="twenty-one">
          <p class="equalizer-number">21</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 22 -->
        <div class="twenty-two">
          <p class="equalizer-number">22</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 23 -->
        <div class="twenty-three">
          <p class="equalizer-number">23</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 24 -->
        <div class="twenty-four">
          <p class="equalizer-number">24</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 25 -->
        <div class="twenty-five">
          <p class="equalizer-number">25</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 26 -->
        <div class="twenty-six">
          <p class="equalizer-number">26</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 27 -->
        <div class="twenty-seven">
          <p class="equalizer-number">27</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 28 -->
        <div class="twenty-eight">
          <p class="equalizer-number">28</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 29 -->
        <div class="twenty-nine">
          <p class="equalizer-number">29</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
        <!-- 30 -->
        <div class="thirty">
          <p class="equalizer-number">30</p>
          <div class="many-lines">
            <div class="one-line orange-equalizer"></div>
            <div class="two-line green-equalizer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// icons
import icon_diagramma from "../../../assets/icons/monitoring/diagramma.svg";
import icon_expenses from "../../../assets/icons/monitoring/expenses.svg";
import icon_receipts from "../../../assets/icons/monitoring/receipts.svg";
import icon_filtr from "../../../assets/icons/monitoring/filtr.svg";
export default {
  data() {
    return {
      //icons
      icon_diagramma,
      icon_expenses,
      icon_receipts,
      icon_filtr,
    };
  },
};
</script>

<style scoped>
.monitoring {
  background: #f0f0f0;
  height: 655px;
}
.monitoring-box {
  height: 545px;
  background: #fff;
  margin: 0 24px;
  border-radius: 10px;
  padding: 20px 24px;
}
.monitoring__title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
  padding: 10px 0px 14px 24px;
}
.monitoring__title-gray {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #919191;
}
.monitoring-box__title-box,
.receipts,
.expenses,
.buttons-box,
.filtr-box,
.diagramma-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.receipts,
.expenses {
  gap: 8px;
}
.buttons-box {
  gap: 19px;
}
.monitoring-of-payments p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #021723;
  margin-bottom: 11px;
}
.monitoring-of-payments span {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #4a5568;
}
.icon_receipts,
.icon_expenses {
  padding: 9px;
  border: 1px solid #f4f4f4;
  filter: drop-shadow(0px 0px 20px rgba(0, 4, 106, 0.05));
  border-radius: 10px;
}
.receipts__word-box p,
.expenses__word-box p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #4a5568;
  margin-bottom: 4px;
}
.receipts__word-box span,
.expenses__word-box span {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  letter-spacing: -0.02em;
}
.receipts__word-box span {
  color: #00b488;
}
.expenses__word-box span {
  color: #dc3027;
}
.filtr-box,
.diagramma-box {
  padding: 12.5px;
  background: #eff1f4;
  border: 1px solid #eff1f4;
  border-radius: 10px;
  display: flex;
  gap: 8.5px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.filtr-box:hover,
.diagramma-box:hover {
  border: 1px solid #333;
}
/*equalizer*/
.equalizer-section {
  margin-top: 10px;
}
.equalizer-line-box {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.monitoring-box {
  position: relative;
}
.line-box {
  display: flex;
  align-items: center;
}
.line-box p {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: #4a5568;
}
.line {
  border-top: 1px solid #f4f4f4;
  width: 100%;
}
.line-14,
.line-12,
.line-10 {
  margin-left: 10px;
}
.line-8,
.line-6,
.line-4,
.line-2 {
  margin-left: 15px;
}
.line-0 {
  margin-left: 25px;
}
.numbers {
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  margin-top: 10px;
  margin-right: 15px;
}
.numbers span {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: #4a5568;
}

/*equalizer lines*/
.green-equalizer {
  background: #0eb2b3;
}
.orange-equalizer {
  background: #fbab07;
}
.equalizer {
  position: absolute;
  width: 10px;
  bottom: 260px;
  border-radius: 10px 10px 0px 0px;
}

/*************************************/
.equalizer-number {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: #4a5568;
}
.one,
.two,
.three,
.four,
.five,
.six,
.seven,
.eight,
.nine,
.ten,
.eleven,
.twelve,
.thirteen,
.fourteen,
.fiveteen,
.sixteen,
.seventeen,
.eighteen,
.nineteen,
.twelve,
.twenty-one,
.twenty-two,
.twenty-three,
.twenty-four,
.twenty-five,
.twenty-six,
.twenty-seven,
.twenty-eight,
.twenty-nine,
.thirty {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
}
.many-lines {
  display: flex;
  position: absolute;
  top: 267px;
}

.one .one-line {
  width: 10px;
  height: 115px;
  position: relative;
  bottom: 65px;
  border-radius: 10px 10px 0px 0px;
}
.one .two-line {
  width: 10px;
  height: 85px;
  bottom: 35px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.two .one-line {
  width: 10px;
  height: 2px;
  position: relative;
  top: 48px;
  border-radius: 10px 10px 0px 0px;
}
.two .two-line {
  width: 10px;
  height: 26px;
  top: 24px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.three .one-line {
  width: 10px;
  height: 2px;
  position: relative;
  top: 48px;
  border-radius: 10px 10px 0px 0px;
}
.three .two-line {
  width: 10px;
  height: 56px;
  bottom: 6px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.four .one-line {
  width: 10px;
  height: 2px;
  position: relative;
  top: 48px;
  border-radius: 10px 10px 0px 0px;
}
.four .two-line {
  width: 10px;
  height: 20px;
  top: 30px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.five .one-line {
  width: 10px;
  height: 2px;
  position: relative;
  top: 48px;
  border-radius: 10px 10px 0px 0px;
}
.five .two-line {
  width: 10px;
  height: 15px;
  top: 35px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.six .one-line {
  width: 10px;
  height: 21px;
  position: relative;
  top: 29px;
  border-radius: 10px 10px 0px 0px;
}
.six .two-line {
  width: 10px;
  height: 7px;
  top: 43px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.seven .one-line {
  width: 10px;
  height: 13px;
  position: relative;
  top: 38px;
  border-radius: 10px 10px 0px 0px;
}
.seven .two-line {
  width: 10px;
  height: 5px;
  top: 46px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.eight .one-line {
  width: 10px;
  height: 2px;
  position: relative;
  top: 48px;
  border-radius: 10px 10px 0px 0px;
}
.eight .two-line {
  width: 10px;
  height: 26px;
  top: 24px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.nine .one-line {
  width: 10px;
  height: 2px;
  position: relative;
  top: 48px;
  border-radius: 10px 10px 0px 0px;
}
.nine .two-line {
  width: 10px;
  height: 26px;
  top: 24px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.ten .one-line {
  width: 10px;
  height: 4px;
  position: relative;
  top: 46px;
  border-radius: 10px 10px 0px 0px;
}
.ten .two-line {
  width: 10px;
  height: 52px;
  top: -2px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.eleven .one-line {
  width: 10px;
  height: 2px;
  position: relative;
  top: 48px;
  border-radius: 10px 10px 0px 0px;
}
.eleven .two-line {
  width: 10px;
  height: 102px;
  top: -52px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twelve .one-line {
  width: 10px;
  height: 2px;
  position: relative;
  top: 48px;
  border-radius: 10px 10px 0px 0px;
}
.twelve .two-line {
  width: 10px;
  height: 73px;
  top: -23px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.thirteen .one-line {
  width: 10px;
  height: 2px;
  position: relative;
  top: 48px;
  border-radius: 10px 10px 0px 0px;
}
.thirteen .two-line {
  width: 10px;
  height: 30px;
  top: 20px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.fourteen .one-line {
  width: 10px;
  height: 3px;
  top: 47px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.fourteen .two-line {
  width: 10px;
  height: 60px;
  top: -10px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.fiveteen .one-line {
  width: 10px;
  height: 2px;
  position: relative;
  top: 48px;
  border-radius: 10px 10px 0px 0px;
}
.fiveteen .two-line {
  width: 10px;
  height: 25px;
  top: 25px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.sixteen .one-line {
  width: 10px;
  height: 4px;
  position: relative;
  top: 46px;
  border-radius: 10px 10px 0px 0px;
}
.sixteen .two-line {
  width: 10px;
  height: 102px;
  top: -52px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.seventeen .one-line {
  width: 10px;
  height: 170px;
  top: -120px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.seventeen .two-line {
  width: 10px;
  height: 125px;
  top: -75px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.eighteen .one-line {
  width: 10px;
  height: 102px;
  top: -52px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.eighteen .two-line {
  width: 10px;
  height: 75px;
  top: -25px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.nineteen .one-line {
  width: 10px;
  height: 42px;
  top: 8px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.nineteen .two-line {
  width: 10px;
  height: 32px;
  top: 18px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty .one-line {
  width: 10px;
  height: 155px;
  top: -105px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty .two-line {
  width: 10px;
  height: 115px;
  top: -65px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty-one .one-line {
  width: 10px;
  height: 18px;
  top: 32px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty-one .two-line {
  width: 10px;
  height: 14px;
  top: 36px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty-two .one-line {
  width: 10px;
  height: 4px;
  position: relative;
  top: 46px;
  border-radius: 10px 10px 0px 0px;
}
.twenty-two .two-line {
  width: 10px;
  height: 14px;
  top: 36px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty-three .one-line {
  width: 10px;
  height: 52px;
  top: -2px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty-three .two-line {
  width: 10px;
  height: 42px;
  top: 8px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty-four .one-line {
  width: 10px;
  height: 16px;
  top: 34px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty-four .two-line {
  width: 8px;
  height: 12px;
  top: 38px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty-five .one-line {
  width: 10px;
  height: 110px;
  top: -60px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty-five .two-line {
  width: 10px;
  height: 82px;
  top: -32px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty-six .one-line {
  width: 10px;
  height: 98px;
  top: -48px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty-six .two-line {
  width: 10px;
  height: 75px;
  top: -25px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty-seven .one-line {
  width: 10px;
  height: 98px;
  top: -48px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty-seven .two-line {
  width: 10px;
  height: 75px;
  top: -25px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty-eight .one-line {
  width: 10px;
  height: 3px;
  top: 47px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty-eight .two-line {
  width: 10px;
  height: 60px;
  top: -10px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty-nine .one-line {
  width: 10px;
  height: 3px;
  top: 47px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.twenty-nine .two-line {
  width: 10px;
  height: 60px;
  top: -10px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.thirty .one-line {
  width: 10px;
  height: 3px;
  top: 47px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
.thirty .two-line {
  width: 10px;
  height: 3px;
  top: 47px;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}
</style>
