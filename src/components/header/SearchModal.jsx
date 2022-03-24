import React from "react";
import styled from "styled-components";
import { Modal } from "../../context/context";
import { productsSearchModal } from "../../data";
import { useState, useContext } from "react";
import { mobilesm, cartmd } from "../../responsive";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Container = styled.div`


`;

const NavContainer = styled.nav`
  display: flex;
  height: 3.125rem;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  width: 100%;
`;
const Logo = styled.h1`
  margin-left: 0.625rem;
  font-size: 2.5rem;
`;

const IconContainer = styled.div`
  display: flex;
  font-size: 1.25rem;
  margin-right: 1rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const Icon = styled.span``;

const ContainerSearchModal = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  display: ${(props) => (props.showSearch ? "flex" : "none")};
  flex-direction: column;
  position: fixed;

  z-index: 99;
  background-color: #ffffff;
  background-size: cover;
  align-items: center;
  justify-content: center;

  ${mobilesm({ top: "0" })}
  ${cartmd({ top: "0" })}
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 300;
  ${mobilesm({ fontSize: "5vw" })}
  ${cartmd({ fontSize: "5vw" })}
`;

const Close = styled.div`
  font-size: 1.25rem;
  color: white;
  border: none;
  color: black;
  background-color: white;
  border-radius: 50%;
`;

const SearchContainer = styled.div`
  border-bottom: 0.0313rem solid lightgray;
  background-color: white;
  margin-top: 1.3rem;
  height: max-content;
  display: flex;
  width: 100%;
  align-items: center;
  margin-left: 1.5625rem;
  padding: 0.3125rem;
`;

const Input = styled.input`
  outline: none;
  width: 100%;
  height: 1.875rem;
  border: transparent;
  ::placeholder {
    font-size: 1.25rem;
    color: #cacaca;
  }
`;

const Products = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 1rem;
  overflow: auto;
  margin-left: 5rem;
  ${mobilesm({ marginLeft: "20px" })}
  ${cartmd({ marginLeft: "20px" })}
`;
const ContainerImageInfo = styled.div`
  display: flex;
  gap: 6rem;
  ${mobilesm({ gap: "1.8rem" })}
  ${cartmd({ gap: "1.8rem" })}
`;

const ContainerImage = styled.div`
  width: 40%;
  ${mobilesm({ width: "50%" })}
  ${cartmd({ width: "50%" })}
`;
const Image = styled.img`
  width: 100%;
`;
const InfoContainer = styled.div``;
const Titulo = styled.h2`
  font-size: 2rem;
  color: #c5acf8;
  ${mobilesm({ fontSize: "4vw" })}
  ${cartmd({ fontSize: "4vw" })}
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: bold;
  ${mobilesm({ fontSize: "3vw" })}
  ${cartmd({ fontSize: "3vw" })}
`;
const Price = styled.p`
  font-size: 0.9375rem;
  color: grey;
  ${mobilesm({ fontSize: "2.5vw" })}
  ${cartmd({ fontSize: "2.5vw" })}
`;

const SearchModal = ({ state }) => {
  const [, , , , showSearch, setShowSearch] = useContext(Modal);

  const handleClose = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <ContainerSearchModal showSearch={showSearch}>
        <NavContainer>
          <Logo>HAUL.</Logo>

          <IconContainer>
            <Link to="/product">
              {" "}
              <Icon>
                <MdFavoriteBorder onClick={handleClose} />
              </Icon>{" "}
            </Link>
            <Link to="/productlist">
              <Icon>
                <BsBag onClick={handleClose} />
              </Icon>
            </Link>

            <Close onClick={handleClose}>
              <AiOutlineClose />
            </Close>
          </IconContainer>
        </NavContainer>

        <SearchContainer>
          <Input placeholder="¡HOLA! ¿Qué estás buscando?" />
        </SearchContainer>

        <Products>
          <Title>MÁS BUSCADOS</Title>
          {productsSearchModal.map((item) => (
            <Link to="/product">
              <ContainerImageInfo>
                <ContainerImage key={item.id} onClick={handleClose}>
                  <Image src={item.image} />
                </ContainerImage>

                <InfoContainer key={item.id} onClick={handleClose}>
                  <Titulo>{item.title}</Titulo>
                  <Description>{item.description}</Description>
                  <Price>{item.Price}</Price>
                </InfoContainer>
              </ContainerImageInfo>
            </Link>
          ))}
        </Products>
      </ContainerSearchModal>
    </>
  );
};

export default SearchModal;
