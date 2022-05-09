<template>
    <div class="header">
        <div class="container">
            <div class="subHeader">
                НОВЫЙ ГОРОСКОП НА 2021 ГОД!
            </div>
            <p class="subheader">
                Узнайте, что вас ждет
            </p>
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

<style scoped>
    @media only screen and (max-width: 412px) {
        .container{
            align-items:baseline;
        }
    }

    @media only screen and (min-width: 415px) {
        .container{
            align-items:center;
        }
    }

    .container{
        display: flex;
        flex-direction: column; 
    }

    .header{
        background-color:rgb(49, 93, 250);
        color: #AFDCE5;
        font-weight: 700;
        height: auto;
    }
    
    .subHeader{
        padding-top: 1vh;
        font-weight: 700;
        font-size: 20px;
        color: #AFDCE6;
        margin-left:12px;
    }

    .subheader{
        margin:5px 0 5px 12px;
        font-style: normal;
        font-size: 13px;
    }
        
</style>