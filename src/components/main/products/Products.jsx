import React from "react";
import { popularProducts, productsHome } from "../../../data";
import Product from "./Product";
import styled from "styled-components";
import { md } from "../../../responsive";
import ProductHome from "./ProductHome";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;

  padding: 1.25rem;
`;

const Products = () => {
  return (
    
    <Container>
        {productsHome.map((product) => (
          <ProductHome product={product} key={product.id} />
        ))}

        {popularProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Container>
    
  );
};

export default Products;
