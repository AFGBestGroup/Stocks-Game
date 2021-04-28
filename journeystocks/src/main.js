import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import FullGame from './FullGame.vue';
import Index from './Index.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/game', component: FullGame },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const app = createApp(App);
app.use(router);
app.mount('#app');
