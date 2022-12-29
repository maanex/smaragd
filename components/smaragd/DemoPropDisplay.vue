<template>
  <div class="smaragd-demo-prop-display">
    <div class="prop header">
      <span class="name">Name</span>
      <span class="desc">Description</span>
      <span class="req">Required?</span>
      <span class="type">Type/Allowed Options</span>
    </div>
    <div v-for="prop,i of props" :key="i" class="prop">
      <span class="name" v-text="prop.name" />
      <span class="desc" v-text="prop.desc" />
      <span class="req" v-text="prop.required" />
      <span v-if="typeof prop.type === 'string'" class="type" v-text="prop.type" />
      <div v-else>
        <span v-for="opt,j of prop.type" :key="j" class="opt" v-text="opt" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { props } = defineProps({
  props: {
    type: Array,
    default: []
  }
})
</script>

<style scoped lang="scss">
.smaragd-demo-prop-display {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-tight);
  border: 1px solid var(--color-border);
  border-radius: var(--br-regular);
  padding: var(--spacing-tight);

  .prop {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 4fr;
    gap: 10pt;
    padding: var(--spacing-tight);
    border-radius: var(--br-tight);

    &:nth-child(2n) {
      background-color: var(--bg-dark);
    }

    span {
      font-family: var(--font-regular);
      font-size: 11pt;
      color: #000000;
    }

    &.header span {
      font-family: var(--font-major);
      color: var(--color-sub);
    }

    div {
      display: flex;
      flex-direction: column;

      span::before {
        content: '• '
      }
    }
  }
}
</style>
