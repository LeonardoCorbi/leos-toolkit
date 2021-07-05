import styled from 'styled-components'
import {AiFillGithub} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'

export const MailIcon = styled(HiOutlineMail)``
export const GithubIcon = styled(AiFillGithub)``

export const Container = styled.nav`
  padding: 0 96px;
  height: 90px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: JetBrains;
    a {
      font-weight: 700;
    }
    
    span {
      font-weight: 300;
    }
  }

  ul {
    display: flex;

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

      display: flex;
      align-items: center;

      svg {
        font-size: 24px;

        margin-right: 8px;
      }
    }
  }
`;
