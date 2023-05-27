<template>
  <h3>S.I.M.</h3>
</template>

<script setup>
const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  },
  width: {
    type: [String, Number],
    default: "174"
  },
  height: {
    type: [String, Number],
    default: "174"
  },
})
</script>
