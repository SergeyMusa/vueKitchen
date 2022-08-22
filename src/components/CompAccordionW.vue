<template>
  <div id="CompAccordionW">
     <zz-accordion v-bind:contents.sync="contents"></zz-accordion>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'CompAccordionW',
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


</script>

<style scoped>
#CompAccordionW {
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
