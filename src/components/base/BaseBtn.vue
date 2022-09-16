<template>
    <!-- {{ BTN }} -->
    <div >
        <a class="mainBtn" :class="btnStyle" :href="btnUrl">{{ btnName }}</a>
        <!-- <input class="mainBtn" type="button" value="Input">     -->
        <!-- <button class="mainBtn">{{ msg }}</button> -->
        <!-- <button class="mainBtn" disabled>Disabled</button>  -->
    </div>
</template>

<script>
export default {
    name: "BaseBtn",
    props: {
    btnName: String,
	btnStyle: String,
    btnUrl: String
    },
    computed: {
        
    }
    // сделать передачу параметров в кнопку: цвет, через computed // или классы 
}
</script>

<style>
  .mainBtn {
	display: inline-block;	
	box-sizing: border-box;
	padding: 0 20px;
	margin: 0 15px 15px 0;
	outline: none;
	border: none;  
	border-radius: 4px;
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	font-weight: 500;
	text-decoration: none;
	color: #fff;
	background-color: #3775dd;
	box-shadow: 0 2px #21487f;
	cursor: pointer;
	user-select: none;
	appearance: none;
	touch-action: manipulation;  
	vertical-align: top;
}
.mainBtn:hover {
	background-color: #002fed;
}
.mainBtn:active {
	background-color: #2f599e !important;
}
.mainBtn:focus-visible {
	box-shadow: 0 0 0 3px lightskyblue;
}
.mainBtn:disabled {
	background-color: #6c87b5;
	pointer-events: none;
}
 /* <!-- FIXME: сделать передавать класс для изменения цвета кнопки-->         */
.isActive .mainBtn{
	box-shadow: 0 0 0 3px lightskyblue;
	background-color: #2047e2;
}
.mainBtn + .isActive :hover {
	box-shadow: 0 0 0 3px lightskyblue;
	background-color: #002fed;
}
.styleTest{
	background-color: #ed00e9;
}
</style>