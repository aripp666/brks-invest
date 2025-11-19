import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaChartPie,
  FaStar,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import pasar1 from "../assets/img/pasar1.png";
import pasar2 from "../assets/img/pasar2.png";
import pasar3 from "../assets/img/pasar3.png";
import "./PilihProduk.css";

export default function PilihProduk() {
  const [activeTab, setActiveTab] = useState("pasaruang");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const tabList = [
    { id: "pasaruang", label: "Reksa Dana Pasar Uang", icon: <FaMoneyBillWave /> },
    { id: "pendapatantetap", label: "Reksa Dana Pendapatan Tetap", icon: <FaChartLine /> },
    { id: "saham", label: "Reksa Dana Saham", icon: <FaChartPie /> },
  ];

  const products = {
    pasaruang: [
      { id: 1, name: "Insight Money Syariah", return: 6.1, nab: "Rp 1.714,09", date: "Oct 29, 2025", image: pasar2, top: true },
      { id: 2, name: "Trimegah Kas Syariah", return: 5.31, nab: "Rp 1.488,04", date: "Oct 29, 2025", image: pasar1 },
      { id: 3, name: "Eastspring Syariah Money Market", return: -3.13, nab: "Rp 1.198,05", date: "Oct 29, 2025", image: pasar1 },
    ],
    pendapatantetap: [
      { id: 4, name: "Mandiri Investa Obligasi Syariah", return: 7.8, nab: "Rp 2.114,11", date: "Oct 29, 2025", image: pasar1, top: true },
      { id: 5, name: "BNI-AM Dana Syariah", return: -6.75, nab: "Rp 1.933,54", date: "Oct 29, 2025", image: pasar1 },
    ],
    saham: [
      { id: 6, name: "Manulife Saham Syariah Asia Pasifik", return: 10.24, nab: "Rp 1.894,21", date: "Oct 29, 2025", image: pasar3 },
      { id: 7, name: "BNP Paribas Pesona Syariah", return: -9.61, nab: "Rp 1.788,32", date: "Oct 29, 2025", image: pasar1 },
    ],
  };

  const handleCardClick = (product) => {
    navigate(`/detail/${product.id}`, { state: product });
  };

  return (
    <div className="produk-page">
      <div className="produk-header" data-aos="fade-down">
        <h1 className="produk-title">
          <span className="highlight-green">BRK Syariah Invest </span>
        </h1>
        <p className="produk-subtitle">Berkah untuk Semua 🌿</p>
      </div>

      <div className="binder-tabs" data-aos="fade-up">
        {tabList.map((tab) => (
          <div
            key={tab.id}
            className={`binder-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="tab-inner">
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="produk-list">
        {products[activeTab].map((item, index) => {
          const isPositive = item.return >= 0;
          return (
            <div
              key={item.id}
              className="produk-card"
              data-aos="zoom-in"
              data-aos-delay={index * 120}
              onClick={() => handleCardClick(item)}
            >
              <div className="produk-image-wrapper">
                <img src={item.image} alt={item.name} className="produk-image" />
                {item.top && (
                  <div className="badge">
                    <FaStar /> Top Pick
                  </div>
                )}
                <div className="overlay">
                  <span>Lihat Detail</span>
                </div>
              </div>

              <div className="produk-info">
                <h3>{item.name}</h3>
                <p className="produk-description">
                  Tingkat pengembalian satu tahun. *Kinerja masa lalu tidak menjamin hasil masa depan.*
                </p>

                <div className="produk-stats">
                  {isPositive ? (
                    <FaArrowUp className="icon-stat up" />
                  ) : (
                    <FaArrowDown className="icon-stat down" />
                  )}
                  <h4 className={isPositive ? "positive" : "negative"}>
                    {Math.abs(item.return).toFixed(2)}%
                  </h4>
                  <span className="return">1 Tahun</span>
                </div>

                <div className="fund-info">
                  <span>BRKS Syariah Invest</span>
                  <span>{item.nab}</span>
                </div>
                <p className="date">NAB per {item.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
