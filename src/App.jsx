import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import CategoryPage from "./pages/CategoryPage";
import SubmitForm from "./pages/SubmitForm";
import TentangKami from "./pages/TentangKami";
import Kontak from "./pages/Kontak";

function App() {
  return (
    <Router>
    <div className="min-h-screen bg-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/submit" element={<SubmitForm />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
