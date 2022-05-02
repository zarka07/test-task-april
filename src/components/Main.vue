<template>
    <div class="main">
        <div class="Progress" v-if="!showImg">
            <div class="bar"
                :style = "{background:barColor, width:barPercent+'%'}">
            </div>
        </div>
        <div class="img" v-if="showImg">
            <img alt="logo" src="../assets/goroskop.png">
        
            <p class="title">
                Узнайте, как 2021 год изменит жизнь каждого из нас!
            </p>
            <p class="subtitle">
                К сожалению, 2020 год принес нам немало неприятностей, даже откровенных проблем и несчастий. Не смотря на это, 3 знака зодиака очень скоро обретут долгожданное счастье! 2021 год затронет своими потрясениями каждого из нас.
            </p>
        </div>
        
        
        
        <question-component 
            :questions="questions[i]"
            @nextQuestion="nextQuestion">
        </question-component>
    </div>
</template>

<script>
import Question from './Question.vue';

export default {
    name: 'main-component',
    components: { 'question-component': Question },
    setup() {
        
    },
    data(){
        return{
            barColor: '#B53E42',
            barPercent: 0,
            title:'',
            i:0,
            showImg: true,
            questions:[
                        {
                            description:{
                                style:'flex-direction: row;justify-content: space-around;text-align:left',
                                title: 'Укажите свой пол:',
                            },
                            questions:[
                                {id:'id0', answer:'Женщина', type: 'radio'},
                                {id:'id1', answer:'Мужчина', type: 'radio'}
                            ]
                            
                        },
                        {
                            description:{
                                style:'flex-direction: column;gap:30px;justify-content: flex-start;text-align:left',
                                title: 'В какое время суток вы чувствуете себя наиболее комфортно?',
                            },
                            questions:[
                                {id:'id0', answer:'Утро', type: 'radio'},
                                {id:'id1', answer:'Ночь', type: 'radio'},
                                {id:'id2', answer:'Вечер', type: 'radio'},
                                {id:'id3', answer:'День', type: 'radio'}
                            ]
                        },
                        {
                            description:{
                                style:'flex-direction: column;gap:30px;text-align:left',
                                title: 'Подскажите, мучает ли вас бессонница в последнее время?',
                            },
                            questions:[
                                {id:'id0', answer:'Да', type: 'radio'},
                                {id:'id1', answer:'Нет', type: 'radio'},
                                {id:'id2', answer:'Иногда', type: 'radio'}
                            ]
                        },
                        {
                            description:{
                                style:'flex-direction: column;gap:30px;text-align:left',
                                title: 'Чувствуете ли вы в последнее время, что вам никак не удается осуществить ваши планы?',
                            },
                            questions:[
                                {id:'id0', answer:'Да', type: 'radio'},
                                {id:'id1', answer:'Нет', type: 'radio'},
                                {id:'id2', answer:'Иногда', type: 'radio'}
                            ]
                        },
                        {
                            description:{
                                style:'flex-direction: column;gap:30px;text-align:left',
                                title: 'Какой вы видите свою жизнь через 5 лет?',
                            },
                            questions:[
                                {id:'id0', answer:'Брак, семья, дети, дом', type: 'radio'},
                                {id:'id1', answer:'Путешествия по миру', type: 'radio'},
                                {id:'id2', answer:'Успешная карьера', type: 'radio'},
                                {id:'id3', answer:'Всё вместе', type: 'radio'}
                            ]
                            
                        },
                        {
                            description:{
                                style:'flex-direction: column;gap:30px;text-align:center',
                                title: 'Введите дату своего рождения:',
                            },
                            questions:[
                                {id:'id0', answer:'date', type: 'select'},
                                // {id:'id1', answer:'Путешествия по миру', type: 'radio'},
                                // {id:'id2', answer:'Успешная карьера', type: 'radio'},
                                // {id:'id3', answer:'Всё вместе', type: 'radio'}
                            ]
                            
                        },
                        
                    ],
            
        }
    },
    
    methods:{
        nextQuestion(){
                this.showImg=false
                this.i+=1
                this.questions[this.i]
                this.barPercent+=20;
                //this.elem.style.width = this.width+"%"
        },
        
    }

}
</script>

<style>
    .main{
        
    }

    img{
        margin-top: 0.5em;
        width:95%;
    }

    .title{
        color:rgb(49, 93, 250);
        font-weight: 700;
        text-align: start;
        font-size: 1.4em;
        margin:0.4em;

    }

    .subtitle{
        color:rgb(52, 59, 77);
        text-align: start;
        margin-left:0.5em;
        margin-right:0.5em;
        
        font-size: 1.05em;
    }

    .Progress {
        float:left;
        width: 100%;
        background-color: #F3F4F8;
        margin-top:2em;
        margin-bottom:2em;
    }

    .bar {
        width: 0%;
        height: 0.5em;
        background-color: #B53E42;
    }
</style>