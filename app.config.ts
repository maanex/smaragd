export const SmaragdDefaultConfig: SmaragdConfig = {
  opts: {
    styleDefaultTags: true
  },
  colors: {
    primary: '#FF0000',
    primaryHov: '#BB0000',
    secondary: '#00FF00',
    secondaryHov: '#00BB00',
    header: '#000000',
    major: '#000000',
    regular: '#131313',
    minor: '#454545',
    sub: '#939393',
    border: '#dddddd',
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
    pageWidth: '600pt'
  },
  look: {
    borderRadiusRegular: '5pt',
    borderRadiusTight: '3pt',
    borderRadiusLoose: '10pt'
  },
  fonts: {
    header: '"SMARAGD-DEF Montserrat 900", "Roboto", sans-serif',
    major: '"SMARAGD-DEF Montserrat 600", "Roboto", sans-serif',
    regular: '"SMARAGD-DEF Montserrat 400", "Roboto", sans-serif',
    minor: '"SMARAGD-DEF Montserrat 400", "Roboto", sans-serif',
    sub: '"SMARAGD-DEF Montserrat 400", "Roboto", sans-serif'
  }
}

//

type CssAbsoluteUnit = 'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc';
type CssRelativeUnit = 'em' | 'ex' | 'ch' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';
type CssUnit = CssAbsoluteUnit | CssRelativeUnit
type CssUnitWithValue = `${number}${CssUnit}`

export type SmaragdConfig = {
  /** General options on how smaragd should behave */
  opts?: {
    /** allows smaragd to override default html tags like <h1> or <span> */
    styleDefaultTags?: boolean
  }
  /** Theming options */
  colors?: {
    /** theme color */
    primary?: string
    /** theme color, hover state */
    primaryHov?: string
    /** complementary color */
    secondary?: string
    /** complementary color, hover state */
    secondaryHov?: string
    /** text color for h1, h2 */
    header?: string
    /** text color for major text like h3 or emp */
    major?: string
    /** text color for regular text */
    regular?: string
    /** text color for minor text */
    minor?: string
    /** text color for subtext elements */
    sub?: string
    /** text color for borders */
    border?: string
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
  }
  /** Spacing options */
  spacing?: {
    regular?: CssUnitWithValue
    tight?: CssUnitWithValue
    loose?: CssUnitWithValue
    pageWidth?: CssUnitWithValue
  }
  /** Look and feel options */
  look?: {
    borderRadiusRegular?: CssUnitWithValue
    borderRadiusTight?: CssUnitWithValue
    borderRadiusLoose?: CssUnitWithValue
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

//

export default defineAppConfig({
  smaragd: SmaragdDefaultConfig
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    smaragd?: SmaragdConfig
  }
}
