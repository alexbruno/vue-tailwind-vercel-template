import { createRouter, createWebHistory } from 'vue-router'
import { AppStore } from '$src/modules/utils/store'
import HomeView from '$src/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('$src/views/AboutView.vue'),
    },
  ],
})

router.beforeEach((to) => {
  const index = to.path === '/'
  if (!index) AppStore.loading(true)
})

router.afterEach((to) => {
  const index = to.path === '/'
  if (!index) setTimeout(AppStore.loading, 512, false)
})

export default router
