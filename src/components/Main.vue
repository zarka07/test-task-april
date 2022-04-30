<template>
    <div class="main">
        <div v-if="showImg">
            <img alt="logo" src="../assets/goroskop.png">
        
            <p class="title">
                Узнайте, как 2021 год изменит жизнь каждого из нас!
            </p>
            <p class="subtitle">
                К сожалению, 2020 год принес нам немало неприятностей, даже откровенных проблем и несчастий. Не смотря на это, 3 знака зодиака очень скоро обретут долгожданное счастье! 2021 год затронет своими потрясениями каждого из нас.
            </p>
        </div>
        
        <question-component 
            :title="title" 
            :style="questions[i].style"
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
            i:0,
            showImg: true,
            questions:[
                        [
                            {style:'flex-direction: row;justify-content: space-around;',
                            title: 'Укажите свой пол:',id: 'id0', answer:'Женщина'},
                            {id:'id1', answer:'Мужчина'}
                        ],
                        [
                            {style:'flex-direction: column;gap:30px;justify-content: flex-start;',
                            title: 'В какое время суток вы чувствуете себя наиболее комфортно?',id: 'id0', answer:'Утро'},
                            {id:'id1', answer:'Ночь'},
                            {id:'id2', answer:'Вечер'},
                            {id:'id3', answer:'День'}
                        ],
                        [
                            {style:'flex-direction: column;gap:30px;',
                            title: 'Подскажите, мучает ли вас бессонница в последнее время?',id: 'id0', answer:'Да'},
                            {id:'id1', answer:'Нет'},
                            {id:'id2', answer:'Иногда'}
                        ],
                        [
                            {style:'flex-direction: column;gap:30px;',
                            title: 'Чувствуете ли вы в последнее время, что вам никак не удается осуществить ваши планы?',id: 'id0', answer:'Да'},
                            {id:'id1', answer:'Нет'},
                            {id:'id2', answer:'Иногда'}
                        ],
                        [
                            {style:'flex-direction: column;gap:30px;',
                            title: 'Какой вы видите свою жизнь через 5 лет?',id: 'id0', answer:'Брак, семья, дети, дом'},
                            {id:'id1', answer:'Путешествия по миру'},
                            {id:'id2', answer:'Успешная карьера'},
                            {id:'id3', answer:'Всё вместе'},
                        ],
                        [
                            {style:'flex-direction: column;gap:30px;',
                            title: 'Введите дату своего рождения',id: 'id0', answer:'Брак, семья, дети, дом'},
                            {id:'id1', answer:'Путешествия по миру'},
                            {id:'id2', answer:'Успешная карьера'},
                            {id:'id3', answer:'Всё вместе'},
                        ],
                    ],
            
        }
    },
    mounted(){
        
        
    },
    methods:{
        nextQuestion(){
            while(this.i!=6){
                this.showImg=false,
                this.pagequestions[this.i++]
            }
            
        }
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
</style>