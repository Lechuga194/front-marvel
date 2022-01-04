import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/Create.vue'
import Update from '../views/Update.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: Update
  },
  {
    path: "/:catchAll(.*)",
    component: Home,
  },
]

//Github pages fix history: createWebHistory(process.env.BASE_URL),

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
