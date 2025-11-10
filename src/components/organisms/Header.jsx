import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../atoms/Button";
import SearchBar from "../molecules/SearchBar";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-[#F8FBFE] border-b border-[#E0E0E0] px-4 py-3 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      {/* Bagian Atas Header */}
      <div className="flex w-full items-center justify-between">
        {/* Mobile: Hamburger + Logo */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="text-[#4BA0E0] font-bold text-lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <h1 className="text-xl font-extrabold text-black">
            JajanMap
          </h1>
        </div>

        {/* Desktop: Logo */}
        <h1 className="hidden md:block text-2xl font-extrabold text-black">
          JajanMap
        </h1>

        {/* Mobile: Search Bar */}
        <div className="md:hidden">
          <SearchBar mobile={true} />
        </div>

        {/* Navigation (Desktop only) */}
        <nav className="hidden md:flex gap-8 text-gray-800 font-medium">
          <a href="#" className="hover:text-[#4BA0E0]">
            Home
          </a>
          <a href="#" className="hover:text-[#4BA0E0]">
            Promo
          </a>
          <Link to="/tentang-kami" className="hover:text-[#4BA0E0]">
            Tentang Kami
          </Link>
          <Link to="/kontak" className="hover:text-[#4BA0E0]">
            Kontak
          </Link>
        </nav>

        {/* Search + Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <SearchBar />
        </div>
      </div>

      {/* Menu dropdown untuk HP */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 flex flex-col items-center gap-3 py-4 shadow-lg md:hidden z-50">
          <a href="#" className="text-gray-800 font-medium hover:text-[#4BA0E0]">
            Home
          </a>
          <a href="#" className="text-gray-800 font-medium hover:text-[#4BA0E0]">
            Promo
          </a>
          <Link to="/tentang-kami" className="text-gray-800 font-medium hover:text-[#4BA0E0]">
            Tentang Kami
          </Link>
          <Link to="/kontak" className="text-gray-800 font-medium hover:text-[#4BA0E0]">
            Kontak
          </Link>
          <Button onClick={() => navigate("/submit")}>Tambah UMKM</Button>
        </div>
      )}
    </header>
  );
}
