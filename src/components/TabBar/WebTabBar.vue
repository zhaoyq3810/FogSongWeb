<template>
  <div id="tab-bar-web" :style="currentThere">
    <div class="left" @click="goHome">
      <n-icon class="icon" :component="Planet" />
      <div class="name">FogSong</div>
    </div>
    <div class="center">
      <n-input
        v-model:value="value"
        class="search-input"
        :round="true"
        :clearable="true"
        :input-props="{style: { color: currentThere.color }}"
        :placeholder="$t('search')"
      >
        <template #prefix>
          <n-icon class="icon" :color="act ? '#36ad6a' : '#c2c2c2'" :component="NavigateSharp" />
        </template>
        <template #clear-icon>
          <n-icon class="icon" :component="ReloadCircleSharp" />
        </template>
      </n-input>
    </div>
    <div class="right">
      <n-popover trigger="click">
        <template #trigger>
          <n-popover trigger="hover">
            <template #trigger>
              <n-icon class="icon" :component="Language" />
            </template>
            <span>{{ $t('lang.popover') }}</span>
          </n-popover>
        </template>
        <div class="lang-box">
          <div
            v-for="d in ['cn', 'en']"
            :key="d"
            class="lang-items"
            :data-text="$t(`lang.${ d }`)"
            :class="{ 'act-border': lang === d, 'gradient-text': lang === d }"
            :style="{ borderBottom: lang === d ? '1px solid' : 'none' }"
            @click="setLang(d)"
          >
            {{ $t(`lang.${ d }`) }}
          </div>
        </div>
      </n-popover>
      <n-popover trigger="click">
        <template #trigger>
          <n-popover trigger="hover">
            <template #trigger>
              <n-icon class="icon" :component="LogoGithub" />
            </template>
            <span>{{ $t('github.popover') }}</span>
          </n-popover>
        </template>
        <div class="go-github-box">
          <div
            v-for="d in ['Github', 'Gitee']"
            :key="d"
            class="go-source_code-items"
            @click="goSourceCode(d)"
          >
            {{ d }}
          </div>
        </div>
      </n-popover>
      <n-popover trigger="click">
        <template #trigger>
          <n-popover trigger="hover">
            <template #trigger>
              <n-icon class="icon" :component="LogoWechat" />
            </template>
            <span>{{ $t('WeiXin.popover') }}</span>
          </n-popover>
        </template>
        <div class="weixin">
          <div class="weixin-card-title">
            <img class="author-avatar" src="@/assets/author_weixin_avatar.png" alt="" />
            <div class="author-info">
              <div class="author-name">雾歌</div>
              <div class="author-wx">Z3276255289</div>
            </div>
          </div>
          <img class="weixin-add-friend" src="@/assets/weixin_add_friend.png" alt="">
          <p>{{ $t('WeiXin.remarkOne') }}</p>
          <p>{{ $t('WeiXin.remarkTwo') }}</p>
        </div>
      </n-popover>
      <n-popover trigger="click">
        <template #trigger>
          <n-popover trigger="hover">
            <template #trigger>
              <n-icon class="icon" :component="ColorPalette" />
            </template>
            <span>{{ $t('there.popover') }}</span>
          </n-popover>
        </template>
        <div class="there-box">
          <div
            v-for="d in ['white', 'black', 'custom']"
            :key="d"
            class="there-items"
            :style="{
              ...(d === 'white' ? whiteThere : {}),
              ...(d === 'black' ? blackThere : {}),
              ...(d === 'custom' ? customThere : {}),
              ...(there === d ? {} : {border: 'none'})
            }"
            @click="setThere(d)"
          >
            {{ $t(`there.${ d }`) }}
            <n-icon v-if="d === 'custom'" class="icon" :component="Flower" @click.stop="customColorShow = !customColorShow" />
          </div>
          <!--自定义颜色板弹出框-->
          <div v-show="customColorShow" class="custom-color-box">
            <div class="label">{{ $t('there.color') }}</div>
            <div class="swatches">
              <n-color-picker
                :default-value="defaultTextColor"
                :show-alpha="true"
                :actions="['confirm']"
                :modes="['hex', 'rgb']"
                @confirm="setTextColor"
              />
            </div>
            <div class="label">{{ $t('there.bgColor') }}</div>
            <div class="swatches">
              <n-color-picker
                :default-value="defaultBGColor"
                :show-alpha="true"
                :actions="['confirm']"
                :modes="['rgb', 'hex']"
                @confirm="setBGColor"
              />
            </div>
          </div>
        </div>
      </n-popover>
    </div>
  </div>
  <div class="border-b" />
</template>

<script setup lang="ts">
import { Planet, NavigateSharp, ReloadCircleSharp, LogoWechat, ColorPalette, Language, LogoGithub, Flower } from '@vicons/ionicons5'
import router from '@/router'
import { whiteThere, blackThere } from '@/style/there'
import i18n from '@/i18n/i18n'
import { storeCommit, storeState } from '@/store/Tools'
import { newOpenWeb } from '@/utils/common'

