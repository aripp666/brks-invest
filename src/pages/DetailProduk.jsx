import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaChartLine,
  FaCalendarAlt,
  FaFilePdf,
  FaMoneyBillWave,
  FaTimes,
} from "react-icons/fa";
import "./DetailProduk.css";
import pasar1 from "../assets/img/pasar1.png"; // ✅ import gambar di sini

export default function DetailProduk() {
  const navigate = useNavigate();
  const [agreedInfo, setAgreedInfo] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const product = {
    name: "Trimegah Kas Syariah",
    image: pasar1,
    return: "5.10% per tahun",
    nab: "Rp 1,250.32",
    date: "08 November 2025",
    type: "Reksa Dana Pasar Uang Syariah",
  };

  // 🔒 Disable scroll saat modal terbuka
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    }
  }, [showModal]);

  const handleBeli = () => {
    if (!agreedInfo || !agreedTerms) {
      setShowModal(true);
      return;
    }
    navigate("/detail-transaksi", { state: product });
  };

  return (
    <div className={`detail-page ${showModal ? "blurred" : ""}`}>
      <div className="background-overlay"></div>

      <div className="detail-grid">
        {/* ======================== */}
        {/* KIRI - DETAIL PRODUK */}
        {/* ======================== */}
        <div className="product-detail-card">
          <div className="product-image-wrapper">
            <img src={product.image} alt={product.name} className="product-image" />
          </div>

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

            {/* Deskripsi Produk */}
            <div className="glass-section">
              <h3>Deskripsi Produk</h3>
              <p>
                TRIMEGAH KAS SYARIAH bertujuan untuk memperoleh pendapatan yang optimal berupa
                pertumbuhan nilai investasi dengan berusaha tetap mempertahankan nilai investasi
                awal dan memberikan tingkat likuiditas yang tinggi melalui investasi sesuai Prinsip
                Syariah di Pasar Modal.
              </p>
            </div>

            {/* Kebijakan Investasi */}
            <div className="glass-section">
              <h3>Kebijakan Investasi</h3>
              <ul>
                <li>Instrumen Pasar Uang Syariah : 100%</li>
                <li>Efek Bersifat Utang Syariah : 100%</li>
              </ul>
            </div>

            {/* Syarat dan Ketentuan */}
            <div className="glass-section">
              <h3>Syarat dan Ketentuan</h3>
              <ul>
                <li>Minimum pembelian: Rp. 100.000,00</li>
                <li>Minimum top up: Rp. 100.000,00</li>
                <li>Batas waktu transaksi: 12:00:00</li>
                <li>Batas waktu pembayaran: 12:00:00</li>
                <li>Pembayaran dana hasil penjualan kembali: Maksimum 7 hari bursa</li>
              </ul>

              <div className="pdf-buttons">
                <button className="pdf-btn">
                  <FaFilePdf /> Prospectus
                </button>
                <button className="pdf-btn">
                  <FaFilePdf /> Fund Fact Sheet
                </button>
              </div>

              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={agreedTerms}
                    onChange={() => {
                      setAgreedTerms(true);
                      setShowModal(true);
                    }}
                  />
                  Syarat dan Ketentuan transaksi Reksa Dana. Saya telah membaca, mengerti dan menyetujui seluruh informasi pada Prospectus dan Fund Fact Sheet.
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={agreedInfo}
                    onChange={() => setAgreedInfo(!agreedInfo)}
                  />
                  Proses pembayaran transaksi pembelian Reksa Dana baru dapat dilakukan setelah profil Anda telah terverifikasi dan SID terbentuk.
                </label>
              </div>
            </div>

            {/* Biaya Pembelian */}
            <div className="glass-section">
              <h3>Biaya Pembelian</h3>
              <table className="info-table">
                <thead>
                  <tr>
                    <th>Jumlah (Rp)</th>
                    <th>Biaya</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0 s.d 0</td>
                    <td>0%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Biaya Penjualan */}
            <div className="glass-section">
              <h3>Biaya Penjualan Kembali</h3>
              <table className="info-table">
                <thead>
                  <tr>
                    <th>Periode (Hari)</th>
                    <th>Biaya</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0 s.d 0</td>
                    <td>0%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tombol */}
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

        {/* ======================== */}
        {/* KANAN - PRODUK DIPILIH */}
        {/* ======================== */}
        <div className="selected-card">
          <div className="selected-header">Produk Dipilih</div>
          <div className="selected-content">
            <img src={product.image} alt={product.name} className="selected-image" />
            <h3 className="selected-title">{product.name}</h3>
            <p className="selected-type">{product.type}</p>
            <div className="selected-return">
              <FaChartLine /> {product.return}
            </div>
            <div className="selected-nab">
              <FaMoneyBillWave /> {product.nab}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show">
          <div className="modal-content large">
            <div className="modal-header">
              <h3>Syarat dan Ketentuan</h3>
              <FaTimes className="close-icon" onClick={() => setShowModal(false)} />
            </div>
            <div className="modal-body">
              <p>
                1. Reksa Dana Syariah adalah produk investasi yang diterbitkan dan dikelola oleh Manajer Investasi dan didistribusikan melalui Agen Penjual Efek Reksa Dana FUNDtastic+ serta Gerai Penjualan Bank Muamalat Indonesia yang telah mendapatkan ijin sesuai dengan ketentuan yang berlaku.
              </p>
              <p>
                2. Nasabah telah memahami risiko dari berinvestasi pada Reksa Dana Syariah ini..
              </p>
              <p>
                3. Reksa Dana Syariah adalah bukan produk Bank, dan Bank Muamalat bertindak sebagai sub agen pemasaran (Gerai Penjualan) dari Agen Penjual Reksa Dana FUNDtastic+, untuk itu Bank Muamalat tidak menjamin atas segala risiko penurunan nilai investasi atas produk Reksa Dana Syariah yang dimiliki oleh Nasabah serta Bank Muamalat Indonesia tidak akan bertindak sebagai stand by buyer atas setiap dan seluruh transaksi Reksa Dana Syariah yang dimiliki Nasabah, seluruh transaksi produk Reksa Dana Syariah tersebut adalah murni dilakukan oleh Nasabah dengan pihak Agen Penjual Efek Reksa Dana.
              </p>
              <p>
                4. Reksa Dana adalah instrumen investasi di pasar modal yang diterbitkan dan dikelola oleh Manajer Investasi bersama Bank Kustodian berdasarkan Kontrak Investasi Kolektif (KIK) dan bukan merupakan produk perbankan yang dijamin oleh Lembaga Penjamin Simpanan (LPS).
              </p>
              <p>
                5. Investasi pada Reksa Dana mengandung sejumlah risiko, yaitu risiko berkurangnya nilai Unit Penyertaan sebagai akibat fluktuasi harga efek yang mendasari (underlying) portofolio Reksa Dana dan risiko-risiko lain sebagaimana tercantum dalam Prospektus.
              </p>
              <p>
                6. Transaksi Trimegah Kas Syariah saya lakukan berdasarkan informasi dalam prospektus dan/atau fund fact sheet Trimegah Kas Syariah yang disampaikan oleh FUNDtastic+. Tidak terdapat dokumen penawaran Trimegah Kas Syariah dalam bentuk lain yang ditawarkan dan/atau dijanjikan FUNDtastic+. Saya memahami bahwa prospektus dan/atau fund fact sheet Trimegah Kas Syariah merupakan dokumen penawaran resmi dari Trimegah Kas Syariah yang dikelola oleh Manajer Investasi PT Trimegah Asset Management.
              </p>
              <p>
                7. Jika pada Hari Bursa, Transaksi Reksa Dana sebelum pukul 12.00 WIB, maka proses transaksi Unit Penyertaan Reksa Dana akan didasarkan pada Nilai Aktiva Bersih (”NAB”) per Unit Penyertaan pada penutupan Hari Bursa yang bersangkutan, dan untuk Transaksi Reksa Dana yang diterima setelah jam 12.00 WIB, proses pembelian akan didasarkan pada NAB per Unit Penyertaan pada Hari Bursa berikutnya.
              </p>
              <p>
                8. Bank Kustodian akan mentransfer dana hasil transaksi penjualan kembali Unit Penyertaan setelah dipotong biaya-biaya lain (jika ada) ke rekening nasabah bersangkutan yang terdaftar. Dana akan efektif diterima Nasabah selambat-lambatnya 7 (tujuh) Hari Bursa setelah transaksi penjualan di proses.
              </p>
              <p>
                9. Sesuai dengan surat dari KSEI nomor KSEI-0999/DIR/0422 tanggal 4 April 2022 bahwa akan ada pengenaan biaya Bea Materai atas transaksi yang dilakukan.
              </p>
            </div>
            <div className="modal-footer">
              <button className="close-btn" onClick={() => setShowModal(false)}>
                Mengerti
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
