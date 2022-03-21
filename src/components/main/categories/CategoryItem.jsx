import React from 'react'
import styled from 'styled-components'
import { md , mobilesm } from '../../../responsive'


const Container=styled.div`
flex:1;
margin: 40px 3px;
height: 80vh;
position:relative;
${md({margin:"5px"})}

`
const Image=styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${md({height:"50vh"})}
`

const Info=styled.div`
position: absolute;
width: 100%;
height:100%;
top: 0;
left: 0;
flex-direction: column;
display: flex;
justify-content:center;
align-items: center;
background-color:rgba(0, 0, 0, 0.13);


`
const Title=styled.h1`
color: white;
margin: 10px 0px;
${mobilesm({display:'flex' , justifyContent:'center', width:'100%'})}

`
const  Button=styled.button`
border:none;
padding: 10px;
background-color: transparent;
border:solid 1px  white;
color: gray;
font-weight: 600;
cursor: pointer;

`
const ShopRedirect=styled.a`
text-decoration:none;
color: #ffffff;
`

const CategoryItem = ({item}) => {
    return (
        <Container>
           <Image src={item.img}/>
           <Info>
               <Title> {item.title} </Title>
                <Button><ShopRedirect href="/productlist"> SHOP NOW</ShopRedirect></Button>
           </Info>

        </Container>
    )
}

export default CategoryItem
