<template>
    <div>
        <ul> 
            
                <li class="item" v-for="(item, index) in allPosts" :key="item.id" >
                    <div class="container">
                        <div class="row">
                            <div class="col-10">
                                <strong class="mr-3" >{{ index + 1 }}</strong>
                                <p id="copyText">{{item.title}}</p>
                                {{item.id}}
                                
                            </div>
                            <div class="col-2">
                                <form>
                                <b-button v-on:click="copyItem(item.title)" size="sm" variant="outline-info" class="mr-2">
                                    <b-icon icon="files" aria-hidden="true" variant="dark" style="">
                                    </b-icon></b-button>
                                    <b-button  v-on:click="removeItem(item.id)" size="sm" variant="outline-info">
                                    <b-icon icon="trash" aria-hidden="true" variant="danger">
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
    .col-10{
        display: flex;
        justify-content: flex-start;
        padding-top: 0.5rem;
    }
    .col-2{
        display: flex;
        justify-content: flex-end;
        padding-bottom: 0.5rem;
    }
    
   
</style>