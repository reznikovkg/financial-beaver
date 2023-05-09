<template>
  <LicenseCheckContainer subtitle-text="Результаты поиска:" go-main>
    <table class="table">
      <thead>
        <tr>
          <th style="width: 3%"/>
          <th class="text--blue" style="width: 5%">
            №
          </th>
          <th style="width: 10%">
            прим.
          </th>
          <th style="width: 10%">
            рег. номер
          </th>
          <th style="width: 18%">
            ОГРН
          </th>
          <th style="width: 18%">
            наименование
          </th>
          <th>
            адрес
          </th>
          <th style="width: 3%"/>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td />
          <td class="item">
            1
          </td>
          <td class="item">
            {{this.selectedLicense?.code}}
          </td>
          <td class="item">
            {{this.selectedLicense?.regNumber}}
          </td>
          <td class="item">
            {{this.selectedLicense?.govRegNumber}}
          </td>
          <td class="item">
            {{this.selectedLicense?.name}}
          </td>
          <td class="item">
            {{this.selectedLicense?.address}}
          </td>
          <td />
        </tr>
      </tbody>
    </table>
    <div class="codes-info">
      <p style="font-weight: 700">
        Расшифровка кодов:
      </p>
      <ul>
        <li>
          «Б»: балансовая информация (месячная)
        </li>
        <li>
          «П»: данные о прибыли и убытках (квартальные)
        </li>
        <li>
          «С»: кредитная организация включена в систему страхования вкладов
        </li>
        <li>
          «офр.»: в процессе оформления (лицензии нет)
        </li>
        <li>
          «отз.»: лицензия отозвана
        </li>
        <li>
          «анн.»: лицензия аннулирована
        </li>
        <li>
          «лик.»: ликвидирована
        </li>
      </ul>
    </div>
  </LicenseCheckContainer>
</template>

<script>

import LicenseCheckContainer from '@/views/LicenseInformationPage/components/InformationPageWrapper/LicenseCheckContainer.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'LicenseCheckPage',
  components: { LicenseCheckContainer },
  props: {
    subtitleText: {
      type: String,
      default: 'Результаты поиска:'
    }
  },
  data () {
    return {
      text: ''
    }
  },
  computed: {
    ...mapGetters('bankLicenses', [
      'getSelectedLicense'
    ]),
    selectedLicense () {
      return this.getSelectedLicense
    }
  }
}
</script>

<style lang="less" scoped>

@import "styles/styles.less";
</style>
