<template>
  <div class="tariffs" id="tariffs">
    <div class="container">
      <div class="title-box">
        <h1>Uchrashuvlarni <span>tashkil</span> etish tariflari</h1>
        <p>Narxlar tarif rejasiga bog'liq</p>
      </div>
      <div class="tariffs-boxes">
        <div class="start-box">
          <div class="title-box">
            <div>
              <img :src="startImage" alt="Image not found" />
            </div>
            <div>
              <p>Start</p>
              <p>
                <span>100 000</span>
                <span> (10) uchrashuv</span>
              </p>
            </div>
          </div>
          <p>
            <img :src="iconCheck" alt="Icon not found" />
            <span> 1 ta uchrashuv </span>
            <span class="price"> 10 000 </span>
            <span>UZS</span>
          </p>
          <p>
            <img :src="iconCheck" alt="Icon not found" />
            <span class=""> 10 ta uchrashuv </span>
            <span class="price"> 100 000 </span>
            <span>UZS</span>
          </p>
          <p>
            <img :src="iconCheck" alt="Icon not found" />
            <span> Narxlar tizim tomonidan belgilangan</span>
          </p>
          <button>Tarifni sotib olish</button>
        </div>

        <div class="standart-box">
          <div class="title-box">
            <div>
              <img :src="standartImage" alt="Image not found" />
            </div>
            <div class="standart-box-title">
              <p class="text-popular">Ommabop</p>
              <p class="tariff-name">Standart</p>
              <p>
                <span class="standart-box-big-price">135 000</span>
                <span class="allCountMeeting"> (15) uchrashuv</span>
              </p>
            </div>
          </div>
          <p>
            <img :src="iconCheck" alt="Icon not found" />
            <span> 1 ta uchrashuv </span>
            <span class="price"> 9 000 </span>
            <span>UZS</span>
          </p>
          <p>
            <img :src="iconCheck" alt="Icon not found" />
            <span> 18 ta uchrashuv </span>
            <span class="price"> 135 000 </span>
            <span>UZS</span>
          </p>
          <p>
            <img :src="iconCheck" alt="Icon not found" />
            <span> Naxrlar tizim tomonidan belgilangan</span>
          </p>
          <button>Tarifni sotib olish</button>
        </div>

        <div class="premium-box">
          <div class="title-box">
            <div>
              <img :src="premiumImage" alt="Image not found" />
            </div>
            <div>
              <p>Premium</p>
              <p>
                <span>170 000</span>
                <span> (20) uchrashuv</span>
              </p>
            </div>
          </div>
          <p>
            <img :src="iconCheck" alt="Icon not found" />
            <span> 1 ta uchrashuv </span>
            <span class="price"> 8 500 </span>
            <span>UZS</span>
          </p>
          <p>
            <img :src="iconCheck" alt="Icon not found" />
            <span> 20 ta uchrashuv </span>
            <span class="price"> 170 000 </span>
            <span>UZS</span>
          </p>
          <p>
            <img :src="iconCheck" alt="Icon not found" />
            <span> Naxrlar tizim tomonidan belgilangan</span>
          </p>
          <button>Tarifni sotib olish</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import startImage from "../../assets/images/tariffs/start.jpg";
import standartImage from "../../assets/images/tariffs/standart.jpg";
import premiumImage from "../../assets/images/tariffs/premium.jpg";
import iconCheck from "../../assets/icons/tariffs/check.svg";
export default {
  data() {
    return { startImage, standartImage, premiumImage, iconCheck };
  },
};
</script>

