import React from 'react';
import Toolbar from '../../components/Toolbar';
import { io } from 'socket.io-client'

import { Container } from './styles';

const Botcoin: React.FC = () => {

  const socket = io('http://172.28.66.239:3333/socket.io')
  console.log(socket.id)
  return (
    <>
      <Toolbar /> 
      <Container>
        <button onClick={evt => navigator.share({
          text: 'Oi',
          title: 'Title',
          url: 'Url'
        })}>Share</button>
      </Container>
    </>
  );
};

export default Botcoin;
