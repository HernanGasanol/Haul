import React from "react";
import styled from "styled-components";
import { cartmd } from "../responsive";
import { Modal } from "../context/context";
import { useState, useContext } from "react";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  top: 0;
  display: ${(props) => (props.showLogin ? "flex" : "none")};
  position: fixed;
  z-index: 99;
  background-color: #0000005c;

  background-size: cover;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  position: relative;
  background-color: white;
  padding: 1.25rem;
  ${cartmd({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1.25rem 0.625rem 0rem 0rem;
  padding: 0.625rem;
  outline: none;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 0.9375rem 1.25rem;
  margin: 0.625rem 0rem;
  background-color: black;
  color: white;
  cursor: pointer;
`;
const Close = styled.button`
  position: absolute;
  top: 0.3125rem;
  right: 0.3125rem;
  color: white;
  background-color: black;
  border: none;
`;
const Link = styled.a`
  margin: 0.3125rem 0rem;
  font-size: 0.75rem;
  text-align: underline;
  cursor: pointer;
`;

const Login = ({ state }) => {
  const [, , showLogin, setShowLogin] = useContext(Modal);

  const handleClose = () => {
    setShowLogin(!showLogin);
  };
  return (
    <Container showLogin={showLogin}>
      <Wrapper>
        <Close onClick={handleClose}>x</Close>
        <Title>INGRESAR</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>INGRESA</Button>
          <Link>¿OLVIDASTE TU CONTRASEÑA?</Link>
          <Link>CREA UNA NUEVA CUENTA</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
