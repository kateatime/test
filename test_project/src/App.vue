<template>
    <div id="app">
      <div>
    <b-tabs
       content-class="mt-3" align = "right" >
      <b-tab title="Editor" active><p><EditorTab/></p></b-tab>
      <b-tab title="Preview"><p><PreviewTab/></p></b-tab>  
     </b-tabs>
  
    </div>

  </div>
</template>



<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import EditorTab from '@/components/EditorTab' 
import PreviewTab from '@/components/PreviewTab' 
export default {
  name: 'App',
   data(){
    
  },
  components: {
    EditorTab, PreviewTab
  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
