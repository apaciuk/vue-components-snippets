<template>
  <button
    class="uk-button uk-button-danger"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  name: 'AppButton2',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>