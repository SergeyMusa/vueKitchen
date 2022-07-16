<template>
  <div>
    <a href="https://instagram.com/mebel26.ru?igshid=YmMyMTA2M2Y=" target="_blank">
      <img class="socPict" alt="insta" src="../assets/img/soc/insta.png"
    /></a>
    <a href="https://wa.me/+79854650850" target="_blank">
      <img
        class="socPict"
        alt="whatsapp"
        src="../assets/img/soc/whatsapp.png"
      />
    </a>
    <a href="tg://resolve?domain=stavmebel26ru" target="_blank">
      <img
        class="socPict"
        title="Телеграм"
        alt="Telegram"
        src="../assets/img/soc/telegram.png"
      />
    </a>
    <a href="https://vk.com/stavmebel26" target="_blank">
      <img
        class="socPict"
        title="ВКонтакте"
        alt="vk"
        src="../assets/img/soc/vk.png"
      />
    </a>
    <a href="https://www.youtube.com/c/masterpitstop" target="_blank">
      <img class="socPict" alt="youtube" src="../assets/img/soc/youtube.png" />
    </a>
    <a href="mailto:kuhni-26@mail.ru?subject=Вопрос по кухне">
      <img
        class="socPict"
        title="kuhni-26@mail.ru"
        alt="email"
        src="../assets/img/soc/mail.png"
      />
    </a>
    <a href="#map" class="left_margin"
      ><img
        class="socPict"
        alt="Адрес: г. Ставрополь, ул. Рогожникова д. 23/2"
        src="../assets/img/soc/address.png"
        title="Адрес: г. Ставрополь, ул. Рогожникова д. 23/2"
      />
    </a>
  </div>
</template>

<script>
// import MainBtn from "@/components/MainBtn.vue";
export default {
  name: "SiteHeaderSoc",
};
</script>

<style scoped>
img.socPict {
  /* border: 1px solid green; */
  height: 35px;
  margin: 0 2px;
}
.left_margin {
  margin-left: 4rem;
}
img.socPict:hover {
  filter: brightness(135%);
}
</style>
