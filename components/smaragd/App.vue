<template>
  <div
    id="smaragd-app"
    :style="style"
    :smaragd-styledef="styleDefaultTags"
    :smaragd-fontdef="loadDefaultFonts"
  >
    <slot />
  </div>
</template>

<script setup>
const { config } = defineProps({
  config: {
    type: Object,
    required: false
  }
})

const { opts, colors, spacing, fonts } = config || useAppConfig().smaragd

const style = {
  '--color-primary': colors.primary,
  '--color-primary-hov': colors.primaryHov,
  '--color-secondary': colors.secondary,
  '--color-secondary-hov': colors.secondaryHov,
  '--spacing-regular': spacing.regular,
  '--spacing-tight': spacing.tight,
  '--spacing-loose': spacing.loose,
  '--font-header': fonts.header,
  '--font-major': fonts.major,
  '--font-regular': fonts.regular,
  '--font-minor': fonts.minor,
  '--font-sub': fonts.sub,
}

const styleDefaultTags = opts.styleDefaultTags
const loadDefaultFonts = opts.loadDefaultFonts


let globalStyle = ''
if (loadDefaultFonts) {
  globalStyle += `
    @font-face {
      font-family: "Montserrat 900";
      src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
    }

    @font-face {
      font-family: "Montserrat 600";
      src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
    }

    @font-face {
      font-family: "Montserrat 400";
      src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
    }
  `
}

if (process.client && globalStyle) {
  const element = document.getElementById('smaragd-custom-css')
  if (element) element.remove()
  const head = document.head || document.getElementsByTagName('head')[0]
  const styleEl = document.createElement('style')
  head.appendChild(styleEl)
  styleEl.setAttribute('type', 'text/css')
  styleEl.setAttribute('id', 'smaragd-custom-css')
  styleEl.appendChild(document.createTextNode(globalStyle))
}
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
}
</style>

<!-- DEFAULT STYLE OVERRIDES -->
<style lang="scss">
[smaragd-styledef="true"] {
  h1 {
    font-size: 28pt;
    font-family: var(--font-header);
  }

}
</style>
