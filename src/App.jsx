import { useState } from 'react'
import { ModalProvider } from './context/context'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Product from './pages/Product'
import ProductList from './pages/ProductList'


function App() {


  return (

   <Router>
       

    <Routes>

    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/register" element={<Register/>}/>
    <Route exact path="/cart" element={<Cart/>}/>
    <Route exact path="/product" element={<Product/>}/>
    <Route exact path="/productlist" element={<ProductList/>}/>
   
  

    </Routes>

</Router> 


  )
}

export default App
