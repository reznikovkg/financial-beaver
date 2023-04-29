<template>
  <div class="outer-wrapper">
    <div class="wrapper">
      <div class="title">
        <div>
          Информация о кредитных организациях
        </div>
        <div>
          <span class="subtitle">
            {{this.subtitleText}}
          </span>
        </div>
      </div>
      <div style="padding: 4vh 2vh">
        <hr>
      </div>
      <div style="flex-grow: 1">
        <slot />
      </div>
      <div class="buttons-container">
        <button class="bottom-button" @click="() => onGoBack()">
          Назад
        </button>
        <button class="bottom-button" v-if="this.goMain" @click="() => onGoMain()">
          На главную
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import router from '@/router'

export default {
  name: 'LicenseCheckContainer',
  props: {
    subtitleText: {
      type: String,
      default: ''
    },
    goMain: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onGoMain: () => {
      router.push('info-search')
    },
    onGoBack: () => {
      router.back()
    }
  }
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Ubuntu:wght@700&display=swap');

@import "styles/styles.less";
</style>
