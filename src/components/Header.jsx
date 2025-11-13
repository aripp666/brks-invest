import React, { useEffect, useState } from "react";
import "./Header.css";
import logoBRK from "../assets/logo-brk.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* 🏦 Logo & Title */}
        <div className="header-left">
          <img
            src={logoBRK} // 👉 ganti dengan path logo kamu
            alt="BRKS Logo"
            className="header-logo"
          />
          {/* <h1 className="header-title">BRKS-Invest</h1> */}
        </div>

        {/* 🔗 Navigation Menu */}
        <nav className="header-right">
          <a href="/Dashboard#" className="nav-link active">Portfolio</a>
          <a href="/pilih-produk" className="nav-link">Produk</a>
          <a href="/History" className="nav-link">Riwayat</a>
          <a href="/ProfileUser" className="nav-link">Profil</a>
          <a href="/Login" className="nav-link logout">Logout</a>
        </nav>
      </div>
    </header>
  );
}
