import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/header/Announcement'
import Navbar from '../components/header/Navbar'
import Products from '../components/main/products/Products'
import { Newsletter} from '../components/footer/Newsletter'
import Footer from '../components/footer/Footer'
import { md } from '../responsive'
import Layout from '../components/Layout'

const Container=styled.div`
margin-top:80px;`

const Title=styled.h1`
margin: 20px;
`

const FilterContainer=styled.div`
display:flex;
justify-content:space-between;
`

const Filter=styled.div`
margin: 20px;
${md({width:"0px 20px", display:"flex", flexDirection:"column"})}

`

const FilterText=styled.span`
font-size:20px ;
font-weight:600;
margin-right: 20px;
${md({marginRight:"0px"})}
`

const Select=styled.select`
padding: 10px;
margin-right: 20px;
${md({margin:"10px 0px"})}
`

const Option=styled.option``

const ProductList = () => {
    return (
       
      <Layout> 
       <Container>
       
            
             <Title> Dreses </Title>
             <FilterContainer> 
                <Filter>
                    
                    <FilterText> filter products </FilterText>
                    <Select>
                            <Option disable selected> 
                               color 
                            </Option>
                            <Option>White</Option>
                            <Option>Black</Option>
                            <Option>Red</Option>
                            <Option>Blue</Option>
                            <Option>Yellow</Option>
                            <Option>Green</Option>


                        </Select>
                        <Select>
                            <Option disable selected> 
                               size 
                            </Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        


                        </Select>

                
                </Filter>
                <Filter>
                    
                    <FilterText> sort products: </FilterText>
                    <Select>
                        <Option selected> Newest</Option>
                        <Option> Price (asc) </Option>
                        <Option> Prince (desc)</Option>
                    </Select>
                
                </Filter>

             </FilterContainer>
             <Products/>
             <Products/>
             <Newsletter/>
             <Footer/>
        </Container>

        </Layout>
    )
}

export default ProductList
