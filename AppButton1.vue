<template>
  <button
    class="uk-button uk-button-secondary"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  name: 'AppButton1',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>



