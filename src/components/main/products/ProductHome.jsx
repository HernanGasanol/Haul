import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import {Link} from 'react-router-dom'
import styled from "styled-components";
import { md } from "../../../responsive";
import { BsBag } from "react-icons/bs";

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
  margin: 0.3125rem;
  min-width: 18.75rem;
  height: 21.875rem;
  background-color: rgba(194, 194, 186, 0.164);
  position: relative;
  &:hover ${Info} {
    opacity: 100%;
  }
  ${md({ minWidth: "21.875rem", height: "25rem" })}
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  z-index: 2;
`;

const Icon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #eec6c6;
  border-radius: 50%;
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.3125rem;
  &:hover {
    background-color: #e9f5f5;
    color:black;
    transform: scale(1.2);
    transition: all 0.5s ease;
  }
`;
const ProductRedirect = styled.a``;

const ProductHome = ({ product }) => {
  return (
    <>
      <Container>
     
        <Image src={product.image} />
        <Link to="/product">
          <Info>
           
            <Icon>
              <BsBag/>
            </Icon>

            <Link to='/productlist'>
              <Icon>
                <SearchOutlined />
              </Icon>
              </Link>
            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
          </Info>
        </Link>
      </Container>
    </>
  );
};

export default ProductHome;
