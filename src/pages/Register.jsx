import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Register.css";
import logoBRK from "../assets/logo-brk.png";
import gedungBRK from "../assets/gedung-brk.jpeg"; // background gedung

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password dan Konfirmasi Password tidak sama!");
      return;
    }
    console.log("Full Name:", fullName, "Email:", email, "Password:", password);
    navigate("/login"); // redirect ke login setelah registrasi
  };

  return (
    <div className="register-page">
      <div className="register-card">
        {/* Background gedung */}
        <div className="register-background">
          <img src={gedungBRK} alt="Gedung BRK" />
          <div className="overlay"></div>
        </div>

        <div className="register-content">
          <img src={logoBRK} alt="BRK Logo" className="register-logo" />
          <h1 className="register-title">Daftar Akun BRKS Invest</h1>
          <p className="register-subtitle">
            Buat akun untuk mulai menggunakan layanan Bank Riau Kepri Syariah Invest
          </p>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group password-group">
              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="form-group password-group">
              <label>Konfirmasi Password</label>
              <div className="password-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Masukkan ulang password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button type="submit" className="register-btn">
              Daftar
            </button>
          </form>

          <p className="register-footer">
            Sudah punya akun?{" "}
            <span className="register-login" onClick={() => navigate("/login")}>
              Masuk
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
