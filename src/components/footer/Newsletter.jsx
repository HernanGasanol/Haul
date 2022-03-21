import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { md} from "../../responsive";

const Container = styled.div`
  height: 60vh;
  display: flex;
  margin: 80px 0px;
  justify-content: center;
  align-items: center;
  /* background-color: #fcf5f5; */
  background-color:#33333311;
  flex-direction: column;
  ${md({ height: "50vh", margin: "20px 0px" })}
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 15px;
  color:black;
  ${md({ fontSize: "60px" })}
`;

const Description = styled.div`
  font-size: 24px;
  color:black;
  font-weight: 300;
  margin-bottom: 20px;
  ${md({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
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
  padding-left: 20px;
  ::placeholder {
  }
`;

const Button = styled.button`
  flex: 1;
  background-color: transparent;
  height: 40px;
  border: none;
  /* background-color: rgb(218, 159, 81); */
  background-color:black;
  color: white;
`;

export const Newsletter = () => {
  return (
    <Container>
      <Title> Newsletter </Title>
      <Description>
        Get timely updates from your favorites products
      </Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
        
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};
