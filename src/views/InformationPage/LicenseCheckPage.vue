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
            Б П С
          </td>
          <td class="item">
            34522
          </td>
          <td class="item">
            18923678259543
          </td>
          <td class="item">
            ЗАО "Спербанк"
          </td>
          <td class="item">
            403118, г. Урюпинск,
            ул. Зои Космодемьянской, д. 14/8
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

import LicenseCheckContainer from '@/views/InformationPage/components/InformationPageWrapper/LicenseCheckContainer.vue'

export default {
  name: 'LicenseCheckPage',
  components: { LicenseCheckContainer },
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
  }
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:wght@600&family=Ubuntu:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:wght@700&family=Ubuntu:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Ubuntu:wght@700&display=swap');

@import "styles/styles.less";
</style>
