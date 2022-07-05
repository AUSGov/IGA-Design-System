<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#" v-html="home"></a></li>
      <li class="breadcrumb-item"><a href="#">Breadcrumbs</a></li>
      <li class="breadcrumb-item active" aria-current="page">Breadcrumbs</li>
    </ol>
  </nav>
</template>

<script>
  import home from '../../../public/icons/home.svg?raw'

  export default {
    data () {
      return {
        home
      }
    }
  }
</script>