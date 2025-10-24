import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { MainContextProvider } from "./hooks/useMainContext";
import { StageEnum } from "./constants";
import { Content, Header } from "./features";
import WebApp from "@twa-dev/sdk";
import { useUserInfo } from "./hooks";

export function App() {
  const [stage, setStage] = useState<StageEnum>(StageEnum.MAIN);
  const [startTimes, setStartTimes] = useState<number[]>([]);
  const [currentGroup, setCurrentGroup] = useState<string[] | undefined>();
  const userInfo = useUserInfo();
  
  const isPortrait = screen.orientation.type.startsWith("portrait");
  useEffect(() => {
    if (isPortrait) {
      WebApp.lockOrientation();
    }
  }, [isPortrait]);

  if (!userInfo){
    return null;
  }

  return (
    <MainContextProvider
      value={{
        stage,
        setStartTimes,
        startTimes,
        setStage,
        currentGroup,
        setCurrentGroup,
      }}
    >
      <Box id="main" paddingX="16px" paddingBottom="16px" paddingTop="10vh">
        <Header />
        <Content />
      </Box>
    </MainContextProvider>
  );
}
