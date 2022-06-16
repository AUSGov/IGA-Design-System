<template>
  <CodeDemo>
    <slot name="preview"><a href="#">This is a link</a></slot>
    <slot name="variations">Stuff</slot>
    <slot name="code"></slot>
  </CodeDemo>
</template>
<script>
import CodeDemo from './components/CodeDemo.vue'

export default {
  components: { CodeDemo },
  data () {
    return {}
  },
  methods: {}
}
</script>
