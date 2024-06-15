import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HomeVue from '@/components/HomeVue.vue'
import MogeVue from '@/components/MogeVue.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    component: HomeVue
  },
  {
    path: '/moge',
    name: 'Moge',
    component: MogeVue
  }
];

const router = createRouter({
  history: createWebHistory(), 
  routes: routes,
});

export default router;