import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  { 
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../components/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  },
]
console.log(process.env.BASE_URL)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes, // `routes: routes` 的缩写
})
export default router