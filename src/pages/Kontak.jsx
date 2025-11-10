import React from "react";
import { Mail } from "lucide-react"; // pastikan kamu sudah install lucide-react (ikon modern)

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-b from-[#F9FBFE] to-[#EAF3FB] py-20 px-8 md:px-20 flex flex-col items-center text-center">
      <div className="bg-white shadow-md rounded-2xl p-10 max-w-lg w-full">
        {/* Ikon Email */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#4BA0E0] p-4 rounded-full shadow-md">
            <Mail className="text-white w-10 h-10" />
          </div>
        </div>

        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#4BA0E0] mb-3">
          Kontak Kami
        </h2>

        {/* Deskripsi */}
        <p className="text-gray-600 mb-6">
          Jika Anda memiliki pertanyaan, kerja sama, atau membutuhkan bantuan, silakan hubungi kami melalui email berikut:
        </p>

        {/* Email */}
        <a
          href="mailto:umkm.kita@gmail.com"
          className="text-lg md:text-xl font-semibold text-[#4BA0E0] hover:underline"
        >
          umkm.kita@gmail.com
        </a>
      </div>
    </section>
  );
}
