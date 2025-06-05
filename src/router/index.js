import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/AboutView.vue'
import Login from "../views/LoginView.vue"
import Register from "../views/RegisterView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'About',
      component: About,
    },
     {
      path: '/login',
      name: 'Login',
      component: Login,
    },
     {
      path: '/register',
      name: 'Register',
      component: Register,
    },
   
  ],
})

export default router
