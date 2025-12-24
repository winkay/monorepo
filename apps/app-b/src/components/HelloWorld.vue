<script setup>
  const props = defineProps({
    msg: String
  })

  console.log('b hello', props.msg)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div v-if="!msg">default content</div>
</template>

<style scoped></style>
