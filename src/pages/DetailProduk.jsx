import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaChartLine,
  FaCalendarAlt,
  FaFilePdf,
  FaMoneyBillWave,
} from "react-icons/fa";
import "./DetailProduk.css";

export default function DetailProduk() {
  const { state: product } = useLocation();
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  if (!product) return <div>Produk tidak ditemukan.</div>;

  const handleBeli = () => {
    if (!agreed) {
      setShowModal(true);
      return;
    }
    navigate("/detail-transaksi", { state: product });
  };

  return (
    <div className="detail-page">
      <div className="product-card grid-layout">
        {/* Kolom kiri - Gambar */}
        <div className="left-side">
          <div className="product-image-wrapper">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </div>
        </div>

        {/* Kolom kanan - Info */}
        <div className="right-side">
          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>

            <div className="product-return">
              <FaChartLine className="icon" />
              <div>
                <h3>{product.return}</h3>
                <p>Tingkat pengembalian 1 tahun</p>
              </div>
            </div>

            <div className="product-funds">
              <div className="product-nab">
                <FaMoneyBillWave className="icon" />
                <span>NAB: {product.nab}</span>
              </div>
              <div className="product-date">
                <FaCalendarAlt className="icon" />
                <span>NAB per {product.date}</span>
              </div>
            </div>

            <div className="glass-section">
              <h3>Deskripsi Produk</h3>
              <p>
                {product.longDesc ||
                  `TRIMEGAH KAS SYARIAH bertujuan untuk memperoleh pendapatan yang optimal berupa pertumbuhan nilai investasi dengan berusaha tetap mempertahankan nilai investasi awal dan memberikan tingkat likuiditas yang tinggi guna memenuhi kebutuhan dana tunai dalam waktu singkat melalui investasi yang sesuai dengan Prinsip Syariah di Pasar Modal pada Efek Syariah yang tercantum dalam Daftar Efek Syariah.`}
              </p>
            </div>

            <div className="glass-section">
              <h3>Kebijakan Investasi</h3>
              <ul>
                <li>Instrumen Pasar Uang Syariah: 100%</li>
                <li>Efek Bersifat Utang Syariah: 100%</li>
              </ul>
            </div>

            <div className="glass-section">
              <h3>Syarat & Ketentuan</h3>
              <ul>
                <li>Minimum pembelian: Rp 100.000</li>
                <li>Minimum top up: Rp 100.000</li>
                <li>Batas waktu transaksi & pembayaran: 12:00</li>
                <li>
                  Pembayaran dana hasil penjualan kembali: Maks 7 hari bursa
                </li>
              </ul>

              <div className="pdf-buttons">
                <button className="pdf-btn">
                  <FaFilePdf /> Prospectus
                </button>
                <button className="pdf-btn">
                  <FaFilePdf /> Fund Fact Sheet
                </button>
              </div>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                />
                Saya telah membaca, mengerti, dan menyetujui seluruh informasi
                pada Prospectus dan Fund Fact Sheet.
              </label>
            </div>

            <div className="action-buttons">
              <button className="back-btn" onClick={() => navigate(-1)}>
                <FaArrowLeft /> Kembali
              </button>
              <button className="buy-btn" onClick={handleBeli}>
                <FaShoppingCart /> Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 MODAL ELEGAN */}
      {showModal && (
        <div className="modal show">
          <div className="modal-content modern">
            <h3>⚠️ Persetujuan Diperlukan</h3>
            <p>
              Silakan centang kotak persetujuan terlebih dahulu sebelum melanjutkan
              pembelian produk.
            </p>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              Mengerti
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
