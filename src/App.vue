<template>
  <n-config-provider>
    <n-global-style />
    <WebTabBar v-show="$route.meta.tabbar && isViewMode === 'Web'" />
    <MobileTabBar v-show="$route.meta.tabbar && isViewMode === 'Mobile'" />
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
import WebTabBar from '@/components/TabBar/WebTabBar.vue'
import MobileTabBar from '@/components/TabBar/MobileTabBar.vue'
import viewMode from '@/utils/viewMode'
import { IEl, IObj, IRefEl } from '@/interface'
import { storeState } from '@/store/Tools'

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

</script>

<style lang="less">
@import "./style/basic";
@import "./style/common";
</style>