<style lang="scss">
.tariffs {
  padding-top: 74px;
  padding-bottom: 5rem;

  .title-box {
    & > h1 {
      text-align: center;
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 45px;
      span {
        background: linear-gradient(89.89deg, #3434ff 0.07%, #f42d2d 27.2%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
    & > p {
      text-align: center;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      text-align: center;
      color: rgba(0, 0, 0, 0.54);
    }
    img {
      border-radius: 20px;
      animation-name: tariffsAnimation;
      animation-timing-function: 0.5s;
      animation-delay: inherit;
      animation-iteration-count: infinite;
      animation-duration: 4s;
      animation-direction: alternate;
    }

    @keyframes tariffsAnimation {
      0% {
        transform: rotate(0deg);
      }

      50% {
        transform: rotate(360deg);
      }

      100% {
        transform: rotate(0deg);
      }
    }
  }
  .tariffs-boxes {
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    .start-box,
    .standart-box,
    .premium-box {
      &:hover {
        transform: scale(1.05);
        transition: all 0.3s linear;
      }
    }
    .start-box {
      padding: 29px 32px;
      background: #ffffff;
      box-shadow: 0px 0px 60px rgba(50, 83, 198, 0.15);
      border-radius: 20px;
      cursor: pointer;
      p {
        color: #757575;
      }
    }
    .standart-box {
      position: relative;
      padding: 29px 32px;
      background: #181e37;
      color: #fff;
      box-shadow: 0px 0px 60px rgba(50, 83, 198, 0.15);
      border-radius: 20px;
      cursor: pointer;
      .title-box {
        .standart-box-big-price,
        .tariff-name,
        .allCountMeeting {
          color: #fff !important;
        }
        .text-popular {
          position: absolute;
          top: 15px;
          right: 0;
          color: #fff;
          background: #0066ff;
          padding: 10px 20px;
          border-radius: 18px 0px 0px 18px;
          font-size: 14px;
          font-weight: normal;
        }
      }
      .price {
        color: #fff !important;
      }
    }
    .premium-box {
      padding: 29px 32px;
      background: #ffffff;
      box-shadow: 0px 0px 60px rgba(50, 83, 198, 0.15);
      border-radius: 20px;
      cursor: pointer;
      p {
        color: #757575;
      }
    }
    .price {
      font-weight: bold;
      color: #000;
    }

    .title-box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      gap: 12px;
      margin-bottom: 47px;
      border-bottom: 1px solid #edebf3;
      padding-bottom: 22px;
      p {
        &:first-child {
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          color: #1e1e1e;
          margin: 0;
        }
        &:last-child {
          margin: 0;
          margin-top: 6px;
          span {
            &:first-child {
              font-style: normal;
              font-weight: 700;
              font-size: 36px;
              line-height: 32px;
              color: #1e1e1e;
            }
            &:last-child {
              font-style: normal;
              font-weight: 400;
              font-size: 12px;
              color: rgba(0, 0, 0, 0.54);
            }
          }
        }
      }
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
      background: #0066ff;
      color: #fff;
      padding: 14px 100px;
      border: 1px solid #0066ff;
      font-size: 14px;
      margin-top: 35px;
      transition: all 0.5s ease;

      border-radius: 10px;
      animation-name: buyButtonAnimation;
      animation-timing-function: 0.5s;
      animation-delay: inherit;
      animation-iteration-count: infinite;
      animation-duration: 4s;
      animation-direction: alternate;

      @keyframes buyButtonAnimation {
        0% {
          transform: scale(1);
        }

        50% {
          transform: scale(1.1);
        }

        100% {
          transform: scale(1);
        }
      }
      &:active {
        transform: scale(0.9);
      }
    }
  }
}

@media (max-width: 1400px) {
  .tariffs {
    .container {
      padding: 0rem 4rem;
    }
    .tariffs-boxes {
      button {
        padding: 14px 112px;
      }
    }
  }
}
@media (max-width: 1300px) {
  .tariffs {
    .tariffs-boxes {
      button {
        padding: 14px 100px;
      }
    }
  }
}
@media (max-width: 1200px) {
  .tariffs {
    padding-bottom: 5rem;
    .container {
      padding: 0rem 5rem;
    }
    padding-top: 0px;
    .title-box {
      & > h1 {
        font-size: 32px;
        line-height: 40px;
      }
    }
    .tariffs-boxes {
      margin-top: 50px;
      gap: 20px;
      .start-box,
      .standart-box,
      .premium-box {
        p {
          font-size: 14px;
        }
      }

      .title-box {
        margin-bottom: 20px;

        img {
          width: 70px;
          height: 70px;
        }
        p {
          &:last-child {
            margin: 0;
            margin-top: 3px;
            span {
              &:first-child {
                font-size: 25px;
                line-height: 20px;
              }
              &:last-child {
                font-size: 10px;
              }
            }
          }
        }
      }
      button {
        padding: 14px 80px;
        font-size: 13px;
        margin-top: 20px;
      }
    }
  }
}
@media (max-width: 1100px) {
  .tariffs {
    padding-top: 5rem;

    .container {
      padding: 0 3rem;
    }
    .tariffs-boxes {
      button {
        padding: 14px 76px;
      }
    }
  }
}
@media (max-width: 992px) {
  .tariffs {
    .container {
      padding: 0 3rem; //
    }
    padding-top: 40px; //
    .title-box {
      & > h1 {
        font-size: 40px; //
        line-height: 20px; //
      }
    }
    .tariffs-boxes {
      margin-top: 50px; //
      display: grid; //
      grid-template-columns: repeat(2, 1fr); //
      grid-template-rows: repeat(2, 1fr); //

      .title-box {
        display: flex; //
        justify-content: flex-start; //
        p {
          &:last-child {
            margin: 0; //
            margin-top: 12px; //
            span {
              &:first-child {
                font-size: 48px; //
              }
            }
          }
        }
      }
      button {
        padding: 14px 133px; //
      }
    }
  }
}
@media (max-width: 800px) {
  .tariffs {
    .tariffs-boxes {
      & > div {
        padding: 0.3rem;
      }
      .title-box {
        display: flex;
        justify-content: flex-start;
        p {
          &:last-child {
            margin: 0;
            margin-top: 12px;
            span {
              &:first-child {
                font-size: 48px;
              }
            }
          }
        }
      }
      button {
        padding: 10px 0px; //
        width: 260px; //
        margin-left: 0.5rem; //
      }
    }
  }
}
@media (max-width: 700px) {
  .tariffs {
    .title-box {
      & > h1 {
        font-size: 35px; //
        line-height: 50px; //
      }
      p {
        font-size: 20px; //
      }
    }
    .tariffs-boxes {
      .start-box,
      .standart-box,
      .premium-box {
        p {
          font-size: 12px; //
        }
      }

      .title-box {
        img {
          height: 83px;
          width: 83px;
        }
        p {
          &:last-child {
            margin-top: 8px; //
            span {
              &:first-child {
                font-size: 28px; //
                display: block; //
              }
              &:last-child {
                line-height: 2.5rem; //
                font-size: 0.9rem; //
              }
            }
          }
        }
      }
      button {
        width: 211px; //
      }
    }
  }
}
@media (max-width: 600px) {
  .tariffs {
    .title-box {
      & > h1 {
        font-size: 40px; //
      }
    }
    .tariffs-boxes {
      display: grid; //
      grid-template-columns: 1fr; //
      .start-box,
      .standart-box,
      .premium-box {
        p {
          font-size: 20px; //
        }
      }

      .title-box {
        img {
          height: 123px; //
          width: 133px; //
        }
        p {
          &:first-child {
            font-size: 40px; //
          }
          &:last-child {
            span {
              &:first-child {
                font-size: 38px; //
              }
              &:last-child {
                line-height: 3.5rem; //
                font-size: 1.3rem; //
              }
            }
          }
        }
      }
      button {
        width: 400px; //
        font-size: 20px; //;;
      }
    }
  }
}
@media (max-width: 500px) {
  .tariffs {
    .container {
      padding: 0.5rem 2.5rem; //
    }
    .title-box {
      & > h1 {
        font-size: 2rem; //
        line-height: 40px; //
      }
    }
    .tariffs-boxes {
      .start-box,
      .standart-box,
      .premium-box {
        p {
          font-size: 18px; //
        }
      }
      .title-box {
        img {
          width: 100px; //
          height: 100px; //
        }
        p {
          &:first-child {
            font-size: 2rem; //
          }
          &:last-child {
            span {
              &:first-child {
                font-size: 25px; //
              }
              &:last-child {
                font-size: 1.1rem; //
                line-height: 45px; //
              }
            }
          }
        }
      }
      button {
        width: 320px; //
        font-size: 20px;
      }
    }
  }
}
@media (max-width: 500px) {
  .tariffs {
    .container {
      padding: 0.5rem 3rem; //
    }
    .title-box {
      & > h1 {
        font-size: 1.9rem; //
      }
    }
    .tariffs-boxes {
      .start-box,
      .standart-box,
      .premium-box {
        p {
          font-size: 18px; //
        }
      }
      .title-box {
        img {
          width: 100px; //
          height: 100px; //
        }
        p {
          &:first-child {
            font-size: 2rem; //
          }
          &:last-child {
            span {
              &:first-child {
                font-size: 25px; //
              }
              &:last-child {
                font-size: 1.1rem; //
                line-height: 45px; //
              }
            }
          }
        }
      }
      button {
        width: 320px; //
        font-size: 20px; //
      }
    }
  }
}
@media (max-width: 412px) {
  .tariffs {
    .container {
      padding: 0.5rem 2rem; //
    }
    .tariffs-boxes {
      button {
        width: 275px; //
      }
    }
  }
}
</style>
