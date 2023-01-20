<template>
  <div
    smaragd-button
    :data-disabled="!!disabled"
  >
    <button
      v-if="!href"
      :data-color="color"
      :data-lite="lite"
      :data-text="!!text"
      :data-icon="!!icon"
      :style="style"
      tabindex="0"
      @click.self="e => $emit('click', e)"
      @keydown.enter.self="e => $emit('click', e)"
    >
      <div class="inner">
        <Icon
          v-if="icon"
          class="visual"
          :name="icon"
        />
        <span v-if="text" v-text="text" />
      </div>
    </button>
    <NuxtLink
      v-else
      :data-color="color"
      :data-lite="lite"
      :data-text="!!text"
      :data-icon="!!icon"
      :style="style"
      tabindex="0"
    >
      <div class="inner">
        <Icon
          v-if="icon"
          class="visual"
          :name="icon"
        />
        <span v-if="text" v-text="text" />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { text, color, lite, img, icon, imgcrop, disabled, overflow } = defineProps({
  text: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'primary'
  },
  lite: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    required: false
  },
  overflow: {
    /** { text: string, href?: string, click?: func } */
    type: Array,
    default: () => undefined
  }
})

const style = computed(() => ({
  '--color': (color.startsWith('#') || color.includes('('))
    ? color
    : `var(--theme-${color})`,
  '--color-hov': (color.startsWith('#') || color.includes('('))
    ? color
    : `var(--theme-${color}-hov)`,
  '--color-contrast': (color.startsWith('#') || color.includes('('))
    ? 'var(--color-major)'
    : `var(--theme-${color}-contrast)`
}))
</script>

<style scoped lang="scss">
[smaragd-button] {
  display: inline-flex;
  user-select: none;

  &[data-disabled=true] {
    pointer-events: none;
    cursor: not-allowed;
    opacity: .5;
  }

  button, a {
    // @include a11y-hover;

    box-sizing: border-box;
    flex-grow: 1;
    height: var(--spacing-content-height);
    padding: 0 var(--spacing-regular);
    color: var(--color-contrast);
    cursor: pointer;
    border-radius: var(--br-regular);
    outline: none;
    border: none;
    transition: background-color .3s ease;

    * { transition: color .1s ease; }

    &[data-text=true] .visual {
      margin-right: var(--spacing-regular);
    }

    .inner {
      display: flex;
      align-items: center;
      height: 100%;
    }

    &[data-img=true] {
      padding-left: var(--spacing-regular);
      &[text] { padding-right: var(--spacing-loose); }
      &:not([text]) { padding-right: var(--spacing-regular); }
    }

    &[data-icon=true] {
      padding-left: var(--spacing-loose);
      &[text] { padding-right: var(--spacing-loose); }
      &:not([text]) { padding-right: var(--spacing-loose); }
    }

    &[data-lite=true] {
      margin: 0 calc(-1 * var(--spacing-regular));
      color: var(--color);
      box-shadow: none;
    }

    &:not([data-lite=true]) {
      background-color: var(--color);

      &:hover { background-color: var(--color-hov); }
    }
  }

  .icon {
    width: 16pt;
    height: 16pt;
    color: inherit;
  }

  span {
    flex-grow: 1;
    font-family: var(--font-major);
    font-size: 12pt;
    color: inherit;
    text-align: center;
  }

  img {
    width: var(--spacing-content-height);
    height: var(--spacing-content-height);

    &[imgcrop="round"] { border-radius: 99pt; }
    &[imgcrop="square"] { border-radius: 4pt; }
  } 
}
</style>
