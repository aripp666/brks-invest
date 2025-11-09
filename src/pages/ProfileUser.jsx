import React, { useState } from "react";
import {
  FaIdCard,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaVenusMars,
  FaHome,
  FaRegFileAlt,
  FaUniversity,
  FaFileInvoiceDollar,
  FaUserShield,
  FaUserEdit,
  FaLock,
  FaUpload,
} from "react-icons/fa";
import "./ProfileUser.css";

const ProfileUser = () => {
  const [activeMenu, setActiveMenu] = useState("Alamat Sesuai KTP");

  const [userData, setUserData] = useState({
    fullName: "Arif Yanto",
    ktpNumber: "1234567890123456",
    email: "arif@example.com",
    phone: "628228202565",
    placeOfBirth: "Pekanbaru",
    dateOfBirth: "2004-08-28",
    gender: "Laki-Laki",
    alamatKTP: {
      negara: "Indonesia",
      provinsi: "RIAU",
      kota: "PEKANBARU",
      kodePos: "28128",
      alamat: "Jalan Jalan No 88 Pekanbaru",
      telepon: "62-822-8202565",
    },
    alamatSurat: {
      negara: "Indonesia",
      provinsi: "RIAU",
      kota: "PEKANBARU",
      kodePos: "28128",
      alamat: "Jalan Jalan No 88 Pekanbaru",
      telepon: "62-822-8202565",
    },
    profilInvestasi: {
      totalAsset: "Rp 100 juta s/d 1 miliar",
      sumberPendapatan: "Gaji",
      pendapatanTahunan: "Rp 50 s/d 100 juta",
      tujuanInvestasi: "Investasi",
      pengalamanInvestasi: "Saham",
    },
    dataRekening: {
      namaBank: "PT. BANK MANDIRI SYARIAH.",
      pemilik: "Arif",
      noRekening: "8374893789",
    },
    fatca: "No",
    riskProfile: {
      tujuanInvestasi: "",
      jangkaWaktu: "",
      pemahamanInstrumen: "",
      skenarioRugi: "",
      komposisiInvestasi: "",
      persentaseAset: "",
    },
    passwordLama: "",
    passwordBaru: "",
    konfirmasiPasswordBaru: "",
    fotoKTP: null,
    fotoSelfieKTP: null,
  });

  const handleChange = (section, field, value) => {
    if (section) {
      setUserData({
        ...userData,
        [section]: { ...userData[section], [field]: value },
      });
    } else {
      setUserData({ ...userData, [field]: value });
    }
  };

  const menuItems = [
    { title: "Alamat Sesuai KTP", icon: <FaHome /> },
    { title: "Alamat Surat Menyurat", icon: <FaMapMarkerAlt /> },
    { title: "Profil Investasi", icon: <FaRegFileAlt /> },
    { title: "Data Rekening Bank", icon: <FaUniversity /> },
    { title: "FATCA", icon: <FaFileInvoiceDollar /> },
    { title: "Risk Profile", icon: <FaUserShield /> },
    { title: "Foto / Scan KTP", icon: <FaIdCard /> },
    { title: "Foto Selfie dengan KTP", icon: <FaUserEdit /> },
    { title: "Ubah Password (Optional)", icon: <FaLock /> },
  ];

  const renderMenuDetail = () => {
    switch (activeMenu) {
      case "Alamat Sesuai KTP":
        return (
          <div className="profileUser-menu-detail-content">
            <h4>Alamat Sesuai KTP</h4>
            {["negara","provinsi","kota","kodePos","alamat","telepon"].map((field) => (
              <div key={field}>
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type="text"
                  value={userData.alamatKTP[field]}
                  onChange={(e) => handleChange("alamatKTP", field, e.target.value)}
                />
              </div>
            ))}
          </div>
        );
      case "Alamat Surat Menyurat":
        return (
          <div className="profileUser-menu-detail-content">
            <h4>Alamat Surat Menyurat</h4>
            {["negara","provinsi","kota","kodePos","alamat","telepon"].map((field) => (
              <div key={field}>
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type="text"
                  value={userData.alamatSurat[field]}
                  onChange={(e) => handleChange("alamatSurat", field, e.target.value)}
                />
              </div>
            ))}
          </div>
        );
      case "Profil Investasi":
        return (
          <div className="profileUser-menu-detail-content">
            <h4>Profil Investasi</h4>
            {Object.keys(userData.profilInvestasi).map((field) => (
              <div key={field}>
                <label>{field}</label>
                <select
                  value={userData.profilInvestasi[field]}
                  onChange={(e) => handleChange("profilInvestasi", field, e.target.value)}
                >
                  <option>{userData.profilInvestasi[field]}</option>
                </select>
              </div>
            ))}
          </div>
        );
      case "Data Rekening Bank":
        return (
          <div className="profileUser-menu-detail-content">
            <h4>Data Rekening Bank</h4>
            {Object.keys(userData.dataRekening).map((field) => (
              <div key={field}>
                <label>{field}</label>
                <input
                  type="text"
                  value={userData.dataRekening[field]}
                  onChange={(e) => handleChange("dataRekening", field, e.target.value)}
                />
              </div>
            ))}
          </div>
        );
      case "FATCA":
        return (
          <div className="profileUser-menu-detail-content">
            <h4>FATCA</h4>
            <label>Are you a U.S citizen?</label>
            <select
              value={userData.fatca}
              onChange={(e) => handleChange(null, "fatca", e.target.value)}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
            <label>Are you a U.S resident?</label>
            <select
              value={userData.fatca}
              onChange={(e) => handleChange(null, "fatca", e.target.value)}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
            <label>Are you a U.S resident alien?</label>
            <select
              value={userData.fatca}
              onChange={(e) => handleChange(null, "fatca", e.target.value)}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
            <label>Were you born in the U.S.?</label>
            <select
              value={userData.fatca}
              onChange={(e) => handleChange(null, "fatca", e.target.value)}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
            <label>Do you have a current U.S residence address?</label>
            <select
              value={userData.fatca}
              onChange={(e) => handleChange(null, "fatca", e.target.value)}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
            <label>Do you have a current U.S mailing address (including a U.S P.O. Box)?</label>
            <select
              value={userData.fatca}
              onChange={(e) => handleChange(null, "fatca", e.target.value)}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
        );
      case "Risk Profile":
        return (
          <div className="profileUser-menu-detail-content">
            <h4>Risk Profile</h4>
            <label>Apakah tujuan Anda dalam berinvestasi?</label>
            <select><option>-- Pilih --</option></select>
            <label>Berapa lama jangka waktu investasi yang Anda inginkan?</label>
            <select><option>-- Pilih --</option></select>
            <label>Seberapa dalam pemahaman Anda tentang berbagai instrumen investasi?</label>
            <select><option>-- Pilih --</option></select>
            <label>Apa yang akan Anda lakukan jika investasi Anda merugi hingga 25% dari prinsipal?</label>
            <select><option>-- Pilih --</option></select>
            <label>Bagaimanakah komposisi investasi yang Anda inginkan?</label>
            <select><option>-- Pilih --</option></select>
            <label>Berapa persen aset yang Anda alokasikan untuk investasi?</label>
            <select><option>-- Pilih --</option></select>
          </div>
        );
      case "Foto / Scan KTP":
        return (
          <div className="profileUser-menu-detail-content">
            <h4>Foto / Scan KTP</h4>
            <label className="profileUser-custom-file-upload">
              <FaUpload style={{ marginRight: "8px" }} />
              {userData.fotoKTP ? userData.fotoKTP.name : "Upload Foto KTP"}
            </label>
          </div>
        );
      case "Foto Selfie dengan KTP":
        return (
          <div className="profileUser-menu-detail-content">
            <h4>Foto Selfie dengan KTP</h4>
            <label className="profileUser-custom-file-upload">
              <FaUpload style={{ marginRight: "8px" }} />
              {userData.fotoSelfieKTP
                ? userData.fotoSelfieKTP.name
                : "Upload Foto Selfie dengan KTP"}
            </label>
          </div>
        );
      case "Ubah Password (Optional)":
        return (
          <div className="profileUser-menu-detail-content">
            <h4>Ubah Password</h4>
            {["passwordLama","passwordBaru","konfirmasiPasswordBaru"].map((field) => (
              <div key={field}>
                <label>{field}</label>
                <input
                  type="password"
                  value={userData[field]}
                  onChange={(e) => handleChange(null, field, e.target.value)}
                  placeholder={`Masukkan ${field}`}
                />
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="profileUser-menu-detail-content">
            <h4>{activeMenu}</h4>
            <p>Detail informasi untuk {activeMenu} akan muncul di sini.</p>
          </div>
        );
    }
  };

  return (
    <div className="profileUser-page">
      <div className="profileUser-container">
        <div className="profileUser-sidebar-menu">
          <h2 className="profileUser-sidebar-title">Menu Profil</h2>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`profileUser-sidebar-item ${activeMenu === item.title ? "active" : ""}`}
              onClick={() => setActiveMenu(item.title)}
            >
              <span className="profileUser-sidebar-icon">{item.icon}</span>
              <span className="profileUser-sidebar-text">{item.title}</span>
            </div>
          ))}
        </div>

        <div className="profileUser-content">
          <div className="profileUser-card">
            <h1 className="profileUser-title">Profil Pengguna</h1>
            <p className="profileUser-subtitle">Informasi akun Anda</p>

            <div className="profileUser-info">
              {[
                {icon: FaIdCard, label: "Nama Lengkap", value: userData.fullName},
                {icon: FaIdCard, label: "Nomor KTP", value: userData.ktpNumber},
                {icon: FaEnvelope, label: "Email", value: userData.email},
                {icon: FaPhone, label: "Nomor Handphone", value: userData.phone},
                {icon: FaMapMarkerAlt, label: "Tempat Lahir", value: userData.placeOfBirth},
                {icon: FaBirthdayCake, label: "Tanggal Lahir", value: userData.dateOfBirth},
                {icon: FaVenusMars, label: "Jenis Kelamin", value: userData.gender},
              ].map((item, idx) => (
                <div className="profileUser-row" key={idx}>
                  <item.icon className="profileUser-icon" />
                  <span>
                    <strong>{item.label}:</strong> {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="profileUser-menu-detail">{renderMenuDetail()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
