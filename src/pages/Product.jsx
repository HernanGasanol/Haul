import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import { useState } from "react";
import { Newsletter } from "../components/footer/Newsletter";
import { mobilesm, cartmd } from "../responsive";
import shoes1 from "../public/images/shoes1.jpg";
import Layout from "../components/Layout";
import { AiOutlineStar } from "react-icons/ai";
import Comments from "../components/footer/Comments";
import shoes1sinfondo from "../public/images/shoes1sinfondo.png";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 3.125rem;
  margin-top: 5rem;

  ${cartmd({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;

  ${cartmd({ height: "10vh" })}
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${cartmd({ height: "50vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0rem 3.125rem;
  ${cartmd({ padding: "0rem 0.625rem" })}
  ${cartmd({ marginTop: "1.25rem" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Stars = styled.div`
  margin: 1.25rem 0rem;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 2.5rem;
`;

//Filters

const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  gap: 1.25rem;
  justify-content: space-between;
  margin: 1.875rem 0rem;
  ${cartmd({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 200;
`;

const FilterColor = styled.option`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0rem 0.3125rem;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 0.625rem;
  padding: 0.3125rem;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;

  ${cartmd({ width: "100%" })}
  ${cartmd({ marginBottom: "2.5rem" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 1.875rem;
  height: 1.875rem;
  font-weight: 400;
  border-radius: 0.625rem;
  border: solid 1px black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem 0.3125rem;
`;

const Button = styled.button`
  padding: 0.9375rem;
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;


  ${mobilesm({ fontSize: "10px", marginLeft:'20px' , minWidth:'content' })}
  &:hover {
    background-color: #000000da;
  }
`;

const Product = () => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityAdd = () => {
    quantity < 5 ? setQuantity(quantity + 1) : setQuantity(0);
  };

  const handleQuantityRemove = () => {
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);
  };
  return (
    <Layout>
      <Container>
        <Wrapper>
          <ImgContainer>
            <Image src={shoes1sinfondo} />
          </ImgContainer>
          <InfoContainer>
            <Title>Allbirds Zero Drop</Title>
            <Stars>
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </Stars>
            <Price>$14.000</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="pink" />
                <FilterColor color="grey" />
              </Filter>
              <Filter>
                <FilterTitle>size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>

            <AddContainer>
              <AmountContainer>
                <Remove onClick={handleQuantityRemove} />
                <Amount>{quantity}</Amount>
                <Add onClick={handleQuantityAdd} />
              </AmountContainer>
              <Button>ADD TO CARD</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Comments />

        <Newsletter />

        <Footer />
      </Container>
    </Layout>
  );
};

export default Product;
