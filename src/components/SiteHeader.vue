<template>
  <div class="main">
    <div class="main__left">
      <!-- Логотип -->
      <img id="scull" alt="My logo" src="img/logo.webp" height="100px" />
    </div>
    <div class="main__right">
      <div class="main__right__top">
        <a class="header-phone" href="tel:78652404050">📞 + 7 (8652) 404-050</a>
        <a class="btn phone-back-call" href="#call">Заказать звонок</a>
        <p>Принимаем заявки ежедневно с 9:00 до 18:00</p>
      </div>
      <div class="main__right__bottom">
        <p>
          <a href="#insta"
            ><img class="socPict" alt="insta" src="img/soc/insta.png"
          /></a>
          <a href="#whatsapp"
            ><img class="socPict" alt="whatsapp" src="img/soc/whatsapp.png" />
          </a>
          <a href="#telegramm"
            ><img class="socPict" alt="telegramm" src="img/soc/telegramm.png" />
          </a>
          <a href="#vk"
            ><img class="socPict" alt="vk" src="img/soc/vk.png" />
          </a>
          <a> `& nbsp` </a>
          <a href="#address"
            ><img
              class="socPict"
              alt="Адрес: г. Ставрополь, ул. Рогожникова д. 23/2"
              src="img/soc/address.png"
              title="Адрес: г. Ставрополь, ул. Рогожникова д. 23/2"
            />
          </a>
        </p>

        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteHeader",
  //   props: {
  //     msg: String
  //   }
};
</script>

<style scoped>
.main {
  /* display: inline-block; */
  border: 1px solid red;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* width: 99%; */
  margin: 1rem;
    background-color: rgb(205, 202, 202);
    opacity: 0.7; /* прозрачность */


}
.main__left {
  padding-top: 5px;

}
.main__right {

  padding-top: 10px;
  padding-right: 1rem;
  text-align: left;
    line-height: 0.1;

}
img.socPict {
  /* border: 1px solid green; */
  height: 40px;
}
img.socPict:hover {
  /* border: 1px solid rgb(36, 220, 36); */
  height: 42px;
}
.main__right__bottom {
        border: 1px solid goldenrod;
  margin: 0;
  padding: 0px;
      margin-block-start: 0;
    margin-block-end: 0em;
}
/* .main__right__bottom.p {
    margin: 0;
    margin-block-start: 1em;
    margin-block-end: 1em;
} */

/* img.scull{
  height: 120px;
  width: 220px;
  padding: 1rem;
} */
.header-phone {
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
  font-weight: bold;
  /* border: 1px solid rgb(221, 57, 224); */
}
.header-phone:hover {
  color: rgb(3, 25, 89);
}
.btn {
  background-color: #46bb4a; /* Green */
  border: none;
  color: white;
  padding: 12px 12px;
  margin-left: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 3px;
  /* min-width: 100px; */
}

.btn:focus-visible {
  border: 1px solid #0e6611;
  outline: none;
}
.btn:hover {
  /* border: 1px solid #349e38; */
  background-color: #3b993e; /* Green */
  transition: all 0.4s;
  box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
}
.btn:active {
  background-color: #808080;
}
.btn:disabled {
  background-color: #eee;
  border-color: #eee;
  color: #444;
  cursor: not-allowed;
}
</style>
