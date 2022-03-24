import React from "react";
import styled from "styled-components";
import { Modal } from "../context/context";
import { cartmd, mobilesm } from "../responsive";
import { useState, useContext } from "react";

const Container = styled.div`
  height: 100vh;
  top: 0;
  display: ${(props) => (props.showRegister ? "flex" : "none")};
  position: fixed;
  z-index: 99;
  background-color: #00000091;

  background-size: cover;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1.25rem 0.625rem 0rem 0rem;
  padding: 0.625rem;
  outline: none;
`;
const Agreement = styled.span`
  font-size: 0.75rem;
  margin: 1.25rem 0.625rem 0rem 0rem;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 0.9375rem 1.25rem;
  margin: 1.25rem 0.625rem 0rem 0rem;
  ${mobilesm({ width:'100%'})}
  ${cartmd({ top: "0" })}
  color: white;
  cursor: pointer;
  background-color: black;
`;

const Close = styled.button`
  position: absolute;
  top: 0.3125rem;
  right: 0.3125rem;
  color: white;
  background-color: black;
  border: none;
`;

const Register = ({ state }) => {
  const [showRegister, setShowRegister] = useContext(Modal);

  const handleClose = () => {
    setShowRegister(!showRegister);
  };

  return (
    <Container showRegister={showRegister}>
      <Wrapper>
        <Close onClick={handleClose}>x</Close>
        <Title>CREA TU CUENTA</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="Email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            Accede a beneficios exclusivos!{" "}
            <b> enterate de todas las novedades y obtén precios increibles! </b>
          </Agreement>
          <Button>REGISTRARSE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
