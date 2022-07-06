<template>
  <div class="blockquote">
    <div class="blockquote-content" :class="classes">
      <blockquote>
        {{ content }}
      </blockquote>
      <cite class="citation">{{ citation }}</cite>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    content: {
      type: String,
      default: '“It’s good to see lots of improvements with technology, but the community are not educated about new types of accessible toilets.  I have never been in one before, and I think that other deafblind people might be in the same situation. There’s no education about the new accessibility.”\n'
    },
    citation: {
      type: String,
      default: '- Attribution'
    },
    classes: {
      type: String,
      default: null
    }
  })
</script>