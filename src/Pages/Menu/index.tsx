import React from 'react';
import { Link } from 'react-router-dom';
import { MainWrapper } from '../../Styles/globalStyles';

import { Container } from './styles';

const Menu: React.FC = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <ul>
            <li>
              <Link to="/toolkit/dimensions">Dimensions</Link>
            </li>
          </ul>
        </Container>
      </MainWrapper>
    </>
  );
};

export default Menu;
