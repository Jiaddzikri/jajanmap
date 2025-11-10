import React from "react";

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-b from-[#F9FBFE] to-[#EAF3FB] text-gray-800 py-16 px-8 md:px-20">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#4BA0E0] mb-4">
          Tentang Kami
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Kami hadir untuk memberdayakan pelaku <strong>UMKM lokal</strong> agar dapat tumbuh,
          dikenal, dan bersaing di era digital. Melalui platform kami, kami
          mempertemukan produk lokal berkualitas dengan pelanggan di seluruh Indonesia.
        </p>
      </div>

      {/* Visi & Misi */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-[#4BA0E0] mb-3">Visi Kami</h2>
          <p className="text-gray-700 leading-relaxed">
            Menjadi wadah utama yang mendukung pertumbuhan dan digitalisasi
            UMKM di Indonesia, dengan menciptakan ekosistem bisnis yang adil,
            inklusif, dan berkelanjutan.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-[#4BA0E0] mb-3">Misi Kami</h2>
          <ul className="text-gray-700 space-y-3 list-disc list-inside">
            <li>Mendorong transformasi digital untuk UMKM di seluruh Indonesia.</li>
            <li>Membuka akses pasar yang lebih luas bagi produk lokal.</li>
            <li>Meningkatkan kualitas dan daya saing pelaku UMKM.</li>
            <li>Menjadi penghubung antara UMKM, pelanggan, dan mitra bisnis.</li>
          </ul>
        </div>
      </div>

      {/* Nilai dan Komitmen */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl font-bold text-[#4BA0E0] mb-8">Nilai & Komitmen Kami</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Inovasi",
              desc: "Kami terus mengembangkan solusi digital untuk membantu UMKM beradaptasi dengan tren terbaru.",
            },
            {
              title: "Kolaborasi",
              desc: "Kami percaya kemajuan UMKM tercapai melalui kerja sama antara masyarakat, pelaku usaha, dan pemerintah.",
            },
            {
              title: "Keberlanjutan",
              desc: "Kami berkomitmen mendukung pertumbuhan ekonomi lokal yang berkelanjutan dan ramah lingkungan.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8"
            >
              <h3 className="text-xl font-bold text-[#4BA0E0] mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
