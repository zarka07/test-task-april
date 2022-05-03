<template>
    <div class="header">
       <div class="subHeader">
           НОВЫЙ ГОРОСКОП НА 2021 ГОД!
       </div>
       <div class="subheader">
           Узнайте, что вас ждет
       </div>
    </div>
</template>

<script>
export default {
    name: 'header-component',
    setup() {
        
    },
}
</script>

<style>
    .header{
        background-color:rgb(49, 93, 250);
        color: #AFDCE5;
        font-weight: 700;
        height: 57px;
    }

    .subHeader{
        padding-top: 1vh;
        font-weight: 700;
        font-size: 20px;
        color: #AFDCE6;
    }

    .subheader{
        padding-left: 4vw;
       font-style: normal;
        font-size: 13px;
        text-align: left;
    }
</style>