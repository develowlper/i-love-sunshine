import React from 'react';
import styled, {
  x,
  Preflight,
  createGlobalStyle
} from '@xstyled/styled-components';

const Heart = styled.div`
  position: relative;
  width: 100px;
  height: 90px;
  animation: ping;
  &:before,
  :after {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: hsl(320, 100%, 50%);
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  :after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

const GlobalStyle = createGlobalStyle`
  #root {
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #root > *:not(:last-child){
    margin-right: 10px;
  }
`;

export default function App() {
  return (
    <>
      <Preflight />
      <GlobalStyle />
      <x.div fontSize={90}>I</x.div>
      <Heart />
      <x.div fontSize={90}>
        <span role="img" aria-label="sun emoji">
          ☀️
        </span>
      </x.div>
    </>
  );
}
