import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { SketchPicker } from 'react-color';
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
    const lightenReason = (99 - l) / 500;
    const darkenReason = l / 499;

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
        <SketchPicker
          color={selectedColor}
          onChange={handleSelectColor}
          width="390px"
          className="colorPicker"
        />
      </ColorPickerWrapper>
    </Container>
  );
};

export default Shades;
