import type { BoxProps } from "@mui/material";
import { Txt } from "../Txt";
import { ChipsContainer } from "../ChipsContainer";

export interface BtnProps extends BoxProps {
  text?: string;
  children?: React.ReactNode;
  innerPadding?: string;
}

export const Btn: React.FC<BtnProps> = ({ children, text, innerPadding, ...boxProps }) => {
  return (
    <ChipsContainer sx={{ cursor: "pointer" }} {...boxProps}>
      <Txt paddingX={innerPadding}>{children || text}</Txt>
    </ChipsContainer>
  );
};
