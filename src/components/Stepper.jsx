import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import { FaShoppingCart, FaCreditCard, FaUser, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Stepper.css";

// Custom Connector
const CustomConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: { top: 28 },
  [`& .${stepConnectorClasses.line}`]: {
    height: 5,
    border: 0,
    borderRadius: 4,
    backgroundColor: "rgba(220, 220, 220, 0.5)",
    transition: "all 0.6s ease",
    marginLeft: 12,
    marginRight: 10,
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    backgroundImage: "linear-gradient(90deg, #b00020, #ffb703, #007f5f)",
    boxShadow: "0 0 14px rgba(255,183,3,0.6)",
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    backgroundImage: "linear-gradient(90deg, #b00020, #ffb703, #007f5f)",
  },
}));

// Custom Step Icon
const IconRoot = styled("div")(({ ownerState }) => ({
  backgroundImage: ownerState.completed
    ? "linear-gradient(135deg, #007f5f, #00a86b)"
    : ownerState.active
    ? "linear-gradient(135deg, #b00020, #ffb703, #007f5f)"
    : "none",
  backgroundColor: ownerState.completed || ownerState.active ? "transparent" : "#e5e7eb",
  color: ownerState.completed || ownerState.active ? "#fff" : "#9ca3af",
  width: 60,
  height: 60,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 22,
  boxShadow: ownerState.active
    ? "0 0 20px rgba(255, 183, 3, 0.7)"
    : ownerState.completed
    ? "0 0 10px rgba(0,127,95,0.4)"
    : "inset 0 2px 5px rgba(0,0,0,0.08)",
  transform: ownerState.active ? "scale(1.15)" : "scale(1)",
  transition: "all 0.4s ease-in-out",
}));

function CustomStepIcon(props) {
  const { active, completed, icon, className } = props;
  const icons = {
    1: <FaShoppingCart />,
    2: <FaCreditCard />,
    3: <FaUser />,
    4: <FaCheck />,
  };

  return (
    <IconRoot ownerState={{ completed, active }} className={className}>
      {completed ? <FaCheck /> : icons[String(icon)]}
    </IconRoot>
  );
}

const steps = ["Pilih Produk", "Detail Transaksi", "Profil", "Konfirmasi"];

export default function StepperHeader({ activeStepFromParent = 0 }) {
  const [activeStep, setActiveStep] = React.useState(activeStepFromParent);
  const navigate = useNavigate();

  React.useEffect(() => {
    setActiveStep(activeStepFromParent);
  }, [activeStepFromParent]);

  return (
    <Box className="stepper-header">
      {/* Background glow */}
      <div className="stepper-glow-bg" />

      {/* Login Button */}
      <div className="login-wrapper">
        <button className="login-button" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>

      {/* Stepper */}
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<CustomConnector />}
        className="stepper-container"
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
