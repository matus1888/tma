import { Stack } from "@mui/material";
import { useMainContext } from "../hooks/useMainContext";
import { MainPage, PaymentPage } from "../pages";
import { StageEnum } from "../constants";
import { CreativeGroupPage } from "../pages/CreativeGroupPage";

export const Content = () => {
  const { stage } = useMainContext();
  return (
    <Stack
      gap="16px"
      alignSelf="center"
      alignItems="center"
      bgcolor="transparent"
      boxSizing="border-box"
    >
      {stage === StageEnum.MAIN && <MainPage />}
      {stage === StageEnum.PAYMENT && <PaymentPage />}
      {stage === StageEnum.GROUP && <CreativeGroupPage />}
    </Stack>
  );
};
