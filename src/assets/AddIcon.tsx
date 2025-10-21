import { Box, type BoxProps } from "@mui/material";

export const AddIcon = (boxProps: BoxProps) => {
  return (
    <Box display="flex" alignItems="center" alignContent="center" {...boxProps}>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="8.5"
          cy="8.5"
          r="8.5"
          fill="rgba(255, 255, 255, 0.5)"
          fillOpacity="0.08"
          strokeWidth="0.5"
        />
        <circle
          cx="8.5"
          cy="8.5"
          r="8.35"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeOpacity="0.5"
          strokeWidth="0.8"
        />
        <path
          d="M5 9.65345V7.35316H7.44819V5H9.55181V7.35316H12V9.65345H9.55181V12H7.44819V9.65345H5Z"
          fill="rgba(255, 255, 255, 0.5)"
        />
      </svg>
    </Box>
  );
};
