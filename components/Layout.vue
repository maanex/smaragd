<template>
  <div
    smaragd-layout
    :style="style"
    :data-name="name ?? 'flow'"
    :data-spacing="spacing ?? 'regular'"
  >
    <slot />
  </div>
</template>

<script setup lang=ts>
type DynamicLayoutLetter = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'a'

const { name } = defineProps<{
  name?: 'padded'
    | 'inline' | 'center'
    | 'left' | 'right'
    | 'dynamic' | 'flow'
    | `${DynamicLayoutLetter}`
    | `${DynamicLayoutLetter}${DynamicLayoutLetter}`
    | `${DynamicLayoutLetter}${DynamicLayoutLetter}${DynamicLayoutLetter}`
    | `${DynamicLayoutLetter}${DynamicLayoutLetter}${DynamicLayoutLetter}${DynamicLayoutLetter}`
  spacing?: 'regular' | 'tight' | 'loose'
}>()

const style = computed(() => {
  if (!/^[1-9a]{2,7}$/.test(name)) return {}

  return {
    'grid-template-columns': name
      .split('')
      .map(n => (n === 'a') ? 'auto' : `${n}fr`)
      .join(' ')
  }
})
</script>

<style scoped lang="scss">
[smaragd-layout] {
  &[data-spacing="regular"] { --space: var(--spacing-regular); }
  &[data-spacing="tight"] { --space: var(--spacing-tight); }
  &[data-spacing="loose"] { --space: var(--spacing-loose); }
  &[data-spacing="none"] { --space: 0; }

  width: 100%;
  display: grid;
  gap: var(--space);
  box-sizing: border-box;

  &[data-name="padded"] {
    grid-template-columns: 1fr;
    padding: var(--space);
  }

  &[data-name="inline"] {
    display: flex;
    flex-wrap: wrap;
  }

  &[data-name="center"] {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  &[data-name="left"] {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
  }

  &[data-name="right"] {
    display: flex;
    justify-content: right;
    flex-wrap: wrap;
  }

  &[data-name="dynamic"] {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &[data-name="flow"] {
    display: grid;
    grid-template-columns: 1fr;
  }

  // @media screen and (max-width: $res-tablet-width) {
  //   &[data-name="2static"] {
  //     grid-template-columns: 1fr 1fr;
  //   }

  //   &[data-name="3static"] {
  //     grid-template-columns: 1fr 1fr;
  //   }

  //   &[data-name="4static"] {
  //     grid-template-columns: 1fr 1fr;
  //   }
  // }

  // @media screen and (max-width: $res-mobile-width) {
  //   &[data-name="2static"] {
  //     grid-template-columns: 1fr;
  //   }

  //   &[data-name="3static"] {
  //     grid-template-columns: 1fr;
  //   }

  //   &[data-name="4static"] {
  //     grid-template-columns: 1fr 1fr;
  //   }
  // }
}
</style>
