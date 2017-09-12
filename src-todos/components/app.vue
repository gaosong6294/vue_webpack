<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <todos-hearder :addTodo='addTodo'></todos-hearder>
        <list :todos='todos' :deleteTodo='deleteTodo'></list>
        <todos-footer :todos="todos" :selectAll="selectAll" :clearAllCompleted="clearAllCompleted"></todos-footer>

      </div>
    </div>
  </div>
</template>

<script>
  import hearder from './hearder.vue';
  import footer from './footer.vue';
  import list from './list.vue';
  export default {
    data(){
      return{
        todos: []
      }
    },
    mounted(){
      this.todos = JSON.parse(localStorage.getItem('todos_key') || '[]');
    },
    methods: {
      addTodo(todo){
        this.todos.unshift(todo)
      },
      deleteTodo(index){
        this.todos.splice(index, 1)
      },
      selectAll(isCheck){
        this.todos.forEach(todo => {
          todo.complete = isCheck;
        })
      },
      clearAllCompleted(){
        this.todos = this.todos.filter(todo => !todo.complete)
      }
    },
    watch: {
      todos: {
        deep: true,
        handler: function(value){
          localStorage.setItem('todos_key', JSON.stringify(value));
        }
      }
    },
    components: {
      'todos-hearder': hearder,
      'todos-footer': footer,
      list
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
