<template>
  <div class="noselect sper-logo">
    <div class="sper-logo__text">
      <span>Спёрбанк</span>
      <span v-if="withQuote" class="sper-logo__text__quote">и ваши деньги растут!</span>
    </div>
    <svg v-if="withQuote" class="sper-logo__pic" width="13vmin" height="13vmin" viewBox="0 0 132 98" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.7"
        d="M131.771 0.553714L100.307 15.0442L128.588 35.0482L131.771 0.553714ZM24.7718 55.5536L26.2339 52.934L23.5936 51.4603L22.1408 54.1122L24.7718 55.5536ZM88.2715 62.0537L86.6894 64.6026L89.0895 66.0923L90.7207 63.7861L88.2715 62.0537ZM46.2715 67.5537L44.8094 70.1733L47.4389 71.641L48.8966 69.0059L46.2715 67.5537ZM59.2715 44.0537L60.8536 41.5048L58.1734 39.8412L56.6464 42.6015L59.2715 44.0537ZM5.34693 97.2548L27.4029 56.995L22.1408 54.1122L0.0848395 94.372L5.34693 97.2548ZM90.7207 63.7861L118.629 24.3293L113.731 20.8645L85.8222 60.3213L90.7207 63.7861ZM23.3097 58.1732L44.8094 70.1733L47.7336 64.9341L26.2339 52.934L23.3097 58.1732ZM48.8966 69.0059L61.8966 45.5059L56.6464 42.6015L43.6464 66.1015L48.8966 69.0059ZM57.6894 46.6026L86.6894 64.6026L89.8536 59.5048L60.8536 41.5048L57.6894 46.6026Z"
        fill="#17A600" />
    </svg>
    <svg v-if="!withQuote" class="sper-logo__pic" width="10vmin" height="10vmin" viewBox="0 0 82 66" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.7"
        d="M82 0.522955L50.6911 15.3471L79.1837 35.0493L82 0.522955ZM17.5712 38.0234L19.03 35.402L16.3964 33.9364L14.943 36.5768L17.5712 38.0234ZM54.6119 40.1305L53.0183 42.6723L55.4482 44.1958L57.0794 41.8368L54.6119 40.1305ZM29.8132 44.8362L28.3544 47.4576L30.9784 48.9179L32.4361 46.2924L29.8132 44.8362ZM38.1545 29.8122L39.7481 27.2705L37.0674 25.5898L35.5316 28.356L38.1545 29.8122ZM6.03551 65.2023L20.1993 39.47L14.943 36.5768L0.779167 62.3091L6.03551 65.2023ZM57.0794 41.8368L69.1112 24.4369L64.1761 21.0244L52.1444 38.4243L57.0794 41.8368ZM16.1123 40.6448L28.3544 47.4576L31.272 42.2148L19.03 35.402L16.1123 40.6448ZM32.4361 46.2924L40.7774 31.2684L35.5316 28.356L27.1903 43.38L32.4361 46.2924ZM36.5609 32.3539L53.0183 42.6723L56.2055 37.5888L39.7481 27.2705L36.5609 32.3539Z"
        fill="#17A600" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SperLogo',
  props: {
    withQuote: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
.sper-logo {
  display: flex;
  flex-direction: row;

  &__text {
    display: flex;
    flex-direction: column;

    align-self: flex-end;

    font-family: 'Prata';
    font-style: normal;
    font-weight: bold;
    font-size: 5.5vmin;

    color: #17A600;
    line-height: 100%;

    &__quote {
      margin-left: 17vmin;
    }
  }

  &__pic {
    align-self: flex-end;

    margin-left: 1.25vmin;
  }
}
</style>
