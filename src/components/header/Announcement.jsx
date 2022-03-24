// no hace falta importar 'react' desde la version 17
import styled from "styled-components";
import React from "react";
import { cartmd } from "../../responsive";

//contenedor general de barra de arriba del nav
const Container = styled.div`
  height: 1.875rem;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.938rem;
  font-weight: 500;
  ${cartmd({ display: "none" })}
`;

const Announcement = () => {
  return <Container>Envíos Gratis apartir de $ 1.500</Container>;
};

export default Announcement;
