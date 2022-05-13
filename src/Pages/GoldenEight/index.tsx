import React, {
  useEffect, useState, useRef, useCallback, useMemo,
} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { toast } from 'react-toastify';
import { MainWrapper } from '../../Styles/globalStyles';

import { Container, NearEight, Preview } from './styles';

const GoldenEight: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [multEight] = useState(['']);
  const [index, setIndex] = useState(1);
  const [uptade] = useState(1);
  const [nearNumber, setNearNumber] = useState(0);

  const lower = useMemo(() => Math.floor(nearNumber) * 8, [nearNumber]);
  const higher = useMemo(() => Math.ceil(nearNumber) * 8, [nearNumber]);

  const handleClickToCopy = (value: unknown) => {
    navigator.clipboard.writeText(String(value));
    toast.info('Copiado!');
  };

  const generate = () => {
    for (let i = index === 1 ? 1 : 50 * (index - 1); i < index * 50; i++) {
      multEight.push(`8 x ${i} = ${i * 8}`);
    }
  };

  const handleChange = useCallback((nmb: number) => {
    const divided = nmb / 8;
    setNearNumber(divided);
  }, [nearNumber]);

  useEffect(() => {
    generate();
  }, [index, uptade]);

  return (
    <MainWrapper>
      <Container>
        <h1>Regra do 8</h1>
        <p>Te ajuda a encontrar os múltiplos de 8.</p>
        <input type="text" ref={inputRef} />
      </Container>
      <NearEight>
        <fieldset>
          <legend>Encontrar o oito mais proximo</legend>
          <input type="text" onChange={({ target: { value } }) => handleChange(+value)} />
          {!!nearNumber && <p onClick={() => handleClickToCopy(lower)}>{lower}</p>}
          {!Number.isInteger(nearNumber) && (
          <p onClick={() => handleClickToCopy(higher)}>{higher}</p>
          )}
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
          {multEight.map((x) => (
            <div
              key={x}
              onClick={() => handleClickToCopy(x.split('=')[1])}
              role="form"
            >
              {x}
              <br />
            </div>
          ))}
        </InfiniteScroll>
      </Preview>
    </MainWrapper>
  );
};

export default GoldenEight;
