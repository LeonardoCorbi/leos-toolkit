import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { 
  Container, 
  GithubIcon, 
  MailIcon
} from './styles';

const Toolbar: React.FC = () => {
  const location = useLocation()
  return (
    <Container>
      <h1><Link title="Home" to="/">Leonardo <span>Corbi</span></Link></h1>
      <ul>
        <li><Link title="Resumo de quem sou eu" to="" className={location.pathname === '/' ? 'active' : undefined}>Main</Link></li>
        <li><Link title="Trabalhos realizados" to="" className={location.pathname === '/works' ? 'active' : undefined}>Works</Link></li>
        <li><Link title="Entre em contato comigo" to="" className={location.pathname === '/contact' ? 'active' : undefined}>Contact</Link></li>
      </ul>
      <ul>
        <li><GithubIcon /><a target="_blank" href="github.com/LeonardoCorbi">Github</a></li>
        <li><MailIcon /><a href="mailto:oi@leonardocorbi.dev">E-mail</a></li>
      </ul>
    </Container>
  );
};

export default Toolbar;
