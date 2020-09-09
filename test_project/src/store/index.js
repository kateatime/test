import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {id: 1, title: 'Скушать бигтейсти', date: '23.01.18 16:00', complited: false},
      {id: 2, title: 'Посмотреть сериал', date: '23.01.18 16:00', complited: false},
      {id: 3, title: 'Сыграть в карты', date: '23.01.18 16:00', complited: false}
  ]
  },
  mutations: {
    createItem(state, newItem){
      state.items.push(newItem)
      console.log(newItem)
    },
    deleteItem(state, id){
      state.items = state.items.filter(item => item.id !== id)
      //state.items.unshift(id)
      //state.items = state.items.splice(1, id)
      //console.log('Длина: ', state.items.length)
      //for(let i = 1; i <= state.items.length; i++){
       //if (i == id){
          //tate.items.push(state.items[i-1]) 
          //state.items = state.items.filter(item => state.items[i-1] !== item)
        //}
      }
      //state.items = state.items.filter(item => state.items[i-1] == item)
    //}
  },
  actions: {
  },
  getters: {
    allPosts(state){ //геттер который просто выводит все посты
      return state.items
  }
  }
})
