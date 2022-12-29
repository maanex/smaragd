export default defineAppConfig({
  smaragd: {
    opts: {
      styleDefaultTags: true,
      loadDefaultFonts: true
    },
    colors: {
      primary: '#FF0000',
      primaryHov: '#BB0000',
      secondary: '#00FF00',
      secondaryHov: '#00BB00',
    },
    spacing: {
      regular: '15pt',
      tight: '8pt',
      loose: '30pt'
    },
    fonts: {
      header: '"Montserrat 900", "Roboto", sans-serif',
      major: '"Montserrat 600", "Roboto", sans-serif',
      regular: '"Montserrat 400", "Roboto", sans-serif',
      minor: '"Montserrat 400", "Roboto", sans-serif',
      sub: '"Montserrat 400", "Roboto", sans-serif'
    }
  }
})

//

type CssAbsoluteUnit = 'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc';
type CssRelativeUnit = 'em' | 'ex' | 'ch' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';
type CssUnit = CssAbsoluteUnit | CssRelativeUnit
type CssUnitWithValue = `${number}${CssUnit}`

type SmaragdConfig = {
  /** General options on how smaragd should behave */
  opts?: {
    /** allows smaragd to override default html tags like <h1> or <span> */
    styleDefaultTags?: boolean
    /** lets smaragd download a set of default fonts from google fonts. This is not recommended for production use as serving local fonts is prefered. */
    loadDefaultFonts?: boolean
  }
  /** Theming options */
  colors?: {
    primary?: string
    primaryHov?: string
    secondary?: string
    secondaryHov?: string
  }
  /** Spacing options */
  spacing?: {
    regular?: CssUnitWithValue
    tight?: CssUnitWithValue
    loose?: CssUnitWithValue
  }
  /** Font options */
  fonts?: {
    /** fonts for h1, h2 */
    header?: string
    /** fonts for major text like h3 or emp */
    major?: string
    /** fonts for regular text */
    regular?: string
    /** fonts for minor text */
    minor?: string
    /** fonts for subtext elements */
    sub?: string
  }
}

declare module '@nuxt/schema' {
  interface AppConfigInput {
    smaragd?: SmaragdConfig
  }
}
