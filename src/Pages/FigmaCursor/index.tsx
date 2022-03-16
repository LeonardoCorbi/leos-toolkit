import React, { useState } from 'react';
import { Container } from './styles';

const Tag = ({ left, top }: { top: number; left: number }) => {
  return (
    <>
      {
        (left > 0 && top > 0) && (
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
        )
      }
    </>
  )
}

const FigmaCursor = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  return (
    <Container onMouseMove={({ clientX: left, clientY: top }) => setPosition({ top, left })}>
      <h1>Opa</h1>
      <Tag left={position.left} top={position.top} />
    </Container>
  );
};

export default FigmaCursor;
