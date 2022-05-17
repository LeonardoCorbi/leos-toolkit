import styled from 'styled-components';
import { buttonColors } from '../../Styles/color.tokens';
import { ButtonBackgroundType, ButtonColorType } from '../../Types/tokens';

interface IContainer {
  background: ButtonBackgroundType;
  color: ButtonColorType;
}

export const Container = styled.div<IContainer>`
  button {
    padding: 16px 24px;
    background-color: ${({ background }) => buttonColors.background[background]};
    color: ${({ color }) => buttonColors.color[color]};

    border-radius: 8px;
    cursor: pointer;
  }
`;
