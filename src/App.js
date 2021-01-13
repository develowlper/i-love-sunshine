import React from 'react';
import styled, {
  x,
  Preflight,
  createGlobalStyle,
  keyframes
} from '@xstyled/styled-components';

const backdrop = keyframes`
  50% {
    opacity: 0.25;
  }
`;

const beat = keyframes`
  0% {
    transform: scale(1.0);
  }
  50% {
    transform: scale(1.4);
  }
`;

const Heart = styled.div`
  position: relative;
  width: 100px;
  height: 90px;
  animation: ${beat} 1s ease-in-out infinite;
  &:before,
  :after {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: red;
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

const Backdrop = styled.div`
  opacity: 0;
  top: 0;
  position: fixed;
  background-color: red;
  width: 100vw;
  height: 100vh;
  animation: ${backdrop} 1s ease-in-out infinite;
`;

const Container = styled.main`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 20px;
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
`;

export default function App() {
  return (
    <>
      <Preflight />
      <GlobalStyle />
      <Backdrop />
      <Container>
        <x.div fontSize={90}>I</x.div>
        <Heart />
        <x.div fontSize={90}>
          <span role="img" aria-label="sun emoji">
            ☀️
          </span>
        </x.div>
      </Container>
    </>
  );
}
