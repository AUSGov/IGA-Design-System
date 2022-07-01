<template>
<CodePreview :formConfig="formConfig" @form-data-changed="formDataChanged">
<template v-slot="slotProps">
<pre>

<button class="btn" :class="btnClass">Button</button>

</pre>
</template>
</CodePreview>
</template>
<script setup>
import { ref, computed } from 'vue'
import CodePreview from './code-preview/Index.vue'

const formConfig = [
  {
    label: 'Variation',
    id: 'variation',
    type: 'select',
    options: [
      {
        label: 'Primary',
        value: 'btn-primary'
      },
      {
        label: 'Ghost',
        value: 'btn-outline-primary'
      }
    ]
  },
  {
    label: 'Size',
    id: 'size',
    type: 'radio',
    options: [
      // {
      //   label: 'Large',
      //   value: 'btn-lg'
      // },
      {
        label: 'Default',
        value: '',
        checked: true
      },
      {
        label: 'Small',
        value: 'btn-sm'
      }
    ]
  },
  {
    label: 'Disabled',
    id: 'disabledBtn',
    type: 'checkbox',
    options: [
      {
        label: 'Disabled',
        value: 'disabled'
      }
    ]
  }
]
const formData = ref({})

const btnClass = computed(() => {
  const classes = []
  if (typeof formData.value.variation !== 'undefined') {
    classes.push(formData.value.variation)
  }
  if (typeof formData.value.size !== 'undefined') {
    classes.push(formData.value.size)
  }
  if (typeof formData.value.disabledBtn !== 'undefined') {
    Object.keys(formData.value.disabledBtn).forEach(el => {
      classes.push(formData.value.disabledBtn[el])
    })
  }
  return classes.join(' ')
})

const formDataChanged = (formDataExternal) => {
  formData.value = formDataExternal
}
</script>
