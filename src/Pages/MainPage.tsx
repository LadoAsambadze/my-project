import { styled, keyframes } from "styled-components";
import { useEffect, useState } from "react";

const images = ["batumi2.jpg", "batumi.jpeg"];

export default function MainPage() {
  const [loading, setLoading] = useState(true);
  const [textLoad, setTextLoad] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setTextLoad(false);
    }, 2000);
    return () => clearTimeout(textTimer);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!loading) {
    return (
      <>
        <Main>
          <FirstDiv image={images[imageIndex]}>
            {!textLoad ? (
              <Header>
                <span>Tulum Luxury Apartment</span>
                <span>$ 499 usd</span>
              </Header>
            ) : null}
          </FirstDiv>
        </Main>
      </>
    );
  }
}

const fadeIn = keyframes`
  from {
    scale: 1.5;
    transform: translateY(100%) 
  }
  to {
    scale: 1;
 
    transform: translateY(0%) 
  }
`;

const fadeText = keyframes`
  from {
    transform: translateY(100%) 

  }to {
    transform: translateY(0%) 
  }
`;

const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  animation: ${fadeIn} 1.8s ease-out;
`;
const FirstDiv = styled.div<{ image: string }>`
  width: 100%;
  height: 800px;
  background-image: url(${(props) => props.image});
  background-size: 100%;
  background-position: top;
  background-repeat: no-repeat;
  padding: 15px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 32px;
  line-height: 36px;
  color: white;
  animation: ${fadeText} 1s ease-out;
`;
