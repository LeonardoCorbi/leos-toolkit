import hsl from 'hsl-to-hex';
import { colord } from 'colord';
import wcc from './wcagColorChecker';

export const lighten = (hex: string, distance: number): string => {
  const { h, s, l } = colord(hex).toHsl();
  const lightenReason = +((99 - l) / 500).toFixed(4);
  return hsl(h, s, l + (distance * lightenReason));
};

export const darken = (hex: string, distance: number): string => {
  const { h, s, l } = colord(hex).toHsl();
  const darkenReason = +(l / 499).toFixed(4);
  return hsl(h, s, l - (distance * darkenReason));
};

export const getPallet = (mainColor: string, bgColor?: string) => {
  if (bgColor) {
    return ([
      [lighten(mainColor, 400), wcc(lighten(mainColor, 400), bgColor)],
      [lighten(mainColor, 300), wcc(lighten(mainColor, 300), bgColor)],
      [lighten(mainColor, 200), wcc(lighten(mainColor, 200), bgColor)],
      [lighten(mainColor, 100), wcc(lighten(mainColor, 100), bgColor)],
      [mainColor, wcc(mainColor, bgColor)],
      [darken(mainColor, 100), wcc(darken(mainColor, 100), bgColor)],
      [darken(mainColor, 200), wcc(darken(mainColor, 200), bgColor)],
      [darken(mainColor, 300), wcc(darken(mainColor, 300), bgColor)],
      [darken(mainColor, 400), wcc(darken(mainColor, 400), bgColor)],
    ]);
  }

  return ([
    lighten(mainColor, 400),
    lighten(mainColor, 300),
    lighten(mainColor, 200),
    lighten(mainColor, 100),
    mainColor,
    darken(mainColor, 100),
    darken(mainColor, 200),
    darken(mainColor, 300),
    darken(mainColor, 400),
  ]);
};
