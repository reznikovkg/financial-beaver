<template>
  <div class="sper-page">
    <table cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td width="90%" class="content">
          <SperLogo class="sper-logo--spacing" :with-quote="true" />
          <nav class="noselect page-navbar">
            <table cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td align="left">
                  <span class="page-navbar__text"><u>Вклады</u></span>
                </td>
                <td align="center">
                  <span class="page-navbar__text">Накопительные счета</span>
                </td>
                <td align="right">
                  <span class="page-navbar__text">Инвестиции</span>
                </td>
              </tr>
            </table>
          </nav>
          <DepositInfo
            v-for="deposit in getDeposits"
            :key="deposit.id"
            class="deposit-info--spacing"
            :deposit="deposit" />
          <span class="noselect reviews-header">Отзывы <u>настоящих</u> клиентов</span>
          <ClientComment class="reviews--spacing" :userPicture="require('../../assets/us_pic_1.png')"
            userName="ИлоН_Макс2008">Я
            вложил свои деньги в этот
            банк в 2014 году, посмотрите на меня сейчас! Я успешен, я являюсь одним из богатейших людей мира, со мной
            делают
            мемы!
          </ClientComment>
          <ClientComment class="reviews--spacing" :userPicture="require('../../assets/us_pic_2.png')"
            userName="Павел Телеграммов">
            Я очень доволен вкладами
            в этом банке! Получил хорошую процентную ставку и заработал неплохую сумму денег. Буду продолжать пользоваться
            услугами этого банка в будущем. Рекомендую!
          </ClientComment>
        </td>
        <td width="10%" class="ad-feed">
          <AdCard class="ad-feed--spacing" :image="require('../../assets/ad_pic_1.png')">
            Рецепт вечной молодости! Надо всего лишь....
          </AdCard>
          <AdCard class="ad-feed--spacing" :image="require('../../assets/ad_pic_2.png')">
            Продам гараж в Вашем городе! Обращайтесь по телефону....
          </AdCard>
          <AdCard class="ad-feed--spacing" :image="require('../../assets/ad_pic_3.png')">
            Ребята, вы издеваетесь!? Ищу команду для...
          </AdCard>
          <AdCard class="ad-feed--spacing" :image="require('../../assets/ad_pic_4.png')">
            Вскипятите банан, выпейте эту воду на ночь и тогда...
          </AdCard>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import AdCard from './components/AdCard.vue'
import ClientComment from './components/ClientComment.vue'
import DepositInfo from './components/DepositInfo.vue'
import SperLogo from './components/SperLogo.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'SperPage',
  components: {
    AdCard,
    ClientComment,
    DepositInfo,
    SperLogo
  },
  computed: {
    ...mapGetters('sperDeposits', [
      'getDeposits'
    ])
  },
  mounted () {
    this.$openBoberModal({ param2: '2' })
  }
}
</script>

<style lang="less" scoped>
.sper-page {
  padding: 52px 26px;
  background-color: #F2F2F2;
  min-height: 100vh;
  box-sizing: border-box;
}

.content {
  padding-right: 26px;
}

.sper-logo--spacing {
  margin-bottom: 26px;
}

.page-navbar {
  margin-bottom: 52px;
  padding-right: 162.5px;

  &__text {
    font-family: 'Prata';
    font-size: 32.5px;

    color: #000000;

    cursor: pointer;
  }
}

.deposit-info--spacing {
  margin-bottom: 84.5px;
}

.reviews-header {
  display: block;

  font-family: 'Prata';
  font-size: 32.5px;

  margin-bottom: 13px;

  color: black;
}

.reviews--spacing {
  margin-bottom: 65px;
}

.ad-feed {
  border-left: 2px solid black;
  padding-left: 32.5px;

  &--spacing {
    margin-bottom: 65px;
  }
}
</style>
