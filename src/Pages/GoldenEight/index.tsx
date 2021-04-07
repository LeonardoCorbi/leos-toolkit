import React, { useCallback, useEffect, useState } from 'react';
import { MainWrapper } from '../../Styles/globalStyles';
import InfiniteScroll from 'react-infinite-scroll-component'

import { 
  Bottom,
  Container, 
  Preview, 
} from './styles';

const GoldenEight: React.FC = () => {
  const [multEight, setMultEight] = useState([''])
  const [index, setIndex] = useState(1)
  const [uptade, setUpdate] = useState(1)
  const [number, setNumber] = useState(0)

  useEffect(() => {
    generate()
  }, [index, uptade])
  
  const generate = () => {
    for(let i = index === 1 ? 1 : 50 * (index - 1); i < index * 50; i++) {
      multEight.push(`8 x ${i} = ${i * 8}`)
    }
  }

  const selectedNumber = (nmb: Number) => {
    const field = document.querySelector('.selected')
  }

  return (
    <MainWrapper>
      <Container>
        <h1>Regra do 8</h1>
        <p>Te ajuda a encontrar os múltiplos de 8.</p>
        <button onClick={() => console.log(multEight)}>Array</button>
        <button onClick={() => console.log(index)}>Index</button>
        <button onClick={() => setUpdate(uptade + 1)}>Update</button>
      </Container>
      <Preview>
        <div className="selected"></div>
        <InfiniteScroll
          className="table"
          dataLength={multEight.length}
          hasMore
          loader={<p>Calculando...</p>}
          next={() => setIndex(index + 1)}
          >
          {multEight.map(x => (
            <div key={x} onClick={e => selectedNumber(Number(e.currentTarget.textContent?.split('=')[1]))} >
              {x}<br/>
            </div>
          ))}
        </InfiniteScroll>
      </Preview>
    </MainWrapper>
  );
};

export default GoldenEight;
