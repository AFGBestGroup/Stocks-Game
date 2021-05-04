import { createRouter, createWebHistory } from 'vue-router';

import FullGame from './FullGame.vue';
import Index from './Index.vue';
import Tutorial from './Tutorial.vue';
import EndScreen from './EndScreen.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/game', component: FullGame },
  { path: '/tutorial', component: Tutorial },
  { path: '/end_screen', component: EndScreen },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;