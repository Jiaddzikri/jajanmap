import React, { useState } from "react";
import Header from "../components/organisms/Header";
import HeroSection from "../components/organisms/HeroSection";
import Filter from "../components/molecules/Filter";
import PromoBanner from "../components/molecules/PromoBanner";
import UMKMCarousel from "../components/organisms/UMKMCarousel";
import UMKMServicesSection from "../components/organisms/UMKMServicesSection";
import Footer from "./Footer";
import umkmProductsData from "../data/umkmProducts.json";

export default function Home() {
  const [showPromo, setShowPromo] = useState(false);

  const handlePromoClick = () => {
    setShowPromo(true);
  };

  return (
    <>
      <Header />
      <HeroSection />
      <section className="px-8 md:px-20 py-8 bg-white">
        <Filter />
      </section>
      {!showPromo && (
        <PromoBanner onClick={handlePromoClick} />
      )}
      {showPromo && <PromoSection />}
      <UMKMCarousel products={umkmProductsData} />
      <UMKMServicesSection />
      <Footer />
    </>
  );
}
