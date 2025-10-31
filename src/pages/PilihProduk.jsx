import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaChartPie,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import "./PilihProduk.css";
import pasar1 from "../assets/img/pasar1.png";

export default function PilihProduk() {
  const [activeTab, setActiveTab] = useState("pasaruang");
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState([]);

  const tabList = [
    { id: "pasaruang", label: "Reksa Dana Pasar Uang", icon: <FaMoneyBillWave /> },
    { id: "pendapatantetap", label: "Reksa Dana Pendapatan Tetap", icon: <FaChartLine /> },
    { id: "saham", label: "Reksa Dana Saham", icon: <FaChartPie /> },
    { id: "terproteksi", label: "Reksa Dana Terproteksi", icon: <FaShieldAlt /> },
  ];

  const products = {
    pasaruang: [
      { id: 1, name: "Insight Money Syariah", return: "6,10%", nab: "Rp 1.714,09", date: "Oct 29, 2025", image: pasar1, desc: "Reksa dana pasar uang berbasis syariah dengan risiko rendah dan likuiditas tinggi.", top: true },
      { id: 2, name: "Trimegah Kas Syariah", return: "5,31%", nab: "Rp 1.488,04", date: "Oct 29, 2025", image: pasar1, desc: "Produk investasi syariah berfokus pada pasar uang domestik dengan return stabil." },
      { id: 3, name: "Eastspring Syariah Money Market", return: "3,13%", nab: "Rp 1.198,05", date: "Oct 29, 2025", image: pasar1, desc: "Cocok bagi investor yang mengutamakan stabilitas dan keamanan modal." },
    ],
    pendapatantetap: [
      { id: 4, name: "Mandiri Investa Obligasi Syariah", return: "7,80%", nab: "Rp 2.114,11", date: "Oct 29, 2025", image: pasar1, desc: "Fokus pada obligasi syariah jangka menengah dengan hasil menarik.", top: true },
      { id: 5, name: "BNI-AM Dana Syariah", return: "6,75%", nab: "Rp 1.933,54", date: "Oct 29, 2025", image: pasar1, desc: "Investasi stabil dengan prinsip syariah dan risiko menengah." },
    ],
    saham: [
      { id: 6, name: "Manulife Saham Syariah Asia Pasifik", return: "10,24%", nab: "Rp 1.894,21", date: "Oct 29, 2025", image: pasar1, desc: "Investasi berbasis saham syariah dengan peluang pertumbuhan tinggi." },
      { id: 7, name: "BNP Paribas Pesona Syariah", return: "9,61%", nab: "Rp 1.788,32", date: "Oct 29, 2025", image: pasar1, desc: "Diversifikasi portofolio saham syariah terbaik di Indonesia." },
    ],
    terproteksi: [
      { id: 8, name: "Bahana Dana Proteksi Syariah", return: "4,25%", nab: "Rp 1.220,15", date: "Oct 29, 2025", image: pasar1, desc: "Memberikan perlindungan modal sekaligus potensi keuntungan syariah." },
      { id: 9, name: "CIMB-Principal Protected Fund Syariah", return: "3,92%", nab: "Rp 1.145,28", date: "Oct 29, 2025", image: pasar1, desc: "Fokus pada keamanan modal dengan instrumen investasi berbasis syariah." },
    ],
  };

  const handleCardClick = (product) => {
    navigate(`/detail/${product.id}`, { state: product });
  };

  // Scroll animation
//   useEffect(() => {
//     const handleScroll = () => {
//       const cards = document.querySelectorAll(".produk-card");
//       const triggerBottom = window.innerHeight * 0.85;
//       cards.forEach((card) => {
//         const cardTop = card.getBoundingClientRect().top;
//         if (cardTop < triggerBottom) {
//           card.classList.add("show");
//         } else {
//           card.classList.remove("show");
//         }
//       });
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [activeTab]);

  return (
    <div className="produk-page">
      <div className="binder-tabs">
        {tabList.map((tab) => (
          <div
            key={tab.id}
            className={`binder-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
            {activeTab === tab.id && <div className="binder-divider" />}
          </div>
        ))}
      </div>

      <div className="produk-list">
        {products[activeTab].map((item) => (
          <div key={item.id} className="produk-card">
            <div className="produk-image-wrapper" onClick={() => handleCardClick(item)}>
              <img src={item.image} alt={item.name} className="produk-image" />
              <div className="overlay"><span>Selengkapnya</span></div>
              {item.top && <div className="badge"><FaStar /> Top Pick</div>}
            </div>
            <div className="produk-info">
              <h3>{item.name}</h3>
              <p className="desc">{item.desc}</p>
              <div className="produk-stats">
                <FaChartLine className="icon-stat"/>
                <h4>{item.return}</h4>
                <span className="return">1 Tahun</span>
              </div>
              <div className="fund-info">
                <span>FUNDtastic+</span>
                <span>{item.nab}</span>
              </div>
              <p className="date">NAB per {item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
