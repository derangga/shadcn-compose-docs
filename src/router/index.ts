import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/docs',
    component: () => import('@/layouts/DocsLayout.vue'),
    children: [
      {
        path: 'installation',
        name: 'Installation',
        component: () => import('@/views/docs/InstallationView.vue')
      },
      {
        path: 'getting-started',
        name: 'Getting Started',
        component: () => import('@/views/docs/GettingStartedView.vue')
      },
      {
        path: 'components',
        name: 'Components',
        component: () => import('@/views/docs/ComponentsView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router