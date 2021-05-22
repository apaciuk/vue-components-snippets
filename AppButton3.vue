<template>
  <button
    class="uk-button uk-button-default"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  name: 'AppButton3',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>