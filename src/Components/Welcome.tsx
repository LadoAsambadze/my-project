import { useState } from "react";
import styled, { keyframes } from "styled-components";

export default function MainPage() {
  const [displayMain, setDisplayMain] = useState(true);

  const handleAnimationEnd = () => {
    setDisplayMain(false);
  };

  return (
    <>
      {displayMain && (
        <Main onAnimationEnd={handleAnimationEnd}>
          <h1>welcome</h1>
        </Main>
      )}
    </>
  );
}

const fadeIn = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const Main = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;

  position: relative;
  z-index: 30;
  animation: ${fadeIn} 0.3s ease-out;
  animation-delay: 1s;
`;
