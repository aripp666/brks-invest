import React from "react";
import Header from "../components/Header"; // pastikan path-nya benar
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "./Dashboard.css";

const steps = [
  "Lengkapi data KYC pada profil",
  "Menunggu approval status menjadi VER dari FUNDtastic+",
  "Silahkan lakukan transaksi",
  "Upload Bukti Pembayaran di Riwayat",
  "Transaksi akan diproses, silahkan menunggu Portofolio",
];

export default function Dashboard() {
  const activeStep = 4;

  return (
    <div className="dashboard-page">
      {/* Header Komponen */}
      <Header />

      {/* Main Content */}
      <main className="dashboard-content">
        <section className="dashboard-card">
          <h2 className="section-title">Langkah Proses Investasi</h2>
          <Box sx={{ width: "100%", mt: 2 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </section>

        {/* Status Akun */}
        <section className="dashboard-card">
          <h2 className="section-title">👤 Status Akun</h2>
          <div className="status-grid">
            <div className="status-box">
              <span className="status-label">Status:</span>
              <span className="status-value">VER</span>
            </div>
            <div className="status-box">
              <span className="status-label">Nama:</span>
              <span className="status-value">Anggia Puspita</span>
            </div>
            <div className="status-box">
              <span className="status-label">Profil Risiko:</span>
              <span className="status-value">Conservative</span>
            </div>
            <div className="status-box">
              <span className="status-label">Total Investasi:</span>
              <span className="status-value">Rp. 0,00</span>
            </div>
            <div className="status-box">
              <span className="status-label">Total Perkiraan Nilai Pasar:</span>
              <span className="status-value">Rp. 0,00</span>
            </div>
            <div className="status-box">
              <span className="status-label">Total Perkiraan Untung/Rugi:</span>
              <span className="status-value">Rp. 0,00</span>
            </div>
          </div>
        </section>

        {/* Produk Reksa Dana */}
        <section className="dashboard-card">
          <h2 className="section-title">💰 Produk Reksa Dana</h2>
          <p className="empty-text">
            Belum ada produk yang ditampilkan. Silakan pilih produk investasi untuk memulai.
          </p>
        </section>
      </main>
    </div>
  );
}
