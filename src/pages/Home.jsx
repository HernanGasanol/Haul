import {useState , useEffect} from "react";
import Footer from "../components/footer/Footer";
import { Newsletter } from "../components/footer/Newsletter";
import Announcement from "../components/header/Announcement";
import Navbar from "../components/header/NavBar";
import Slider from "../components/header/Slider";
import Layout from "../components/Layout";
import Categories from "../components/main/categories/Categories";
import ProducstHome from "../components/main/products/ProductsHome";


const Home = () => {

  
  return (
   
   
   <Layout>

      <Slider/>
       
      <ProducstHome/>
   <Categories/>
    <Newsletter/>
      <Footer/>
    </Layout>
  );
};

export default Home
