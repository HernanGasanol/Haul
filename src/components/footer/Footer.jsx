import React from "react";

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
import { md } from "../../responsive";

const Container = styled.div`
  display: flex;
  ${md({ flexDirection: "column", padding: "0px" })}
  padding: 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  margin: 20px 0px;
`;
const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
  color: white;
  background-color: #${(props) => props.color};
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${md({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${md({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> Haul </Logo>
        <Description>
          simply dummy of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy ever since the, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
        </Description>

        <SocialContainer>
          <SocialIcon color="ffffff" border="00000">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="000000">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="000000">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="000000">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links </Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Pilar 689, Buenos Aires
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +54 11 9 6624-6526
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@haul.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
