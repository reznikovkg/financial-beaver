<template>
  <div>
  <input v-model="str" :class="inputClass" :placeholder="placeholder" @click="inputClicked" :style="inputStyles"/>
  <Transition name="slide-fade">
    <div v-if="isOpen" :class="dropdownClass" :style="dropdownStyles">
      <div v-for="(item, index) in items"
           :key="index"
           class="item"
           @click="()=>itemPicked(item)"
          >
          <p>
            {{item}}
          </p>
      </div>
    </div>
  </Transition>
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    placeholder: {
      type: String,
      default: 'Введите текст...'
    },
    value: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => ([])
    },
    styles: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      isOpen: false,
      selectedItem: ''
    }
  },
  computed: {
    str: {
      get () {
        if (this.selectedItem === '') {
          return this.value
        } else {
          return this.selectedItem
        }
      },
      set (v) {
        this.$emit('change', v)
      }
    },
    inputClass () {
      const { styles } = this
      if (styles.length === 0) return 'inp'
      else return '0'
    },
    dropdownClass () {
      const styles = this.styles
      if (styles.length > 0) return ''
      else return 'dropdown-inner'
    },
    inputStyles () {
      const { styles } = this
      if (styles.length === 0) return ''
      else return styles
    },
    dropdownStyles () {
      const { styles } = this
      if (styles.length === 0) return ''
      else return styles
    }
  },
  methods: {
    inputClicked () {
      if (!this.isOpen) {
        this.isOpen = true
      }
    },
    itemPicked (item) {
      this.isOpen = false
      this.selectedItem = item
      this.$root.$emit('clickedItem', item)
    }
  }
}
</script>

<style lang="less" scoped>
.inp {
  border: 0;
  outline: 0;
  padding: 6px 8px;
  font-family: "Ubuntu", sans-serif;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  color: #212940;
  margin-left: 25px;
  padding-right: 150px;

  &::placeholder {
    color: #cfcfcf;
  }

  &:focus {
    outline: none;
  }
}

.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

input:focus{
  outline: none;
}
.dropdown{
  display: flex;
  flex-direction: column;

  &-inner{
    margin-top:30px;
    width: 830px;
    height: auto;
    position: absolute;
    z-index: 999999;
    box-shadow: 0 0px 10px 0 rgba(0,0,0,.25);
    background-color:white;
    border-radius: 40px;
  }
}
.input-box {
  padding-left: 1rem;
  padding-right: 1rem;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;
}
.item {
  height: auto;
  font-size: 20px;
  margin-left: 4%;
  &:hover{
    cursor:pointer;
  }
}
.active,
.non-active {
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0;
  background-color: lightgray;
}
</style>
