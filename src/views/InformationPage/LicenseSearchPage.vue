<template>
  <LicenseCheckPage subtitle-text="(на 23.12.2022)">
    <div class="search">
      Организации
      <div>
        <input v-model="text" @input="(e) => onChange(e)" class="input" placeholder="Название или регистрационный номер" />
      </div>
    </div>
  </LicenseCheckPage>
</template>

<script>

import LicenseCheckPage from '@/views/InformationPage/components/InformationPageWrapper/LicenseCheckContainer.vue'
import router from '@/router'

export default {
  name: 'LicenseSearchPage',
  components: { LicenseCheckPage },
  props: {
    subtitleText: {
      type: String,
      default: 'Результаты поиска:'
    }
  },
  data: function () {
    return {
      text: ''
    }
  },
  methods: {
    onChange: (e) => {
      if (e.target.value === '34522') {
        router.push('info')
      }
    }
  }
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:wght@600&family=Ubuntu:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Ubuntu:wght@700&display=swap');

@import "styles/styles.less";
</style>
