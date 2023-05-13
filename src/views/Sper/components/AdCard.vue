<template>
  <div class="noselect ad-card-holder">
    <img class="ad-card-holder__img" :src="image" draggable="false">
    <div class="ad-card-holder__text">
      <slot>Ad text placeholder</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdCard',
  props: {
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>

.ad-card-holder {
  box-sizing: border-box;

  max-width: 160.88px;
  max-height: 243.75px;

  padding: 16.25px;

  background: #D9D9D9;
  border: 1px solid black;

  &__img {
    width: 126.75px;
    height: 121.88px;
  }

  &__text {
    font-family: "Inter";
    font-size: 11.05px;

    padding: 0px 9.75px;

    word-wrap: break-word;
  }
}
</style>
