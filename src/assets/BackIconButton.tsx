import { Box, type BoxProps } from "@mui/material";

export const BackIconButton = (boxProps: BoxProps) => {
  return (
    <Box {...boxProps} sx={{
      cursor: "pointer",
      width: "max-content",
      borderRadius: "6px",
      height: "max-contnent",
      '&:hover': {
        boxShadow: "0 2px 20px dimgrey",
      }
    }}>
      <svg
        width="34"
        height="35"
        viewBox="0 0 34 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject
          x="-15.725"
          y="-15.725"
          width="64.622"
          height="66.45"
        ></foreignObject>
        <g data-figma-bg-blur-radius="15.725">
          <rect
            width="33.172"
            height="35"
            rx="6.919"
            fill="#898989"
            fillOpacity="0.05"
          />
          <rect
            x="0.3145"
            y="0.3145"
            width="32.543"
            height="34.371"
            rx="6.6045"
            stroke="white"
            strokeOpacity="0.05"
            strokeWidth="0.629"
          />
          <g opacity="0.4">
            <path
              d="M12.296 23.049H19.3323C21.7636 23.049 23.7372 21.0754 23.7372 18.6442C23.7372 16.213 21.7636 14.2394 19.3323 14.2394H9.65027"
              stroke="white"
              strokeWidth="2.14521"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.6803 16.456L9.43503 14.1964L11.6803 11.951"
              stroke="white"
              strokeWidth="2.14521"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
        <defs>
          <clipPath
            id="bgblur_0_2011_742_clip_path"
            transform="translate(15.725 15.725)"
          >
            <rect width="33.172" height="35" rx="6.919" />
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
};
