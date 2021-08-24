import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { 
  Container, 
  GithubIcon, 
  HomeIcon, 
  MailIcon,
  Notch,
  PhoneIcon
} from './styles';

const Toolbar: React.FC = () => {
  const location = useLocation()
  return (
    <>
      <Container>
        <h1><Link title="Home" to="/">Leonardo <span>Corbi</span></Link></h1>
        <ul>
          <li>
            <Link title="Resumo de quem sou eu" to="" className={location.pathname === '/' ? 'active' : undefined}>
              Main
            </Link>
          </li>
      
          <li>
            <Link title="Entre em contato comigo" to="" className={location.pathname === '/contact' ? 'active' : undefined}>
              Contact
            </Link>
          </li>
        </ul>
        <a target="_blank" href="github.com/LeonardoCorbi"> <GithubIcon /> <span className="text">Github</span></a>
      </Container>
      <Notch>
        <ul>
          <li>
            <a href=""><HomeIcon /></a>
          </li>

          <li>
            <a href=""><MailIcon /></a>
          </li>
        </ul>
      </Notch>
    </>
  );
};

export default Toolbar;
