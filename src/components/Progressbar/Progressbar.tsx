import Box from "@mui/material/Box";
import LinearProgress, {
  type LinearProgressProps,
} from "@mui/material/LinearProgress";
import React, { useState } from "react";
import { Txt } from "../Txt";
import { Stack } from "@mui/material";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Stack gap="5px">
      <Box display="flex" justifyContent="space-between">
        <Txt size="s" color="secondary">
          Новый креатив готовится...
        </Txt>
        <Txt size="s" color="secondary">{`${Math.round(props.value)}%`}</Txt>
      </Box>
      <Box sx={{ width: "100%", paddingY: "6px" }}>
        <LinearProgress
          variant="determinate"
          sx={{
            borderRadius: "2px",
            "& .MuiLinearProgress-bar1Determinate": {
              background: "linear-gradient(45deg, #FF6417, #7000FFF0)",
              borderRadius: "2px",
            },
            "& .MuiLinearProgress-barColorPrimary": {
              backgroundColor: "grey",
            },
          }}
          {...props}
        />
      </Box>
    </Stack>
  );
}

export function Progressbar({
  timerMin = 15,
  startTimes,
}: {
  timerMin?: number;
  startTimes: number[];
}) {
  const [progresses, setProgresses] = useState(new Array(startTimes.length));
  const totalTime = timerMin * 60 * 1000;

  React.useEffect(() => {
    const timer = setInterval(() => {
      startTimes.forEach((startTime, index) => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const newProgress = (elapsedTime / totalTime) * 100;

        if (newProgress >= 100) {
          setProgresses((prev) => {
            const next = [...prev];
            next[index] = 100;
            return next;
          });
          clearInterval(timer);
        } else {
          setProgresses((prev) => {
            const next = [...prev];
            next[index] = newProgress;
            return next;
          });
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [startTimes, totalTime]);

  return (
    <Box sx={{ width: "100%" }}>
      {progresses.map((progress) => {
        return <LinearProgressWithLabel value={progress} />;
      })}
    </Box>
  );
}
