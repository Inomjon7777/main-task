<template>
  <div class="transfers" id="transfers">
    <p class="transfers__title">
      Asosiy<span class="transfers__title-grey"> / O‘tkazmalar</span>
    </p>
    <div class="transfers-boxes">
      <!---TRANSFER FROM CARD TO CARD--->
      <div class="transfer-from-card-to-card">
        <p class="transfer-from-card-to-card__title">
          Kartadan kartaga o’tkazish
        </p>
        <p class="transfer-from-card-to-card__description">Xizmat narxi 1%</p>
        <div class="transfer-box-parent">
          <div class="transfer-box">
            <!-- transfer__buttons box -->
            <div class="transfer__buttons-box">
              <button>
                <img :src="iconTransferMoney" alt="icon_transfer_money" />
                Pul o‘tkazish
              </button>
              <button>
                <img :src="iconAskingForMoney" alt="iconAskingForMoney" /> Pul
                so‘rash
              </button>
              <button>
                <img :src="iconTransferToMyCard" alt="iconTransferToMyCard" />
                Mening kartamga o‘tkazish
              </button>
            </div>
            <!-- ecipients card or phone number box -->
            <div class="recipients-card-or-phone-number-box">
              <p class="recipients-card-or-phone-number-box__title">
                Qabul qiluvchi kartaning yoki telefon raqami
              </p>
              <div class="recipients-card-or-phone-number-box__input-box">
                <img
                  class="iconRecipientsCard"
                  :src="iconRecipientsCard"
                  alt="icon_recipients_card"
                />
                <input placeholder="0000 0000 0000 0000" />
                <img
                  class="iconUserSquare"
                  :src="iconUserSquare"
                  alt="icon_user_square"
                />
              </div>
            </div>
            <!-- transfer amount box -->
            <div class="transfer-amount-box">
              <p class="transfer-amount-box__title">O’tkazma summasi</p>
              <div class="transfer-amount-box__input-box">
                <input type="text" placeholder="Summani kiriting" />
                <p>so'm</p>
              </div>
            </div>
            <!-- plastic card box -->
            <div class="plastic-card-box">
              <p class="plastic-card-box__title">O’tkazma summasi</p>
              <div class="plastic-card-box__card-box">
                <div class="icon-uzcard-box">
                  <img
                    class="iconUzcard"
                    :src="iconUzcard"
                    alt="icon_two_card"
                  />
                </div>
                <div class="plastic-card-box__card-box__word-box">
                  <p>8600 14** **** 1816</p>
                  <p>2 457 844.00 UZS</p>
                </div>
                <img
                  class="icon_vertical_strelka"
                  :src="iconVerticalStrelka"
                  alt="icon_vertical_strelka"
                />
              </div>
            </div>
            <!-- button the next step -->
            <div class="the-next-step-box"><button>Keyingi qadam</button></div>
          </div>
        </div>
      </div>
      <!---HISTORY OF TRANSFERS--->
      <div class="history-of-transfers">
        <!-- history of transfers box -->
        <div class="history-of-transfers-box">
          <p class="history-of-transfers-box__title">O‘tkazmalar tarixi</p>
          <!-- 1 history-of-transfers-box__date-box -->
          <div class="history-of-transfers-box__date-box">
            <p>22.06.2022</p>
            <div class="summa">
              <span class="green-summa">+5 478 125 UZS</span>
              <span class="grey-slash">/</span>
              <span class="red-summa">-2 145 478 UZS</span>
            </div>
          </div>
          <!-- 1 history-of-transfers-box__card-box -->
          <div class="history-of-transfers-box__card-box">
            <div class="history-of-transfers-box__card-box__img-vs-date-box">
              <img :src="iconTwoCard" alt="icon_two_card" />
              <div class="card-name-vs-date">
                <p>Kamolon</p>
                <p>12.06.2022 14:06</p>
              </div>
            </div>
            <div class="cut-off-amount-vs-card-number">
              <p>- 51 245</p>
              <p>8600 01** **** 1346</p>
            </div>
          </div>
          <!-- 2 history-of-transfers-box__card-box -->
          <div class="history-of-transfers-box__card-box">
            <div class="history-of-transfers-box__card-box__img-vs-date-box">
              <img :src="iconTwoCard" alt="icon_two_card" />
              <div class="card-name-vs-date">
                <p>Kartadan kartaga o’tk...</p>
                <p>12.06.2022</p>
              </div>
            </div>
            <div class="cut-off-amount-vs-card-number">
              <p class="green-summa">+ 4 144 254.00 UZS</p>
              <p>8600 01** **** 1346</p>
            </div>
          </div>
          <!-- 3 history-of-transfers-box__card-box -->
          <div class="history-of-transfers-box__card-box">
            <div class="history-of-transfers-box__card-box__img-vs-date-box">
              <img :src="iconTwoCard" alt="icon_two_card" />
              <div class="card-name-vs-date">
                <p>Kamolon</p>
                <p>12.06.2022 14:06</p>
              </div>
            </div>
            <div class="cut-off-amount-vs-card-number">
              <p>- 51 245</p>
              <p>8600 01** **** 1346</p>
            </div>
          </div>
          <!-- 2 history-of-transfers-box__date-box -->
          <div class="history-of-transfers-box__date-box">
            <p>22.06.2022</p>
          </div>
          <!-- 4 history-of-transfers-box__card-box -->
          <div class="history-of-transfers-box__card-box">
            <div class="history-of-transfers-box__card-box__img-vs-date-box">
              <img :src="iconTwoCard" alt="icon_two_card" />
              <div class="card-name-vs-date">
                <p>Kamolon</p>
                <p>12.06.2022 14:06</p>
              </div>
            </div>
            <div class="cut-off-amount-vs-card-number">
              <p>- 51 245</p>
              <p>8600 01** **** 1346</p>
            </div>
          </div>
          <!-- 5 history-of-transfers-box__card-box -->
          <div class="history-of-transfers-box__card-box">
            <div class="history-of-transfers-box__card-box__img-vs-date-box">
              <img :src="iconTwoCard" alt="icon_two_card" />
              <div class="card-name-vs-date">
                <p>Kartadan kartaga o’tk...</p>
                <p>12.06.2022</p>
              </div>
            </div>
            <div class="cut-off-amount-vs-card-number">
              <p class="green-summa">+ 4 144 254.00 UZS</p>
              <p>8600 01** **** 1346</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconTransferToMyCard from "../../../assets/icons/transfers/iconTransferToMyCard.svg";
