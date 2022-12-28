<template>
  <div smaragd-spacer :style="{ height }" />
</template>

<script setup>
const { size } = defineProps({
  size: {
    type: [ Number, String ],
    default: 'regular'
  }
})
const height = (typeof size === 'string')
  ? `var(--spacing-${size})`
  : `${size}pt`
</script>

<style scoped lang="scss">
[smaragd-spacer] {
  display: block;
  flex-grow: 10;
}
</style>
