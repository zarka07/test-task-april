<template>
    <div>
        <form class="form">
            <div class="formTitle" :title="questions[0].title">{{questions[0].title}}</div>
            <div class="formDescription">
                <div class="container" :style="questions[0].style">
                    <div style="text-align:left" v-for="question in questions" :key="question.id">
                        <input :id="question.id" 
                            class="custom-checkbox" 
                            name="gender" 
                            type="radio" 
                            @click="showButton()">
                        <label :for="question.id"> {{question.answer}}</label>
                        <!-- <input id="id2" 
                            class="custom-checkbox" 
                            name="gender" 
                            type="radio" 
                            value="male"
                            @click="showButton()">
                            <label for="id2"> Мужчина</label> -->
                    </div>
                </div>
            </div>
            <p class="submit" v-if="show">
                    <button type="submit"
                        class="submitButton"
                        @click.prevent="submit"
                     >ДАЛЕЕ
                    </button>
            </p>
        </form>
    </div>
</template>

<script>
export default {
    name: 'question-component',
    props:['questions'],
    setup() {
        
    },
    data(){
        return{
            show:false,
            
        }
    },
    methods:{
        showButton(){
            this.show = true;
        },
        submit(){
            this.$emit('nextQuestion')
        }
        
    }
}
</script>

<style>
    .form{
        width:100%;
    }

    .formTitle{
        background-color: rgb(52, 59, 77);
        color: white;
        font-weight: 700;
        padding: 1.5em;
        font-size: 1.1em;
    }

    .formDescription{
        
        font-size: 1.1em;
        padding:1em;
        background-color:rgba(225, 226, 230, 0.954);;
    }

    .container{
        display: flex;
    }

    .submit{
        
        text-align: center;
    }

    .submitButton{
        font-size: 1em;
        color: #FFF;
        background-color:rgb(49, 93, 250);
        border:0em;
        height: 3em;
        width:11em;
    }
    
    .custom-checkbox{
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    .custom-checkbox+label {
    display: inline-flex;
    align-items:center;
    user-select: none;
  }
  /* создание в label псевдоэлемента  before со следующими стилями */
  .custom-checkbox+label::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    background-color:#FFF
  }
    
  /* стили для радиокнопки, находящейся в состоянии checked */
  .custom-checkbox:checked+label::before {
    background-color: #FFF;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23000'/%3e%3c/svg%3e");
  }
  /* стили для радиокнопки, находящейся в состоянии disabled */
  .custom-checkbox:disabled+label::before {
    background-color: #FFF;
  }

  .custom-checkbox:checked+label{
      color:rgb(49, 93, 250);
      font-weight: 500;
  }
</style>