import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCreditCard } from "react-icons/fa";
import "./DetailTransaksi.css";
import atmIcon from "../assets/img/atmbersama.jpg";
import altoIcon from "../assets/img/alto.png";
import primaIcon from "../assets/img/prima.png";


export default function DetailTransaksi() {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState("");

  const amounts = [
    "100.000", "300.000", "500.000", "1.000.000",
    "100.000.000", "200.000.000", "500.000.000", "1.000.000.000"
  ];

  return (
    <div className="detail-transaksi-container">
      <div className="transaksi-card">

        {/* Produk Info */}
        <div className="transaksi-section product-info">
          <h3>Trimegah Kas Syariah</h3>
          <p>Tingkat pengembalian satu tahun</p>
          <p className="warning">
            *Kinerja Reksa Dana masa lalu tidak menjamin kinerja Reksa Dana masa depan
          </p>
          <div className="product-stats">
            <div><strong>Return:</strong> 5,31%</div>
            <div><strong>FUNDtastic+:</strong> Rp. 1.488,04</div>
            <div><strong>NAB per:</strong> 29/10/2025</div>
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
    </div>
  );
}
