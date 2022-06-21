<template>
  <CodeDemo :formConfig="formConfig">
    <template #preview="slotProps"><a href="#" :class="linkClass" @click.prevent="clickChild">This is a link {{ counter }}<br> slotProps:{{ slotProps }}</a></template>
  </CodeDemo>
</template>
<script>
import CodeDemo from './components/CodeDemo.vue'

export default {
  components: {
    CodeDemo,

  },
  data () {
    return {
      counter: 0,
      formConfig: [
        {
          label: 'Variation',
          key: 'variation',
          type: 'select',
          options: [
            {
              key: 'linkPrimary',
              label: 'Primary',
              value: 'link-primary'
            },
            {
              key: 'linkSecondary',
              label: 'Secondary',
              value: 'link-secondary'
            }
          ]
        },
        {
          label: 'Type',
          key: 'type',
          type: 'radio',
          options: [
            {
              key: 'internal',
              label: 'Internal',
              value: 'internal'
            },
            {
              key: 'external',
              label: 'External',
              value: 'external'
            }
          ]
        },
        {
          label: 'Type',
          type: 'checkbox',
          options: [
            {
              key: 'internal',
              label: 'Internal',
              value: 'internal'
            },
            {
              key: 'external',
              label: 'External',
              value: 'external'
            }
          ]
        }
      ]
    }
  },
  computed: {
    linkClass () {
      return 'link-' + this.counter
    },
    computedCounter () {
      return this.counter
    }
  },
  methods: {
    clickChild (e) {
      console.log('click child', e)
      this.counter++
      this.$emit('click', e)
    }
  }
}
</script>
