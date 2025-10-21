import { Box } from "@mui/material";
import { BackIconButton } from "../assets";
import { ReferalProgram, StackItem } from "../components";
import { StageEnum } from "../constants";
import { useMainContext } from "../hooks";

export const PaymentPage = () => {
  const { setStage } = useMainContext();
  return (
    <>
      <Box display="flex" justifyContent="flex-start" width="100%">
        <BackIconButton
          maxWidth="max-content"
          onClick={() => setStage(StageEnum.MAIN)}
        />
      </Box>
      <StackItem
        count={150}
        onClick={() => console.log("тут должна начаться тарнзакция оплаты")}
      />
      <StackItem
        count={750}
        message="Подписка на 30 дней"
        onClick={() => console.log("тут должна начаться тарнзакция оплаты")}
      />
      <ReferalProgram />
    </>
  );
};
