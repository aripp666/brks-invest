import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import StepperMelayu from "./components/Stepper";
import PilihProduk from "./pages/PilihProduk";
import DetailTransaksi from "./pages/DetailTransaksi";
import Profile from "./pages/Profile";
import Konfirmasi from "./pages/Konfirmasi";
import DetailProduk from "./pages/DetailProduk";
import Success from "./pages/Success";
import History from "./pages/History";



function LayoutWithStepper() {
  const location = useLocation();

  // Tentukan step aktif berdasarkan URL
  const getActiveStep = () => {
    switch (location.pathname) {
      case "/":
      case "/pilih-produk":
        return 0;
      case "/detail-transaksi":
        return 1;
      case "/profile":
        return 2;
      case "/konfirmasi":
        return 3;
      default:
        return 0;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <StepperMelayu activeStepFromParent={getActiveStep()} />
      <div style={{ marginTop: "40px" }}>
        <Routes>
          <Route path="/" element={<PilihProduk />} />
          <Route path="/pilih-produk" element={<PilihProduk />} />
          <Route path="/detail/:id" element={<DetailProduk />} />
          <Route path="/detail-transaksi" element={<DetailTransaksi />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/konfirmasi" element={<Konfirmasi />} />
          <Route path="/success" element={<Success />} />
          <Route path="/history" element={<History />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <LayoutWithStepper />
    </Router>
  );
}
