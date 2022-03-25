import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { SketchPicker } from 'react-color';
import { colord } from 'colord';
import hsl from 'hsl-to-hex';
import ColorContrastChecker from 'color-contrast-checker';
import {
  ColorBox, ColorPickerWrapper, Container, ShadesWrapper,
} from './styles';

interface IWCAG {
  WCAG_AA : boolean;
  WCAG_AAA: boolean;
}

const Shades = () => {
  const wcag = new ColorContrastChecker();
  const [selectedColor, setSelectedColor] = useState('');
  const firstColor = useMemo(() => `#${String(Math.round(Math.random() * 999999))}`, []);
  const [shade, setShade] = useState<[string, IWCAG[]][]>([['', []], ['', []], ['', []], ['', []], [firstColor, []], ['', []], ['', []], ['', []], ['', []]]);
  const [range, setRange] = useState(100);
  const percentage = useMemo(() => hsl(0, 0, range), [range]);

  const ratioChecker = useCallback((foreground: string) => wcag.checkPairs([
    {
      colorA: foreground,
      colorB: percentage,
      fontSize: 12,
    },
    {
      colorA: foreground,
      colorB: percentage,
      fontSize: 14,
    },
    {
      colorA: foreground,
      colorB: percentage,
      fontSize: 16,
    },
    {
      colorA: foreground,
      colorB: percentage,
      fontSize: 24,
    },
    {
      colorA: foreground,
      colorB: percentage,
      fontSize: 32,
    },
    {
      colorA: foreground,
      colorB: percentage,
      fontSize: 40,
    },
  ]) as IWCAG[], []);

  const handleSelectColor = useCallback(({ hex }) => {
    setSelectedColor(hex);

    const { h, s, l } = colord(hex).toHsl();
    const lightenReason = +((99 - l) / 500).toFixed(4);
    const darkenReason = +(l / 499).toFixed(4);

    setShade(() => ([
      [hsl(h, s, l + (400 * lightenReason)), ratioChecker(hsl(h, s, l + (400 * lightenReason)))],
      [hsl(h, s, l + (300 * lightenReason)), ratioChecker(hsl(h, s, l + (300 * lightenReason)))],
      [hsl(h, s, l + (200 * lightenReason)), ratioChecker(hsl(h, s, l + (200 * lightenReason)))],
      [hsl(h, s, l + (100 * lightenReason)), ratioChecker(hsl(h, s, l + (100 * lightenReason)))],
      [hex, ratioChecker(hex)],
      [hsl(h, s, l - (100 * darkenReason)), ratioChecker(hsl(h, s, l - (100 * darkenReason)))],
      [hsl(h, s, l - (200 * darkenReason)), ratioChecker(hsl(h, s, l - (200 * darkenReason)))],
      [hsl(h, s, l - (300 * darkenReason)), ratioChecker(hsl(h, s, l - (300 * darkenReason)))],
      [hsl(h, s, l - (400 * darkenReason)), ratioChecker(hsl(h, s, l - (400 * darkenReason)))],
    ]));
  }, [setSelectedColor, firstColor]);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
  };

  return (
    <Container>
      <ShadesWrapper background={percentage}>
        {
          shade.map(([item, checker], index) => (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ColorBox
                key={Math.random() * 100}
                color={item}
                index={index}
                onClick={() => handleCopy(item)}
              >
                <span>{`${index + 1}00`}</span>
                <p onClick={() => handleCopy(item)}>
                  {item}
                </p>
              </ColorBox>
              <ul style={{ marginTop: 54 }}>
                {checker.map((_, pos) => {
                  const { WCAG_AA, WCAG_AAA } = checker[pos];
                  return (
                    <li style={{ color: 'black' }}>
                      AAA:
                      {WCAG_AAA ? 'Pass' : 'Fail'}
                      {' | '}
                      AA:
                      {' '}
                      {WCAG_AA ? 'Pass' : 'Fail'}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))
        }
      </ShadesWrapper>
      <article>
        <input type="range" onChange={({ target: { value } }) => setRange(+value)} min={0} max={100} value={range} />
        {percentage}
      </article>
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
