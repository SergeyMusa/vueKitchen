<template>
  <div class="useful">
    <br />
    <hr />

    <h3>
      <router-link to="/page1">Типы планировок кухни</router-link>
    </h3>

    <h3>
      <router-link to="/page2"
        >Как выбрать материал для кухонного гарнитура</router-link
      >
    </h3>

    <h3>
      <router-link to="/page3"
        >Как правильно спланировать кухню,с размерами и мебелью.</router-link
      >
    </h3>

    <h3><router-link to="/page4">Уход за мебелью из МДФ</router-link></h3>
    <h3>
      <router-link to="/page5"
        >Разумное размещение мойки, плиты и холодильника.</router-link
      >
    </h3>
    <h3>
      <router-link to="/page10"
        >Уход за мебелью из ЛДСП, МДФ, Массива</router-link
      >
    </h3>
    <h3>
      <router-link to="/page10"
        >разработка эскиза - Листы разметки кухни</router-link
      >
    </h3>
    <h3><router-link to="/page20">Бланки замера</router-link></h3>

    <div>
      <div>
        <router-link to="/page11">Пленка или Пластик, что выбрать</router-link>
      </div>

      <h3>
        <router-link to="/page6"
          >Как собрать кухонный гарнитур самому</router-link
        >
      </h3>

      <h3>
        Как учесть все нюансы.Стоит ли привлекать дизайнера.Рабочий треугольник.
      </h3>
      <h3>Мойки — каталог производителей</h3>
      <h4>
        10 новинок GranFest 2020, которые нельзя пропустить Мойки GranFest: фото
        из каталога коллекций 2019 Мойки EWIGSTEIN: фото из каталога коллекций
        2019 года Топ-5 популярных моек для кухни EWIGSTEIN из кварца [фото +
        цены] 6 популярных кухонных моек GranFest: фото + цены Мойки Blanco
        Мойки Florentina Мойки Franke Мойки IDDIS Мойки Longran Мойки Marmorin
        Мойки Omoikiri Мойки Oulin Мойки Reginox Мойки Schock Мойки Smeg Мойки
        Telma Мойки Ukinox Мойки Zorg Мойки ИКЕА Мойки Polygran Мойки Alveus
        Мойки Teka
      </h4>
      <h3>Отделка и ремонт</h3>
      <h4>
        <p>Фартук</p>
        <p> Напольные покрытия</p>
        <p>Обои</p>
        <p>Свет</p>
          ДИЗАЙН КУХНИ: 200 ФОТО РЕАЛЬНЫХ ИНТЕРЬЕРОВ 
          https://vashakuhnya.com/dizayn/kuhni-foto
          https://www.houzz.ru/foto/kuhnya-foto-dizayna-interyera-phbr0-bp~t_13596
          https://www.kp.ru/putevoditel/dom/dizajn/kukhnya/
        <p> Разводка электрики</p>
       
      </h4>
      <h3>Видео</h3>
      <h4>https://www.youtube.com/watch?v=PtXiaLCeJdA</h4>

      <h3>Правила выбора цвета</h3>
      <h3>столешницы для кухни</h3>
      <h4>
        https://m-strana.ru/design/tsvet-stoleshnitsy-dlya-kukhni/?utm_source=copy&utm_medium=direct&utm_campaign=copy_from_site
        Как выбрать цвет столешницы для кухни: 60+ лучших сочетаний дополняющие
        интерьер
        https://design-homes.ru/komnaty/kukhnya-i-stolovaya/tsvet-stoleshnitsy-dlya-kukhni
      </h4>
      <h3>ФАКТУРЫ ИСКУССТВЕННОГО КАМНЯ</h3>

      <h3>Правило безопасных расстояний</h3>

      <h3>Онлайн-конструктор кухни ИКЕА бесплатный... - IKEA</h3>
      <h3></h3>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "PageUseful",
};
</script>

<style>
.useful {
  /* border: 1px solid red; */
  /* width: 60vw; */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

text-align: left;

  min-height: 100%;
  padding: 0 25% ;
  padding-bottom: 90px;

}
h3{
    /* border: 1px solid olivedrab; */
    /* background: green; */
}
/* box-sizing: border-box; */
</style>
