import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import "./Konfirmasi.css";

export default function Konfirmasi() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [agree, setAgree] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const profil = {
    nama: "Arif Ilham",
    ktp: "08908492081904802",
    email: "ilham22ti@mahasiswa.pcr.ac.id",
    phone: "620-8228202565",
  };

  const transaksi = {
    produk: "Eastspring Syariah Money Market Khazanah",
    nilai: "Rp. 100.000,00",
    biaya: "Rp. 0,00",
    total: "Rp. 100.000,00",
    metode: "Transfer"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      setShowModal(true);
      return;
    }
    console.log({ otp });
    navigate("/success");
  };

  return (
    <div className="konfirmasi-container">
      <div className="konfirmasi-card">
        <h2>Konfirmasi Data</h2>
        <p>Pastikan kembali data profil dan transaksi Kamu sudah sesuai sebelum di daftarkan ke FUNDtastic+</p>

        {/* Profil */}
        <div className="info-card">
          <h3>Profil</h3>
          <div className="info-row"><span>Nama</span><span>{profil.nama}</span></div>
          <div className="info-row"><span>Nomor KTP</span><span>{profil.ktp}</span></div>
          <div className="info-row"><span>Email</span><span>{profil.email}</span></div>
          <div className="info-row"><span>Nomor Handphone</span><span>{profil.phone}</span></div>
        </div>

        {/* Transaksi */}
        <div className="info-card">
          <h3>Transaksi</h3>
          <div className="info-row"><span>Nama Produk</span><span>{transaksi.produk}</span></div>
          <div className="info-row"><span>Nilai Transaksi</span><span>{transaksi.nilai}</span></div>
          <div className="info-row"><span>Biaya Transaksi</span><span>{transaksi.biaya}</span></div>
          <div className="info-row"><span>Total</span><span>{transaksi.total}</span></div>
          <div className="info-row"><span>Metode Pembayaran</span><span>{transaksi.metode}</span></div>
          <p className="note">* Transaksi Kamu akan diproses setelah data Kamu diverifikasi oleh petugas FUNDtastic+</p>
        </div>

        {/* OTP Input */}
        <div className="otp-section">
          <label>Masukan OTP untuk verifikasi email Kamu</label>
          <input 
            type="text" 
            value={otp} 
            onChange={(e) => setOtp(e.target.value)} 
            placeholder="Kode OTP"
          />
        </div>

        {/* Checkbox */}
        <div className="checkbox-section">
          <input 
            type="checkbox" 
            id="agree" 
            checked={agree} 
            onChange={() => setAgree(!agree)}
          />
          <label htmlFor="agree">Saya telah membaca dan menyetujui Syarat dan Ketentuan dalam aplikasi ini.</label>
        </div>

        {/* Tombol */}
        <div className="btn-group">
          <button className="konfirmasi-button back-btn" onClick={() => navigate("/profile")}>
            <FaArrowLeft /> Kembali
          </button>
          <button className="konfirmasi-button next-btn" onClick={handleSubmit}>
            Konfirmasi <FaCheckCircle />
          </button>
        </div>
      </div>

      {/* MODAL PERSYARATAN */}
      {showModal && (
        <div className="modal show">
          <div className="modal-content modern">
            <h3>⚠️ Persetujuan Diperlukan</h3>
            <p>Silakan centang kotak persetujuan terlebih dahulu sebelum melanjutkan konfirmasi data.</p>
            <button className="close-btn" onClick={() => setShowModal(false)}>Mengerti</button>
          </div>
        </div>
      )}
    </div>
  );
}
