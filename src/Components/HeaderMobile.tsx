import { styled, keyframes } from "styled-components";

import { useState, useEffect } from "react";

interface IconProps {
  active?: boolean;
}

export default function HeaderMobile() {
  const [active, setActive] = useState(false);

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
          <Icon
            active={active}
            src="menu.png"
            onClick={() => {
              setActive(!active);
            }}
          />
        </Main>
        <MenuBar active={active}>
          <List>
            <ListItem>Pages</ListItem>
          </List>
          <List>
            <ListItem>About us</ListItem>
          </List>
          <List>
            <ListItem>Faq</ListItem>
          </List>
          <List>
            <ListItem>Blog</ListItem>
          </List>
          <List>
            <ListItem>Contact us</ListItem>
          </List>
          <List>
            <Login>Login</Login>
          </List>
          <Book>Book Now!</Book>
        </MenuBar>
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
  width: 100%;
  padding-left: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1ed;
  animation: ${slideDown} 1.5s ease-out;
  transform: translateY(-100%);
  animation-fill-mode: forwards;
  z-index: 1;
  position: relative;
  background-color: white;
  @media (min-width: 1200px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 96px;
  height: 35px;
  cursor: pointer;
`;

const Icon = styled.img<IconProps>`
  width: 60px;
  height: 75px;
  cursor: pointer;
  padding: 30px 18px 18px 18px;
  background-color: ${(props) => (props.active ? "white" : "")};
`;

const MenuBar = styled.div<IconProps>`
  width: 100%;
  min-height: 100%;
  position: fixed;
  transform: ${(props) =>
    props.active ? "translateY(0)" : "translateY(-100%)"};
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  transition: transform 0.7s ease-out, visibility 1s ease-out;
  background-color: white;
  overflow-y: hidden;
  @media (min-width: 1200px) {
    display: none;
  }
`;

const List = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 16px;
  padding: 16px 20px 16px 20px;
  color: #242222;
`;
const ListItem = styled.span`
  cursor: pointer;
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
`;
const Book = styled.div`
  width: 100%;
  background-color: #8a968f;
  padding: 15px 30px 15px 20px;
  color: #f1f1ed;
  font-size: 16px;
  cursor: pointer;
`;
