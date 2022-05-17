export const core = {
  primary100: '#e0f4fe',
  primary200: '#c5eafd',
  primary300: '#aae1fc',
  primary400: '#90d7fb',
  primary500: '#75cefa',
  primary600: '#377EDA',
  primary700: '#0890d4',
  primary800: '#05608d',
  primary900: '#033046',

  secondary100: '#d5f6e3',
  secondary200: '#afefca',
  secondary300: '#88e7b1',
  secondary400: '#62df98',
  secondary500: '#3dd780',
  secondary600: '#25b764',
  secondary700: '#1c894b',
  secondary800: '#135b32',
  secondary900: '#092d19',

  tertiary100: '#cbc4dc',
  tertiary200: '#988BC7',
  tertiary300: '#695a95',
  tertiary400: '#42385e',
  tertiary500: '#1A1625',
  tertiary600: '#120F1D',
  tertiary700: '#100e17',
  tertiary800: '#0b090f',
  tertiary900: '#050508',

  quaternary100: '#ffe0f2',
  quaternary200: '#ffc7e7',
  quaternary300: '#ffaddc',
  quaternary400: '#ff94d1',
  quaternary500: '#ff79c6',
  quaternary600: '#ff2fa5',
  quaternary700: '#e20080',
  quaternary800: '#970055',
  quaternary900: '#4b002a',

  quinary100: '#f7e9dd',
  quinary200: '#efd6be',
  quinary300: '#e8c3a0',
  quinary400: '#e1af81',
  quinary500: '#da9e64',
  quinary600: '#cc7c31',
  quinary700: '#995d25',
  quinary800: '#663e19',
  quinary900: '#331f0c',

  gray100: '#f7f7f8',
  gray200: '#f1f1f3',
  gray300: '#ececef',
  gray400: '#e6e6ea',
  gray500: '#e1e1e6',
  gray600: '#afafbc',
  gray700: '#7d7d93',
  gray800: '#525263',
  gray900: '#292931',
};

export type ColorsType = keyof Partial<typeof core>;

export const semanticColors = {
  success: core.secondary500,
  warn: core.quinary500,
  error: '#ff3639',
};

export const buttonColors = {
  background: {
    primary: core.primary100,
    hoverPrimary: core.primary600,
    secondary: core.secondary500,
    hoverSecondary: core.secondary600,
    disabled: core.gray600,
  },
  color: {
    primary: core.gray900,
    secondary: core.gray500,
  },
  border: {
    primary: core.gray600,
  },
};

export const tabsColors = {
  background: {
    primary: core.tertiary600,
    primarySelected: core.tertiary500,
  },
  border: core.primary600,
};

export const fontColors = {
  black: core.tertiary800,
  white: core.gray500,
  pink: core.quaternary500,
};

export const miscColors = {
  textSelection: '#988BC7AA',
};
