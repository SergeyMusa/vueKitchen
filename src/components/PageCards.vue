<template>
    <div class="PageCards">
        PageCards
        <div class="selector">
        <div class="el"></div>
        <div class="el"></div>
        <div class="el"></div>  
        <!-- попробуй убрать строку ниже -->
        <span class="el"></span> 

</div>
    </div>
</template>

<script>
export default {
  name: 'PageCards',
}
</script>

<style scoped>
.PageCards{
    /* width: 80vw;   */
}
.selector {
        display: flex;
        gap: 20px;
        flex-wrap: wrap; 
        max-width: 90%;
        margin-left: auto;
        margin-right: auto;
}

.selector>*{
    flex: 1 1 50px;
}
.el {
    width: 300px;
    height: 200px;
    min-width: 210px;
    background-color: black;
}

span{
    visibility: hidden;
}
</style>