import React from "react";
import HeaderSimple from "./header";
import { FooterSimple } from "./footer";
import { HeroContentLeft } from "./content";
import CardsCarousel from "./cardcarousels";
const Layout = ({ children }) => {
  return (
    <>
      <HeaderSimple/>
      <HeroContentLeft></HeroContentLeft>
      <CardsCarousel/>
      <FooterSimple />
    </>
  );
};

export default Layout;