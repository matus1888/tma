import { createContext, useContext } from "react";
import type { StageEnum } from "../constants";

interface IMainContext {
  stage: StageEnum;
  currentGroup?: string[];
  setCurrentGroup: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  setStage: React.Dispatch<React.SetStateAction<StageEnum>>;
  startTimes: number[];
  setStartTimes: React.Dispatch<React.SetStateAction<number[]>>;
}

const MainContext = createContext<IMainContext | null>(null);

export function useMainContext() {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("uare use Main Context without provider");
  }
  return context;
}

export const MainContextProvider = MainContext.Provider;
