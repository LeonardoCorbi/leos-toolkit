import ColorContrastChecker from 'color-contrast-checker';

export interface IWCAG {
  WCAG_AA : boolean;
  WCAG_AAA: boolean;
}

export const getWCAG = (AAA: boolean, AA: boolean) => {
  if (AAA && AA) return 'AAA, AA';
  if (AA) return 'AA';
  return 'X';
};

const wcc = (foreground: string, background: string): IWCAG[] => {
  const wcag = new ColorContrastChecker();
  if (foreground.length + background.length !== 14) return undefined;

  return wcag.checkPairs([
    {
      colorA: foreground,
      colorB: background,
      fontSize: 12,
    },
    {
      colorA: foreground,
      colorB: background,
      fontSize: 16,
    },
    {
      colorA: foreground,
      colorB: background,
      fontSize: 32,
    },
  ]) as IWCAG[];
};

export default wcc;
