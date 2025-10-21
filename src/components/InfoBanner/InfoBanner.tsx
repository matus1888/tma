import React from "react";
import { Box } from "@mui/material";
import { Txt } from "../Txt";

export const InfoBanner = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      display="flex"
      color="rgba(255, 255, 255, 0.5)"
      justifyContent="center"
      alignItems="center"
      padding="16px"
      width="90%"
      height="92%"
      position="absolute"
      sx={{ pointerEvents: "none" }}
      top="0"
      left="0"
    >
      <Txt color="secondary">{children}</Txt>
    </Box>
  );
};
