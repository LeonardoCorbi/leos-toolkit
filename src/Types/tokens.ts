import { buttonColors } from '../Styles/color.tokens';

// Components

// Buttons
export type ButtonTypes = Partial<typeof buttonColors>;
export type ButtonBackgroundType = keyof ButtonTypes['background'];
export type ButtonColorType = keyof ButtonTypes['color'];
export type ButtonBorderType = keyof ButtonTypes['border'];
