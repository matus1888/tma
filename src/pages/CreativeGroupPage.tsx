import { Box } from "@mui/material";
import { BackIconButton } from "../assets";
import { Btn, PaymentButton } from "../components";
import { StageEnum } from "../constants";
import { useMainContext } from "../hooks";

export const CreativeGroupPage: React.FC = () => {
  const { currentGroup, setStage } = useMainContext();
  return (
    <>
      <Box display="flex" justifyContent="flex-start" width="100%">
        <BackIconButton
          onClick={() => {
            setStage(StageEnum.MAIN);
          }}
        />
      </Box>
      {currentGroup?.map((src, index) => (
        <>
          <img style={{ borderRadius: "16px", width: "100%" }} src={src} />
          <Box display="flex" justifyContent="center">
            {index % 2 === 0 ? (
              <Btn innerPadding="20px">Скачать</Btn>
            ) : (
              <PaymentButton color="main" count={99} message="Купить" />
            )}
          </Box>
        </>
      ))}
    </>
  );
};
