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
  const link = userInfo?.getUserAvatar();
  return (
    <Box display="flex" justifyContent="space-between" paddingBottom="16px" position="sticky">
      <Box display="flex" gap="10px" alignItems="center">
        <Ava src={link} name={userInfo?.getUserName()} />
        <Txt color="secondary">Спа&Йога</Txt>
      </Box>
      <Box display="flex" alignItems="center" gap="22px">
        <InfoIcon />
        <ChipsContainer>
          <StarsIcon />
          <Txt color="secondary">0</Txt>
          <AddIcon onClick={() => setStage(StageEnum.PAYMENT)} />
        </ChipsContainer>
      </Box>
    </Box>
  );
};
