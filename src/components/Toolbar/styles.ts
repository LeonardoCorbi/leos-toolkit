import styled from 'styled-components'
import {AiFillGithub, AiOutlinePhone} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import { BiHomeAlt } from 'react-icons/bi'

export const MailIcon = styled(HiOutlineMail)``
export const GithubIcon = styled(AiFillGithub)``
export const HomeIcon = styled(BiHomeAlt)``
export const PhoneIcon = styled(AiOutlinePhone)``

export const Container = styled.nav`
  padding: 0 96px;
  height: 90px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
  @media(max-width: 1024px){//! TABLET
    padding: 0 32px;
  }

  a {
    font-family: JetBrains;

  }

  h1 {
    font-family: JetBrains;

    @media(max-width: 400px){//! CUSTOM
      font-size: 1em;
    }

    a {
      font-weight: 700;
    }
    
    span {
      font-weight: 300;
    }
  }
  
  ul {
    display: flex;
    
    word-wrap: normal;
    
    &:nth-child(2) {
      @media(max-width: 1024px){//! TABLET
        display: none;
      }
    }

    @keyframes afterAnimation {
      from {
        right: 0;
      }

      to {
        right: -16px;
      }
    }

    @keyframes beforeAnimation {
      from {
        left: 0;
      }

      to {
        left: -16px;
      }
    }

    .active {
      color: var(--cyan);
      position: relative;

      &::after {
        content: '>';

        position: absolute;
        
        transform: translateX(100%);

        animation-duration: 1s;
        animation-name: afterAnimation;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
      }

      &::before {
        content: '<';

        position: absolute;

        transform: translateX(-100%);

        animation-duration: 1s;
        animation-name: beforeAnimation;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
      }
    }

    li {
      font-family: JetBrains;
      margin: 0 48px;

      
      a {
        display: flex;
        align-items: center;

        @media(max-width: 500px){//! MOBILE
          .text {
            display: none;
          }
        }
      }

      @media(max-width: 1024px){//! TABLET
        margin: 0 24px;
      }

      @media(max-width: 500px){//! MOBILE
        margin: 0 16px;
      }

      &:nth-child(2) {
        margin-right: 0;
      }

      svg {
        font-size: 24px;

        margin-right: 8px;

        @media(max-width: 500px){//! MOBILE
          font-size: 32px;
        }
      }
    }
  }
`;

export const Notch = styled.nav`
  background: #FFFFFF33;
  
  position: fixed;

  width: 240px;
  height: 70px;

  bottom: 16px;
  left: 50%;

  transform: translateX(-50%);

  border-radius: 32px;

  backdrop-filter: blur(10px);

  /* box-shadow: 0 0 30px 10px black; */
  
  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;

    font-size: 48px;

    padding-top: 12px;

    li {
      &:nth-child(1) {
        margin-right: 32px;
      }
    } 
  }
  
  @media(min-width: 1024px){//! CUSTOM
    display: none;
  }
`