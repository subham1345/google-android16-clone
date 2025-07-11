import React from "react";
import Productdata from "./Productdata";
import SearchInfoCard1 from "./SearchInfoCard1";
import Footer from "../Pages/pagedata/Footer"
import GoogleProducts from "./GoogleProducts";
import Section3 from "./products/Section3";
import Section4 from "./products/Section4";
import Section5 from "./products/Section5";
import Section6 from "./products/Section6";
import Section7 from "./products/Section7";
import Section8 from "./products/Section8";

const Products = () => {
  return (
    <div style={{ 
      // backgroundColor: "yellow", 
      width: "100%" }}>
      <Productdata />
      <Section3/>
      <Section4/> 
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <SearchInfoCard1 />
      <GoogleProducts/>
      <Footer/>
    </div>
  );
};

export default Products;
