import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { md  , cartmd , mobilesm} from "../../responsive";

const Container = styled.div`
  height: 60vh;
  display: flex;
  margin: 5rem 0rem;
  justify-content: center;
  align-items: center;
  /* background-color: #fcf5f5; */
  background-color: #33333311;
  flex-direction: column;
  ${md({ height: "50vh", margin: "1.25rem 0rem" })}
`;

const Title = styled.h1`
  font-size: 4.375rem;
  margin-bottom: 0.938rem;
  color: black;
  ${md({ fontSize: "3.75rem" })}
  ${mobilesm({ fontSize: '40px'})}

`;

const Description = styled.div`
  font-size: 1.5rem;
  color: black;
  font-weight: 300;
  margin-bottom: 1.25rem;
  ${md({ textAlign: "center" })}
  ${mobilesm({ fontSize: '20px'})}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 2.5rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${md({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 8;
  padding-left: 1.25rem;
  ::placeholder {
  }
`;

const Button = styled.button`
  flex: 1;
  background-color: transparent;
  height: 2.5rem;
  border: none;
  background-color: black;
  color: white;
`;

export const Newsletter = () => {
  return (
    <Container>
      <Title> Novedades </Title>
      <Description>
        Suscribite para conocer nuestras novedades y promos
      </Description>
      <InputContainer>
        <Input placeholder="Ingresa tu Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};
