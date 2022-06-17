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

    <Route index path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route  path="/cart" element={<Cart/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/productlist" element={<ProductList/>}/>
   
  

    </Routes>

</Router> 


  )
}

export default App
