<template>
  <form id="form" class="form form-inputs" novalidate>
    <div class="row mb-4 input-group has-validation">
      <div class="col-md-6 col-lg-12 col-xl-6">
        <DoiTextInput />
      </div>
      <div class="col-md-6 col-lg-12 col-xl-6">
        <DoiSelectBox />
      </div>
      <div class="d-flex col-md-6 col-lg-12 col-xl-6">
        <div class="me-4">
          <DoiRadio :checked="false" />
        </div>
        <div>
          <DoiRadio />
        </div>
      </div>
    </div>
    <div class="row mb-4 input-group has-validation">
      <div class="col-md-6 col-lg-12 col-xl-6">
        <DoiTextInput input-classes="is-invalid" />
      </div>
      <div class="col-md-6 col-lg-12 col-xl-6">
        <DoiSelectBox select-classes="is-invalid" />
      </div>
      <div class="d-flex col-md-6 col-lg-12 col-xl-6">
        <div class="me-4">
          <DoiCheckbox :checked="false" />
        </div>
        <div>
          <DoiCheckbox />
        </div>
      </div>
    </div>
    <div class="row mb-4 input-group has-validation">
      <div class="col-md-6 col-lg-12 col-xl-6">
        <DoiTextInput />
      </div>
      <div class="col-md-6 col-lg-12 col-xl-6">
        <DoiSelectBox />
      </div>
      <div class="col-md-6 col-lg-12 col-xl-6">
        <DoiSlider />
      </div>
    </div>
    <div class="row mb-4 input-group has-validation">
      <div class="col-md-6 col-lg-12 col-xl-6">
        <DoiTextInput classes="focus" />
      </div>
      <div class="col-md-6 col-lg-12 col-xl-6">
        <DoiSelectBox />
      </div>
    </div>
  </form>
</template>
<script setup>
  import DoiTextInput from "../theme/layouts/components/DoiTextInput.vue"
  import DoiSelectBox from "../theme/layouts/components/DoiSelectBox.vue"
  import DoiRadio from "../theme/layouts/components/DoiRadio.vue"
  import DoiCheckbox from "../theme/layouts/components/DoiCheckbox.vue"
  import DoiSlider from "../theme/layouts/components/DoiSlider.vue"
</script>