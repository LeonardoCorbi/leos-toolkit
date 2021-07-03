import React from 'react';
import Toolbar from '../../components/Toolbar';

import { 
  FirstContainer, 
  ForthContainer, 
  SecondContainer, 
  ThirdContainer
} from './styles';

const Bio: React.FC = () => {
  return (
      <>
        <Toolbar />
        <FirstContainer>
          <img src="https://github.com/LeonardoCorbi.png" alt="Imagem de Leonardo Corbi" />
          <section>
            <span>Desenvolvedor Front-End</span>
            
          </section>
        </FirstContainer>
        <SecondContainer>
          
        </SecondContainer>
        <ThirdContainer>
          
        </ThirdContainer>
        <ForthContainer>
          
        </ForthContainer>
      </>
  );
};

export default Bio;
