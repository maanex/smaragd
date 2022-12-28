export default defineAppConfig({
  smaragd: {
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
    }
  }
})

//

type CssAbsoluteUnit = 'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc';
type CssRelativeUnit = 'em' | 'ex' | 'ch' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';
type CssUnit = CssAbsoluteUnit | CssRelativeUnit
type CssUnitWithValue = `${number}${CssUnit}`

type SmaragdConfig = {
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
}

declare module '@nuxt/schema' {
  interface AppConfigInput {
    smaragd?: SmaragdConfig
  }
}
