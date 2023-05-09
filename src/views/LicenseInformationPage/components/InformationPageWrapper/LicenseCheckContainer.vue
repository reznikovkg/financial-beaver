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
import { mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters('bankLicenses', [
      'getSelectedLicense'
    ])
  },
  methods: {
    onGoMain () {
      this.$router.push({ name: this.getSelectedLicense.urlName })
    },
    onGoBack () {
      router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  box-sizing: border-box;
  padding: 5vmin 0 3vmin 0;
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 60%;
  min-height: 100vh;
}

.outer-wrapper {
  background-color: #e9eaee;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.title {
  line-height: 5vmin;
  font-size: 5vmin;
  padding: 0 3vmin;
  font-weight: 700;
  font-family: Ubuntu, serif;
}

.subtitle {
  font-size: 4vmin;
  line-height: 4vmin;
  color: #000000;
  opacity: 0.5;
}

.buttons-container {
  margin: auto 20px 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.bottom-button {
  background-color: rgba(92, 98, 115, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: rgba(33, 41, 64, 0.75);
  padding: 1.5vmin;
  font-size: 4vmin;
  cursor: pointer;
  width: 30%;
  max-width: 400px;
  border-radius: 15px;
  font-family: Ubuntu, serif;
}

</style>
