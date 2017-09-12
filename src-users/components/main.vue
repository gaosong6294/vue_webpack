<template>
  <div>
    <h2 v-show="firstView">请输入用户名...</h2>
    <h2 v-show="loading">搜索中...</h2>
    <h2 v-show="errorMsg">{{errorMsg}}</h2>
    <div class="row" v-show="users">
      <div class="card" v-for="(user, index) in users" :key='index'>
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    props: {
      searchName: String
    },
    data() {
      return {
        firstView: true,
        loading: false,
        errorMsg: null,
        users: null
      }
    },
    watch: {
      searchName(value){
        console.log(value);
        this.firstView = false;
        this.loading = true;
        this.errorMsg = null;
        this.users = null;

        const url = `https://api.github.com/search/users?q=${value}`;
        axios.get(url)
          .then(response => {
            const users = response.data.items.map(item => {
              return{
                url: item.html_url,
                avatar_url: item.avatar_url,
                name: item.login,
              }
            });
            this.loading = false;
            this.users = users;
          })
          .catch(error => {
            this.this.loading = false;
            this.errorMsg = '请求失败';
          })
      }
    }
  }

</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
