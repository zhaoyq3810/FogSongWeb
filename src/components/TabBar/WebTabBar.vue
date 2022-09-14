<template>
  <div id="tab-bar-web">
    <div class="left" @click="goHome">
      <n-icon class="icon" :component="Planet" />
      <div class="name">FogSong</div>
    </div>
    <div class="center">
      <n-input
        v-model:value="value"
        class="search-input"
        round
        clearable
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
            :class="{ 'act-text': lang === d }"
            @click="setLang(d)"
          >
            {{ $t(`lang.${ d }`) }}
          </div>
        </div>
      </n-popover>
      <n-popover trigger="hover">
        <template #trigger>
          <n-icon class="icon" :component="LogoGithub" />
        </template>
        <span>{{ $t('github.popover') }}</span>
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
            <img class="author-avatar" src="@/assets/author_weixin_avatar.jpg" alt="" />
            <div class="author-info">
              <div class="author-name">雾歌</div>
              <div class="author-wx">Z3276255289</div>
            </div>
          </div>
          <img class="weixin-add-friend" src="@/assets/weixin_add_friend.jpg" alt="">
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
          <div class="there">
            <div :style="whiteThere">{{ $t('there.white') }}</div>
            <div :style="blackThere">{{ $t('there.black') }}</div>
          </div>
          <div class="there-custom">{{ $t('there.custom') }}</div>
        </div>
      </n-popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Planet, NavigateSharp, ReloadCircleSharp, LogoWechat, ColorPalette, Language, LogoGithub } from '@vicons/ionicons5'
import router from '@/router'
import { whiteThere, blackThere } from '@/style/there'
import i18n from '@/i18n/i18n'

// 去首页
const goHome = () => router.push('/')

// 搜索内容
const value = ref('')
const act = computed(() => value.value !== '')

// 当前语言
const lang = ref(sessionStorage.getItem('fogsong_lang') || 'cn')
function setLang(language: string) {
  lang.value = language
  sessionStorage.setItem('fogsong_lang', language)
  i18n.global.locale = language
}
</script>

<style scoped lang="less">
#tab-bar-web {
  flex: 0 0 (60 * @pc);
  padding: 0 (30 * @pc);
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  padding: 0 50px;
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .search-input {
    height: (50 * @pc);
    background: transparent;
    /deep/.n-input__input-el {
      height: (50 * @pc);
      font-size: (20 * @pc);
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
  width: (300 * @pc);
}
.there {
  width: 100%;
  height: (50 * @pc);
  display: flex;
  justify-content: space-between;
  >div {
    height: 100%;
    width: 48%;
    font-size: (20 * @pc);
    .flexCenter;
  }
}

.lang-items {
  height: (50 * @pc);
  font-size: (20 * @pc);
  .flexCenter;
}
</style>
