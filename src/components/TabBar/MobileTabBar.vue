<template>
  <div id="tab-bar-mobile">
    <div class="left" @click="goHome">
      <n-icon class="icon" :component="Planet" />
      <div class="name">FogSong</div>
    </div>
    <div class="right">
      <n-icon class="icon" :component="SearchCircleOutline" />
      <n-icon class="icon" :component="ListOutline" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ListOutline, Planet, SearchCircleOutline } from '@vicons/ionicons5'
import router from '@/router'

// 去首页
const goHome = () => router.push('/')
</script>

<style scoped lang="less">
#tab-bar-mobile {
  flex: 0 0 60px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid;
  .act-border;
}
.left {
  display: flex;
  font-size: 18px;
  .icon {
    height: 36px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
  }
  .name {
    line-height: 36px;
  }
}
.right {
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    font-size: 36px;
    color: black;
    margin-left: 10px;
  }
}

</style>
