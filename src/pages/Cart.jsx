import { Add, MobileFriendly, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Footer from "../components/footer/footer";
import { cartmd, mobilesm } from "../responsive";
import Announcement from "../components/header/Announcement";
import { Link } from "react-router-dom";
import shoes1 from "../public/images/shoes1.jpg";
import jacket from "../public/images/jacket.jpg";

const Container = styled.div`
  background-color: #f5f5f5;
`;

const Wrapper = styled.div`
  padding: 1.25rem;
  ${cartmd({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobilesm({ flexDirection: "center", gap: "20px" })}
  padding: 1.25rem;
`;
const TopButton = styled.button`
  padding: 0.625rem;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${cartmd({ flexDirection: "column" })}
  ${cartmd({ marginTop: "1.25rem" })}
`;

const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${cartmd({ flexDirection: "column" })}
  ${cartmd({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${cartmd({ flexDirection: "column" })}
  ${cartmd({ flexDirection: "column" })}
`;

const Image = styled.img`
  width: 100%;
  margin-right: 2.5rem;
  border-radius: 0.25rem;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1.25rem;
  gap: 0.9375rem;
  ${cartmd({ gap: "50px" })}
`;

const ProductName = styled.span``;
const ProductSize = styled.span``;
const ProductColor = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductId = styled.span``;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 0.625rem;
  padding: 1.25rem;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 1.875rem 0rem;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "1.5rem"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 0.625rem;
  border: none;
  font-weight: 600;
  background-color: black;
  color: white;
`;

const FilterSize = styled.select`
  margin-left: 0.625rem;
  padding: 0.3125rem;
`;

const FilterSizeOption = styled.option``;

const Cart = () => {
  return (
    <Container>
      <Announcement />

      <Wrapper>
        <Title> YOUR ITEMS</Title>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={jacket} />
                <Details>
                  <ProductName>
                    <b>Product:</b>SHIRT
                  </ProductName>

                  <ProductId>
                    <b>ID:</b>95668417
                  </ProductId>
                  <ProductColor color="#b87e66" />
                  <ProductSize>
                    <b>Size:</b>35.5
                  </ProductSize>
                </Details>
              </ProductDetail>
            </Product>
            <Hr />

            <Product>
              <ProductDetail>
                <Image src={shoes1} />
                <Details>
                  <ProductName>
                    <b>Product:</b> Allbirds Zero Drope
                  </ProductName>

                  <ProductId>
                    <b>Code:</b>52166745
                  </ProductId>
                  <ProductColor color="#c5c1c185" />
                  <ProductSize>
                    <b>Size:</b>
                    <FilterSize>
                      <FilterSizeOption>7</FilterSizeOption>
                      <FilterSizeOption>7.5</FilterSizeOption>
                      <FilterSizeOption>8</FilterSizeOption>
                      <FilterSizeOption>8.5</FilterSizeOption>
                      <FilterSizeOption>6</FilterSizeOption>
                    </FilterSize>
                  </ProductSize>
                </Details>
              </ProductDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDEN DE COMPRA</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Jacket</SummaryItemText>
              <SummaryItemPrice>$ 3.000</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Allbirds Zero Drope</SummaryItemText>
              <SummaryItemPrice>$ 2.000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>total</SummaryItemText>
              <SummaryItemPrice>$ 5.000</SummaryItemPrice>
            </SummaryItem>

            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
