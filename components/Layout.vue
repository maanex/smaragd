<template>
  <div
    smaragd-layout
    :data-name="name"
    :data-spacing="spacing"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: 'flow'
  },
  /**
   * Allowed options are:
   * * regular
   * * tight
   * * loose
   */
  spacing: {
    type: String,
    default: 'regular'
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

  @for $i from 1 through 4 {
    &[data-name="#{$i}a"] { grid-template-columns: #{$i*1fr} auto; }

    @for $j from 1 through 4 {
      &[data-name="#{$i}#{$j}"] { grid-template-columns: #{$i*1fr} #{$j*1fr}; }
      &[data-name="#{$i}#{$j}a"] { grid-template-columns: #{$i*1fr} #{$j*1fr} auto; }

      @for $k from 1 through 4 {
        &[data-name="#{$i}#{$j}#{$k}"] { grid-template-columns: #{$i*1fr} #{$j*1fr} #{$k*1fr}; }
      }
    }
  }

  // @media screen and (max-width: $res-tablet-width) {
  //   &[data-name="2static"] {
  //     grid-template-columns: 1fr;
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
