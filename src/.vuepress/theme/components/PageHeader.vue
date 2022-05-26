<template>
  <div class="c-page-header">
    <div class="container-fluid">
      <div class="content">
        <h1>{{ $frontmatter.title }}</h1>
        <p v-if="$frontmatter.description" class="lead-text">{{ $frontmatter.description }}</p>
      </div>
    </div>
  </div>
</template>