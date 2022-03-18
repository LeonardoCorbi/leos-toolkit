import React, { useCallback, useState } from 'react';
import { Container } from './styles';

const Tag = ({ left, top }: { top: number; left: number }) => (
  <p
    style={{
      background: '#ad99ff',
      position: 'absolute',
      padding: '4px 8px',
      borderRadius: 4,
      top,
      left,
      transform: 'translate(24px, 24px)',
      fontFamily: 'sans-serif',
    }}
  >
    Leonardo Corbi
  </p>
);

const FigmaCursor = () => {
  const [{ left, top }, setPosition] = useState({ top: 0, left: 0 });

  const handleMouseMove = useCallback(({
    clientX,
    clientY,
  }) => {
    setPosition({
      top: clientY,
      left: clientX,
    });
  }, [top, left]);

  return (
    <Container onMouseMove={handleMouseMove}>
      <h1>Opa</h1>
      {(left > 0 && top > 0) && (<Tag left={left} top={top} />)}
    </Container>
  );
};

export default FigmaCursor;
