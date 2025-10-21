import { Box, styled } from "@mui/material";

export const ChipsContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  color: "rgba(255, 255, 255, 0.5)",
  gap: "15px",
  cursor: "pointer",
  padding: "8px 10px",
  borderRadius: "9999px",
  background: `radial-gradient(ellipse at center -10px, rgba(245, 213, 0, 0.2) 0%, rgba(0,0,0,0) 40%, transparent 90%)`,
  border: "1px solid rgba(234, 179, 8, 0.2)",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
  "&:hover": {
    background: `radial-gradient(ellipse at center -5px, rgba(245, 213, 0, 0.3) 0%, rgba(0,0,0,0) 50%, transparent 90%)`,
    border: "1px solid rgba(234, 179, 8, 0.3)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  },

  "&:active": {
    background: `radial-gradient(ellipse at center -2px, rgba(245, 213, 0, 0.4) 0%, rgba(0,0,0,0) 60%, transparent 90%)`,
    border: "1px solid rgba(234, 179, 8, 0.4)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
  },
}));
