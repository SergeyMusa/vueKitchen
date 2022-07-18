<template>
  <div id="PageAccordion">
     <zz-accordion v-bind:contents.sync="contents"></zz-accordion>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'PageAccordion',
  //   components: {
  //   // CAccordionHeader,
  // },
  data: function() {
  return {
		contents: [{
			title: 'Lorem ipsum dolor sit amet',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			active: false
		}, {
			title: 'Ut enim ad minim veniam',
			description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			active: false
		}, {
			title: 'Duis aute irure dolor in reprehenderit',
			description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
			active: false
		}, {
			title: 'Excepteur sint occaecat cupidatat non proident',
			description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			active: false
		}]
	}
},
}

Vue.component('zz-accordion', {
	props: {
    contents: Array
  },
	data: function() {
		return {
      TweenLite: '',		
      Elastic: '',
      Bounce: '',
    }
	},
	methods: {
		expand: function(event={1:1, 2:2}, i) {
			event.preventDefault();

			let el = this.$refs['accordion-body-' + i][0];

			if (this.contents[i].active === false) {
				this.props.contents[i].active = true;

				this.TweenLite.to(el, 1, {
					height: el.scrollHeight,
					ease: this.Elastic.easeOut.config(1, 0.3)
				});
			} else {
				this.props.contents[i].active = false;

				this.TweenLite.to(el, 0.5, {
					height: 0,
					ease: this.Bounce.easeOut
				});
			}
		}
	},
	template: `
<div class="accordion">
	<div
		class="accordion-item"
		v-for="content, i in contents"
		v-bind:class="{ 'accordion-active': content.active }"
	>
		<div class="accordion-header">
			<a href="#" v-on:click="expand(event, i)">
				<div class="accordion-header-div">{{ content.title }}</div>
				<div class="accordion-header-div">
					<div class="accordion-caret"></div>
				</div>
			</a>
		</div>
		<div class="accordion-body" v-bind:ref="'accordion-body-' + i">
			<div class="accordion-content">{{ content.description }}</div>
		</div>
	</div>
</div>
`
});

// ----------

// new Vue({
//   el: '#app',
//   data: {
//     example1: exampleData1,
//     example2: exampleData2
//   }
// })

