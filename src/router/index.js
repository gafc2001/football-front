
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { tokenIsValid } from '@/app/auth/services';
import Competitions from '@/pages/competitions.vue';
import Home from '@/pages/home.vue';
import Layout from '@/pages/layout.vue';
import Login from '@/pages/login.vue';
import { createRouter, createWebHistory } from 'vue-router/auto'

const routes = [
  {
      path: "/login",
      name: "/login",
      component : Login,
  },
  {
    path: "/",
    name: "/",
    component : Layout,
    children : [
      {
        path: "",
        name: "home",
        component : Competitions,
      },
      {
        path: "competions",
        name: "competions",
        component : Competitions,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from) => {
  const isAuthenticated = await tokenIsValid();
  if(to.name === '/login' && isAuthenticated){
    return { name: '/' }
  }
  if(to.name !== '/login' && !isAuthenticated){
    return { name : '/login'}
  }
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
