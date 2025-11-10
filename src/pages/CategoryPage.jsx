import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/organisms/Header";
import HeroSection from "../components/organisms/HeroSection";
import PromoBanner from "../components/molecules/PromoBanner";
import UMKMCarousel from "../components/organisms/UMKMCarousel";
import Footer from "./Footer";
import umkmProductsData from "../data/umkmProducts.json";
import umkmServicesData from "../data/umkmServices.json";

export default function CategoryPage() {
  const { category } = useParams();
  const [showPromo, setShowPromo] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category === "all") {
      setFilteredProducts([...umkmProductsData, ...umkmServicesData]); // Show all products and services for "all"
    } else {
      const categoryProducts = umkmProductsData.filter(product => product.category === category);
      const categoryServices = umkmServicesData.filter(service => service.category === category);
      setFilteredProducts([...categoryProducts, ...categoryServices]);
    }
  }, [category]);

  const handlePromoClick = () => {
    setShowPromo(true);
  };

  return (
    <>
      <Header />
      <HeroSection />
      <section className="px-8 md:px-20 py-8 bg-white">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
          Kategori: {category === "all" ? "Semua" : category.charAt(0).toUpperCase() + category.slice(1)}
        </h2>
      </section>
      {!showPromo && (
        <PromoBanner onClick={handlePromoClick} />
      )}
      {showPromo && <PromoSection />}
      <UMKMCarousel products={filteredProducts} />
      <Footer />
    </>
  );
}
