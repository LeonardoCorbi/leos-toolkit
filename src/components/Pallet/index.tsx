/* eslint-disable react/require-default-props */
import React from 'react';
import { handleClickToCopy } from '../../Utils/clickToCopy';
import { getWCAG, IWCAG } from '../../Utils/wcagColorChecker';
import { ColorBox, Container } from './styles';

interface IPallet {
  hex: string;
  index: number;
  wcag?: IWCAG[];
  range?: number;
}

const Pallet = ({
  hex,
  index,
  wcag,
  range,
}: IPallet) => (
  <Container>
    <ColorBox
      color={hex}
      index={index}
      onClick={() => handleClickToCopy(hex)}
    >
      <span>{`${index + 1}00`}</span>
      <p onClick={() => handleClickToCopy(hex)}>
        {hex}
      </p>
    </ColorBox>
    {
      (wcag && range) && (
        <ul style={{ marginTop: 54 }}>
          {wcag.reverse().map(({ WCAG_AA, WCAG_AAA }, pos) => {
            const variants = ['12', '16', '32'];
            return (
              <li style={{ color: range > 50 ? 'black' : 'white' }}>
                {`${variants[pos]}: `}
                {getWCAG(WCAG_AAA, WCAG_AA)}
              </li>
            );
          })}
        </ul>
      )
    }
  </Container>
);

export default Pallet;
