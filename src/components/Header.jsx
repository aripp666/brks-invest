import React, { useEffect, useState } from "react";
import "./Header.css";
import logoBRK from "../assets/logo-brk.png";
import { Link } from "react-router-dom";


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
  <Link to="/Dashboard" className="nav-link active">Portfolio</Link>
  <Link to="/pilih-produk" className="nav-link">Produk</Link>
  <Link to="/History" className="nav-link">Riwayat</Link>
  <Link to="/ProfileUser" className="nav-link">Profil</Link>
  <Link to="/Login" className="nav-link logout">Logout</Link>
</nav>
      </div>
    </header>
  );
}
