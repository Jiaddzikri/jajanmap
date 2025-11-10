import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 py-6 text-center text-sm">
      <div className="space-y-2">
        <div className="flex justify-center space-x-6 font-medium">
          <a href="#" className="hover:underline">
            Kebijakan privasi
          </a>
          <a href="#" className="hover:underline">
            Syarat dan ketentuan
          </a>
          <a href="#" className="hover:underline">
            Ikuti kami
          </a>
        </div>

        <p className="text-gray-600 mt-2">
          © 2025 <span className="font-semibold">JajanMap</span> | JajanMap adalah platform
          untuk mendukung UMKM lokal.
        </p>
      </div>
    </footer>
  );
}
