import React, { useEffect, useState } from 'react';
import { MainWrapper } from '../../Styles/globalStyles';

import { 
  Container, 
  Controllers, 
  Preview, 
  Shape, 
} from './styles';

const Dimensions: React.FC = () => {

  const [range, setRange] = useState('100')
  const [dimensions, setDimensions] = useState({
    width: 50,
    height: 50,
  })
  const [previewDim, setPreviewDim] = useState({
    width: 50,
    height: 50,
  })

  useEffect(() => {
    ((x = dimensions.width, y = dimensions.height) => {
      if(x > 200 || y > 200) {
        setPreviewDim({...previewDim, width: (x/(x/100) * 2)})
        setPreviewDim({...previewDim, height: (y/(y/100) * 2)})
      } else {
        setPreviewDim({...previewDim, width: x})
        setPreviewDim({...previewDim, height: y})
      }
    })()
  }, [dimensions.height, dimensions.width])

  return (
    <>
      <MainWrapper>
        <Container>
          <h1>Resize Dimensions</h1>
          <p>Ajuda a alterar as dimensões de maneira proporcional.</p>
        </Container>
        <Controllers>
          Largura: <input placeholder="Apenas números" type="text" name="width" 
          onChange={el => setDimensions({...dimensions, [el.target.name]: Number(el.target.value)})}/> px | {dimensions.width * (Number(range)/100)}<br/>

          Altura: <input placeholder="Apenas números" type="text" name="height" 
          onChange={el => setDimensions({...dimensions, [el.target.name]: Number(el.target.value)})}/> px | {dimensions.height * (Number(range)/100)}<br/>
          
          Range: {range}%<br/>
          <input 
            type="range" name="" id="" min="0" max="200" defaultValue="100"
            onChange={el => setRange(el.target.value)}
          />
        </Controllers>
        <Preview>
          <fieldset>
            <legend>Visualizador</legend>
            <Shape style={{height: previewDim.height, width: previewDim.width}} />
          </fieldset>
        </Preview>
      </MainWrapper>
    </>
  );
};

export default Dimensions;
