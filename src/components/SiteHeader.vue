<template>
  <div class="main">
      <div class="main__left">
        <!-- Логотип -->
        <img
          id="scull"
          alt="My logo"
          src="../assets/img/logo.jpeg"
          height="100px"
        />
      </div>

      <div class="main__right">
        <div class="main__right__top">
          <a class="header-phone" href="tel:78652404050"> +7(8652) 404-050</a>
          <MainBtn btnName="Заказать  📞 " btnUrl="#call" />
          <!-- <a class="btn phone-back-call" href="#call">Заказать звонок</a> -->
        </div>
          <p>Принимаем заявки ежедневно с 9:00 до 18:00</p>
        <SiteHeaderSoc />
        <div class="main__right__bottom">

        </div>

    </div>
  </div>
</template>

<script>
import MainBtn from "@/components/MainBtn.vue";
import SiteHeaderSoc from "@/components/SiteHeaderSoc.vue";

export default {
  name: "SiteHeader",
  components: {
    MainBtn,
    SiteHeaderSoc,
  },

  //   props: {
  //     msg: String
  //   }
};
</script>

<style scoped>
.main {
  /* display: inline-block; */
  /* border: 1px solid orange; */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* width: 99%; */
  margin: 0 1rem ;
  /* background-color: rgb(205, 202, 202); */
  /* opacity: 0.7;  */
  /* прозрачность */
}
.main__left {
  padding-top: 15px;
}
.main__right {
  /* border: 1px solid red; */

  min-width: 22rem;
  padding-top: 15px;
  padding-right: 10px;
  text-align: left;
  line-height: 0.1;
}
.main__right__top{
display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: -8px 0 -15px;
}
.header-phone {
  text-decoration: none;
  color: black;
  font-size: 1.4rem;
  font-weight: bold;
  /* border: 1px solid rgb(221, 57, 224); */
  margin-top: 0.9rem;
}



.header-phone:hover {
  color: rgb(3, 25, 89);
  /* box-shadow: 0px 0px 15px 10px #000; */
}
</style>
