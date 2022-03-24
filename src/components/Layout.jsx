import React from "react";
import NavBar from "./header/NavBar";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const Layout = ({ children }) => {
  const [scroll, setScroll] = useState();

  const setScroller = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    setScroller();
  }, [scroll]);

  window.addEventListener("scroll", setScroller);

  return (
    <Container>
      <NavBar scroll={scroll} />
      {children}
    </Container>
  );
};

export default Layout;
