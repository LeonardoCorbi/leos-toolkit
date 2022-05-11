import { button } from '../Styles/colorTokens';

// Components

// Buttons
export type ButtonTypes = Partial<typeof button>;
export type ButtonBackgroundType = keyof ButtonTypes['background'];
export type ButtonColorType = keyof ButtonTypes['color'];
export type ButtonBorderType = keyof ButtonTypes['border'];
