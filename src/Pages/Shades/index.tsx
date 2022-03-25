/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable object-shorthand */
/* eslint-disable operator-assignment */
/* eslint-disable no-shadow */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable indent */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-sequences */
/* eslint-disable eqeqeq */
/* eslint-disable default-case */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-template */
/* eslint-disable one-var-declaration-per-line */
/* eslint-disable no-multi-assign */
/* eslint-disable one-var */
/* eslint-disable no-param-reassign */
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { PhotoshopPicker, GithubPicker } from 'react-color';
import { colord } from 'colord';
import hsl from 'hsl-to-hex';
import {
  ColorBox, ColorPickerWrapper, Container, ShadesWrapper,
} from './styles';

const Shades = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const firstColor = useMemo(() => `#${String(Math.round(Math.random() * 999999))}`, []);
  const [shade, setShade] = useState<string[]>(['', '', '', '', firstColor, '', '', '', '']);

  const handleSelectColor = useCallback(({ hex }) => {
    setSelectedColor(hex);

    const { h, s, l } = colord(hex).toHsl();
    const lightenReason = +((99 - l) / 500).toFixed(4);
    const darkenReason = +(l / 499).toFixed(4);

    setShade(() => ([
      hsl(h, s, l + (400 * lightenReason)),
      hsl(h, s, l + (300 * lightenReason)),
      hsl(h, s, l + (200 * lightenReason)),
      hsl(h, s, l + (100 * lightenReason)),
      hex,
      hsl(h, s, l - (100 * darkenReason)),
      hsl(h, s, l - (200 * darkenReason)),
      hsl(h, s, l - (300 * darkenReason)),
      hsl(h, s, l - (400 * darkenReason)),
    ]));
  }, [setSelectedColor, firstColor]);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
  };

  return (
    <Container>
      <ShadesWrapper>
        {
          shade.map((item, index) => (
            <ColorBox
              key={Math.random() * 100}
              color={item}
              index={index}
              onClick={() => handleCopy(item)}
            >
              <span>{`${index + 1}00`}</span>
              <p onClick={() => handleCopy(item)}>{item}</p>
            </ColorBox>
          ))
        }
      </ShadesWrapper>
      <ColorPickerWrapper>
        <PhotoshopPicker
          color={selectedColor}
          onChange={handleSelectColor}
          // width="390px"
          className="colorPicker"
        />
      </ColorPickerWrapper>
    </Container>
  );
};

export default Shades;
