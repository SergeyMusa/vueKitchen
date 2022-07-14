<template>
  <div class="main">
    <div>
      <!-- Логотип -->
      <img id="scull" alt="My logo" src="img/logo.webp" height="100px" />
      © 2022 Альфа Мебель
    </div>
    <div>
      ДЕЛАЕМ: Кухни на заказ в Ставрополе. Дизайн, производство, доставка и
      монтаж
    </div>
    <div>
      АДРЕС И ТЕЛЕФОН Тел. в Ставрополе: + 7 (8652) 404-050
      alfamebel26@gmail.com г. Ставрополь, ул. Рогожникова д. 23/2 Политика
      конфиденциальности
    </div>
    <div>
      ПРИНИМАЕМ ЗАЯВКИ Заявки с сайта принимаются круглосуточно и без выходных.
      Заказать звонок.
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteFooter",
  //   props: {
  //     msg: String
  //   }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
  margin: 5px 20px;
  width: 22%;
}

div.main {
  /* display: inline-block; */
  border: 1px solid red;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 98%;
  margin: 1%;
}

</style>
