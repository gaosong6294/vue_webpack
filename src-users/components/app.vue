<template>
  <div id="app">
    <div class="container">
      <search :setSearchName='setSearchName'></search>
      <search-main :searchName='searchName'></search-main>
    </div>
  </div>
</template>

<script>
  import search from './search.vue';
  import main from './main.vue';
  export default {
    data(){
      return{
        searchName: ''
      }
    },
    methods: {
      setSearchName(searchName){
        this.searchName = searchName;
      }
    },
    components: {
      search,
      'search-main': main
    }
  }
</script>

<style>

</style>
