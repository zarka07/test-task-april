<template>
    <div class="header">
       <div class="subHeader">
           НОВЫЙ ГОРОСКОП НА 2021 ГОД!
       </div>
       <p class="subheader">
           Узнайте, что вас ждет
       </p>
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
        color: rgb(174, 219, 228);
        font-weight: 700;
    }

    .subHeader{
        padding-top: 0.8em;
        padding-bottom: 0.3em;
        font-size: 1.3em;
    }

    .subheader{
        text-align: start;
        padding-left: 1em;
        padding-bottom: 1em;
        margin: 0;
        font-size: 0.8em;
    }
</style>