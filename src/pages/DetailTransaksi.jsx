import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaCreditCard, FaChartLine, FaMoneyBillWave } from "react-icons/fa";
import "./DetailTransaksi.css";
import atmIcon from "../assets/img/atmbersama.jpg";
import altoIcon from "../assets/img/alto.png";
import primaIcon from "../assets/img/prima.png";
import pasar1 from "../assets/img/pasar1.png"; // gambar produk

export default function DetailTransaksi() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedAmount, setSelectedAmount] = useState("");

  const product = location.state || {
    name: "Trimegah Kas Syariah",
    type: "Reksa Dana Pasar Uang Syariah",
    image: pasar1,
    return: "5,31% per tahun",
    nab: "Rp 1.488,04",
    date: "29 Oktober 2025",
  };

  const amounts = [
    "100.000", "300.000", "500.000", "1.000.000",
    "100.000.000", "200.000.000", "500.000.000", "1.000.000.000"
  ];

  return (
    <div className="detail-transaksi-container">
      {/* === CARD UTAMA === */}
      <div className="transaksi-card">
        {/* Produk Info */}
        <div className="transaksi-section product-info">
          <h3>{product.name}</h3>
          <p>Tingkat pengembalian satu tahun</p>
          <p className="warning">
            *Kinerja Reksa Dana masa lalu tidak menjamin kinerja Reksa Dana masa depan
          </p>
          <div className="product-stats">
            <div><strong>Return:</strong> {product.return}</div>
            <div><strong>FUNDtastic+:</strong> {product.nab}</div>
            <div><strong>NAB per:</strong> {product.date}</div>
          </div>
        </div>

        {/* Nilai Transaksi */}
        <div className="transaksi-section">
          <h4>Nilai Transaksi</h4>
          <div className="amount-grid">
            {amounts.map((amt) => (
              <button
                key={amt}
                className={`amount-btn ${selectedAmount === amt ? "selected" : ""}`}
                onClick={() => setSelectedAmount(amt)}
              >
                Rp. {amt}
              </button>
            ))}
            <input
              type="number"
              placeholder="Lainnya"
              className="amount-input"
              value={selectedAmount.includes("Lainnya") ? selectedAmount.replace("Lainnya ", "") : ""}
              onChange={(e) => setSelectedAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="referal">
          <h4>Kode Referal</h4>
          <input 
            type="text" 
            placeholder="Masukan Kode Referal" 
          />
        </div>

        {/* Biaya & Total */}
        <div className="transaksi-section biaya-total">
          <div className="biaya">
            <h4>Biaya Transaksi</h4>
            <p>0%</p>
          </div>
          <div className="total">
            <h4>Total</h4>
            <p>Rp. {selectedAmount || "0,00"}</p>
          </div>
        </div>

        {/* Metode Pembayaran */}
        <div className="transaksi-section">
          <h4>Metode Pembayaran</h4>
          <div className="transfer-card">
            <span>Transfer (ATM BERSAMA, ALTO, PRIMA)</span>
            <div className="transfer-icons">
              <img src={atmIcon} alt="ATM BERSAMA" title="ATM BERSAMA" />
              <img src={altoIcon} alt="ALTO" title="ALTO" />
              <img src={primaIcon} alt="PRIMA" title="PRIMA" />
            </div>
          </div>
        </div>

        {/* Info Tambahan */}
        <div className="transaksi-note">
          <p>
            *Transaksi Subscription yang dilakukan pada Jam 12.00 WIB akan diproses dengan NAB Reksa Dana di hari bursa yang sama, 
            untuk transaksi yang dilakukan lebih dari jam 12.00 WIB akan diproses dengan NAB Reksa Dana hari bursa berikutnya.
          </p>
          <p>
            *Pembayaran pembelian Reksa Dana harus berasal dari rekening nasabah bersangkutan.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="btn-group">
          <button 
            className="transaksi-button back-btn" 
            onClick={() => navigate("/pilih-produk")}
          >
            <FaArrowLeft size={16} /> Kembali
          </button>
          <button 
            className="transaksi-button next-btn" 
            onClick={() => navigate("/profile")}
          >
            Lanjut ke Profil <FaCreditCard size={16} />
          </button>
        </div>
      </div>

      {/* === CARD PRODUK DIPILIH === */}
      <div className="selected-card-transaksi">
        <div className="selected-header-transaksi">Produk Dipilih</div>
        <div className="selected-content-transaksi">
          <img src={product.image} alt={product.name} className="selected-image-transaksi" />
          <h3 className="selected-title-transaksi">{product.name}</h3>
          <p className="selected-type-transaksi">{product.type}</p>
          <div className="selected-return-transaksi">
            <FaChartLine /> {product.return}
          </div>
          <div className="selected-nab-transaksi">
            <FaMoneyBillWave /> {product.nab}
          </div>
          <div className="selected-date-transaksi">NAB per {product.date}</div>
        </div>
      </div>
    </div>
  );
}
