<template>
  <div class="main">
      <div class="main__left">
        <!-- Логотип -->
        <img
          id="scull"
          alt="My logo"
          src="../assets/img/logo.webp"
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

        <div class="main__right__bottom">
          <a href="#insta"
            ><img class="socPict" alt="insta" src="../assets/img/soc/insta.png"
          /></a>
          <a href="#whatsapp"
            ><img
              class="socPict"
              alt="whatsapp"
              src="../assets/img/soc/whatsapp.png"
            />
          </a>
          <a href="#telegramm"
            ><img
              class="socPict"
              alt="telegramm"
              src="../assets/img/soc/telegramm.png"
            />
          </a>
          <a href="#vk"
            ><img class="socPict"  href="#youtube" alt="vk" src="../assets/img/soc/vk.png" />
          </a>
          <a href="#youtube"
            ><img class="socPict" href="#youtube" alt="youtube" src="../assets/img/soc/youtube.png" />
          </a>
          <a href="#email"
            ><img class="socPict" href="mailto:kuhni-26@mail.ru?subject=Вопрос по кухне" alt="email" src="../assets/img/soc/mail.png" />
          </a>
          <!-- <a> `& nbsp` </a> --> <!-- FIXME: -->
          <a href="#map" class="left_margin"
            ><img
              class="socPict"
              alt="Адрес: г. Ставрополь, ул. Рогожникова д. 23/2"
              src="../assets/img/soc/address.png"
              title="Адрес: г. Ставрополь, ул. Рогожникова д. 23/2"
            />
          </a>
        </div>
    </div>
  </div>
</template>

<script>
import MainBtn from "@/components/MainBtn.vue";

export default {
  name: "SiteHeader",
  components: {
    MainBtn,
  },
  //   props: {
  //     msg: String
  //   }
};
</script>

<style scoped>
.main {
  /* display: inline-block; */
  border: 1px solid orange;

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
  border: 1px solid red;

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
img.socPict {
  /* border: 1px solid green; */
  height: 35px;
  margin: 0 2px;
}
img.socPict:hover {
  /* border: 1px solid rgb(36, 220, 36); */
  /* box-shadow: 0px 0px 5px 3px rgb(234, 226, 226); */
    filter: brightness(135%);

  /* background-blend-mode: hard-light; */
}

.header-phone:hover {
  color: rgb(3, 25, 89);
  /* box-shadow: 0px 0px 15px 10px #000; */
}

.left_margin {
  margin-left: 4rem;
}
</style>
