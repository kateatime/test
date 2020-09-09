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
        ...mapMutations(['createItem']),
        onSubmit(){
        
            this.createItem({
                title: this.title,
                id: Date.now()
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