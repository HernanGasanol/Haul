import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/header/Announcement'
import Footer from '../components/footer/Footer'
import Navbar from '../components/header/Navbar'
import { Newsletter } from '../components/footer/Newsletter'
import { md } from '../responsive'
import shoes1 from '../public/images/shoes1.jpg'
import Layout from '../components/Layout'

const Container=styled.div``
const Wrapper=styled.div`
display: flex;
padding: 50px;

${md({padding:"10px" , flexDirection:"column"})}
`

const ImgContainer=styled.div`
flex:1;`

const Image=styled.img`
width: 100%;
height: 90vh;
object-fit:cover;
${md({height:"40vh"})}

`


const InfoContainer=styled.div`
flex:1;
padding: 0px 50px;
${md({padding: "0px 10px"})}
${md({marginTop:"20px"})}

`
const Title=styled.h1 `
font-weight: 200;
`
const Description=styled.p`
margin: 20px 0px ;
`
const Price=styled.span`
font-weight: 100;
font-size: 40px;

`

//Filters

const FilterContainer=styled.div`
display: flex;
width: 50%;
justify-content:space-between;
margin: 30px 0px;
${md({width:"100%"})}

`
const Filter=styled.div`
display:flex;
align-items: center;
`

const FilterTitle=styled.h1`
font-size: 20px;
font-weight: 200;

`

const FilterColor=styled.option`
width: 20px;
height: 20px;
border-radius: 50%;
background-color:${props => props.color };
margin: 0px 5px;
cursor:pointer;

`

const FilterSize=styled.select`
margin-left:10px;
padding: 5px;
`

const FilterSizeOption=styled.option``


const AddContainer=styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content:space-between;

${md({width:"100%"})}
${md({marginBottom:"40px"})}

`

const AmountContainer=styled.div`
display: flex;
align-items: center;
font-weight:700;


`

const Amount=styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: solid 1px black;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`

const Button=styled.button`
padding: 15px;
border:none;
color:white;
background-color:black;
cursor:pointer;

&:hover{
 background-color:#000000da;
}


`

const Product = () => {
    return (
    <Layout>
        <Container>
      
           
            <Wrapper> 
              <ImgContainer>
                 <Image src={shoes1} />
              </ImgContainer>
              <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Description> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris.</Description>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
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
                            <Remove/>
                           <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CARD</Button>               
                </AddContainer>
              
              </InfoContainer>

            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
        </Layout>
    )
}

export default Product
