import React from "react";
import styled from "styled-components";
import { categories } from "../../../data";
import CategoryItem from "./CategoryItem";
import {  mobilesm, cartmd} from "../../../responsive";

//acá se hacen responsivas las tarjetas de los modelos
const Container = styled.div`
  display: flex;
  margin-top: 1.25rem;
  padding: 1.25rem;
  justify-content: space-between;
  flex-wrap: wrap;
  ${cartmd({ padding: "0px", flexDirection: "column"  })}

`;
const Categories = () => {
  return (
    <>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
