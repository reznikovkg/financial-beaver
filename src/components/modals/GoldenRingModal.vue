<template>
  <div class="modal-container">
    <img class="modal-wide-pattern" src="../../assets/pattern.png" alt="Узор"/>
    <div class="modal-content">
      <span class="modal-title">Рассчитать доход по вкладу онлайн</span>
      <div class="modal-subtitle">
        сумма вклада
      </div>
      <div class="slider-container">
        <div class="slider-container-text right-round" style="padding: 16px 8px 16px 0;">
          50000 Р
        </div>
        <div class="slider-wrapper left-round">
          <input v-model="sum" type="range" min="50000" max="500000" step="1000" value="100000" class="slider" />
        </div>
      </div>
      <div class="slider-container-text" style="margin: 0 0 32px 128px;">
        {{sum}} Р
      </div>
      <div class="modal-subtitle">
        срок
      </div>
      <div class="slider-container">
        <div class="slider-container-text right-round" style="padding: 16px 8px 16px 0;">
          3 мес
        </div>
        <div class="slider-wrapper left-round">
          <input v-model="months" type="range" min="3" max="120" value="12" class="slider" />
        </div>
      </div>
      <div class="slider-container-text" style="margin: 0 0 32px 128px;">
        {{months}} мес
      </div>
      <div class="modal-bottom">
        <div>
          <span class="modal-title">Итог: {{total}}</span><br>
          <span class="modal-title">Ваш доход составит: {{profit}}</span>
        </div>
        <button class="button" @click="() => $emit('close')">Дальше</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoldenRingModal',
  components: { },
  props: {
    param: Number
  },
  data () {
    return {
      months: 12,
      sum: 100000
    }
  },
  computed: {
    total () {
      return Math.round(this.sum * Math.pow(1.13, this.months / 12))
    },
    profit () {
      return this.total - this.sum
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.modal {
  &-wide-pattern {
    background-repeat: no-repeat;
    overflow: hidden;
    width: 1200px;
    height: 180px;
    object-fit: none;
  }

  &-container {
    background-color: white;
    padding: 16px 0;
    text-align: center;
  }

  &-title {
    font-family: 'Lobster', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
  }

  &-subtitle {
    font-family: 'Lobster', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-align: left;
  }

  &-content {
    padding: 32px 48px;
  }

  &-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: left
  }
}

.button {
  background-color: rgba(255, 214, 0, 0.51);
  font-family: Lobster, serif;
  font-size: 60px;
  border: none;
  border-radius: 3vmin;
  font-weight: 400;
  width: 400px;
  cursor: pointer;
}

.slider {
  width: 100%;
  padding: 0 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 17px;

  &-container {
    display: flex;
    flex-direction: row;
    padding-right: 48px;
    align-items: center;

    &-text {
      font-family: 'Lobster', serif;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      text-align: center;
      width: 100px;
    }
  }

  &-wrapper {
    width: 100%;
    height: 24px;
  }

  &::-webkit-slider-runnable-track {
    height: 4px;
    padding: 0 -16px;
    background-color: black;
  }

  &::-webkit-slider-thumb {
    background: red;
    border: solid red 1px;
    transform: scale(16);
    border-radius: 100%;
    cursor: pointer;
    width: 0;
    height: 0;
    -webkit-appearance: none;
  }

  &::-moz-range-track {
    height: 4px;
    padding: 0 -16px;
    background-color: black;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 0;
    height: 0;
    content: '';
    display: block;
    border-radius: 100%;
    transform: scale(16);
    background: red;
    border: solid red 1px;
    cursor: pointer;
  }
}

.left-round:before {
  background: black;
  border: none;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  content: '';
  display: block;
  position: absolute;
  margin: 2px 0 0 11px;
}

.right-round:before {
  background: black;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  content: '';
  display: block;
  position: absolute;
  margin: 5px 0 0 1066px;
  pointer-events: none;
}
</style>