// 去首页
const goHome = () => router.push('/')

// 搜索内容
const value = ref('')
const act = computed(() => value.value !== '')

// 当前语言
const lang = ref(sessionStorage.getItem('fogsong_lang') || 'cn')
function setLang(d: 'cn' | 'en') {
  lang.value = d
  sessionStorage.setItem('fogsong_lang', d)
  i18n.global.locale = d
}
// 去源码
function goSourceCode(mode: string) {
  if (mode === 'Github') newOpenWeb('https://github.com/zhaoyq3810/FogSongWeb')
  if (mode === 'Gitee') newOpenWeb('https://gitee.com/zhaoyq_3810/my_personal_web')
}
// 当前主题
const there = ref('white')
if (sessionStorage.getItem('fogsong_there')) {
  there.value = sessionStorage.getItem('fogsong_there') as string
  if (there.value === 'custom' && sessionStorage.getItem('fogsong_there_custom')) {
    storeCommit('setThereCustom', JSON.parse(sessionStorage.getItem('fogsong_there_custom') as string))
  }
} else {
  sessionStorage.setItem('fogsong_there', there.value)
}
storeCommit('setThere', there.value)
const customThere = computed(() => storeState.thereCustom)
const currentThere = computed(() => {
  let t
  switch (storeState.there) {
    case 'white':
      t = whiteThere
      break
    case 'black':
      t = blackThere
      break
    case 'custom':
      t = customThere.value
      break
  }
  return t
})
function setThere(d: string) {
  there.value = d
  sessionStorage.setItem('fogsong_there', d)
  storeCommit('setThere', d)
}
// 设置自定义颜色板
const customColorShow = ref(false)
const defaultTextColor = computed(() => storeState.thereCustom.color)
const defaultBGColor = computed(() => storeState.thereCustom.backgroundColor)
function setTextColor(val:string) {
  const d = {
    color: val,
    backgroundColor: storeState.thereCustom.backgroundColor,
  }
  sessionStorage.setItem('fogsong_there_custom', JSON.stringify(d))
  storeCommit('setThereCustom', d)
}
function setBGColor(val:string) {
  const d = {
    color: storeState.thereCustom.color,
    backgroundColor: val,
  }
  sessionStorage.setItem('fogsong_there_custom', JSON.stringify(d))
  storeCommit('setThereCustom', d)
}

</script>

<style scoped lang="less">
#tab-bar-web {
  flex: 0 0 (60 * @pc);
  padding: 0 (30 * @pc);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.border-b {
  border-bottom: (3 * @pc) solid;
  .act-border;
}
.left {
  display: flex;
  font-size: (22 * @pc);
  .icon {
    height: (36 * @pc);
    font-size: (36 * @pc);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: (4 * @pc);
  }
  .name {
    line-height: (36 * @pc);
  }
}
.center {
  height: (60 * @pc);
  padding: 0 (425 * @pc);
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .search-input {
    height: (50 * @pc);
    background: transparent;
    .act-border;
    /deep/.n-input__input-el {
      height: (50 * @pc);
      font-size: (20 * @pc);
      border: (0.5 * @pc) solid transparent;
    }
    /deep/.n-input__border {
      border: none;
    }
    .icon {
      font-size: (36 * @pc);
    }
    /deep/.n-base-clear > .n-base-clear__clear {
      height: (50 * @pc);
      width: (50 * @pc);
      align-items: center;
    }
  }
}
.right {
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    font-size: (30 * @pc);
    margin-left: (10 * @pc);
  }
}

.weixin {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: (30 * @pc);
  .weixin-card-title {
    flex: 1 1;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .weixin-add-friend {
    width: (300 * @pc);
    height: (300 * @pc);
  }
}
.author-avatar {
  width: (80 * @pc);
  height: (80 * @pc);
}
.author-info {
  flex: 1 1;
  padding: (20 * @pc) (10 * @pc) 0;
}

.there-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: (150 * @pc);
}
.there-items {
  width: 100%;
  height: (50 * @pc);
  display: flex;
  justify-content: space-between;
  font-size: (20 * @pc);
  border-radius: (5 * @pc);
  border: solid (2 * @pc);
  margin-bottom: (10 * @pc);
  .flexCenter;
  //.act-border;
  .icon {
    margin-left: (10 * @pc);
    font-size: (30 * @pc);
  }
}
.there-custom {
}

.lang-items {
  height: (50 * @pc);
  font-size: (20 * @pc);
  .flexCenter;
}

.go-source_code-items {
  width: (60 * @pc);
  height: (50 * @pc);
  font-size: (20 * @pc);
  .flexCenter;
}
.custom-color-box {
  width: 100%;
  padding-top: (10 * @pc);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: dashed (3 * @pc);
  .label {
    font-size: (18 * @pc);
  }
  .swatches {
    width: 100%;
  }
}
</style>
