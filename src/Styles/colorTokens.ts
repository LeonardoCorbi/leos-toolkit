export const core = {
  primary: '#75CEFA',
  primaryHover: '#2eb4f7',
  secondary: '#FF79C6',
  secondaryHover: '#ff2fa5',
  success: '#3DD780',
  warn: '#DA9E64',
  error: '#ff3639',

  white: '#E1E1E6',
  lightGray: '#B1B1B6',
  bgGray1: '#1c1c1c',
  bgGray2: '#0c0c0c',

  pink: '#FF79C6',
  purple: '#988BC7',
  cyan: '#75CEFA',
  green: '#3DD780',
  orange: '#DA9E64',
};

export type ColorsType = keyof Partial<typeof core>;

export const button = {
  background: {
    primary: core.primary,
    hoverPrimary: core.primaryHover,
    secondary: core.secondary,
    hoverSecondary: core.secondaryHover,
    disabled: core.lightGray,
  },
  color: {
    primary: core.bgGray2,
    secondary: core.white,
  },
  border: {
    primary: core.lightGray,
  },
};

export const font = {
  black: core.bgGray2,
  white: core.white,
  pink: core.pink,
};
