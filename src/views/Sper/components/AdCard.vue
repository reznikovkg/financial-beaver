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

  max-width: 24.75vmin;
  max-height: 37.5vmin;

  padding: 2.5vmin;

  background: #D9D9D9;
  border: 1px solid black;

  &__img {
    width: 19.5vmin;
    height: 18.75vmin;
  }

  &__text {
    font-family: "Inter";
    font-size: 1.7vmin;

    padding: 0vmin 1.5vmin;

    word-wrap: break-word;
  }
}
</style>
