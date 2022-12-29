<template>
  <div
    smaragd-page
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
[smaragd-page] {
  margin: auto; // TODO don't do this here, use nuxt layouts
  width: calc(100% - 2 * var(--spacing-regular));
  max-width: var(--spacing-page-width);
  padding: var(--spacing-regular) 0;
  display: grid;
  gap: var(--spacing-regular);
  box-sizing: border-box;
  grid-template-columns: 1fr;
}
</style>
