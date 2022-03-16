import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ColorBox, ColorPickerWrapper, Container, ShadesWrapper } from './styles';
import { SketchPicker } from 'react-color';
import { colord } from 'colord';

interface IShadesBoxes {
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
}

const Shades = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [shade, setShade] = useState<string[]>(['', '', '', '', '', '', '', '', '']);

  const handleSelectColor = useCallback(({ hex }) => {
    setSelectedColor(hex);

    const { h, s, l } = colord(hex).toHsl();
    const lightenReason = (99 - l) / 500;
    const darkenReason = l / 499;

    setShade(() => ([
        colord({ h, s, l: l + (400 * lightenReason) }).toHex(),
        colord({ h, s, l: l + (300 * lightenReason) }).toHex(),
        colord({ h, s, l: l + (200 * lightenReason) }).toHex(),
        colord({ h, s, l: l + (100 * lightenReason) }).toHex(),
        hex,
        colord({ h, s, l: l - (100 * darkenReason) }).toHex(),
        colord({ h, s, l: l - (200 * darkenReason) }).toHex(),
        colord({ h, s, l: l - (300 * darkenReason) }).toHex(),
        colord({ h, s, l: l - (400 * darkenReason) }).toHex(),
    ]));
  }, [setSelectedColor]);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
  }

  useEffect(() => handleSelectColor(String(Math.round(Math.random() * 999999))), []);

  return (
    <Container>
      <ShadesWrapper>
        {
          shade.map((item, index) => (
            <ColorBox 
              key={index}
              color={item}
              index={index}
              onClick={() => handleCopy(item)}
            >
              <p onClick={() => handleCopy(item)}>{item}</p>
            </ColorBox>
          ))
        }
      </ShadesWrapper>
      <ColorPickerWrapper>
        <SketchPicker
          color={selectedColor}
          onChange={handleSelectColor}
          width="400px"
          className="colorPicker"
        />
      </ColorPickerWrapper>
    </Container>
  );
};

export default Shades;