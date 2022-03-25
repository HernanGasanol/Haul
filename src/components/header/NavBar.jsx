import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {  mobilesm, cartmd } from "../../responsive";
import Announcement from "./Announcement";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Register from "../../pages/Register";
import { Modal } from "../../context/context";
import { BsBag } from "react-icons/bs";
import Login from "../../pages/Login";
import SearchModal from "./SearchModal";
import{ MdFavoriteBorder } from "react-icons/md";
 
// contenedor general
const Container = styled.div`
  height: 3.75rem;
  position: fixed;
  background-color: ${(props) => (props.scroll > 20 ? "white" : "white")};
  top: ${(props) => (props.scroll > 20 ? "0" : "")};
  z-index: 20;
  width: 100%;

  color: black;
  ${cartmd({ height: "3.125rem", width: "100%", top: "0" })}
`;

//contenedor de left center Right
const Wrapper = styled.div`
  height: 3.125rem;
  padding: 0rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${cartmd({ display: "flex", justifyContent: "space-between" })}
`;

// estilo de left que tiene dentro el search container y un span
const Left = styled.div`

`;




const Logo = styled.h1`
  font-weight: bold;
  font-size: 40px;
  ${cartmd({ fontSize: "30px" })}
  ${mobilesm({ fontSize:'20px'  })}
`;

// estilo de contenedor Right
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 20px;
  ${cartmd({ justifyContent: "center", fontSize: "3vw", gap: "10px" })}
  ${mobilesm({ gap: "5px"  })}
`;
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  font-size: 0.875rem;
  cursor: pointer;
  gap: 15.008px;
  margin-left: 0.625rem
    ${cartmd({ fontSize: "3vw", marginLeft: "10px" })}
    ${mobilesm({ gap: "7px" })};
`;

const RegisterModal = styled.div`
 font-size:18px;

  ${cartmd({ fontSize: "15px" })}
  ${mobilesm({ fontSize: "14px" })}
`;

const SignModal = styled.button`
   font-size:18px;
  border:none;
  background-color: transparent;
  ${cartmd({ fontSize: "15px" })}
  ${mobilesm({ fontSize: "14px" })}
`;

const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  gap:10px;
  font-size:20px;
  ${cartmd({ fontSize: "20px" })}
  ${mobilesm({ fontSize: "14px" })}
`;

const Navbar = ({ scroll }) => {
  const [, , showLogin, setShowLogin] = useContext(Modal);

  const [showRegister, setShowRegister] = useContext(Modal);
  const [, , , , showSearch, setShowSearch] = useContext(Modal);

  const handleClickRegister = (e) => {
    setShowRegister(!showRegister);
  };

  const handleClickLogin = (e) => {
    setShowLogin(!showLogin);
  };

  const handleClickSearchModal = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <Announcement />

      {showRegister ? <Register /> : ""}
      {showLogin ? <Login /> : ""}
      {showSearch ? <SearchModal /> : ""}

      <Container scroll={scroll}>
        <Wrapper>
          <Left>
            <Logo>HAUL.</Logo>
          </Left>

          <Right>
            <MenuItem>
              <RegisterModal onClick={handleClickRegister}>
                Register
              </RegisterModal>
            </MenuItem>

            <MenuItem>
              <SignModal onClick={handleClickLogin}>Login</SignModal>
            </MenuItem>

            <MenuItem>
              <ContainerIcon>
                <FiSearch onClick={handleClickSearchModal} />

                <Link to="/product">
                 
                  <MdFavoriteBorder />
                </Link>

                <Link to="/cart">
                  <BsBag />
                </Link>
              </ContainerIcon>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
