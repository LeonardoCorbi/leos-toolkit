import React from 'react';
import { Link } from 'react-router-dom';
import { MainWrapper } from '../../Styles/globalStyles';

import { Container } from './styles';

const Menu: React.FC = () => (
  <MainWrapper>
    <Container>
      <ul>
        <li>
          <Link to="/toolkit/dimensions">Dimensions</Link>
        </li>
        <li>
          <Link to="/toolkit/rem">REM</Link>
        </li>
        <li>
          <Link to="/toolkit/pixelperfect">Pixel Perfect</Link>
        </li>
        <li>
          <Link to="/toolkit/fonttest">Font Test</Link>
        </li>
      </ul>
    </Container>
  </MainWrapper>
);

export default Menu;
