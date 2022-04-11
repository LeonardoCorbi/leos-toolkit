import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import hsl from 'hsl-to-hex';
import { SketchPicker } from 'react-color';
import {
  ColorBox,
  ColorPickerWrapper,
  Container,
  ShadesWrapper,
} from './styles';
import wcc, { getWCAG, IWCAG } from '../../Utils/wcagColorChecker';
import { lighten, darken } from '../../Utils/colorGrading';

const Shades = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const firstColor = useMemo(() => `#${String(Math.round(Math.random() * 999999))}`, []);
  const [shades, setShades] = useState<[string, IWCAG[]][]>([
    [lighten(firstColor, 400), []],
    [lighten(firstColor, 300), []],
    [lighten(firstColor, 200), []],
    [lighten(firstColor, 100), []],
    [firstColor, []],
    [darken(firstColor, 100), []],
    [darken(firstColor, 200), []],
    [darken(firstColor, 300), []],
    [darken(firstColor, 400), []],
  ]);
  const [range, setRange] = useState(100);
  const bgColor = useMemo(() => hsl(0, 0, range), [range]);

  const handleSelectColor = useCallback(({ hex }) => {
    setSelectedColor(hex);
    setShades(() => ([
      [lighten(hex, 400), wcc(lighten(hex, 400), bgColor)],
      [lighten(hex, 300), wcc(lighten(hex, 300), bgColor)],
      [lighten(hex, 200), wcc(lighten(hex, 200), bgColor)],
      [lighten(hex, 100), wcc(lighten(hex, 100), bgColor)],
      [hex, wcc(hex, bgColor)],
      [darken(hex, 100), wcc(darken(hex, 100), bgColor)],
      [darken(hex, 200), wcc(darken(hex, 200), bgColor)],
      [darken(hex, 300), wcc(darken(hex, 300), bgColor)],
      [darken(hex, 400), wcc(darken(hex, 400), bgColor)],
    ]));
  }, [bgColor, firstColor, selectedColor]);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
  };

  useEffect(() => handleSelectColor({ hex: selectedColor }), [bgColor]);

  useEffect(() => console.log('firstColor', firstColor), [firstColor]);

  return (
    <Container>
      <ShadesWrapper background={bgColor}>
        {
          shades.map(([hex, wcag], index) => (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ColorBox
                key={Math.random() * 100}
                color={hex}
                index={index}
                onClick={() => handleCopy(hex)}
              >
                <span>{`${index + 1}00`}</span>
                <p onClick={() => handleCopy(hex)}>
                  {hex}
                </p>
              </ColorBox>
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
            </div>
          ))
        }
      </ShadesWrapper>
      <ColorPickerWrapper>
        <article>
          <p>Alterar cor de fundo:</p>
          <input type="range" onChange={({ target: { value } }) => setRange(+value)} min={0} max={100} value={range} />
          <p>Alterar cor principal:</p>
        </article>
        <SketchPicker
          color={selectedColor || firstColor}
          onChange={handleSelectColor}
          width="390px"
          className="colorPicker"
        />
      </ColorPickerWrapper>
    </Container>
  );
};

export default Shades;
