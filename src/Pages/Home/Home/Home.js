import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Features from "../Features/Features";

function Home() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Reviews></Reviews>
      <Features></Features>
      <Footer></Footer>
    </div>
  );
}

export default Home;
