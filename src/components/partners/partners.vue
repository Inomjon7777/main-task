<template>
  <div class="partners">
    <div class="container">
      <h2 class="title">Hamkorlar</h2>
      <div class="banks">
        <a href="https://www.asakabank.uz/uz/physical-persons/home"  target="blank">
          <img class="asakabank" :src="asakabank" alt="asakabank" />
        </a>
        <a href="https://sqb.uz/uz/"  target="blank">
          <img class="sqb" :src="sqb" alt="sqb" />
        </a>
        <a href="https://agrobank.uz/uz/person"  target="blank">
          <img class="agrobank" :src="agrobank" alt="agrobank" />
        </a>
        <a href="https://hamkorbank.uz/uz/"  target="blank">
          <img class="hamkorbank" :src="hamkorbank" alt="hamkorbank" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
//images
import asakabank from "../../assets/images/PARTNERS/ASAKABANK.png";
import sqb from "../../assets/images/PARTNERS/SQB.png";
import agrobank from "../../assets/images/PARTNERS/AGROBANK.png";
import hamkorbank from "../../assets/images/PARTNERS/HAMKORBANK.png";
export default {
  data() {
    return {
      //images
      asakabank,
      sqb,
      agrobank,
      hamkorbank,
    };
  },
};
</script>

<style scoped>
.title {
  font-weight: 700;
  font-size: 36px;
  color: #001f31;
  padding-top: 50px;
  padding-bottom: 40px;
}

.partners {
  background: #f7f8fa;
}
.banks {
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 20px;
  padding-bottom: 40px;
}
img {
  width: 270px;
}
</style>
