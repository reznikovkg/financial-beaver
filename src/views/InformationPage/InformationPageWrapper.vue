<template>
  <div class="outer-wrapper">
    <div class="wrapper">
      <div class="title">
        Информация о кредитных организациях
        <span class="subtitle">
          {{this.subtitleText}}
        </span>
      </div>
      <div style="padding: 40px 10px">
        <hr>
      </div>
      <div style="flex-grow: 1">
      </div>
      <slot></slot>
      <div class="buttons-container">
        <button class="bottom-button">
          Назад
        </button>
        <button class="bottom-button" v-if="this.goMain">
          На главную
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'InformationPageWrapper',
  components: { },
  props: {
    subtitleText: {
      type: String,
      default: 'Результаты поиска:'
    },
    goMain: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Ubuntu:wght@700&display=swap');

@import "styles/styles.less";
</style>
