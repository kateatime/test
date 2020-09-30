import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {id: 1, title: 'Скушать бигтейсти', date: '23.01.18'+"\u00A0"+"\u00A0"+'16:00', complited: false},
      {id: 2, title: 'Посмотреть сериал', date: '23.01.18'+"\u00A0"+"\u00A0"+'16:00', complited: false},
      {id: 3, title: 'Сыграть в карты', date: '23.01.18'+"\u00A0"+"\u00A0"+'16:00', complited: false},
      {id: 4, title: 'Скушать бигтейсти', date: '23.01.18'+"\u00A0"+"\u00A0"+'16:00', complited: false},
      {id: 5, title: 'Посмотреть сериал', date: '23.01.18'+"\u00A0"+"\u00A0"+'16:00', complited: false},
      {id: 6, title: 'Сыграть в карты', date: '23.01.18'+"\u00A0"+"\u00A0"+'16:00', complited: false},
      {id: 6, title: 'Сыграть в карты', date: '23.01.18'+"\u00A0"+"\u00A0"+'16:00', complited: false}
  ]
  },
  mutations: {
    createItem(state, newItem){
      state.items.push(newItem)
      console.log(newItem)
    },
    deleteItem(state, id){
      state.items = state.items.filter(item => item.id !== id)
    },
    MoveToTop(state, id){
      let arr = state.items.filter(item => item.id == id)
      state.items.unshift(...state.items.splice(state.items.indexOf(arr[0]), 1)); //перемещаем элемент вначало массива 
      // splice(индекст элемента, который ходим сдвинуть и кол-во элементов, кторое хотим сдвинуть)
    },
    MoveToBottom(state, id){
      let arr = state.items.filter(item => item.id == id)
      state.items.push(...state.items.splice(state.items.indexOf(arr[0]), 1))
      //let lenItems = items.length
      //state.items.unshift(...state.items.splice(state.items.indexOf(arr[0]), lenItems)); //перемещаем элемент вначало массива 
      // splice(индекст элемента, который ходим сдвинуть и место,куда сдвинуть)
    }
  },
  actions: {
  },
  getters: {
    allPosts(state){ //геттер который просто выводит все посты
      return state.items
  }
  }
})
