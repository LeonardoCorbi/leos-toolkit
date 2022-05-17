import styled from 'styled-components';
import { core, fontColors } from '../../Styles/color.tokens';

export const Container = styled.div`
  h1 {
    color: ${core.secondary500};
  }

  button {
    padding: 4px 8px;

    background: gray;

    border-radius: 8px;

    cursor: pointer;
    margin-right: 4px;
  }
`;

export const NearEight = styled.article`
  position: fixed;
  margin-top: 220px;
  top: 32px;

  input {
    border: 1px solid ${core.primary500};

    width: 80px;
    color: ${fontColors.white};

    padding: 8px;
  }

  fieldset {
    border: 1px solid white;
    border-radius: 16px;

    padding: 8px 16px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;

    legend {
      margin-left: 16px;
      padding: 0 8px;
    }

    input {
      width: 50px;
    }

    p {
      cursor: pointer;
    }
  }
`;

export const Preview = styled.article`
  height: 200vh;

  margin-top: 32px;

  display: flex;
  justify-content: center;

  div {
    margin: 8px 0;

    font-size: 20px;
    text-align: center;
    font-weight: 500;

    cursor: pointer;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 5px;

  background: red;
`;
