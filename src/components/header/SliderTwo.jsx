import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import { SliderItems2 } from "../../data";
import { useState } from "react";
import { md, cartmd, mobilesm } from "../../responsive";
import { Link } from "react-router-dom";

//contenedor general del slider
const Container = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0 auto;
  display: none;

  margin-top: ${(props) => (props.scroll > 20 ? "0" : "50px")};
  position: relative;
  overflow: hidden;
  //background-color:rgb(192, 179, 225);
  ${mobilesm({ display: "flex" })}
`;
//contenedor de los iconos arrow este contiene al wrapper
const Arrow = styled.div`
  background-color: white;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  opacity: 30%;
  margin: auto;
  position: absolute;
  left: ${(props) => props.direction === "left" && "0.625rem"};
  right: ${(props) => props.direction === "right" && "0.625rem"};
  cursor: pointer;
  z-index: 2;
`;
//contenedor del slide donde van a ir el contenedor de la imagen y el contenedor de la informacion titulo y botones
const Wrapper = styled.div`
  height: 100%;
  justify-content: center;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
// el slide en si
const Slide = styled.div`
  width: 100vw;

  display: flex;

  justify-content: center;

  align-items: center;
  background-color: ${(props) => props.bg};
  //background-color:rgb(192, 230, 253);
  //::first-linebackground-color:rgba(99, 99, 99, 0.507);
`;
// contenedor de las imagenes
const ImgContainer = styled.div`
  display: flex;
  widt: 100%;
  //justify-content:center;
  margin: 0px 2px;
  height: 100%;
`;

//este es el elemento imagen
const Image = styled.img`
  opacity: 95%;
  width: 100%;
  object-position: left;
  height: 100%;
  object-fit: cover;
`;

//contenedor de la informacion y el boton
const InfoContainer = styled.div`
  position: absolute;
  margin-right: 2.5rem;
  height: 100%;
  /* width: 100%; */
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;

  justify-content: center;
`;
//informacion h1 parrafo y botones
const Title = styled.h1`
  font-weight: bold;

  color: ${(props) => props.color};
  ${mobilesm({ fontSize: "1.875rem" })}
`;
const Description = styled.p`
  margin-bottom: 0.9375rem;
  font-size: 1.875rem;
  letter-spacing: 0.1875rem;

  color: ${(props) => props.color};
  ${mobilesm({ fontSize: "1.25rem" })}
`;
const Button = styled.button`
  color: white;
  font-weight: bold;
  font-size: 4vw;
  background-color: transparent;

  width: 12.5rem;
  cursor: pointer;
  border: solid 1px white;
  padding: 0.9375rem;

  &&:hover {
    border: solid 1px rgb(218, 159, 81);
    background-color: rgb(218, 159, 81);
    color: white;
  }

  ${mobilesm({ padding: "10px" })}
`;

const SliderTwo = ({ scroll }) => {
  //el stado del componente wrap de su ??ndice
  const [slideIndex, setSlideIndex] = useState(0);

  function handleClick(direction) {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }

  return (
    <>
      <Container scroll={scroll}>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
          {SliderItems2.map((item) => (
            <Slide key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title color={item.color}>{item.title}</Title>
                <Description color={item.color}>{item.description}</Description>

                <Link to="/productlist">
                  <Button> SHOP NOW </Button>
                </Link>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>

        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </>
  );
};

export default SliderTwo;
