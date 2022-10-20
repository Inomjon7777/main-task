<template>
  <div class="advantages" id="advantages">
    <div class="container">
      <div class="advantages-boxes">
        <div class="banner">
          <img :src="persons" alt="Img not found" />
        </div>
        <div class="information">
          <div class="advantagesTitleBox">
            <h2>
              <span>Afzalliklar</span>
              <span> bilan tanishing</span>
            </h2>
            <p>
              Nima uchun iMeetings da uchrashuv tashkil etish shunchalik
              samarali?
            </p>
          </div>
          <div class="adaptabilityTitleBox">
            <h3>Adaptivlik</h3>
            <p>
              Qayerdaligingizdan qat'iy nazar, har qanday qurilmada uchrashuv
              tashkil qilish yoki unda qatnashish mumkin.
            </p>
          </div>
          <div class="opportunitiesTitleBox">
            <h3>Eng qulay imkoniyatlar</h3>
            <p>
              Mobil qurilma har doim qo'lda, foydalanuvchilar xabarlarni
              o'qiydilar. Mijozlar yaratilgan qulaylik evaziga reklama
              xabarlarini ko’rishga qarshi emas.
            </p>
          </div>
          <div class="viewMessageTitleBox">
            <h3>Xabarlarni tezkor ko‘rish</h3>
            <p>
              Xabarlarni o'rtacha o’qilishi statistikaga ko'ra, elektron
              pochtadan 2 baravar ko'p.
            </p>
          </div>
          <div class="selectTitleBox">
            <h3>iMeetings ni tanlaganda nimaga erishasiz?</h3>
            <p>
              Xavfsiz ma'lumotlar markazidagi ishonchli serverlar, DoS va DDoS
              hujumlaridan himoyalanish, shaxsiy va guruh uchrashuvlari -
              bularning barchasi yuqori darajadagi ishonchni ta'minlaydi va har
              oy o’nlab uchrashuvlarni o'tkazish imkonini beradi.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//images
import persons from "../../assets/images/advantages/persons.jpg";
export default {
  data() {
    //images
    return { persons };
  },
};
</script>

<style lang="scss">
.advantages {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 73px;
  &-boxes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    .banner {
      img {
        width: 500px;
        height: 600px;
        border-radius: 20px;
      }
    }

    .information {
      h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
        margin: 0;
        margin-bottom: 10px;
        cursor: pointer;
        span {
          &:first-child {
            background: linear-gradient(89.89deg, #3434ff 0.07%, #f42d2d 27.2%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          &:last-child {
            color: #000;
          }
        }
      }
      h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 32px;
        color: #000;
        cursor: pointer;
        margin: 0px;
        margin-top: 30px;

        &:hover {
          color: #0066ff;
        }
      }
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: rgba(0, 0, 0, 0.54);
        margin-top: 3px;
      }
    }
  }
}

@media (max-width: 1400px) {
  .container {
    padding: 0rem 4rem;
  }
}
@media (max-width: 1200px) {
  .advantages {
    .container {
      padding: 5rem 5rem;
    }
    padding: 0px;
    margin-top: 20px;
    &-boxes {
      gap: 50px;
      .banner {
        img {
          width: 400px;
          height: 500px;
        }
      }
      .information {
        h2 {
          font-size: 32px;
          margin-bottom: 0px;
        }
        h3 {
          font-size: 18px;
          line-height: 20px;
          margin-top: 30px;
        }
        p {
          font-size: 15px;
          line-height: 20px;
          margin-top: 5px;
        }
      }
    }
  }
}
@media (max-width: 1100px) {
  .advantages {
    padding-top: 5rem;
    .container {
      padding: 0 3rem;
    }
  }
}
@media (max-width: 992px) {
  .advantages {
    .container {
      padding: 0 3rem;
    }
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 73px;
    &-boxes {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column-reverse;
      .banner {
        img {
          width: 875px;
          height: 600px;
          object-fit: cover;
          object-position: 0px 30%;
        }
      }
      .information {
        h2 {
          font-size: 36px;
        }
        h3 {
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 32px;
          margin: 0px;
          margin-top: 30px;
        }
        p {
          font-size: 16px;
          line-height: 26px;
          margin-top: 3px;
        }
      }
    }
  }
}
@media (max-width: 800px) {
  .advantages {
    &-boxes {
      .banner {
        img {
          width: 680px; //
          height: 550px; //
        }
      }
      .information {
        h2 {
          font-size: 42px; //
        }
      }
    }
  }
}
@media (max-width: 700px) {
  .advantages {
    &-boxes {
      .banner {
        img {
          width: 585px; //
          height: 540px; //
        }
      }
      .information {
        p {
          margin-top: 1rem; //
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .advantages {
    &-boxes {
      .banner {
        img {
          width: 480px; //
          height: 540px; //
        }
      }
      .information {
        h2 {
          font-size: 40px; //;;
        }
      }
    }
  }
}
@media (max-width: 500px) {
  .advantages {
    .container {
      padding: 0.5rem 2.5rem; //
    }
    &-boxes {
      .banner {
        img {
          width: 400px; //
          height: 400px; //
        }
      }
      .information {
        text-align: center; //
        h2 {
          font-size: 30px; //
        }
        h3 {
          font-size: 25px; //
        }
        p {
          font-size: 1.2rem; //
        }
      }
    }
  }
}
@media (max-width: 412px) {
  .advantages {
    .container {
      padding: 0.5rem 2.5rem; //
    }
    &-boxes {
      .banner {
        img {
          width: 350px; //
          height: 350px; //
        }
      }
    }
  }
}
</style>
