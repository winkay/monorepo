<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import { useAuthStore } from '@repo/auth'
  import { navigate } from '@repo/router/src/index'

  const auth = useAuthStore()

  console.log('aaaaaaaaaaaaaaaaaa')

  function handleClick() {
    navigate('/app-a/test')
  }

  function handleGotoB() {
    navigate('/app-b/test')
  }
</script>

<template>
  <HelloWorld msg="This is App-A" />

  <!-- <router-link to="/app-a/test" style="margin-left: 12px"> Secondary Page </router-link> -->
  <button @click="handleClick">Secondary Page</button>
  <button @click="handleGotoB">App B Page</button>

  <div>
    <p>Token：{{ auth.token }}</p>
    <p>User：{{ auth.user?.name }}</p>
  </div>

  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
