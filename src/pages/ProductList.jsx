import React from "react";
import styled from "styled-components";
import Products from "../components/main/products/Products";
import { Newsletter } from "../components/footer/Newsletter";
import Footer from "../components/footer/Footer";
import { cartmd } from "../responsive";
import Layout from "../components/Layout";

const Container = styled.div`
  margin-top: 5rem;
`;

const Title = styled.h1`
  margin: 1.25rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 1.25rem;
  ${cartmd({ width: "0rem 1.25rem", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  margin-right: 1.25rem;
  ${cartmd({ marginRight: "0rem" })}
`;

const Select = styled.select`
  padding: 0.625rem;
  margin-right: 1.25rem;
  ${cartmd({ margin: "0.625rem 0rem" })}
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Layout>
      <Container>
        <Title> Dreses </Title>
        <FilterContainer>
          <Filter>
            <FilterText> ¿Qué estas buscando? </FilterText>
          
          
            <Select>
              <Option disable selected>
                Producto
              </Option>
              <Option>Gorras</Option>
              <Option>Camisas</Option>
              <Option>Jeans</Option>
              <Option>Accesorios</Option>
              <Option>Skin</Option>
              <Option>Populares</Option>
            </Select>
          
          
          
            <Select>
              <Option disable selected>
                color
              </Option>
              <Option>Blanco</Option>
              <Option>Negro</Option>
              <Option>Rojo</Option>
              <Option>Azul</Option>
              <Option>Amarillo</Option>
              <Option>Verd</Option>
            </Select>
            <Select>
              <Option disable selected>
                size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText> Categorias: </FilterText>
            <Select>
              <Option selected> Nuevos</Option>
              <Option> Precio (asc) </Option>
              <Option> P (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
        <Products />
        <Newsletter />
        <Footer />
      </Container>
    </Layout>
  );
};

export default ProductList;
