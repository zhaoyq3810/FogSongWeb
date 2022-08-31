<template>
  <n-config-provider>
    <TabBar v-show="$route.meta.tabbar" />
    <div id="app-content-box">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" v-if="$route.meta.cache" :key="$route.name" />
        </keep-alive>
        <component :is="Component" v-if="!$route.meta.cache" :key="$route.name" />
      </router-view>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import TabBar from '@/components/TabBar.vue'
</script>

<style lang="less">
@import "./style/basic";
@import "./style/common";
</style>
