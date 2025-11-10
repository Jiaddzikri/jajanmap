import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";

export default function SubmitForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    namaPengusul: "",
    nomorHp: "",
    namaUmkm: "",
    jalan: "",
    koordinat: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    alert("Terima kasih! Data UMKM Anda telah dikirim untuk verifikasi.");
    // Reset form
    setFormData({
      namaPengusul: "",
      nomorHp: "",
      namaUmkm: "",
      jalan: "",
      koordinat: ""
    });
  };

  return (
    <div className="min-h-screen bg-[#F8FBFE] py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Tambah UMKM Baru
            </h1>
            <p className="text-gray-600">
              Isi formulir di bawah ini untuk menambahkan UMKM Anda ke JajanMap
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="namaPengusul" className="block text-sm font-medium text-gray-700 mb-2">
                Nama Pengusul *
              </label>
              <input
                type="text"
                id="namaPengusul"
                name="namaPengusul"
                value={formData.namaPengusul}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4BA0E0] focus:border-transparent outline-none transition-colors"
                placeholder="Masukkan nama lengkap Anda"
              />
            </div>

            <div>
              <label htmlFor="nomorHp" className="block text-sm font-medium text-gray-700 mb-2">
                Nomor HP Pengusul *
              </label>
              <input
                type="tel"
                id="nomorHp"
                name="nomorHp"
                value={formData.nomorHp}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4BA0E0] focus:border-transparent outline-none transition-colors"
                placeholder="Contoh: 081234567890"
              />
            </div>

            <div>
              <label htmlFor="namaUmkm" className="block text-sm font-medium text-gray-700 mb-2">
                Nama UMKM *
              </label>
              <input
                type="text"
                id="namaUmkm"
                name="namaUmkm"
                value={formData.namaUmkm}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4BA0E0] focus:border-transparent outline-none transition-colors"
                placeholder="Masukkan nama usaha Anda"
              />
            </div>

            <div>
              <label htmlFor="jalan" className="block text-sm font-medium text-gray-700 mb-2">
                Jalan *
              </label>
              <textarea
                id="jalan"
                name="jalan"
                value={formData.jalan}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4BA0E0] focus:border-transparent outline-none transition-colors resize-none"
                placeholder="Masukkan alamat lengkap lokasi UMKM"
              />
            </div>

            <div>
              <label htmlFor="koordinat" className="block text-sm font-medium text-gray-700 mb-2">
                Titik Koordinat *
              </label>
              <input
                type="text"
                id="koordinat"
                name="koordinat"
                value={formData.koordinat}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4BA0E0] focus:border-transparent outline-none transition-colors"
                placeholder="Contoh: -6.2088,106.8456 (latitude,longitude)"
              />
              <p className="text-xs text-gray-500 mt-1">
                Dapatkan koordinat dari Google Maps atau aplikasi GPS lainnya
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate("/")}
                className="flex-1"
              >
                Batal
              </Button>
              <Button type="submit" className="flex-1">
                Kirim
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