// const AccordionData = [
//   {
//     id: 1,
//     active: true,
//     title: 'Мебель под заказ',
//     details: `
//       <p style="text-align: justify">Обратитесь в "MEBEL"!</p>
//       <p style="text-align: justify">
//         Итак, недавно вы решили
//         <strong>купить корпусную мебель</strong> (кухни, шкафы, стенку,
//         прихожую, спальню и т.п.) в Ставрополе, которая обладает
//         нестандартными размерами или же специальной конфигурацией,
//         необычной цветовой гаммой, то есть параметрами, которые не
//         применяются при изготовлении стандартных моделей мебели.
//       </p>
//       <p style="text-align: justify">
//         Если вы решили привнести в интерьер вашего дома нечто необычное
//         и индивидуальное, тогда обратитесь в "MEBEL"! Мы
//         выполняем изготовление на заказ корпусной мебели практически
//         любой сложности по ценам, которые вас приятно удивят! Позвоните
//         нам по телефону&nbsp;8-988-759-77-29&nbsp;и оставьте заявку
//         на&nbsp;выезд дизайнера-замерщика&nbsp;с образцами материалов
//         для создания вашей уникальной мебели!
//       </p> 
//     `
//   },
//   {
//     id: 2,
//     active: false,
//     title: 'Предварительный этап',
//     details: `
//       <p style="text-align: justify">
//         Специалист нашей компании в согласованный с вами день замерит
//         помещение, прорисует предварительный эскиз корпусной мебели на
//         заказ, согласует с вами схему ее расстановки, а также материалы,
//         фурнитуру, комплектацию мебели и обсудит стоимость заказа. Если
//         вы не готовы поделиться собственными дизайнерскими идеями, наш
//         специалист предложит вам варианты оформления корпусной мебели.
//       </p>
//       <p style="text-align: justify">
//         В случае вашего положительного решения на изготовление корпусной
//         мебели силами нашей компании вы заключаете договор и вносите 50%
//         предоплату от стоимости изделия. В данном случае выезд
//         специалиста по г. Ставрополю для вас будет совершенно
//         бесплатным. После заключения договора вы можете внести изменения
//         в разработанный совместно с нашим специалистом проект корпусной
//         мебели в течение 3х рабочих дней.
//       </p>    `
//   },
//   {
//     id: 3,
//     active: false,
//     title: `Сроки изготовления мебели`,
//     details: `
//       <div class="panel-body">
//         <p style="text-align: justify">
//           Ваша мебель будет изготавливаться силами наших ответственных
//           профессиональных мастеров в течение 15-45 рабочих дней со дня
//           подписания договора (срок варьируется в зависимости от объема
//           заказа и сложности исполнения проекта).<br />После доставки
//           готовой корпусной мебели вы осуществляете окончательный
//           расчет.<br />Сборка корпусной мебели осуществляется в
//           согласованный с вами день представителями фабрики. Стоимость
//           сборки составляет 10% от цены изделия и оплачивается отдельно.
//         </p>
//       </div>    
//       `
//   },
//   {
//     id: 4,
//     active: false,
//     title: `Наши преимущества`,
//     details: `
//       <div class="panel-body">
//               <p style="text-align: justify">
//                 Наши преимущества:<br />- возможность воплотить в жизнь ваш
//                 индивидуальный проект;<br />- высокое качество и надежность
//                 мебельной продукции;<br />- гарантия на корпусную мебель
//                 составляет целых 18 месяцев, а также включает в себя бессрочное
//                 послегарантийное обслуживание;<br />- наличие собственного
//                 производства позволяет нам быстро выполнять заказ (Вам не
//                 придется долго ждать выполнения или доставки заказа, выезда
//                 специалиста для замера;<br />- превосходное соотношение цены и
//                 качества мебели;<br />- возможность изготовления прямых и
//                 радиусных фасадов, а также эмалевых фасадов;<br />- огромное
//                 разнообразие фасадных цветов, мебельных аксессуаров и
//                 фурнитуры;<br />- разнообразные и качественные материалы для
//                 создания фасадов, а именно:
//               </p>
//               <ul>
//                 <li style="text-align: justify">ДСП и ламинированная ДСП;</li>
//                 <li style="text-align: justify">МДФ пластик;</li>
//                 <li style="text-align: justify">МДФ с пленкой ПВХ;</li>
//                 <li style="text-align: justify">МДФ эмаль;</li>
//                 <li style="text-align: justify">массив (дуб, бук, ясень);</li>
//               </ul>
//               <p style="text-align: justify">
//                 - подетальный просчет цены при составлении эскиза.
//               </p>
//               <p style="text-align: justify">
//                 Вы можете также составить свой эскиз кухни и переслать нам по
//                 электронной почте и мы рассчитаем стоимость изделия.
//               </p>
//             </div>
//       `
//   },
//     {
//     id: 5,
//     active: false,
//     title: `Наша цель`,
//     details: `
//       <div class="panel-body">
//               <p style="text-align: justify">Наша Цель:</p>
//               <p style="text-align: justify">
//                 Благоустройство жилья наших клиентов мебелью для улучшения их
//                 качества жизни, а также для комфортной работы, учёбы. Благодаря
//                 производству мебели по эскизам заказчика мы учитываем
//                 индивидуальность каждого обратившегося к нам человека, применяя
//                 в своей работе богатый опыт, знания дизайнера и производителя
//                 мебели, традиционные и новейшие материалы, инновационные
//                 технологии.
//               </p>
//               <p style="text-align: justify">
//                 Мы сможем помочь вам в создании интерьера, о котором вы всегда
//                 мечтали!
//               </p>
//             </div>  
//       `
//   },
//   {
//     id: 6,
//     active: false,
//     title: ` Как оформить заказ на корпусную мебель?`,
//     details: `
//       <div class="panel-body">
//               <p style="text-align: justify">
//                 <strong>Как оформить заказ на корпусную мебель?</strong>
//               </p>
//               <p style="text-align: justify">
//                 Если вы ищете мебель на заказ от производителя в Ставрополе или
//                 хотите заказать мебель по индивидуальному проекту,&nbsp;вызвать
//                 замерщика&nbsp;на нестандартную мебель под заказ, звоните по
//                 телефону: 8-988-759-77-29.
//               </p>
//               <p style="text-align: justify">
//                 Мы готовы сделать для вас по выгодной цене шкафы-купе на заказ,
//                 кухни, стенки, прихожие на заказ, а также любую другую корпусную
//                 мебель!
//               </p>
//             </div> 
//       `
//   },
// ]

</script>

<style scoped>
#PageAccordion {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

/* #app { */
  margin: 3.75em auto;
  padding: 0.75em;
  max-width: 350em;
}
.container {
  margin-bottom: 1.5em;
}
.btn-action-delete {
  color: #cc4b37;
  cursor: pointer;
}
.accordion {
  padding: 0;
}
.accordion div:not(:last-child) {
  border-bottom: 1px solid rgba(10, 10, 10, 0.1);
}
.accordion div:last-child .accordion-item-details {
  border-radius: 5px;
}
.accordion dd {
  margin-left: 0;
}
.accordion-item-trigger, .accordion-item-details-inner {
  padding: 0.75rem 1.25rem;
}
.accordion-item-title {
  position: relative;
}
.accordion-item-title h4 {
  font-size: 1.25rem;
  margin-bottom: 0;
  padding-right: 1.25rem;
}
.accordion-item-trigger {
  width: 100%;
  text-align: left;
  background-color: transparent;
  border: none;
}
.accordion-item-trigger-icon {
  display: block;
  position: absolute;
  top: 0;
  right: 1.25rem;
  bottom: 0;
  margin: auto;
  width: 8px;
  height: 8px;
  border-right: 2px solid #363636;
  border-bottom: 2px solid #363636;
  transform: translateY(-2px) rotate(45deg);
  transition: transform 0.2s ease;
}
.is-active .accordion-item-trigger-icon {
  transform: translateY(2px) rotate(225deg);
}
.accordion-item-details {
  overflow: hidden;
  background-color: whitesmoke;
}
.accordion-item-enter-active, .accordion-item-leave-active {
  will-change: height;
  transition: height 0.2s ease;
}
.accordion-item-enter, .accordion-item-leave-to {
  height: 0 !important;
}

  /* width: 40%; */

</style>
