import { Box, type BoxProps } from "@mui/material";
import { Txt } from "../Txt";
import { PaymentButton } from "../Btn/PaymentButton";

export interface StackItemProp extends BoxProps {
  message?: string;
  count: number;
}

export const StackItem: React.FC<StackItemProp> = ({
  message = "Пополнить баланс",
  count,
  ...boxProps
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      width="100%"
      sx={{
        cursor: "pointer",
        "&:active": {
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          borderRadius: "16px",
        },
      }}
      alignSelf="center"
      alignItems="center"
      {...boxProps}
    >
      <Txt text={message} />
      <PaymentButton count={count} />
    </Box>
  );
};
