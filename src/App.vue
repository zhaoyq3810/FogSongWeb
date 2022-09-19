<template>
  <n-config-provider>
    <n-global-style />
    <WebTabBar v-if="$route.meta.tabbar && isViewMode === 'Web'" />
    <MobileTabBar v-if="$route.meta.tabbar && isViewMode === 'Mobile'" />
    <div id="app-content-box" ref="view" v-resize="viewResize" :style="there">
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
import WebTabBar from '@/components/TabBar/WebTabBar.vue'
import MobileTabBar from '@/components/TabBar/MobileTabBar.vue'
import viewMode from '@/utils/viewMode'
import { IEl, IObj, IRefEl } from '@/interface'
import { storeState } from '@/store/Tools'
import { blackThere, whiteThere } from '@/style/there'

onMounted(() => {
  viewMode((view.value as IEl).offsetWidth)
})

// 视图宽度
const view = ref(<IRefEl>null)
function viewResize(info: IObj) {
  viewMode(info.width)
}

// 视图模式
const isViewMode = computed(() => storeState.viewMode)

// 当前主题
const there = computed(() => {
  let t
  switch (storeState.there) {
    case 'white':
      t = whiteThere
      break
    case 'black':
      t = blackThere
      break
    case 'custom':
      t = storeState.thereCustom
      break
  }
  return t
})

</script>

<style lang="less">
@import "./style/basic";
</style>
