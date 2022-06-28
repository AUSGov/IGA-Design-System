<template>
<CodePreview :formConfig="formConfig" @form-data-changed="formDataChanged">
<template v-slot="slotProps">
<pre>


<ul>
  <li>
    <a href="#" :class="linkClass" @click.prevent="clickChild">This is a link {{ counter }}<br>{{ linkClass }}</a>
  </li>
</ul>


</pre>
</template>
</CodePreview>
</template>
<script setup>
import { ref, computed } from 'vue'
import CodePreview from './code-preview/Index.vue'

const formConfig = ref([
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
    label: 'Type Radio',
    key: 'internal',
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
    label: 'Type Checkbox',
    key: 'external',
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
])
const changePreview = ref(0)
const counter = ref(0)
const formData = ref({})

const linkClass = computed(() => {
  console.log(formData.value)
  const classes = ['link-' + counter.value]
  if(typeof formData.value.variation !== 'undefined') {
    classes.push('btn-' + formData.value.variation)
  }
  if(typeof formData.value.internal !== 'undefined') {
    classes.push('btn-' + formData.value.internal)
  }
  if(typeof formData.value.external !== 'undefined') {
    classes.push('btn-' + formData.value.external)
  }
  changePreview.value++
  return classes.join(' ')
})

const clickChild = (e) => {
  console.log('click child', e)
  counter.value++
}
const formDataChanged = (formDataExternal) => {
  console.log('formDataChanged', formDataExternal)
  formData.value = formDataExternal
}
</script>
