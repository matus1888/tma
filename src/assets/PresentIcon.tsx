import { Box, type BoxProps } from "@mui/material";

export const PresentIcon = (boxProps: BoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        color: "rgba(255, 255, 255, 0.5)",
        borderRadius: "4px",
        padding: "7px",
        background: `radial-gradient(ellipse at center -10px, rgba(234, 0, 0, 0.2) 0%, rgba(0,0,0,0) 80%, transparent 90%)`,
        border: "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      }}
      {...boxProps}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M17.9707 8V16C17.9707 19 16.9707 20 13.9707 20H5.9707C2.9707 20 1.9707 19 1.9707 16V8H17.9707Z"
          fill="#EA0000"
        />
        <path
          d="M19.5 5V6C19.5 7.1 18.97 8 17.5 8H2.5C0.97 8 0.5 7.1 0.5 6V5C0.5 3.9 0.97 3 2.5 3H17.5C18.97 3 19.5 3.9 19.5 5Z"
          fill="#EA0000"
        />
        <path
          opacity="0.4"
          d="M9.6408 2.99994H4.12076C3.78076 2.62994 3.79076 2.05994 4.15076 1.69994L5.57076 0.279941C5.94076 -0.0900586 6.55076 -0.0900586 6.92076 0.279941L9.6408 2.99994Z"
          fill="#EA0000"
        />
        <path
          opacity="0.4"
          d="M15.8696 2.99994H10.3496L13.0696 0.279941C13.4396 -0.0900586 14.0496 -0.0900586 14.4196 0.279941L15.8396 1.69994C16.1996 2.05994 16.2096 2.62994 15.8696 2.99994Z"
          fill="#EA0000"
        />
        <path
          opacity="0.6"
          d="M6.93945 8V13.14C6.93945 13.94 7.81945 14.41 8.4895 13.98L9.4295 13.36C9.7695 13.14 10.1995 13.14 10.5295 13.36L11.4195 13.96C12.0795 14.4 12.9695 13.93 12.9695 13.13V8H6.93945Z"
          fill="#EA0000"
        />
      </svg>
    </Box>
  );
};
