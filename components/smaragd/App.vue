<template>
  <div id="smaragd-app" :style="style">
    <slot />
  </div>
</template>

<script setup>
const { colors, spacing } = useAppConfig().smaragd

const style = {
  '--color-primary': colors.primary,
  '--color-primary-hov': colors.primaryHov,
  '--color-secondary': colors.secondary,
  '--color-secondary-hov': colors.secondaryHov,
  '--spacing-regular': spacing.regular,
  '--spacing-tight': spacing.tight,
  '--spacing-loose': spacing.loose,
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}
</style>