import iconAskingForMoney from "../../../assets/icons/transfers/iconAskingForMoney.svg";
import iconTransferMoney from "../../../assets/icons/transfers/iconTransferMoney.svg";
import iconRecipientsCard from "../../../assets/icons/transfers/iconRecipientsCard.svg";
import iconVerticalStrelka from "../../../assets/icons/transfers/iconVerticalStrelka.svg";
import iconUserSquare from "../../../assets/icons/transfers/iconUserSquare.svg";
import iconTwoCard from "../../../assets/icons/transfers/iconTwoCard.svg";
import iconUzcard from "../../../assets/icons/transfers/Uzcard.png";
//icons
export default {
  data() {
    return {
      //icons
      iconTransferToMyCard,
      iconAskingForMoney,
      iconTransferMoney,
      iconRecipientsCard,
      iconVerticalStrelka,
      iconUserSquare,
      iconTwoCard,
      iconUzcard,
    };
  },
};
</script>

<style scoped>
.transfers {
  background-color: #f0f0f0;
  height: 655px;
}
.transfers-boxes {
  display: flex;
  height: 585px;
  justify-content: space-between;
  align-items: center;
}
.transfer-from-card-to-card {
  margin: 24px;
  height: 585px;
  flex-grow: 7;
}
.history-of-transfers {
  flex-grow: 3;
  height: 545px;
  margin-right: 24px;
  width: 28%;
}
.transfer-from-card-to-card,
.history-of-transfers {
  background: #ffffff;
  border-radius: 10px;
}
.transfers__title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
  padding-top: 10px;
  padding-left: 24px;
}
.transfers__title-grey {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #919191;
}
.transfer-box-parent {
  display: grid;
  place-items: center;
}
.transfer-box {
  background: #ffffff;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  padding: 15px;
  height: 430px;
  width: max-content;
  margin-top: 20px;
}
.transfer-from-card-to-card__title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #021723;
  margin-top: 20px;
}
.transfer-from-card-to-card__description {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #919191;
  margin-top: 6px;
}

