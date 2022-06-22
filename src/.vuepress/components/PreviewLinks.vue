<template>
<CodePreview :formConfig="formConfig" :changePreview="changePreview">
<template v-slot="slotProps">
<pre>


<ul>
  <li>
    <a href="#" :class="linkClass" @click.prevent="clickChild">This is a link {{ counter }}</a>
  </li>
</ul>


</pre>
</template>
</CodePreview>
</template>
<script>
import CodePreview from './code-preview/Index.vue'

export default {
  components: {
    CodePreview
  },
  data () {
    return {
      counter: 0,
      formConfig: [
        {
          label: 'Variation',
          key: 'variation',
          slug: 'variation',
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
          key: 'type-radio',
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
          key: 'type-check',
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
      ],
      changePreview: 0
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
      this.changePreview++
      this.counter++
      this.$emit('click', e)
    }
  }
}
</script>
