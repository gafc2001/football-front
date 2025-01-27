
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { tokenIsValid } from '@/app/auth/services';
import Competitions from '@/app/competions/pages/competitions.vue';
import Layout from '@/pages/layout.vue';
import Login from '@/app/auth/pages/login.vue';
import Teams from '@/app/teams/pages/teams.vue';
import { createRouter, createWebHistory } from 'vue-router/auto'
import Team from '@/app/teams/pages/team.vue';
import Players from '@/app/players/pages/players.vue';

const routes = [
  {
      path: "/login",
      name: "login",
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
        path: "competitions",
        name: "competitions",
        component : Competitions,
      },
      {
        path: "teams",
        name: "teams",
        component : Teams,
      },
      {
        path: "teams/:id",
        name: "team_detail",
        component : Team,
      },
      {
        path: "players",
        name: "players",
        component : Players,
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
  if(to.name === 'login' && isAuthenticated){
    return { name: '/' }
  }
  if(to.name !== 'login' && !isAuthenticated){
    return { name : 'login'}
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
