import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './components/app.vue';
import about from './components/about.vue';
import home from './components/home.vue';
import news from './components/news.vue';
import message from './components/message.vue';
import messageDetail from './components/message-detail.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/about',
      component: about
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '/home/news',
          component: news
        },
        {
          path: 'message',
          component: message,
          children: [
            {
              path: 'messageDetail/:id',
              component: messageDetail
            }
          ]
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
});

new Vue({
  el: '#app',
  render: h => h(app),
  router
});
