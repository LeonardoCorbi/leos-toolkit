import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  &[data-test="true"] {
    color: red;
  }
`;

const Hello = () => <Paragraph>Olá</Paragraph>;

export default Hello;
