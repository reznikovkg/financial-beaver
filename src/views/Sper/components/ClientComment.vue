<template>
  <div class="client-comment">
    <img class="client-comment__img" :src="userPicture" draggable="false">
    <div class="client-comment__body">
      <span class="client-comment__body__header">{{ userName }}</span>
      <span>
        <slot>Comment text placeholder</slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientComment',
  props: {
    userPicture: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>

.client-comment {
  display: flex;
  flex-direction: row;

  &__img {
    height: 20vmin;
    width: 25vmin;
  }

  &__body {
    display: flex;
    flex-direction: column;

    margin-left: 2vmin;

    font-family: "Prata";
    font-size: 3vmin;

    &__header {
      font-weight: bold;
    }
  }
}
</style>
