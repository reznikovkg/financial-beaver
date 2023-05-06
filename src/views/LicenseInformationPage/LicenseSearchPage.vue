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

import LicenseCheckPage from '@/views/LicenseInformationPage/components/InformationPageWrapper/LicenseCheckContainer.vue'
import router from '@/router'
import { mapActions, mapGetters } from 'vuex'

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
    ...mapActions('bankLicenses', ['selectLicense']),
    onChange: function (e) {
      const matchedLicense = this.licenses.find(license => license.regNumber === e.target.value)
      if (matchedLicense) {
        this.selectLicense(matchedLicense)
        router.push('license-info')
      }
    }
  },
  computed: {
    ...mapGetters('bankLicenses', ['getLicenses']),
    licenses () {
      return this.getLicenses
    }
  }
}
</script>

<style lang="less">

@import "styles/styles.less";
</style>
