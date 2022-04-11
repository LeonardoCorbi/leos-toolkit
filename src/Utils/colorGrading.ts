import hsl from 'hsl-to-hex';
import { colord } from 'colord';

export const lighten = (hex: string, distance: number) => {
  const { h, s, l } = colord(hex).toHsl();
  const lightenReason = +((99 - l) / 500).toFixed(4);
  return hsl(h, s, l + (distance * lightenReason));
};

export const darken = (hex: string, distance: number) => {
  const { h, s, l } = colord(hex).toHsl();
  const darkenReason = +(l / 499).toFixed(4);
  return hsl(h, s, l - (distance * darkenReason));
};
