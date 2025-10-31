import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./History.css";

export default function History() {
  const navigate = useNavigate();

  const [selectedTx, setSelectedTx] = useState(null);

  // Contoh data transaksi
  const transactions = [
    {
      date: "29/04/2025",
      time: "16:17",
      orderNo: "025042946474",
      investNo: "I2504124018",
      product: "Insight Money Syariah",
      type: "Subscription",
      method: "Transfer Manual",
      status: "Cancelled",
      amount: "Rp. 100.000,00",
      fee: "Rp. 0,00",
      total: "Rp. 100.000,00",
    },
    {
      date: "28/04/2025",
      time: "10:20",
      orderNo: "025042946473",
      investNo: "I2504124017",
      product: "Trimegah Kas Syariah",
      type: "Subscription",
      method: "E-Wallet",
      status: "Completed",
      amount: "Rp. 300.000,00",
      fee: "Rp. 0,00",
      total: "Rp. 300.000,00",
    },
  ];

  return (
    <div className="history-container">
      <div className="history-card">
        <h2>Riwayat Transaksi</h2>
        <p>Kelola dan lihat detail transaksi Kamu.</p>

        <div className="history-layout">
          {/* Kiri: Form Pencarian */}
          <div className="history-left">
            <h3>Formulir Cari Riwayat Transaksi</h3>
            <form className="history-form">
              <label>No. Rekening Investasi*</label>
              <select>
                <option>Pilih No Rekening</option>
                <option>I2504124018</option>
                <option>I2504124017</option>
              </select>

              <label>Nama Produk</label>
              <select>
                <option>Pilih Nama Produk</option>
                <option>Insight Money Syariah</option>
                <option>Trimegah Kas Syariah</option>
              </select>

              <label>Tanggal Mulai</label>
              <input type="date" />

              <label>Tanggal Selesai</label>
              <input type="date" />

              <label>Tipe Transaksi</label>
              <select>
                <option>Subscription</option>
                <option>Redemption</option>
              </select>

              <label>Status Transaksi</label>
              <select>
                <option>Completed</option>
                <option>Cancelled</option>
                <option>Pending</option>
              </select>

              <div className="form-btns">
                <button type="reset">Hapus</button>
                <button type="submit">Cari</button>
              </div>

              <h4>Daftar Transaksi</h4>
              <ul className="tx-list">
                {transactions.map((tx, index) => (
                  <li
                    key={index}
                    className={selectedTx === tx ? "selected" : ""}
                    onClick={() => setSelectedTx(tx)}
                  >
                    {tx.product} - {tx.date}
                  </li>
                ))}
              </ul>
            </form>
          </div>

          {/* Kanan: Detail Transaksi */}
          <div className="history-right">
            {selectedTx ? (
              <div className="tx-detail">
                <h3>Detail Transaksi</h3>
                <p><strong>Tanggal Transaksi:</strong> {selectedTx.date}</p>
                <p><strong>Waktu Transaksi:</strong> {selectedTx.time}</p>
                <p><strong>No. Pesanan:</strong> {selectedTx.orderNo}</p>
                <p><strong>No. Rek. Investasi:</strong> {selectedTx.investNo}</p>
                <p><strong>Nama Produk:</strong> {selectedTx.product}</p>
                <p><strong>Tipe Transaksi:</strong> {selectedTx.type}</p>
                <p><strong>Cara Pembayaran:</strong> {selectedTx.method}</p>
                <p className={selectedTx.status === "Cancelled" ? "status-cancel" : "status-complete"}>
                  <strong>Status:</strong> {selectedTx.status}
                </p>
                <p><strong>Nilai Transaksi:</strong> {selectedTx.amount}</p>
                <p><strong>Biaya Transaksi:</strong> {selectedTx.fee}</p>
                <p><strong>Total Transaksi:</strong> {selectedTx.total}</p>
                <button className="tx-target-btn">Lihat Tujuan Pembayaran</button>
              </div>
            ) : (
              <div className="tx-detail empty">Pilih transaksi untuk melihat detail</div>
            )}
          </div>
        </div>

        <button className="history-back-button" onClick={() => navigate("/pilih-produk")}>
          Kembali ke Produk
        </button>
      </div>
    </div>
  );
}
