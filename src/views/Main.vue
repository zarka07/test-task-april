<template>
    <div class="main">
        <progress-bar v-if="showProgress" 
            :barPercent="barPercent" 
            :barColor="barColor" 
            :barHeight="barHeight"
            :barProgress="barProgress"
        ></progress-bar>

        <div class="img" v-if="showImg">
            <img alt="logo" src="../assets/goroskop.png">
        
            <div class="title">
                Узнайте, как 2021 год изменит жизнь каждого из нас!
            </div>
            <div class="subtitle">
                К сожалению, 2020 год принес нам немало неприятностей, даже откровенных проблем и несчастий. Не смотря на это, 3 знака зодиака очень скоро обретут долгожданное счастье! 2021 год затронет своими потрясениями каждого из нас.
            </div>
        </div>
        
        <question-component 
            :questions="questions[i]"
            @nextQuestion="nextQuestion">
        </question-component>
        
    </div>
</template>

<script>
import Question from '../components/Question.vue';
import ProgressBar from '../components/Bar.vue';

export default {
    name: 'main-component',
    components: { 'question-component': Question, 'progress-bar': ProgressBar},
    setup() {
        
    },
    data(){
        return{
            showProgress: false,
            showImg: true,
            barColor: '#B53E42',
            barPercent: 0,
            barHeight: 8,
            barProgress:'',
            i:0,
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
                            ]
                            
                        },
                        {
                            description:{
                                style:'',
                                title: '',
                            },
                            questions:[
                                {id:'', answer:'', type: ''},
                            ]
                            
                        }
                    ],
        }
    },
    
    methods:{
        nextQuestion(){
                    this.showProgress=true
                    this.showImg=false
                    this.i+=1
                    this.questions[this.i]
                    this.barPercent+=20
        },
        
    },
    watch:{
        i(){
            if(this.i===6){
                this.barPercent=100
                this.showProgress=false
                this.$router.push({ name: 'data-processing'})
            }
        }
    }

}
</script>

<style>
    img{
        margin-top: 1vh;
        width:98%;
    }

    .title{
        text-align: start;
        font-style: normal;
        font-weight: 700;
        font-size: 23px;
        line-height: 22px;
        color: #315DF9;
        margin:2vh 1vw 2vh 1vw;
        
    }

    .subtitle{
        text-align: start;
        margin:2vh 1vw 2vh 1vw;
        font-style: normal;
        font-weight: 400;
        font-size: 18.5px;
        color: #343B4D;
        
    }

    
</style>