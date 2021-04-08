import React, { useCallback, useEffect, useState } from 'react';
import { MainWrapper } from '../../Styles/globalStyles';
import InfiniteScroll from 'react-infinite-scroll-component'

import { 
  Bottom,
  Container, 
  NearEight, 
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

  const selectedNumber = (nmb: number) => {
    const field = document.querySelector('.selected')
  }

  const [userNumber, setUser] = useState([0])

  const table = (nmb: number) => {
    const divided = nmb / 8
    
    if(nmb >= 8 && Number.isInteger(divided)) {
      // console.log('certo', divided * 8)
      setUser([])
      setUser([nmb])
      
      console.log('certo', userNumber)
    } else {
      // console.log('abaixo', Math.floor(divided) * 8)
      // console.log('acima', Math.round(divided) * 8)
      
      setUser([])
      setUser([Math.floor(divided) * 8])
      setUser([...userNumber, Math.round(divided) * 8])
      console.log('rounded', userNumber)
    }

    // console.log(divided)
  }

  return (
    <MainWrapper>
      <Container>
        <h1>Regra do 8</h1>
        <p>Te ajuda a encontrar os múltiplos de 8.</p>
        <button onClick={() => console.log(multEight)}>Array</button>
        <button onClick={() => console.log(userNumber)}>userNumber</button>
        <button onClick={() => selectedNumber}>Update</button>
      </Container>
      <NearEight>
        <fieldset>
          <legend>Encontrar o oito mais proximo</legend>
          <input type="text" onChange={e => table(Number(e.target.value))}/>
          {userNumber.map(x => <>{x}<br/></>)}
        </fieldset>
      </NearEight>
      <Preview>
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
