<template>
  <div>
  <input v-model="str" class="inp" :placeholder="placeholder" @click="inputClicked" />
  <Transition name="slide-fade">
    <div v-if="isOpen" class="dropdown-inner">
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
      default: 'Enter...'
    },
    value: {
      type: String,
      default: ''
    },
    items: {
      type: [],
      default: []
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
        return this.selectedItem ?? this.value
      },
      set (v) {
        this.$emit('change', v)
      }
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
    }
  }
}
</script>

<style lang="less">
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
    margin-top:2%;
    width: 53rem;
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
