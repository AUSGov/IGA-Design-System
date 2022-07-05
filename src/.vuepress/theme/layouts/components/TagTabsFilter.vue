<template>
  <nav class="filters">
    <div class="title-wrapper-container">
      <span class="title-container border-end border-2 lead">Entities</span>
    </div>
    <div class="nav-group">
      <ul class="nav nav-tabs heading-extra-small">
        <li class="nav-item">
          <a aria-current="page" href="#">Anti-Dumping Commission</a>
        </li>
        <li class="nav-item">
          <a aria-current="page" href="#">Anti-Dumping Review Panel</a>
        </li>
        <li class="nav-item">
          <a aria-current="page" href="#">Ausindustry</a>
        </li>
        <li class="nav-item">
          <a aria-current="page" href="#">Australian Industry Participation Authority</a>
        </li>
        <li class="nav-item">
          <a aria-current="page" href="#">Australian SKA Office</a>
        </li>
        <li class="nav-item">
          <a aria-current="page" href="#">Australian SKA Office</a>
        </li>
      </ul>
    </div>
    <div class="icon-container">
      <span class="icon" v-html="chevronForward"></span>
    </div>
  </nav>
  <nav class="filters mb-5">
    <div class="title-wrapper-container">
      <span class="title-container border-end border-2 lead">Topics</span>
    </div>
    <div class="nav-group">
      <ul class="nav nav-tabs heading-extra-small">
        <li class="nav-item">
          <a aria-current="page" href="#">Business</a>
        </li>
        <li class="nav-item">
          <a aria-current="page" href="#">Building and construction</a>
        </li>
        <li class="nav-item">
          <a aria-current="page" href="#">Corporate</a>
        </li>
        <li class="nav-item">
          <a aria-current="page" href="#">Emissions reductions</a>
        </li>
        <li class="nav-item">
          <a aria-current="page" href="#">Energy</a>
        </li>
        <li class="nav-item">
          <a aria-current="page" href="#">Government to Government</a>
        </li>
        <li class="nav-item">
          <a aria-current="page" href="#">Manufacturing</a>
        </li>
        <li class="nav-item">
          <a aria-current="page" href="#">Manufacturing</a>
        </li>
      </ul>
    </div>
    <div class="icon-container">
      <span class="icon" v-html="chevronForward"></span>
    </div>
  </nav>
</template>
<script setup>
  import chevronForward from '../../../public/icons/chevron-forward.svg?raw'
</script>