<template>
  <div id="tab-bar">{{ mode }}</div>
</template>

<script setup lang="ts">
import { storeState } from '@/store/Tools'

// 模式
const mode = computed(() => storeState.viewMode)
</script>

<style scoped lang="less">

</style>
