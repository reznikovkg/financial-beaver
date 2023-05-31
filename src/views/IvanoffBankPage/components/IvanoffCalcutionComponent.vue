<template>
  <div class="ivanoffcalc-container">
    <div class="title-container">
      <div class="title__back-button" @click="redirectToIvanoff">
        <img src="IvanoffBank/Vector.png" alt="arrow">
      </div>
      <div class="title__content">
        <div class="title__text">Рассчитаем ваш доход</div>
        <div class="title__subtext">
          Предварительный расчет. Не является публичной офертой.
        </div>
      </div>
    </div>
    <div class="ivanoffcalc__content">
      <div class="calculation-container">
        <div class="calculation__calculator">
          <div class="calculation__deposit">
            <div class="calculation__deposit__content">
              <div style="font-family: 'Inter';font-style: normal;font-size:0.9rem">Сумма вклада</div>
                <input v-model="amount" type="number" class="calculation__deposit__value" style="font-size:1.3rem;background-color: #E4E4E4;border: 0;outline: 0;margin-left:0.8rem;width:auto;margin-top:4px"/>
              </div>
            <label style="display:flex">
              <input
                type="checkbox"
                value="no"
                class="calculation__deposit__checkbox"
              /><p style="margin-left:0.3rem">Повышенная ставка</p>
            </label>
          </div>
          <div class="calculation__period">
            <div class="calculation__period__content">
              <div style="font-family: 'Inter';font-style: normal;font-size:0.9rem">На срок</div>
              <div class="calculation__period__value" style="font-size:1.3rem">
                <InputComponent :items="items" :styles="options" value="4 мес" />
              </div>
            </div>
            <label style="display:flex">
              <input
                type="checkbox"
                value="yes"
                class="calculation__period__checkbox"
              /><p style="margin-left:0.3rem">Оставлять проценты</p>
            </label>
          </div>
        </div>
        <div class="calculation__savings">
          <div class="calculation__savings__values">
            <div style="font-family: 'Inter';font-style: normal;font-size:0.8rem">Cбережения за {{ period }} </div>
            <div style="font-family: 'Inter';font-size:1.6rem;margin-top:0.2rem;font-weight:600">{{savings}} ₽</div>
          </div>
          <div class="calculation__savings-additional">
            <div class="calculation__savings-additional-rate">
              <div style="font-size:0.8rem">Ставка</div>
              <div style="font-family: 'Inter';font-size:1.2rem;font-weight:600">{{ rate }}</div>
            </div>
            <div class="calculation__savings-additional-income">
              <div style="font-size:0.8rem">Доход по вкладу</div>
              <div style="font-family: 'Inter';font-size:1.2rem;font-weight:600">+ {{ income }} ₽</div>
            </div>
          </div>
        </div>
      </div>
      <div class="rates-container">
        <div class="rates__text">все ставки</div>
        <div class="rates-table">
          <div class="rates-table__names">
            <div style="font-family: 'Inter';font-size:0.9rem">Период</div>
            <div style="font-family: 'Inter';font-size:0.9rem">Ставка</div>
          </div>
          <div v-for="(rate,index) in rates" :key="index" class="rates-table__value">
            <p>{{ rate.period }}</p>
            <p>{{ rate.rate }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from '@/components/Input/Input.vue'
export default {
  components: { InputComponent },
  data () {
    return {
      amount: 100000,
      period: '4 мес',
      rate: '6.00%',
      rates: [
        { period: '1 мес', rate: '4.50%' },
        { period: '2 мес', rate: '5.00%' },
        { period: '4 мес', rate: '6.00%' },
        { period: '7 мес', rate: '6.25%' },
        { period: '12 мес', rate: '6.60%' },
        { period: '18 мес', rate: '6.70%' },
        { period: '24 мес', rate: '6.80%' },
        { period: '36 мес', rate: '7.00%' }
      ],
      items: [
        '1 мес',
        '2 мес',
        '4 мес',
        '7 мес',
        '12 мес',
        '18 мес',
        '24 мес',
        '36 мес'
      ],
      options: {
        'font-size': '1.3rem',
        'background-color': 'rgb(228, 228, 228)',
        border: '0px',
        outline: '0px',
        'margin-left': '-18px',
        width: '200px'
      }
    }
  },
  computed: {
    savings () {
      const saving = this.amount
      const intRate = (+(this.rate.substring(0, 3)))
      const intPeriod = (+(this.period.slice(0, -3)) * 30)
      const temp = (saving * intRate * intPeriod) / 365
      return (+(saving) + +Math.ceil(temp / 100))
    },
    income () {
      return this.savings - this.amount
    }
  },
  mounted () {
    this.$root.$on('clickedItem', v => {
      this.period = v
      this.rate = this.rates.find((item) => item.period === v).rate
    })
  },
  methods: {
    redirectToIvanoff () {
      this.$router.push('/ivanoff')
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
}
.title {
  &-container {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    background-color:white;
    height: 8rem;
  }

  &__text {
    margin-left: 10px;
    font-size: 2.3rem;
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    color:#260407;
    margin-top:2rem;
  }

  &__subtext {
    margin-left: 10px;
    font-size: 1.1rem;
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    color:#260407BF;
    padding-bottom: 1rem;
  }

  &__back-button{
    margin:30px;
    background: #D9232380;
    width: 15px;
    height: 15px;
    padding: 10px;
    border-radius: 50%;
    border: black solid 2px;
    cursor: pointer;

    & img {
      width: 80%;
      height: 100%;
    }
  }
}

.ivanoffcalc {
  &__content {
    display: flex;
    flex-direction: column;
    background-color: #ededeb;
    height: 27rem;
  }
}
.calculation{
  &-container{
    display: flex;
    border-radius: 7px;
    background-color: white;
    margin-top:3rem;
    margin-left: 1.6rem;
    margin-right:1.6rem;
    height: 10rem;
    max-height:10rem;
  }
  &__calculator{
    display: flex;
    flex-direction: row;
  }
  &__deposit{
    margin-left:1rem;
    margin-top:2rem;
    width: 15rem;
    height: auto;
    input:focus{
      outline: none;
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &__checkbox{
      margin-top: 1rem;
    }
    input{
      height: 1.2rem;
      width:1.2rem;
    }

    &__content{
      display: flex;
      flex-direction: column;
      width: 15rem;
      height: 3.5rem;
      background-color: #E4E4E4;
      border-radius: 10px;

      div{
        display: flex;
        flex-direction: column;
        margin-left:1rem;
      }
      div:first-child{
        margin-top:0.5rem;
      }

    }
  }

  &__period{
    margin-left:1rem;
    margin-top:2rem;
    width: 15rem;
    height: auto;
    &__checkbox{
      margin-top: 1rem;
    }
    input{
      height: 1.2rem;
      width:1.2rem;
    }
    &__content{
      display: flex;
      flex-direction: column;
      width: 15rem;
      height: 3.5em;
      background-color: #E4E4E4;
      border-radius: 10px;

      div{
        display: flex;
        flex-direction: column;
        margin-left:1rem;
      }
      div:first-child{
        margin-top:0.3rem;
      }
    }
  }
  &__savings{
    display: flex;
    flex-direction: column;
    margin-left: 9rem;
    border-left: 2px solid gray;
    width:15rem;
    &__values{
      margin-left:1.9rem;
      margin-top:2rem;
    }
    &-additional{
      margin-top:1rem;
      display: flex;
      flex-direction: row;
      margin-left:1.9rem;
      &-rate{
        div{
          margin-bottom: 0.2rem;
        }
      }
      &-income{
        margin-left: 1.5rem;
        div{
          margin-bottom: 0.2rem;
        }
      }
    }
  }
}

.rates{
  &-container{
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    background-color: white;
    margin-top:3rem;
    margin-left: 1.6rem;
    margin-right:1.6rem;
    height: 10rem;
    max-height:10rem;
  }
  &-table{
    display: flex;
    flex-direction: row;
    margin-left: 1rem;
    margin-top:0.5rem;
    margin-bottom: 1rem;
    margin-right:1rem;
    background-color: #E4E4E4;
    border-radius: 10px;
    max-height: 5rem;
    &__names{
      margin-top:0.8rem;
      margin-left:1rem;
      div{
        margin-bottom: 1rem;
      }
    }
    &__value{
      margin-left:3.5rem;
      font-family: 'Inter';
      font-size:0.9rem;
    }
  }
  &__text{
    margin-left:1rem;
    margin-top:1rem;
    font-size: 1.6rem;
    font-weight: 600;
    font-family: 'Jost';
  }
}

</style>
