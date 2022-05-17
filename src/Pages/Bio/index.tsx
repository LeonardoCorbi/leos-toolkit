/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useMenu } from '../../hooks/useMenu';
import {
  Cyan,
  Green,
  Orange,
  Pink,
  Purple,
} from '../../Styles/globalStyles';

import {
  FirstContainer,
  SecondContainer,
  Animation,
  Biography,
} from './styles';

const Bio: React.FC = () => {
  const { isMenuOpened } = useMenu();
  return (
    <>
      <FirstContainer isMenuOpened={isMenuOpened}>
        <img
          src="../assets/images/LeonardoCorbiNew.jpeg"
          alt="Imagem de Leonardo Corbi"
        />
        <Animation contentEditable spellCheck={false}>
          <code className="line1">
            <Pink>const</Pink> leonardoCorbi<Pink>:</Pink> <Purple>Array</Purple>{'<'}<Orange>any</Orange>{'>'}<Pink> = []</Pink>;
          </code>
          <code className="line2">
            leonardoCorbi.<Green>push</Green><Cyan>(</Cyan>HTML5<Cyan>)</Cyan>;
          </code>
          <code className="line3">
            leonardoCorbi.<Green>push</Green><Cyan>(</Cyan>CSS3<Cyan>)</Cyan>;
          </code>
          <code className="line4">
            leonardoCorbi.<Green>push</Green><Cyan>(</Cyan>TypeScript<Cyan>)</Cyan>;
          </code>
          <code className="line5">
            leonardoCorbi.<Green>push</Green><Cyan>(</Cyan>React<Cyan>)</Cyan>;
          </code>
          <code className="line6">
            leonardoCorbi.<Green>push</Green><Cyan>(</Cyan>StyledComponents<Cyan>)</Cyan>;
          </code>
        </Animation>
      </FirstContainer>
      <SecondContainer isMenuOpened={isMenuOpened}>
        <Biography>
          <span>Olá! Eu sou Leonardo Corbi</span>
          <span>
            Desde sempre tive a curiosidade de saber como as coisas funcionavam,
            e com o passar do tempo, a curiosidade pelo mundo tecnológico só aumentou. Quem convive
            comigo percebe rapidamente o contato próximo que tenho com a tecnologia, e como gosto de
            transformar tudo a minha volta, um simples ato de ligar de uma luz se tornou um:
            {' '}
            <em>
              &quot;
              Alexa, ligue a luz
              &quot;
            </em>
            ; ou então uma mudança de hábitos alimentares se tornou sistema automatizado com micro-
            controladores para fazer uma irrigação automática na minha horta...
          </span>
          <span>
            Enfim... esse sou eu, uma pessoa que gosta de estar sempre em contato com as mais novas
            tecnologias e tornando-as úteis  e aplicáveis em todos projetos, uma pessoa auto-didata,
            sempre em busca de aprender algo novo.
          </span>
        </Biography>
      </SecondContainer>
    </>
  );
};

export default Bio;
