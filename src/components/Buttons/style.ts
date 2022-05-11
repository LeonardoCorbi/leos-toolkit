import styled from 'styled-components';
import { button } from '../../Styles/colorTokens';
import { ButtonBackgroundType, ButtonColorType } from '../../Types/tokens';

interface IContainer {
  background: ButtonBackgroundType;
  color: ButtonColorType;
}

export const Container = styled.div<IContainer>`
  button {
    padding: 16px 24px;
    background-color: ${({ background }) => button.background[background]};
    color: ${({ color }) => button.color[color]};

    border-radius: 8px;
    cursor: pointer;
  }
`;
