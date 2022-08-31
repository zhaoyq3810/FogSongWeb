<template>
  <n-config-provider>
    <TabBar v-show="$route.meta.tabbar" />
    <div id="app-content-box" ref="view" v-resize="viewResize">
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
import viewMode from '@/utils/viewMode'
import { IEl, IObj, IRefEl } from '@/interface'

onMounted(() => {
  viewMode((view.value as IEl).offsetWidth)
})

// 视图宽度
const view = ref(<IRefEl>null)
function viewResize(info: IObj) {
  viewMode(info.width)
}

</script>

<style lang="less">
@import "./style/basic";
@import "./style/common";
</style>
