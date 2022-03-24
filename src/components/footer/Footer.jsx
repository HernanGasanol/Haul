import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import { cartmd , mobilemd } from "../../responsive";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items: center;

`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
`;

const Logo = styled.h1``;

const Description = styled.p``;

const SocialContainer = styled.div`
  display: flex;
  margin: 1.25rem 0rem;
`;
const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-right: 2.5rem;
  color: white;
  background-color: #${(props) => props.color};
`;

const Center = styled.div`
  padding: 1.25rem;
  ${cartmd({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 1.875rem;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li`
  width: max-content;
  margin-bottom: 0.625rem;
`;

const Right = styled.div`
  padding: 1.25rem;
  ${cartmd({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> Haul </Logo>
        <Description>
          <List>
            <ListItem>Cambios y devoluciones</ListItem>
            <ListItem>Información de envíos</ListItem>
            <ListItem>Medios de pago</ListItem>
            <ListItem>Botón de arrepentimiento</ListItem>
            <ListItem>Defensa de las y los Consumidores.</ListItem>
          </List>
        </Description>

        <SocialContainer>
          <SocialIcon color="000000">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="000000">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="000000">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Sobre Haul </Title>
        <List>
          <ListItem>Sobre nosotros</ListItem>
          <ListItem>Trabajá con nosotros</ListItem>
          <ListItem>Buscador de tiendas</ListItem>
          <ListItem>Términos y condiciones</ListItem>
          <ListItem>Política de privacidad</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <GrMapLocation style={{ marginRight: "0.625rem", fontSize: "1.25rem" }} />
          Pilar 689, Buenos Aires
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "0.625rem" }} />
          +54 11 9 6624-6526
        </ContactItem>
        <ContactItem>
          <MdAlternateEmail style={{ marginRight: "0.625rem", fontSize: "1.25rem" }} />
          contact@haul.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
