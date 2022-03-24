import { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import { Newsletter } from "../components/footer/Newsletter";
import Slider from "../components/header/Slider";
import Layout from "../components/Layout";
import Categories from "../components/main/categories/Categories";
import ProducstHome from "../components/main/products/ProductsHome";
import SliderTwo from "../components/header/SliderTwo";
import SliderThree from "../components/header/SliderThree";

const Home = () => {
  return (
    <Layout>
      <Slider />
      <SliderTwo />
      <SliderThree />
      <ProducstHome />
      <Categories />
      <Newsletter />
      <Footer />
    </Layout>
  );
};

export default Home;
