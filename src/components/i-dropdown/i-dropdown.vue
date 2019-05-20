<script>
import { debug } from 'util';
export default {
  name: 'i-dropdown',
  props: {
    trigger: {
      type: String,
      default: 'click'
    }
  },
  data () {
    return {
      triggerElm: ''
    }
  },
  mounted() {
    this.initEvent()
  },
  methods: {
    initEvent() {
      let { trigger, show, hide, handleClick, splitButton, handleTriggerKeyDown, handleItemKeyDown } = this
      this.triggerElm = splitButton
        ? this.$refs.trigger.$el
        : this.$slots.default[0].elm

      let dropdownElm = this.dropdownElm = this.$slots.dropdown[0].elm

      this.triggerElm.addEventListener('keydown', handleTriggerKeyDown) // triggerElm keydown
      dropdownElm.addEventListener('keydown', handleItemKeyDown, true) // item keydown
      // 控制自定义元素的样式
      if (!splitButton) {
        this.triggerElm.addEventListener('focus', () => {
          this.focusing = true
        });
        this.triggerElm.addEventListener('blur', () => {
          this.focusing = false
        });
        this.triggerElm.addEventListener('click', () => {
          this.focusing = false
        });
      }
      if (trigger === 'hover') {
        this.triggerElm.addEventListener('mouseenter', show)
        this.triggerElm.addEventListener('mouseleave', hide)
        dropdownElm.addEventListener('mouseenter', show)
        dropdownElm.addEventListener('mouseleave', hide)
      } else if (trigger === 'click') {
        this.triggerElm.addEventListener('click', handleClick)
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
