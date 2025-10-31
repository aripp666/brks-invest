import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import { FaShoppingCart, FaCreditCard, FaUser, FaCheck } from "react-icons/fa";
import "./Stepper.css";

const CustomConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 26,
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 5,
    border: 0,
    borderRadius: 3,
    backgroundColor: "#e5e7eb",
    transition: "all 0.6s ease",
    marginLeft: 10, // beri jarak dari icon
    marginRight: 8, // beri jarak dari icon
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    backgroundImage: "linear-gradient(90deg, #d60000, #fcd703, #1ca500)",
    boxShadow: "0 0 10px rgba(252,215,3,0.6)",
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    backgroundImage: "linear-gradient(90deg, #d60000, #fcd703, #1ca500)",
  },
}));

const IconRoot = styled("div")(({ ownerState }) => ({
  backgroundImage: ownerState.completed
    ? "linear-gradient(135deg, #1ca500, #00b300)"
    : ownerState.active
    ? "linear-gradient(135deg, #d60000, #fcd703, #1ca500)"
    : "none",
  backgroundColor: ownerState.completed || ownerState.active ? "transparent" : "#e5e7eb",
  color: ownerState.completed || ownerState.active ? "#fff" : "#9ca3af",
  width: 56,
  height: 56,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 22,
  boxShadow: ownerState.active
    ? "0 0 18px rgba(252,215,3,0.7)"
    : ownerState.completed
    ? "0 0 10px rgba(28,165,0,0.4)"
    : "none",
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

  React.useEffect(() => {
    setActiveStep(activeStepFromParent);
  }, [activeStepFromParent]);

  return (
    <Box className="stepper-header">
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
