import { Add, MobileFriendly, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Footer from "../components/footer/footer";
import { md , cartmd } from "../responsive";
import Announcement from "../components/header/Announcement";
import {Link} from 'react-router-dom';
import shoes1 from '../public/images/shoes1.jpg'
import jacket from '../public/images/jacket.jpg'

const Container = styled.div`
background-color:#f5f5f5;

`;

const Wrapper = styled.div`
  padding: 20px;
  ${md({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
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
  ${md({ flexDirection: "column" })}
  ${md({ marginTop: "20px" })}
`;

const TopTexts = styled.div`
  ${md({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
  cursor: pointer;
`;

const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

  
  ${md({ flexDirection: "column" })}
  ${cartmd({flexDirection:'column' })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${md({ flexDirection: "column" })}
  ${cartmd({flexDirection:'column' })}
`;

const Image = styled.img`
  width: 100%;
  margin-right: 40px;
  border-radius:4px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  gap:15px;
`;

const ProductName = styled.span``;
const ProductSize = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
  ${md({ margin: "5px 15px" })}
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
  ${md({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  font-weight: 600;
  background-color: black;
  color: white;
`;

const Cart = () => {
  return (
    <Container>
          <Announcement/>

      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
         <Link to="/"><TopButton>CONTINUE SHOPPING</TopButton></Link> 
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
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
                  <ProductColor color="black" />
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
                    <b>Product:</b>SHOES
                  </ProductName>

                  <ProductId>
                    <b>ID:</b>52166745
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b>M
                  </ProductSize>
                </Details>
          
              </ProductDetail>

           
            
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>total</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
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
