import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUserCheck, FaUpload } from "react-icons/fa";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    ktpNumber: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    ktpFile: null,
    selfieFile: null
  });

  const [ktpPreview, setKtpPreview] = useState(null);
  const [selfiePreview, setSelfiePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData({ ...formData, [name]: file });
      if (name === "ktpFile") setKtpPreview(URL.createObjectURL(file));
      if (name === "selfieFile") setSelfiePreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/konfirmasi");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Lengkapi Data Akun Kamu</h2>
        <p>Lengkapi data akun Kamu untuk didaftarkan ke FUNDtastic+</p>

        <form className="profile-form" onSubmit={handleSubmit}>

          {/* === Upload KTP dan Selfie Side by Side === */}
          <div className="upload-row">
            {/* Upload KTP */}
            <div className="file-uploader">
              <label>KTP</label>
              <input
                type="file"
                name="ktpFile"
                onChange={handleChange}
                accept="image/*"
              />
              <div className="upload-preview">
                {ktpPreview ? (
                  <img src={ktpPreview} alt="KTP Preview" />
                ) : (
                  <div className="placeholder">
                    <FaUpload size={24} />
                    <span>Upload KTP</span>
                  </div>
                )}
              </div>
            </div>

            {/* Upload Selfie KTP */}
            <div className="file-uploader">
              <label>Selfie dengan KTP</label>
              <input
                type="file"
                name="selfieFile"
                onChange={handleChange}
                accept="image/*"
              />
              <div className="upload-preview">
                {selfiePreview ? (
                  <img src={selfiePreview} alt="Selfie Preview" />
                ) : (
                  <div className="placeholder">
                    <FaUpload size={24} />
                    <span>Upload Selfie</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Form Data */}
          <label>Nama Lengkap*</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Nomor KTP*</label>
          <input
            type="text"
            name="ktpNumber"
            value={formData.ktpNumber}
            onChange={handleChange}
            required
          />

          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Nomor Handphone (62-8XXXXXXX) *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Password*</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Konfirmasi Password*</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {/* Tombol */}
          <div className="btn-group">
            <button
              type="button"
              className="profile-button back-btn"
              onClick={() => navigate("/detail-transaksi")}
            >
              <FaArrowLeft size={16} /> Kembali
            </button>
            <button type="submit" className="profile-button next-btn">
              Daftar <FaUserCheck size={16} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
