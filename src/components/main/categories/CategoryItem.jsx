import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { md, mobilesm, cartmd } from "../../../responsive";

const Container = styled.div`
  flex: 1;
  margin: 2.5rem 0.1875rem;
  height: 80vh;
  position: relative;
  ${cartmd({ margin: "0.3125rem" })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.13);
`;
const Title = styled.h1`
  color: white;
  margin: 0.625rem 0rem;
  font-size: 20px;
  ${cartmd({ fontSize: "3.75rem" })}
  ${mobilesm({ fontSize: "1.875rem" })}
`;
const Button = styled.button`
  border: none;
  padding: 0.625rem;
  background-color: transparent;
  border: solid 1px white;
  color: gray;
  font-weight: 600;
  cursor: pointer;
  ${cartmd({ fontSize: "1.25rem" })}
  ${mobilesm({ fontSize: "0.625rem" })}
`;
const ShopRedirect = styled.span`
  text-decoration: none;
  color: #ffffff;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title> {item.title} </Title>
        <Button>
          <Link to="/productlist">
            <ShopRedirect>SHOP NOW</ShopRedirect>{" "}
          </Link>
        </Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
