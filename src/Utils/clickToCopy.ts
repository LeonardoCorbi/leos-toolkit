export const handleClickToCopy = (target: string | number): void => {
  navigator.clipboard.writeText(String(target));
};
