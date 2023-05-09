<template>
  <div class="root">
    <div class="title-container">
      <div class="title__content">
        <div class="search__name">
          <span class="search__name__text">Поисковик</span>
          <span class="search__plus">+</span>
        </div>
        <div class="search-bar">
          <InputComponent :items="items" />
          <div class="search-bar__loupe">
            <span @click="redirectToSearch">&#128269;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from '@/components/Input/Input.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'SearcherView',
  data () {
    return {
      items: [
        'Сравните счета и банки'
      ]
    }
  },
  computed: {
    ...mapGetters('tabsBank', [
      'getTabs'
    ]),
    tabs () {
      return this.getTabs
    }
  },
  methods: {
    redirectToSearch () {
      this.$router.push('/search')
    }
  },
  components: { InputComponent }
}
</script>

<style lang="less" scoped>

.title {
  &-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: white;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }
}
.search {
  &__name {
    padding-bottom: 3%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    &__text{
      font-size: 100px;
      font-family: "Yeseva One", cursive;

      &::first-letter {
        color: blue;
      }
      margin-left: 4%;
    }
  }
  &__plus {
    margin-top:2%;
    font-size: 500%;
  }

  &-bar {
    overflow: hidden;
    border: 2px solid #212940;
    border-radius: 40px;
    display: flex;
    height: 100px;
    width: 830px;
    align-items: center;

    &__text {
      font-family: "Ubuntu", sans-serif;
      display: flex;
      align-items: center;
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      line-height: 41px;
      color: #212940;
      margin-left: 5vmin;
      padding-right: 40vmin;
    }

    &__loupe {
      display: flex;
      align-items: center;
      border-left: 2px solid gray;
      min-height: 100%;
      margin-left: 8%;

      span {
        margin-left: 70%;
        font-size: 30px;
      }
      &:hover{
        cursor:pointer;
      }
    }
  }
}

</style>
