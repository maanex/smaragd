export const SmaragdDefaultConfig: SmaragdConfig = {
  opts: {
    styleDefaultTags: true
  },
  colors: {
    themePrimary: '#ff0000',
    themePrimaryHov: '#ff000099',
    themeSecondary: '#00ff00',
    themeSecondaryHov: '#00ff0099',
    border: '#dddddd',
    textHeader: '#000000',
    textMajor: '#000000',
    textRegular: '#131313',
    textMinor: '#454545',
    textSub: '#939393',
    backgroundLighter: '#ffffff',
    backgroundLight: '#fefefe',
    backgroundRegular: '#fdfdfd',
    backgroundDark: '#f5f5f5',
    backgroundDarker: '#ebebeb',
  },
  spacing: {
    regular: '15pt',
    tight: '5pt',
    loose: '30pt',
    pageWidth: '600pt',
    contentHeight: '30pt'
  },
  look: {
    borderRadiusRegular: '5pt',
    borderRadiusTight: '3pt',
    borderRadiusLoose: '10pt',
    borderWidth: '1px'
  },
  fonts: {
    header: '"SMARAGD-DEF Montserrat 900", "Roboto", sans-serif',
    major: '"SMARAGD-DEF Montserrat 600", "Roboto", sans-serif',
    regular: '"SMARAGD-DEF Montserrat 400", "Roboto", sans-serif',
    minor: '"SMARAGD-DEF Montserrat 400", "Roboto", sans-serif',
    sub: '"SMARAGD-DEF Montserrat 400", "Roboto", sans-serif'
  },
  themes: {}
}

//

type CssAbsoluteUnit = 'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc';
type CssRelativeUnit = 'em' | 'ex' | 'ch' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';
type CssUnit = CssAbsoluteUnit | CssRelativeUnit
type CssUnitWithValue = `${number}${CssUnit}`

export type BaseSmaragdConfig = {
  /** General options on how smaragd should behave */
  opts?: {
    /** allows smaragd to override default html tags like <h1> or <span> */
    styleDefaultTags?: boolean
  }
  /** Theming options */
  colors?: {
    /** text color for borders */
    border?: string
    /** text color for h1, h2 */
    textHeader?: string
    /** text color for major text like h3 or emp */
    textMajor?: string
    /** text color for regular text */
    textRegular?: string
    /** text color for minor text */
    textMinor?: string
    /** text color for subtext elements */
    textSub?: string
    /** lighter variant of the lighter background color */
    backgroundLighter?: string
    /** lighter variant of the background color */
    backgroundLight?: string
    /** regular page background color */
    backgroundRegular?: string
    /** darker variant of the background color */
    backgroundDark?: string
    /** darker variant of the darker background color */
    backgroundDarker?: string
  } & Record<`theme${string}`, string>
  /** Spacing options */
  spacing?: {
    regular?: CssUnitWithValue
    tight?: CssUnitWithValue
    loose?: CssUnitWithValue
    pageWidth?: CssUnitWithValue
    contentHeight?: CssUnitWithValue
  }
  /** Look and feel options */
  look?: {
    borderRadiusRegular?: CssUnitWithValue
    borderRadiusTight?: CssUnitWithValue
    borderRadiusLoose?: CssUnitWithValue
    borderWidth?: CssUnitWithValue
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

export type SmaragdConfig = BaseSmaragdConfig & {
  themes?: Record<string, BaseSmaragdConfig>
}

//

export default defineAppConfig({
  smaragd: SmaragdDefaultConfig
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    smaragd?: SmaragdConfig
  }
}
