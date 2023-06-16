import { styled, keyframes } from "styled-components";

import { useState, useEffect } from "react";

export default function HeaderDesktop() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  if (!loading) {
    return (
      <>
        <Main>
          <Logo src="tulum.png" />
          <List>
            <ListItem>Pages</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Faq</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Contact us</ListItem>
            <Login>Login</Login>
            <Book>Book Now!</Book>
          </List>
        </Main>
      </>
    );
  }
}

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
 
  }
  to {
    transform: translateY(0);
  }
`;

const Main = styled.div`
  display: none;
  @media (min-width: 1200px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f1f1ed;
    animation: ${slideDown} 2s ease-out;
    transform: translateY(-100%);
    animation-fill-mode: forwards;
    padding-left: 25px;
  }
`;
const Logo = styled.img`
  width: 96px;
  height: 35px;
  cursor: pointer;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #555e59;
`;
const ListItem = styled.div`
  font-size: 16px;
  line-height: 27px;
  margin-right: 20px;
  position: relative;
  cursor: pointer;

  &:hover::before {
    width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #a1a184;
    transition: width 0.3s ease-out;
  }
`;

const Login = styled.button`
  border-radius: 90px;
  background-color: #d4d5cf;
  padding: 8px 22px 8px 22px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: #6e7a73;
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Book = styled.button`
  background-color: #8a968f;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  border: none;
  color: #f1f1ed;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
`;
