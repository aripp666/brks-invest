import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
import logoBRK from "../assets/logo-brk.png";
import gedungBRK from "../assets/gedung-brk.jpeg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    navigate("/Dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Background gedung BRK */}
        <div className="login-background">
          <img src={gedungBRK} alt="Gedung BRK" />
          <div className="overlay"></div>
        </div>

        {/* Konten login */}
        <div className="login-content">
          <img src={logoBRK} alt="BRK Logo" className="login-logo" />
          <h1 className="login-title">Selamat Datang di BRK Syariah Invest</h1>
          <p className="login-subtitle">
            Masuk menggunakan akun BRK Syariah Invest Anda
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
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

            <button type="submit" className="login-btn">
              Masuk
            </button>
          </form>

          <p className="login-footer">
            Belum punya akun?{" "}
            <span
              className="login-register"
              onClick={() => navigate("/register")}
            >
              Daftar
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
