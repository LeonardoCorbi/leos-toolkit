import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '../../components/Toolbar';

import { 
  FirstContainer, 
  ForthContainer, 
  SecondContainer, 
  ThirdContainer,
  Animation,
  Biography
} from './styles';

const Bio: React.FC = () => {
  const [focusedItem ,setFocusedItem] = useState('')
  return (
      <>
        <Toolbar />
        <FirstContainer>
          <Animation>
            <div className="line1"><span className="pink">let</span> leonardoCorbi<span className="pink">:</span> <span className="purple">Array</span>{'<'}<span className="orange">any</span>{'>'} <span className="pink"> = []</span></div>
            <div className="line2">leonardoCorbi.<span className="green">push</span><span className="cyan">(</span>HTML5<span className="cyan">)</span></div>
            <div className="line3">leonardoCorbi.<span className="green">push</span><span className="cyan">(</span>CSS3<span className="cyan">)</span></div>
            <div className="line4">leonardoCorbi.<span className="green">push</span><span className="cyan">(</span>TypeScript<span className="cyan">)</span></div>
            <div className="line5">leonardoCorbi.<span className="green">push</span><span className="cyan">(</span>React<span className="cyan">)</span></div>
            <div className="line6">leonardoCorbi.<span className="green">push</span><span className="cyan">(</span>StyledComponents<span className="cyan">)</span></div>
          </Animation>
          <figure>
            <img src="../assets/images/LeonardoCorbi.jpg" alt="Imagem de Leonardo Corbi" />
            <figcaption>Desenvolvedor Front-End</figcaption>
          </figure>
        </FirstContainer>
        <SecondContainer id="#cards">
          <ul>
            <li>
              <h3>Design</h3>
              <span>Bacharel em Design Digital</span>
              <span>Curso voltado para criação de design e produtos digitais</span>
            </li>
            <li>
              <h3>React</h3>
              <span>Experiência com React</span>
              <span>Possibilitando desenvolvimento de sites, PWA's e aplicativos híbridos</span>
            </li>
            <li>
              <h3>Back-End</h3>
              <span>Experiência com Back-End</span>
              <span>Conhecimento de PHP, NodeJS e MySQL</span>
            </li>
          </ul>
          <Biography>
            <span>Olá! Eu sou Leonardo Corbi</span>
            <span>
              Desde sempre tive a curiosidade de saber como as coisas funcionavam, e com o passar do tempo, a curiosidade pelo mundo tecnológico só aumentou. Quem convive comigo percebe rapidamente o contato próximo que tenho com a tecnologia, e como gosto de transformar tudo a minha volta, um simples ato de ligar de uma luz se tornou um: <em>"Alexa, ligue a luz"</em>; ou então uma mudança de hábitos alimentares se tornou sistema automatizado com micro-controladores para fazer uma irrigação automática na minha horta...
            </span>
            <span>
              Enfim... esse sou eu, uma pessoa que gosta de estar sempre em contato com as mais novas tecnologias e tornando-as úteis  e aplicáveis em todos projetos, uma pessoa auto-didata, sempre em busca de aprender algo novo.
            </span>
          </Biography>
        </SecondContainer>
        <ThirdContainer>
          <span className="main">Algumas ferramentas que eu desenvolvi para me ajudar nos meus processos.</span>
          <span>
            <ul>
              <li>
                <a href="/dimensions">Dimensions</a>
              </li>
              <li>
                <a href="/REM">REM</a>
              </li>
              <li>
                <a href="/pixelPerfect">Pixel Perfect</a>
              </li>
              <li>
                <a href="/fontTest">Font Test</a>
              </li>
            </ul>
          </span>
        </ThirdContainer>
        {/* <ForthContainer>
          
        </ForthContainer> */}
      </>
  );
};

export default Bio;
