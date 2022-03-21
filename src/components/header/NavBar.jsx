import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { md, mobilemd, mobilesm } from "../../responsive";
import Announcement from "./Announcement";
import { useState, useEffect , useContext } from "react";
import { Link } from "react-router-dom";
import Register from "../../pages/Register";
import { Modal } from "../../context/context";
import { BsBag } from "react-icons/bs";
import Login from "../../pages/Login";

// contenedor general
const Container = styled.div`
  height: 60px;
  position: fixed;
  background-color: ${(props) => (props.scroll > 20 ? "white" : "white")};
  top: ${(props) => (props.scroll > 20 ? "0" : "")};
  transition: ${(props) => (props.scroll > 20 ? "top 10s ease 0s" : "")};
  z-index: 20;
  width: 100%;

  color: black;
  ${md({ height: "50px", width: "100%" })}
  ${mobilemd({ top: "0", width: "100%" })}
`;

//contenedor de left center Right
const Wrapper = styled.div`
  height: 50px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${md({ display: "flex", justifyContent: "space-between" })}
`;

// estilo de left que tiene dentro el search container y un span
const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const Language=styled.span`
// font-size: 14px;
// cursor: pointer;
// ${mobile({display:"none"})}
// `
//contenedor del input y los icon
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  background-color: white;
  height: max-content;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobilesm({ display: "none" })}
`;

const Input = styled.input`
  outline: none;
  border-color: transparent;
  ${md({ width: "90px", height: "10px" })}
`;

//estilo de contenedor center
const Center = styled.div`
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 40px;
  ${md({ fontSize: "24px" })}
`;

// estilo de contenedor Right
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${md({ justifyContent: "center", fontSize: "3vw" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${md({ fontSize: "12px", marginLeft: "10px" })}
`;

const RegisterModal = styled.div`
  ${mobilesm({ fontSize: "10px" })}


`;

const SignModal = styled.button`
  ${mobilesm({ fontSize: "10px" })}
  border:none;
  background-color: transparent;
`;



const Navbar = ({ scroll }) => {
  const [useInput, setInput] = useState("");
 // const [showRegister, setShowRegister] = useState(false);
  const [,,showLogin, setShowLogin] = useContext(Modal);


  const [showRegister,setShowRegister]=useContext(Modal)
  

  const handleClickRegister = (e) => {
    setShowRegister(!showRegister);
  };

  const handleClickLogin = (e) => {
    setShowLogin(!showLogin);
  };


  const handlerInput = (e) => {
    setInput(e.target.value);
  };



 
  return (
    <>
      <Announcement />
 
      {showRegister ? <Register /> : ""} 
      {showLogin ? <Login /> : ""} 
     
     

      <Container scroll={scroll}>
        <Wrapper>
          <Left>
            <Center>
              <Logo>HAUL.</Logo>
            </Center>
          </Left>

          <Right>
            <SearchContainer>
              <Input
                onChange={handlerInput}
                placeholder="¿Qué estás buscando?"
              />
              <Link to={`/${useInput}`}>
                <Search style={{ color: "gray", fontSize: 16 }} />
              </Link>
            </SearchContainer>

            <MenuItem>
              <RegisterModal onClick={handleClickRegister}>
                REGISTER
              </RegisterModal>
            </MenuItem>
            <MenuItem>
              <SignModal onClick={handleClickLogin}>SIGN IN</SignModal>
            </MenuItem>
            <MenuItem>
              <Link to="/cart">
                <BsBag style={{ fontSize: "20" }} />
              </Link>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
