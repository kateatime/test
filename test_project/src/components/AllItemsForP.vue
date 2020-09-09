<template>
    <div>
        
        <ul> 
            <div class="container firstContainer">
        <div class="row">
            <div class="col-9">Name</div>
            <div class="col-3">Date</div>
        </div>
        </div>
                <li class="item" v-for="(item, index) in allPosts" :key="item.id" >
                    <div class="container">
                        <div class="row">
                            <div class="col-9">
                                
                                <strong class="mr-3" >{{ index + 1 }}</strong>
                                <p id="copyText">{{item.title}}</p>
                                
                            </div>
                            <div class="col-2">
                                {{item.date}}
                            </div>
                            <div class="col-1">
                                <form>
                                <b-button v-on:click="copyItem(item.title)" size="sm" variant="outline-info" class="mr-2">
                                    <b-icon icon="three-dots-vertical" aria-hidden="true" variant="dark" style="">
                                    </b-icon></b-button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </li>
                
             <!--Итерируем кассив todos и баиндим кадый iтый элемент в переменную todo
                прослушиваем событие нажатия на кнопку удаления, создавая метод для удаления removeTodo -->
        </ul>
    </div>
</template>
<script>
import {mapGetters, mapMutations } from 'vuex';
import Item from '@/components/Item' 
export default {
    filters:{
        getDateNow(value){ 
            //let dd = String(value.getDate()).padStart(2, '0');
            //let mm = String(value.getMonth() + 1).padStart(2, '0');
            //let yyyy = value.getFullYear()%2000;
           // value = mm + '/' + dd + '/' + yyyy; 
            //console.log(today)
            //return value;
            //return String(value.getDate()).padStart(2, '0');
        }},
    //data(){
     //   idItem:
  //},

    //props: {
    //    item
    //},
    methods: {
    ...mapMutations(['deleteItem']),
    removeItem(id){
        this.deleteItem(id)
        console.log("кнопка нажатa")
        //console.log(id)
        //console.log(this.allPosts.Item)
         
        //this.allPosts = this.allPosts.filter(t => t.id == this.Item)
        },
    copyItem(){
        let text = document.getElementById('copyText');
        console.log(text)
        text.select();
        document.execCommand("copy")
    }
    },
    components: {
    Item
    },
    computed: mapGetters(["allPosts"])
}
</script>

<style scoped>
ul{
        margin-top: 4rem;
        padding-inline-start: 5%;
        padding-inline-end: 5%;
}
    li{
        display: flex;
        justify-content: space-between;
        
        padding: .1rem 2rem;
        margin-top: 1rem;
        border-bottom: 1px solid black;
    }
    .del {
        background: red;
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
        }
    .col-9{
        display: flex;
        justify-content: flex-start;
        padding-top: 0.1rem;
    }
    .col-1{
        display: flex;
        justify-content: flex-end;
         padding-top: 0.1rem;
    }
    .col-3{
        display: flex;
        justify-content: flex-start;
        padding-top: 0.1rem;
    }
    .col-2{
        display: flex;
        justify-content: flex-start;
         padding-top: 0.1rem;
    }
    .firstContainer{
        border-bottom: 1px solid black;
    }
    
   
</style>