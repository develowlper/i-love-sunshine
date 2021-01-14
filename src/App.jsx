import React from 'react';
import styled, {
  x,
  Preflight,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} from '@xstyled/styled-components';

import theme from './theme';

const beat = keyframes`
  0% {
    transform: scale(1.0);
  }
  50% {
    transform: scale(1.4);
  }
`;

const backdrop = keyframes`
  50% {
    background-color: white
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
    background-color: cardinal;
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

const ILoveSection = styled.section`
  animation: ${backdrop} 1s ease-in-out infinite;
  background-color: cardinal-a25;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}

@keyframes backdrop {
  50% {
    background-color: cardinal
  }
}
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
      <x.header
        backgroundColor="persian-green"
        position="fixed"
        w="100vw"
        p={4}
        boxShadow="md"
      >
        <nav>
          <x.ul display="flex" justifyContent="center" alignItems="center">
            <li>
              <x.a
                border
                textTransform="uppercase"
                textDecoration="none"
                py={1}
                px={3}
                borderColor="dark-sienna"
                color="dark-sienna"
                mr={2}
                href="#i-love"
              >
                I love ☀️
              </x.a>
            </li>
            <li>
              <x.a
                border
                textTransform="uppercase"
                textDecoration="none"
                py={1}
                px={3}
                borderColor="dark-sienna"
                color="dark-sienna"
                href="#notes"
              >
                Notes
              </x.a>
            </li>
          </x.ul>
        </nav>
      </x.header>
      <main>
        <ILoveSection id="i-love">
          <x.div fontSize={90} mr={6}>
            I
          </x.div>
          <Heart />
          <x.div fontSize={90} ml={6}>
            <span role="img" aria-label="sun emoji">
              ☀️
            </span>
          </x.div>
        </ILoveSection>
        <x.section h="100vh" id="notes">
          <h1>Notes</h1>
        </x.section>
      </main>
    </ThemeProvider>
  );
}
