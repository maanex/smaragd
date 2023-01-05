<template>
  <div smaragd-box :data-spacing="spacing">
    <Layout v-if="layout" :name="layout" :spacing="layoutSpacing || spacing">
      <slot />
    </Layout>
    <slot v-else />
  </div>
</template>

<script setup>
const { spacing, layout } = defineProps({
  spacing: {
    type: String,
    default: 'regular'
  },
  layout: {
    type: String,
    default: ''
  },
  layoutSpacing: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss">
[smaragd-box] {
  &[data-spacing="regular"] { --space: var(--spacing-regular); }
  &[data-spacing="tight"] { --space: var(--spacing-tight); }
  &[data-spacing="loose"] { --space: var(--spacing-loose); }
  &[data-spacing="none"] { --space: 0; }

  padding: var(--space);
  border-radius: var(--br-regular);
  border: var(--bw) solid var(--color-border);
}
</style>
