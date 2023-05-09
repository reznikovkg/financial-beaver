<template>
  <div class="wrapper">
    <div class="result-page">
        <ResultComponent
            v-for="(item, index) in banks"
            :result="item"
            :key="index"
        />
        <div class="result-comment">
            <div class="result-comment__item">{{ title[this.$route.query.bank] }}</div>
        </div>
        <div class="result-again">
          <router-link :to="{ name: 'home' }">
            <button class="result-again__button">
                попробовать снова
            </button>
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import ResultComponent from './components/ResultComponent.vue'
export default {
  name: 'ResultPage',
  components: {
    ResultComponent
  },
  computed: {
    title () {
      return {
        ivanoff: 'Вы выбрали надежный банк с наилучшими условиями по вкладам',
        gk: 'Вы погнались за большим процентом и невнимательно изучили договор, фактический процент оказался меньше',
        sper: 'Вы вложили деньги в рискованный актив, плохо ознакомившись с договором и потеряли свои средства'
      }
    },
    banks: function () {
      return [{
        img: '/bankIcons/Ivanoff.png',
        beaver: this.$route.query.bank === 'ivanoff',
        items: this.items1
      }, {
        img: '/bankIcons/Vigoda.png',
        beaver: this.$route.query.bank === 'gk',
        items: this.items2
      }, {
        img: '/bankIcons/Sper.png',
        beaver: this.$route.query.bank === 'sper',
        items: this.items3
      }
      ]
    },
    items1: function () {
      return [
        {
          title: 'прозрачные условия'
        }, {
          title: 'входит в АВС'
        },
        {
          title: 'есть лицензия Банка РФ'
        },
        {
          title: 'честный договор'
        }
      ]
    },
    items2: function () {
      return [
        {
          title: 'непрозрачные условия'
        }, {
          title: 'входит в АВС'
        },
        {
          title: 'есть лицензия Банка РФ'
        },
        {
          title: 'фактический процент меньше'
        }
      ]
    },
    items3: function () {
      return [
        {
          title: 'самые выгодные условия'
        }, {
          title: 'лицензия отозвана'
        },
        {
          title: 'плохой договоp'
        },
        {
          title: 'реклама на сайте'
        }
      ]
    }
  }
}

</script>

<style lang="less" scoped>

.wrapper {
  margin: 0;
  background-color: rgb(255, 248, 234);
  min-height: 100vh;
  background: linear-gradient(1deg, #dceeeb, white);
}

.result {

    &-page {
      width: 860px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      min-height: 100vh;
      box-sizing: border-box;
    }

    &-comment {
        margin-top: 20px;
        height: 158px;
        background: #9aa6e7;
        border-radius: 30px;
        border: 26px solid #9aa6e7;
        box-sizing: border-box;
        margin-bottom: 30px;

        &__item {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ffffff;
            height: 100%;
            border-radius: 16px;
            font-size: 24px;
            font-weight: 700;
            text-align: center;
            font-family: 'Ubuntu';
            padding: 0 22px;
        }
    }

    &-again {
        display: flex;
        align-items: center;
        justify-content: center;

        &__button {
            background: #5C6273;
            color: #ffffff;
            width: 284px;
            height: 54px;
            border-radius: 14px;
            font-size: 26px;
            font-weight: 700;
            cursor: pointer;
            border: none;
        }
    }
}

</style>
