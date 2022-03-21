import React from 'react'
import styled from 'styled-components'
import { md } from '../responsive'
import {Modal} from '../context/context'
import {useState , useContext} from 'react'


const Container=styled.div`
height: 100vh;
width:100vw;
top:0;
display:${props => props.showLogin ? 'flex' : 'none'};
position:fixed;
z-index:99;
background-color:#0000005c;

background-size: cover;
align-items: center;
justify-content: center;
`
const Wrapper=styled.div`
width: 25%;
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
flex-direction: column;

`
const Input=styled.input`
 flex: 1; 
 min-width:40%;
 margin: 20px 10px 0px 0px;
 padding: 10px;
 outline:none;

`


const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
margin: 10px 0px;
background-color:black;
color: white;
cursor: pointer;

`
const Close=styled.button`
position:absolute;
top:5px;
right:5px;
color:white;
background-color:black;
border:none;


`
const Link=styled.a`
margin: 5px 0px;
font-size: 12px;
text-align: underline;
cursor: pointer;
`





const Login = ({state}) => {
   
    const [,,showLogin,setShowLogin]=useContext(Modal)
  
    const handleClose=()=>{
        setShowLogin(!showLogin)
   }  
    return (
        <Container showLogin={showLogin}>
        <Wrapper>
            <Close onClick={handleClose}>x</Close>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>¿DO NOT YOU REMEBER YOUR PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
        
                
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login
