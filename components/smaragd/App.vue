<template>
  <div
    id="smaragd-app"
    :style="style"
    :smaragd-styledef="styleDefaultTags"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  config: {
    type: Object,
    required: false
  }
})

const { opts, colors, spacing, fonts, look } = props.config || useAppConfig().smaragd

const style = {
  '--color-primary': colors.primary,
  '--color-primary-hov': colors.primaryHov,
  '--color-secondary': colors.secondary,
  '--color-secondary-hov': colors.secondaryHov,
  '--color-header': colors.header,
  '--color-major': colors.major,
  '--color-regular': colors.regular,
  '--color-minor': colors.minor,
  '--color-sub': colors.sub,
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
  '--font-header': fonts.header,
  '--font-major': fonts.major,
  '--font-regular': fonts.regular,
  '--font-minor': fonts.minor,
  '--font-sub': fonts.sub,
  '--br-regular': look.borderRadiusRegular,
  '--br-tight': look.borderRadiusTight,
  '--br-loose': look.borderRadiusLoose,
}

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
  }

  h2 {
    font-size: 21pt;
    font-family: var(--font-header);
  }

  h3 {
    font-size: 15pt;
    font-family: var(--font-major);
  }

  p {
    font-size: 11pt;
    font-family: var(--font-regular);
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
