<template>
  <div class="wrap">
    <div class="text">
      404
    </div>
    <n-button @click="goHome">
      go home
    </n-button>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'

const goHome = () => router.push('/')
</script>

<style scoped lang="less">
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text {
  font-size: 40px;
  margin-bottom: 30px;
}
</style>
