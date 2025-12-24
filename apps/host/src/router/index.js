import { createRouter, createWebHistory } from 'vue-router'

import AppARoot from '@apps/app-a/src/AppRoot.vue'
import AppARouters from '@apps/app-a/src/router.js'

import AppBRoot from '@apps/app-b/src/AppRoot.vue'
import AppBRouters from '@apps/app-b/src/router.js'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      children: [
        {
          path: '/app-a',
          component: AppARoot,
          children: AppARouters
        },
        {
          path: '/app-b',
          component: AppBRoot,
          children: AppBRouters
        }
      ]
    }
  ]
})
