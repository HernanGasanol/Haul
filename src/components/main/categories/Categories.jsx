import React from "react";
import styled from "styled-components";
import { categories } from "../../../data";
import CategoryItem from "./CategoryItem";
import { md , mobilesm} from "../../../responsive";

//acá se hacen responsivas las tarjetas de los modelos
const Container = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 20px;
  justify-content: space-between;
  ${md({ padding: "0px", flexDirection: "column" })}

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
