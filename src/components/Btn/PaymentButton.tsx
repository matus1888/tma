import { StarsIcon } from "../../assets/StarsIcon";
import { ChipsContainer } from "../ChipsContainer";
import { Txt } from "../Txt";

export const PaymentButton = ({
  count = 0,
  message,
  color = "secondary",
}: {
  count: number;
  message?: string;
  color?: "secondary" | "main";
}) => {
  return (
    <ChipsContainer>
      <StarsIcon />
      <Txt color={color}>{count}</Txt>
      <Txt color={color}>{message}</Txt>
    </ChipsContainer>
  );
};
