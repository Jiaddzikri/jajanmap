import React from "react";
import PropTypes from "prop-types";
import Button from "../atoms/Button";

export default function PromoBanner({ onClick }) {
  return (
    <div
      className="bg-gradient-to-r from-[#4BA0E0] to-[#3A8DC6] rounded-lg p-6 md:p-8 mx-6 md:mx-20 mt-0 mb-8 text-white shadow-md cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Promo Spesial Hari Ini!
          </h2>
          <p className="text-sm md:text-base opacity-90">
            Dapatkan diskon hingga 50% untuk UMKM favorit Anda. Klik untuk melihat semua promo!
          </p>
        </div>
      </div>
    </div>
  );
}

PromoBanner.propTypes = {
  onClick: PropTypes.func.isRequired,
};
