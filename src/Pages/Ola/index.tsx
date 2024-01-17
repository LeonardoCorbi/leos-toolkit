import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  .component-2, .component-1 {
    display: none;
  }

  &[data-test="A"] {
    .component-2 {
      display: initial;
    }

    .component-1 {
      display: none;
    }
  }

  &[data-test="B"] {
    .component-2 {
      display: none;
    }

    .component-1 {
      display: initial;
    }
  }
`;

const Hello = () => (
  <Paragraph data-test="B">
    <div className="component-1">Component 1</div>
    <div className="component-2">Component 2</div>
  </Paragraph>
);

export default Hello;
