import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.24);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  min-width: 360px;
  height: 400px;
  background-color: rgba(194, 194, 186, 0.164);
  position: relative;
  &:hover ${Info} {
    opacity: 100%;
  }
`;
const Circle = styled.div`
  /* width: 200px;
height:200px;
border-radius:50%;
background-color:white;
position:absolute; */
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.2);
    transition: all 0.5s ease;
  }
`;
const ProductRedirect = styled.a``;

const Product = ({ product }) => {
  return (
    <Container>
      <Circle />
      <Image src={product.img} />
      <ProductRedirect href="/product">
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>

          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </ProductRedirect>
    </Container>
  );
};

export default Product;