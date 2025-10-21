import { Box } from "@mui/material";
import { useState } from "react";
import { MainContextProvider } from "./hooks/useMainContext";
import { StageEnum } from "./constants";
import { Content, Header } from "./features";

export function App() {
  const [stage, setStage] = useState<StageEnum>(StageEnum.MAIN);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [currentGroup, setCurrentGroup] = useState<string[] | undefined>();

  return (
    <MainContextProvider
      value={{
        stage,
        setStartTime,
        startTime,
        setStage,
        currentGroup,
        setCurrentGroup,
      }}
    >
      <Box padding="16px">
        <Header />
        <Content />
      </Box>
    </MainContextProvider>
  );
}
