  
<template>
    <div>
        <form class="form">
            <div class="formTitle" 
                :title="questions.description.title">
                {{questions.description.title}}
            </div>
            <div class="formDescription">
                <div class="container" :style="questions.description.style" >
                    <div v-for="(question, index) in questions.questions" :key="index">
                        <div v-if="question.type==='radio'">
                            <input :id="question.id"
                                class="custom-checkbox"
                                name="name"
                                :type="question.type" 
                                @click="showButton()">
                            <label :for="question.id"> {{question.answer}}</label>
                            </div>
                        <div v-else class="custom-picker">
                            <select id="day" v-model="selectedDate.day">
                                <option disabled value="">День</option>
                                <option 
                                    v-for="(value, index) in 31" 
                                    :key="index" 
                                    class="option"
                                >{{index+1}}
                                </option>
                            </select> 

                            <select id="month" v-model="selectedDate.month" @change="selectSign(selectedDate.month)">
                                <option disabled value="">Месяц</option>
                                <option v-for="(value, index) in 12" :key="index">{{index+1}} </option>
                            </select>

                            <select id="year" v-model="selectedDate.year" @change="checkAll()">
                                <option disabled value="">Год</option>
                                <option v-for="(year, index) in years" :key="index">{{year}}</option>
                            </select>

                            <div v-if="selectedDate.month" @click="checkAll()">
                                <img class="zodiac" :src="'zodiac/'+src"/>
                                <p class="zodiac-description">{{description}}</p>
                            </div>
                        </div>
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
            title:'',
            style:'',
            years:[
                1990,
                1991,
                1992,
                1993,
                1994,
                1995,
                1996,
                1997,
                1998,
                1999,
                2000,
                2001,
                2002,
                2003,
                2004,
                2005,
                2006,
                2007
            ],
            selectedDate:{},
            src: '',
            description:''
        }
    },
    methods:{
        showButton(){
            this.show = true;
        },
        submit(){
            this.show = false;
            this.$emit('nextQuestion')
        },
        selectSign(sign){
            switch(sign){
                case '1':
                    this.src = 'vodolej.png'
                    this.description = 'Водолей'
                    break;
                case '2':
                    this.src = 'ribi.png'
                    this.description = 'Рыбы'
                    break;
                case '3':
                    this.src = 'oven.png'
                    this.description = 'Овен'
                    break;
                case '4':
                    this.src = 'telec.png'
                    this.description = 'Телец'
                    break;
                case '5':
                    this.src = 'blizneci.png'
                    this.description = 'Близнецы'
                    break;
                case '6':
                    this.src = 'rak.png'
                    this.description = 'Рак'
                    break;
                case '7':
                    this.src = 'lev.png'
                    this.description = 'Лев'
                    break;
                case '8':
                    this.src = 'deva.png'
                    this.description = 'Дева'
                    break;
                case '9':
                    this.src = 'vesi.png'
                    this.description = 'Весы'
                    break;
                case '10':
                    this.src = 'skorpion.png'
                    this.description = 'Скорпион'
                    break;
                case '11':
                    this.src = 'strelez.png'
                    this.description = 'Стрелец'
                    break;
                case '12':
                    this.src = 'kozerog.png'
                    this.description = 'Козерог'
                    break;
                default:
                    console.log('nothing');
            }
            return this.src, this.description
            
        },
        checkAll(){
            if(this.selectedDate.year&&this.selectedDate.month&&this.selectedDate.day){
                this.show = true
            }
                
            
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
        background-color:#315DFA;
        border:0em;
        height: 3em;
        width:11em;
    }

    .custom-picker{
        width: 100%;
        display:grid;
    }
    
    #day,#month,#year{
        width:50%;
        height: 3em;
        margin-left:25%;
        margin-bottom:1em;
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

  .zodiac{
      width:5em;
      height:5em;
  }

  .zodiac-description{
      margin-top: 0;
  }
</style>
