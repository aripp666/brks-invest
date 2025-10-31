import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaHistory } from "react-icons/fa";
import "./Success.css";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="checkmark-wrapper">
          <FaCheckCircle className="checkmark" />
        </div>
        <h2>Transaksi Berhasil!</h2>
        <p>Selamat! Transaksi dan data profil Kamu telah berhasil diproses oleh FUNDtastic+.</p>

        <div className="btn-group-success">
          <button className="success-button" onClick={() => navigate("/pilih-produk")}>
            Kembali ke Produk
          </button>
          <button className="history-button" onClick={() => navigate("/history")}>
            Riwayat Transaksi <FaHistory />
          </button>
        </div>
      </div>
    </div>
  );
}
