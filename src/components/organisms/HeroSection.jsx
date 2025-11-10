import React from "react";
import Button from "../atoms/Button";
import HeroIcon from "../../assets/Hero/HeroIcon.webp";

export default function HeroSection() {
  return (
    <section className="flex flex-wrap items-center justify-center md:justify-between gap-6 px-6 md:px-20 py-6 bg-[#F8FBFE] 
                        border border-black/30 rounded-2xl shadow-sm mx-4 md:mx-20 mt-8">
      {/* Gambar Hero */}
      <div className="flex-1 min-w-[200px] flex justify-center order-1 md:order-2">
        <img
          src={HeroIcon}
          alt="UMKM Booth"
          className="w-56 h-56 md:w-80 md:h-80 object-contain"
        />
      </div>

      {/* Teks Hero */}
      <div className="flex-1 min-w-[260px] max-w-md text-left order-2 md:order-1">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
          Temukan dan Dukung UMKM Lokal di Sekitarmu!
        </h1>
        <p className="text-gray-600 mb-6">
          Jelajahi produk dan layanan unggulan dari pelaku usaha lokal di sekitar Anda.
        </p>
        <Button>Temukan UMKM Terdekat</Button>
      </div>
    </section>
  );
}
