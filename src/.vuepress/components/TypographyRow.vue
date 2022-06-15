<template>
  <tr class="typography-row">
    <td class="row-container">
      <slot name="styleContent"></slot>
    </td>
    <td class="row-container">
      <div class="property-container">
        <div class="property-content">Font family: {{ fontFamily }}</div>
        <div class="property-content">Font weight: {{ fontWeight }}</div>
        <div class="property-content">Size: {{ size }}</div>
        <div class="property-content">Line height: {{ lineHeight }}</div>
        <div v-if="letterSpacing" class="property-content">Letter spacing: {{ letterSpacing }}</div>
        <div v-if="textAlignment" class="property-content">Text alignment: {{ textAlignment }}</div>
        <div v-if="discColor" class="property-content">Disc colour: {{ discColor }}</div>
        <div v-if="numberColor" class="property-content">Number colour: {{ numberColor }}</div>
      </div>
    </td>
  </tr>
</template>
<script>
  export default {
    props: {
      fontFamily: {
        required: true,
        type: String
      },
      fontWeight: {
        required: true,
        type: String
      },
      size: {
        required: true,
        type: String
      },
      lineHeight: {
        required: true,
        type: String
      },
      letterSpacing: {
        type: String
      },
      textAlignment: {
        type: String
      },
      discColor: {
        type: String
      },
      numberColor: {
        type: String
      }
    }
  }
</script>