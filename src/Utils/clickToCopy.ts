export const handleClickToCopy = (hex: string): void => {
  navigator.clipboard.writeText(hex);
};
