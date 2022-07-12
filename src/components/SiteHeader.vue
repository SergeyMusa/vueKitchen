<template>
  <div class="main">
    <div class="left">
      <!-- Логотип -->
      <img id="scull" alt="My logo" src="img/logo.webp" height="100px" />
    </div>
    <div class="right">
      <a href="tel:78652404050" class="header-phone">📞 + 7 (8652) 404-050</a>
      <a class="small-button phone-back-call">Заказать звонок</a>
      <p>Принимаем заявки ежедневно с 9:00 до 18:00</p>

      {картинки соцсетей и адрес}
      <p>г. Ставрополь, ул. Рогожникова д. 23/2</p>
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
div.main {
  /* display: inline-block; */
  border: 1px solid red;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* width: 99%; */
  margin: 1rem;
}
div.left {
  padding-top: 5px;
}
div.right {
  line-height: 0.4;
  padding-top: 15px;
  padding-right: 1rem;
  text-align: left;
}
/* img.scull{
  height: 120px;
  width: 220px;
  padding: 1rem;
} */
</style>
