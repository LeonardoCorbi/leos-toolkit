import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  width: 100%;
  min-height: 100%;

  color: black;


  padding: 0 96px;
  padding-top: 24px;

  h1 {
    margin-bottom: 8px;
  }

  textarea {
    width: 100%;
    resize: none;

    transition: all 200ms ease-in-out;
  }

  textarea:hover {
    resize: both;
    background: #babaca22;
  }

  select {
    background: gray;
  }
`;

export const Controls = styled.div`
  margin-bottom: 32px;

  display: flex;
`

export const PageSettings = styled.span`
  display: flex;
  flex-direction: column;

  color: black;

  padding: 0 8px;

  span {
    color: black;
    margin-bottom: 8px;
  }
`

export const TitleSettings = styled.span`
  display: flex;
  flex-direction: column;

  color: black;

  padding: 0 8px;

  span {
    color: black;
    margin-bottom: 8px;
  }
`

export const ContentSettings = styled.span`
  display: flex;
  flex-direction: column;

  color: black;

  padding: 0 8px;

  span {
    color: black;
    margin-bottom: 8px;
  }
`

