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
             
            :questions="pagequestions" 
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
            showImg: true,
            title: '',
            pagequestions:[],
            
        }
    },
    mounted(){
        this.title = 'Укажите свой пол:'
        
        this.pagequestions = [{id: 'id1', answer:'Женщина', value:'female'},
                        {id:'id2', answer:'Мужчина', value:'male'}]
    },
    methods:{
        nextQuestion(){
            this.showImg=false,
            this.title = 'В какое время суток вы чувствуете себя наиболее комфортно?'
            
            this.pagequestions = [{id: 'id1', answer:'Утро', value:'morning'},
                        {id:'id2', answer:'Ночь', value:'night'},
                        {id:'id3', answer:'Вечер', value:'evening'},
                        {id:'id4', answer:'День', value:'day'}]
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