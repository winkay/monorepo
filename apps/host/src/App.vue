<script setup>
  import { watch } from 'vue'
  import { useRoute } from 'vue-router'
  import { useAuthStore } from '@packages/auth'

  const auth = useAuthStore()

  const route = useRoute()

  console.log(route.path)

  watch(
    () => route.path,
    () => {
      console.log(route.path)
    }
  )

  function mockLogin() {
    auth.login({
      token: 'mock-token',
      user: {
        id: '1',
        name: 'Admin'
      }
    })
  }
</script>

<template>
  <div>
    <h1>
      <router-link to="/" style="margin-left: 12px"> Host Application </router-link>
    </h1>

    <header style="padding: 12px; border-bottom: 1px solid #ddd; display: flex; justify-content: space-between; justify-items: center">
      <router-link to="/app-a" style="margin-left: 12px"> App A </router-link>

      <router-link to="/app-b" style="margin-left: 12px"> App B </router-link>

      <div>
        <div v-if="auth.user">
          <p>当前用户：{{ auth.user.name }}</p>
          <button @click="auth.logout">退出</button>
        </div>

        <div v-else>
          <button @click="mockLogin">模拟登录</button>
        </div>
      </div>
    </header>

    <main style="padding: 16px">
      <router-view :key="route.path" />
    </main>
  </div>
</template>
