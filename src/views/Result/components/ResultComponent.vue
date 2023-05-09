<template>
  <div class="result" :class="{ disable: !result.beaver }">
    <div class="result-avatar">
      <img :src="result.img" class="result-avatar__img">
    </div>
    <div class="result-factor">
      <div class="result-factor__item" v-for="item in result.items" :key="item.title">{{ item.title }}</div>
    </div>
    <div class="result-beaver" v-if="result.beaver">
      <img class="result-beaver__img" src="/img/beaver.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultComponent',
  props: {
    result: Object
  }
}
</script>

<style lang="less" scoped>
.result {
  position: relative;
  margin-top: 20px;
  margin-bottom: 30px;
  height: 158px;
  background: #9aa6e7;
  border-radius: 30px;

  &.disable {
    opacity: 0.5;
    filter: blur(5px);
  }

  &-avatar {
  position: absolute;
  width: 70px;
  height: 70px;
  margin: 40px 0 0 24px;
  border-radius: 100%;
  background: #F2F2F2;

    &__img {
    display: flex;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    align-items: center;
    }
  }

  &-factor {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-left: 162px;
  padding-right: 60px;

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 214px;
      height: 40px;
      margin: 20px;
      background: #6b789e;
      border-radius: 30px;
      color: #ffffff;
      font-family: Ubuntu;
      font-weight: 700;
      text-align: center;
      line-height: 20px;
    }
  }

  &-beaver {
    position: absolute;
    transform: rotate(352deg);
    top: 12px;
    right: -20px;
    width: 156px;
    height: 150px;

      &__img {
      width: 100%;
      height: 100%;
      }
    }
}

</style>
