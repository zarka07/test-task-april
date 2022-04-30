<template>
    <form class="form">
            <div class="formTitle" :title="title"></div>
            <div class="formDescription">
                <div class="container">

                    <input :id="rb1" 
                        class="custom-checkbox" 
                        name="gender" 
                        type="radio" 
                        value="femail"
                        @click="showButton('женщина')">
                        <label for="rb1"> Женщина</label>
                    <input id="rb2" 
                        class="custom-checkbox" 
                        name="gender" 
                        type="radio" 
                        value="male"
                        @click="showButton('мужчина')">
                        <label for="rb2"> Мужчина</label>
                </div>
                <p class="submit" v-if="show">
                    <button type="submit"
                        class="submitButton"
                     >ДАЛЕЕ
                    </button>
                </p>
            </div>
            
        </form>
</template>

<script>
export default {
    name:'other-question-component',
    props:[title, id, [questions]],
    setup() {
        
    },

}
</script>