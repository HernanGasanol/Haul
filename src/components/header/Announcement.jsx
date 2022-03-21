// no hace falta importar 'react' desde la version 17
import styled from 'styled-components'
import React from 'react'
import { md } from '../../responsive'

//contenedor general de barra de arriba del nav
const Container=styled.div`
height: 30px;
background-color:black ;
color:white;
display: flex;
align-items: center;
justify-content:center;
font-size: 15px;
font-weight: 500;
${md({display:"none"})}

`

const Announcement = () => {
    return (
        <Container>
            Super deal! Free Shipping on Orders  Over $50
        </Container>
    )
}

export default Announcement