.transfer-from-card-to-card > p {
  margin-left: 22px;
}
.transfer__buttons-box {
  display: flex;
  gap: 24px;
}

.transfer__buttons-box button {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
  display: flex;
  gap: 10px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #929292;
  padding: 6px 16px;
  background: #f0f0f0;
  border-radius: 10px;
  border: 1px solid #f0f0f0;
}
.transfer__buttons-box button:hover,
.transfer__buttons-box button:active {
  background: #0eb2b3;
  color: #fff;
}

.recipients-card-or-phone-number-box__title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #021723;
  margin-top: 20px;
}
.recipients-card-or-phone-number-box__input-box {
  border: 1px solid #d5e3ed;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 500px;
}
.iconUserSquare {
  padding: 7px;
  background: #fbab07;
  border-radius: 0px 10px 10px 0px;
}
.iconRecipientsCard {
  margin-left: 18px;
  margin-right: 12px;
}
.recipients-card-or-phone-number-box__input-box {
  margin-top: 8px;
  margin-bottom: 20px;
}
.recipients-card-or-phone-number-box__input-box input {
  border: none;
  width: 100%;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #9597a8;
  outline: none;
}
.transfer-amount-box__title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #021723;
}
.transfer-amount-box__input-box {
  display: flex;
  border: 1px solid #d5e3ed;
  border-radius: 10px;
  padding: 7px;
  width: 485px;
  margin-top: 8px;
  margin-bottom: 20px;
}
.transfer-amount-box__input-box input {
  width: 100%;
  border: none;
}
.plastic-card-box__title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #021723;
}
.plastic-card-box__card-box {
  display: flex;
  padding: 7px;
  border: 1px solid #d5e3ed;
  border-radius: 10px;
  width: 485px;
}
.iconUzcard {
  width: 33px;
  height: 33px;
  object-fit: contain;
}
.icon-uzcard-box {
  padding: 9px;
  border-radius: 50%;
  background-color: #193f85;
}
.plastic-card-box__card-box__word-box p:first-child {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  color: #000000;
  margin-top: 7px;
}
.plastic-card-box__card-box__word-box {
  margin-left: 16px;
}
.plastic-card-box__card-box__word-box p:last-child {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
}
.icon_vertical_strelka {
  margin-left: 210px;
}
.the-next-step-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
.the-next-step-box button {
  padding: 10px 20px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
  background: #fbab07;
  border-radius: 10px;
  border: 1px solid #fbab07;
  cursor: pointer;
  transition: all 0.5s ease;
}
.the-next-step-box button:hover {
  background-color: #fff;
  color: #fbab07;
}

/*HISTORY OF TRANSFERS*/
.transfers__title {
  padding: 10px 0px 14px 0px;
  margin-left: 24px;
}
.history-of-transfers {
  padding: 20px 22px;
}
.history-of-transfers-box__title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #021723;
}
.history-of-transfers-box__date-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.history-of-transfers-box__date-box p:first-child {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-top: 16px;
}
.green-summa,
.red-summa,
.grey-slash {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
}
.green-summa {
  color: #00b488;
}
.red-summa {
  color: #c42126;
}
.grey-slash {
  color: #6a7494;
}
.summa {
  display: flex;
  align-items: center;
}
.history-of-transfers-box__card-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding: 6px 7px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 4, 106, 0.03);
  border-radius: 5px;
}
.history-of-transfers-box__card-box img {
  width: 24px;
  height: 24px;
}
.card-name-vs-date {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.card-name-vs-date p:first-child {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.02em;
  color: #022964;
}
.card-name-vs-date p:last-child {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: #6a7494;
}
.cut-off-amount-vs-card-number {
  display: flex;
  gap: 6px;
  flex-direction: column;
  align-items: flex-end;
}
.cut-off-amount-vs-card-number p:last-child {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: #6a7494;
}
.cut-off-amount-vs-card-number p:first-child {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.02em;
  color: #dc3027;
}

.history-of-transfers-box__card-box__img-vs-date-box {
  display: flex;
  align-items: center;
  gap: 20px;
}
.history-of-transfers-box__card-box__img-vs-date-box img {
  padding: 12px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 4, 106, 0.05);
  border-radius: 5px;
}
.green-summa {
  color: #00b488 !important;
}
</style>
