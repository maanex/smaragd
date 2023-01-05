<template>
  <div
    id="smaragd-app"
    :style="style"
    :smaragd-styledef="styleDefaultTags"
    :key="key"
  >
    <slot />
  </div>
</template>

<script setup>
import { defu } from 'defu'

const props = defineProps({
  config: {
    type: Object,
    required: false
  }
})

const colorMode = useColorMode()
const appConf = useAppConfig().smaragd ?? {}
const key = useState(() => 0)
watch(colorMode, () => key.value++)
const mergedConfig = computed(() => defu(
  props.config ?? {},
  appConf.themes?.[colorMode.value] ?? {},
  appConf
))

const style = computed(() => {
  const { colors, spacing, fonts, look } = mergedConfig.value
  const out = {
    '--color-header': colors.textHeader,
    '--color-major': colors.textMajor,
    '--color-regular': colors.textRegular,
    '--color-minor': colors.textMinor,
    '--color-sub': colors.textSub,
    '--color-border': colors.border,
    '--bg-lighter': colors.backgroundLighter,
    '--bg-light': colors.backgroundLight,
    '--bg-regular': colors.backgroundRegular,
    '--bg-dark': colors.backgroundDark,
    '--bg-darker': colors.backgroundDarker,
    '--spacing-regular': spacing.regular,
    '--spacing-tight': spacing.tight,
    '--spacing-loose': spacing.loose,
    '--spacing-page-width': spacing.pageWidth,
    '--spacing-content-height': spacing.contentHeight,
    '--font-header': fonts.header,
    '--font-major': fonts.major,
    '--font-regular': fonts.regular,
    '--font-minor': fonts.minor,
    '--font-sub': fonts.sub,
    '--br-regular': look.borderRadiusRegular,
    '--br-tight': look.borderRadiusTight,
    '--br-loose': look.borderRadiusLoose,
    '--bw': look.borderWidth,
  }

  for (const customColor of Object.keys(colors)) {
    if (!customColor.startsWith('theme')) continue

    const name = customColor
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
    out[`--${name}`] = colors[customColor]
  }

  return out
})

const { opts } = mergedConfig.value
const styleDefaultTags = opts.styleDefaultTags
</script>

<!-- BASE STYLES -->
<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, span, p {
  padding: 0;
  margin: 0;
  line-height: 1em;
}
</style>

<!-- DEFAULT STYLE OVERRIDES -->
<style lang="scss">
[smaragd-styledef="true"] {
  & {
    background-color: var(--bg-regular);
    #__nuxt > & { min-height: 100vh; }
  }

  h1 {
    font-size: 29pt;
    font-family: var(--font-header);
    color: var(--color-header);
  }

  h2 {
    font-size: 21pt;
    font-family: var(--font-header);
    color: var(--color-header);
  }

  h3 {
    font-size: 15pt;
    font-family: var(--font-major);
    color: var(--color-major);
  }

  p {
    font-size: 11pt;
    font-family: var(--font-regular);
    color: var(--color-regular);
    line-height: 1.3em;
  }

  hr {
    width: 100%;
    display: block;
    border: none;
    height: 1px;
    background-color: var(--color-border);
  }
}
</style>

<!-- SMARAGD DEFAULT FONTS -->
<style lang="scss">
@font-face {
  font-family: "SMARAGD-DEF Montserrat 900";
  src: url('https://cdn.jsdelivr.net/gh/maanex/smaragd/.global/assets/Montserrat-ExtraBold.ttf') format('truetype');
}

@font-face {
  font-family: "SMARAGD-DEF Montserrat 600";
  src: url('https://cdn.jsdelivr.net/gh/maanex/smaragd/.global/assets/Montserrat-SemiBold.ttf') format('truetype');
}

@font-face {
  font-family: "SMARAGD-DEF Montserrat 400";
  src: url('https://cdn.jsdelivr.net/gh/maanex/smaragd/.global/assets/Montserrat-Regular.ttf') format('truetype');
}
</style>
