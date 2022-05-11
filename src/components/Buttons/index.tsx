/* eslint-disable react/require-default-props */

import React from 'react';
import { ButtonBackgroundType, ButtonColorType } from '../../Types/tokens';
import { Container } from './style';

interface IButtonRoot extends IButton {
  background: ButtonBackgroundType;
  color: ButtonColorType;
}

interface IButton {
  label: string;
  onClick: () => any;
}

const ButtonRoot = ({
  label,
  onClick,
  background,
  color,
}: IButtonRoot) => (
  <Container background={background} color={color}>
    <button onClick={onClick} type="button">
      {label}
    </button>
  </Container>
);

export const ButtonPrimary = ({ label, onClick }: IButton) => (
  <ButtonRoot
    label={label}
    onClick={onClick}
    background="primary"
    color="primary"
  />
);

export const ButtonSecondary = ({ label, onClick }: IButton) => (
  <ButtonRoot
    label={label}
    onClick={onClick}
    background="secondary"
    color="primary"
  />
);
