import { Typography, type TypographyProps } from "@mui/material";

export interface TextFieldProps extends TypographyProps {
  color?: "main" | "secondary";
  // variant?: "";
  size?: "s" | "m" | "l";
  children?: React.ReactNode;
  text?: React.ReactNode;
}

const fontSizes = {
  s: "12px",
  m: "14px",
  l: "17px",
};
export const Txt: React.FC<TextFieldProps> = ({
  color = "main",
  children,
  text,
  size = "m",
  ...typographyProps
}) => {
  return (
    <Typography
      fontWeight={500}
      fontSize={fontSizes[size]}
      color={color === "main" ? "white" : "rgba(255, 255, 255, 0.5)"}
      {...typographyProps}
    >
      {children || text}
    </Typography>
  );
};
