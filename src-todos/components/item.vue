<template>
  <div>
    <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style='{background: bgColor}'>
      <label>
        <input type="checkbox" v-model="todo.complete"/>
        <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger" v-show="isShow" @click='deleteItem'>删除</button>
    </li>
  </div>
</template>

<script>
  export default {
    props: {
      todo: Object,
      deleteTodo: Function,
      index: Number
    },
    data(){
      return{
        isShow: false,
        bgColor: 'white'
      }
    },
    methods: {
      handleEnter(isEnter){
        if(isEnter){
          this.isShow = true;
          this.bgColor = 'skyblue';
        }else{
          this.isShow = false;
          this.bgColor = 'white';
        }
      },
      deleteItem(){
        this.deleteTodo(this.index);
      }
    }
  }
</script>

<style>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
