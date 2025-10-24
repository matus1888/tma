import { Box } from "@mui/material";
import { AddIcon } from "../assets/AddIcon";
import { InfoIcon } from "../assets/InfoIcon";
import { StarsIcon } from "../assets/StarsIcon";
import { StageEnum } from "../constants";
import { useUserInfo } from "../hooks";
import { useMainContext } from "../hooks/useMainContext";
import { Ava, ChipsContainer, Txt } from "../components";

export const Header = () => {
  const userInfo = useUserInfo();
  const { setStage } = useMainContext();
  if (!userInfo) {
    return null;
  }
  const name = userInfo?.getUserName();

  const link = userInfo?.getUserAvatar();
  return (
    <Box display="flex" justifyContent="space-between" paddingBottom="16px" position="sticky">
      <Box display="flex" gap="10px" alignItems="center">
        <Ava src={link} name={name} />
        <Txt color="secondary">{name}</Txt>
      </Box>
      <Box display="flex" alignItems="center" gap="22px">
        <InfoIcon />
        <ChipsContainer onClick={() => setStage(StageEnum.PAYMENT)}>
          <StarsIcon />
          <Txt color="secondary">0</Txt>
          <AddIcon />
        </ChipsContainer>
      </Box>
    </Box>
  );
};
