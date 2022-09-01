<template>
  <div id="tab-bar-web">
    <n-icon size="40" color="#0e7a0d">
      <ListOutline />
    </n-icon>
  </div>
</template>

<script setup lang="ts">
import { ListOutline } from '@vicons/ionicons5'
</script>

<style scoped lang="less">
#tab-bar-web {
  flex: 0 0 (60 * @pc);
  padding: 0 (30 * @pc);
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
