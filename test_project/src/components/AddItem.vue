<template>

<form inline @submit.prevent="onSubmit">
    <div class="container">
        <div class="row">

    <!-- prevent позволят при отправке содержимого формы не перезагружать страницу -->
   <div class="col-10">
        <input type="text" class="form-control" placeholder="enter item..." v-model="title"> <!-- с помощью v-model получаем получаем содержимое input'а -->
   </div>
    <b-button type="submit" class="btn btn-info" >Add</b-button>
    </div>
    </div>
   
</form>
</template>
<script>
import { mapMutations} from "vuex";
export default {
        data() {
            return{
                title: ''
            }
    },
    methods: {
        Today(){

            let today = new Date(); 
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear()%2000;
            today = mm + '/' + dd + '/' + yyyy; 
            console.log(today)
            return today;

            //document.write(today);
        },
        ...mapMutations(['createItem']),
        onSubmit(){
        
            this.createItem({
                title: this.title,
                id: Date.now(),
                date: String(new Date().getDate()).padStart(2, '0') + '.' 
                + String(new Date().getMonth() + 1).padStart(2, '0') + '.' 
                + new Date().getFullYear()%2000 + ' '+ ' '+ ' '
                + new Date().getHours() + ':' 
                + new Date().getMinutes()
            });
            this.title = "";
        }

    }
}
</script>
<style scoped>

    form {
        display: flex;
    };
    input {
        width: 100%;
    }
    
</style>