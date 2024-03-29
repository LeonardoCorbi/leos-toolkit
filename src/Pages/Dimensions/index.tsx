import React, { useEffect, useState } from 'react';
import Toolbar from '../../components/Toolbar';
import { MainWrapper } from '../../Styles/globalStyles';

import {
  Container,
  Controllers,
  Preview,
  Shape,
} from './styles';

const Dimensions: React.FC = () => {
  const [range, setRange] = useState('100');

  const [userDimensionWidth, setUserWidth] = useState(0);
  const [userDimensionHeight, setUserHeight] = useState(0);

  const [previewDimensionWidth, setPreviewWidth] = useState(0);
  const [previewDimensionHeight, setPreviewHeight] = useState(0);

  useEffect(() => {
    ((x = userDimensionWidth, y = userDimensionHeight) => {
      if (x > 200 || y > 200) {
        const userDim = [x, y];
        const bigger = userDim.sort((a, b) => a - b)[1];
        const dividend = bigger / 200;

        setPreviewWidth(x / dividend);
        setPreviewHeight(y / dividend);
      } else {
        const userDim = [x, y];
        const bigger = userDim.sort((a, b) => a - b)[1];
        const multiplier = 200 / bigger;

        setPreviewWidth(x * multiplier);
        setPreviewHeight(y * multiplier);
      }
    })();
  }, [userDimensionHeight, userDimensionWidth]);

  const [scaledWidth, setScaledWidth] = useState(userDimensionWidth);
  const [scaledHeight, setScaledHeight] = useState(userDimensionHeight);

  useEffect(() => {
    setScaledHeight(userDimensionHeight * (Number(range) / 100));
    setScaledWidth(userDimensionWidth * (Number(range) / 100));
  }, [range, userDimensionHeight, userDimensionWidth]);

  return (
    <>
      <Toolbar />
      <MainWrapper>
        <Container>
          <h1>Resize Dimensions</h1>
          <p>Ajuda a alterar as dimensões de maneira proporcional.</p>
        </Container>
        <Controllers>
          Largura:
          {' '}
          <input
            autoComplete="off"
            placeholder="Apenas números"
            type="text"
            name="width"
            onChange={(el) => setUserWidth(Number(el.target.value))}
          />
          {' '}
          px
          <br />

          Altura:
          {' '}
          <input
            autoComplete="off"
            placeholder="Apenas números"
            type="text"
            name="height"
            onChange={(el) => setUserHeight(Number(el.target.value))}
          />
          {' '}
          px
          <br />

          Range:
          {' '}
          {range}
          % |
          {' '}
          <button type="button" onClick={() => setRange('100')}>Reset</button>
          <br />
          <input
            type="range"
            name=""
            id=""
            min="0"
            max="200"
            defaultValue="100"
            value={range}
            onChange={(el) => setRange(el.target.value)}
          />
        </Controllers>
        <Preview>
          <fieldset>
            <legend>Visualizador</legend>
            <Shape
              heightShow={scaledHeight}
              widthShow={scaledWidth}
              style={{
                height: previewDimensionHeight,
                width: previewDimensionWidth,
              }}
            />
          </fieldset>
        </Preview>
      </MainWrapper>
    </>
  );
};

export default Dimensions;
