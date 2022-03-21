import React from 'react'
import styled from 'styled-components'
import {  Modal } from '../context/context'
import { md} from '../responsive'
import {useState , useContext} from 'react'


const Container=styled.div`

height: 100vh;
top:0;
display:${props => props.showRegister ? 'flex' : 'none'};
position:fixed;
z-index:99;
background-color:#00000091;

background-size: cover;
align-items: center;
justify-content: center;
`
const Wrapper=styled.div`
width: 40%;
position:relative;

background-color:white;
padding: 20px;
${md({width:"75%"})}

`


const Title=styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form=styled.form`
display: flex;
flex-wrap: wrap;

`
const Input=styled.input`
 flex: 1; 
 min-width:40%;
 margin: 20px 10px 0px 0px;
 padding: 10px;
 outline:none;

`
const Agreement=styled.span`
font-size: 12px;
margin: 20px 10px 0px 0px;

`
const Button=styled.button`
width: 40%;
border:none;
padding: 15px 20px;
margin: 20px 10px 0px 0px;

color: white;
cursor: pointer;
background-color:black;

`

const Close=styled.button`
position:absolute;
top:5px;
right:5px;
color:white;
background-color:black;
border:none;


`



const Register = ({state}) => {
    const [showRegister,setShowRegister]=useContext(Modal)
 
 
 const handleClose=()=>{
     setShowRegister(!showRegister)
 }   
 
 

    return (
       
       
       <Container showRegister={showRegister}  >
          
           
            <Wrapper >  
                <Close onClick={handleClose}>x</Close>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit laoreet vulputate <b> ipsum dolor sit amet consectetur adipiscing elit laoreet vulputate </b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register