<script setup>
  import { ref } from 'vue'
  import HelloWorld from './components/HelloWorld.vue'
  import { useAuthStore } from '@packages/auth'
  import { navigate } from '@packages/router/src/index'
  import { mockTesk } from './api/index'

  const auth = useAuthStore()

  console.log('aaaaaaaaaaaaaaaaaa')

  function handleClick() {
    navigate('/app-a/test')
  }

  function handleGotoB() {
    navigate('/app-b/test')
  }

  const apiResult = ref('')
  function handleRequest() {
    return mockTesk().then((res) => {
      console.log(res)
      apiResult.value = res
    })
  }
</script>

<template>
  <HelloWorld msg="This is App-A" />

  <!-- <router-link to="/app-a/test" style="margin-left: 12px"> Secondary Page </router-link> -->
  <button @click="handleClick">Secondary Page</button>
  <button @click="handleGotoB">App B Page</button>
  <button @click="handleRequest">API Test</button>

  <div>
    <p>Token：{{ auth.token }}</p>
    <p>User：{{ auth.user?.name }}</p>
  </div>

  <div v-if="apiResult">
    <span>API Result</span>
    {{ apiResult }}
  </div>

  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
